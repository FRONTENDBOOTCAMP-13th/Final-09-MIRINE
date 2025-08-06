"use client";
export default function RootError({ error }: { error: Error }) {
  console.error(error);
  return <div>Error</div>;
}
