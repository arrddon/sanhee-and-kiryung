function Media({ type = "image", src }: { type?: "image" | "video"; src: string }) {
  return type === "video" ? (
    <video className="asset" src={src} muted loop playsInline autoPlay preload="metadata" aria-label="산희와 기륭의 영상" />
  ) : (
    <img className="asset" src={src} alt="산희와 기륭" loading="eager" decoding="async" />
  );
}

export default function Reception() {
  return (
    <main className="invitation">
      <section className="panel opening">
        <div className="opening-image reveal">
          <Media src="/assets/pics%20(2).jpg" />
          <div className="opening-copy"><h1>SANHEE <span>&amp;</span> KIRYUNG</h1></div>
          <p className="opening-date">2026. 08. 15. SAT · 12:30</p>
        </div>
      </section>

      <section className="panel information-panel">
        <dl className="information-list reveal">
          <div><dt>일시</dt><dd>8월 15일 (토) 12:30</dd></div>
          <div><dt>장소</dt><dd>중식당 보다</dd></div>
          <div><dt>찾아오시는 길</dt><dd>서울 강남구 도산대로 308<br />코오롱빌딩</dd></div>
        </dl>
        <p className="parking reveal">* 주차 가능합니다.</p>
        <a className="directions reveal" href="https://naver.me/GctrqOF5" target="_blank" rel="noreferrer">네이버 지도에서 보기 <span>↗</span></a>
        <div className="story-copy reveal">
          <p>서로의 꿈을 나누며<br />좋은 친구이자 동료로<br />7년을 함께했습니다.</p>
          <p>지금처럼 가장 절친한 짝꿍으로<br />앞으로도 함께하겠습니다.</p>
        </div>
      </section>

      <section className="panel videos-panel">
        <div className="media-frame reveal"><Media type="video" src="/assets/weding01.MP4" /></div>
        <div className="media-frame reveal"><Media type="video" src="/assets/weding02.MP4" /></div>
      </section>
      <section className="panel media-panel"><div className="media-frame reveal"><Media src="/assets/pics%20(3).jpg" /></div></section>
      <section className="panel media-panel"><div className="media-frame reveal"><Media src="/assets/pics%20(4).jpg" /></div></section>
      <section className="panel media-panel"><div className="media-frame reveal"><Media src="/assets/reception-cover.jpg" /></div></section>

      <section className="panel closing-panel">
        <p className="closing-copy reveal">정산희 남기륭 올림</p>
      </section>
    </main>
  );
}
