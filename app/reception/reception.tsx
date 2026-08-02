function Media({ type = "image", src, className = "" }: { type?: "image" | "video"; src: string; className?: string }) {
  return (
    <div className={className}>
      {type === "video" ? (
        <video
          className="asset"
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-label="산희와 기륭의 영상"
        />
      ) : (
        <img
          className="asset"
          src={src}
          alt="산희와 기륭"
          loading="eager"
          decoding="async"
        />
      )}
    </div>
  );
}

export default function Reception() {
  return (
    <main className="invitation">
      <section className="panel opening">
        <div className="opening-copy">
          <h1>산희 <i>&amp;</i> 기륭</h1>
          <p>우리답게 사랑하고 살아가기 위한<br />첫 번째 축하의 자리에 초대합니다.</p>
        </div>
        <Media src="/assets/reception-cover.jpg" className="opening-image" />
        <p className="opening-date">2026. 08. 15. SAT · 12:00</p>
      </section>

      <section className="panel portrait-panel">
        <Media src="/assets/reception-portrait.jpg" className="portrait-image" />
        <p className="portrait-words">함께, 오래.</p>
      </section>

      <section className="panel moments-panel">
        <p className="moments-copy">함께한 날들의<br />작은 장면들</p>
        <div className="moments-grid">
          <Media type="video" src="/assets/reception-film-01.mp4" className="moment moment-wide" />
          <Media type="video" src="/assets/reception-film-02.mp4" className="moment moment-tall" />
        </div>
      </section>

      <section className="panel information-panel">
        <div className="information-lead">
          <h2>8월 15일,<br />서울에서 만나요.</h2>
          <p>맛있는 점심과 음악,<br />오래 기억할 이야기를 준비해둘게요.</p>
        </div>
        <dl className="information-list">
          <div><dt>일시</dt><dd>2026년 8월 15일 토요일, 낮 12시</dd></div>
          <div><dt>장소</dt><dd>보다 BODA<br /><small>서울 강남구 도산대로 308 코오롱빌딩</small></dd></div>
        </dl>
        <a className="directions" href="https://naver.me/GctrqOF5" target="_blank" rel="noreferrer">길 찾기 <span>↗</span></a>
        <p className="signature">산희 &amp; 기륭</p>
      </section>
    </main>
  );
}
