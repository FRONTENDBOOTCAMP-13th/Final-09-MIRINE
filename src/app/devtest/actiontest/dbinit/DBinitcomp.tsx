"use client";

import { dbinit } from "./dbinitaction";

export default function DBinitcomp() {
  return (
    <button onClick={dbinit} style={{ border: "1px solid black", padding: "4px" }}>
      dbinit
    </button>
  );
}
