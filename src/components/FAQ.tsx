import React, { useState } from "react";

export function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 rounded-xl border border-gray-200 bg-white/80 shadow-sm">
      <button className="flex justify-between w-full font-medium" onClick={() => setOpen(!open)}>
        {q}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-sm text-gray-700">{a}</p>}
    </div>
  );
}