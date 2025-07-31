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
      <li>
        <Link href={`${crtURL}/postMirineTest`}>postMirineTest</Link>
      </li>
      <li>
        <Link href={`${crtURL}/uploadFile`}>uploadFile</Link>
      </li>
      <li>
        <Link href={`${crtURL}/likeTest`}>likeTest</Link>
      </li>
      <li>
        <Link href={`${crtURL}/reviewTest`}>reviewTest</Link>
      </li>
    </ul>
  );
}
