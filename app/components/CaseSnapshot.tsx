'use client';

import Image from 'next/image';

type CaseSnapshotProps = {
  objective: string;
  approach: string;
  outcome: string;
  image: string;
  alt: string; // ✅ add alt
};

export default function CaseSnapshot({ objective, approach, outcome, image, alt }: CaseSnapshotProps) {
  return (
    <div className="p-6 bg-surface rounded-2xl shadow">
      <Image
        src={image}
        alt={alt} // ✅ now used
        width={600}
        height={400}
        className="rounded-2xl mb-4 object-cover"
      />
      <h3 className="text-xl font-instrument-serif mb-2">Objective</h3>
      <p className="font-figtree mb-4">{objective}</p>
      <h3 className="text-xl font-instrument-serif mb-2">Approach</h3>
      <p className="font-figtree mb-4">{approach}</p>
      <h3 className="text-xl font-instrument-serif mb-2">Outcome</h3>
      <p className="font-figtree">{outcome}</p>
    </div>
  );
}
