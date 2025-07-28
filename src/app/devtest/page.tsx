import Link from "next/link";

export default function Devtest() {
  return (
    <ul>
      <li>
        <Link href="/devtest/gettest">gettest</Link>
      </li>
      <li>
        <Link href="/devtest/actiontest">actiontest</Link>
      </li>
    </ul>
  );
}
