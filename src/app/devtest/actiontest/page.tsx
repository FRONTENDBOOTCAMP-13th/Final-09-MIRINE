import Link from "next/link";

export default function Actiontest() {
  const crtURL = "/devtest/actiontest";
  return (
    <ul>
      <li>
        <Link href={`${crtURL}/postUser`}>postUser</Link>
      </li>
      <li>
        <Link href={`${crtURL}/postOrder`}>postOrder</Link>
      </li>
    </ul>
  );
}
