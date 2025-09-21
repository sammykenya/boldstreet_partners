// /app/api/subscribe/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';

const JSON_HEADERS = { 'Content-Type': 'application/json' };

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const email = (body?.email || '').trim().toLowerCase();

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: 'Invalid email' }, { status: 400, headers: JSON_HEADERS });
    }

    // Attempt Mailchimp first
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

    if (MAILCHIMP_API_KEY && MAILCHIMP_LIST_ID) {
      // datacenter from API key suffix e.g. key-us1 -> 'us1'
      const parts = MAILCHIMP_API_KEY.split('-');
      const dc = parts.length > 1 ? parts[parts.length - 1] : null;
      if (!dc) {
        return NextResponse.json({ message: 'Invalid Mailchimp key' }, { status: 500, headers: JSON_HEADERS });
      }

      const subscriberHash = crypto.createHash('md5').update(email).digest('hex');
      const url = `https://${dc}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}`;

      const payload = {
        email_address: email,
        status_if_new: 'subscribed',
      };

      const resp = await fetch(url, {
        method: 'PUT', // Upsert member
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const txt = await resp.text();
        console.error('Mailchimp error', resp.status, txt);
        return NextResponse.json({ message: 'Mailchimp error', detail: txt }, { status: 502, headers: JSON_HEADERS });
      }

      return NextResponse.json({ message: 'Subscribed via Mailchimp' }, { status: 200, headers: JSON_HEADERS });
    }

    // Else attempt SendGrid Marketing API
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    if (SENDGRID_API_KEY) {
      const url = 'https://api.sendgrid.com/v3/marketing/contacts';
      const payload = { contacts: [{ email }] };

      const resp = await fetch(url, {
        method: 'PUT', // POST also works; PUT upserts
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const txt = await resp.text();
        console.error('SendGrid error', resp.status, txt);
        return NextResponse.json({ message: 'SendGrid error', detail: txt }, { status: 502, headers: JSON_HEADERS });
      }

      return NextResponse.json({ message: 'Subscribed via SendGrid' }, { status: 200, headers: JSON_HEADERS });
    }

    // Fallback (development): log to server console or append to a file (note: file persistence depends on hosting)
    console.log('Dev subscribe fallback — email:', email);

    // optional: attempt to append to a file inside /tmp or project (not recommended in serverless)
    try {
      // writing small local file for dev - won't persist on many hosts
      const fs = await import('fs');
      const p = './tmp-subscribers.log';
      const time = new Date().toISOString();
      fs.appendFileSync(p, `${time}\t${email}\n`);
    } catch (e) {
      // ignore file write errors on platforms that don't allow FS writes
    }

    return NextResponse.json({ message: 'Subscribed (dev fallback)' }, { status: 200, headers: JSON_HEADERS });
  } catch (err) {
    console.error('subscribe route error', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500, headers: JSON_HEADERS });
  }
}
