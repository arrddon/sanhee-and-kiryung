import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <p className="eyebrow">SANHEE AND KIRYUNG</p>
      <h1>두 사람의 삶과<br />프로젝트를 기록합니다.</h1>
      <Link className="text-link" href="/reception">8월 15일 리셉션 초대장 보기 →</Link>
    </main>
  );
}
