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
          <h1>산희와 기륭</h1>
          <p>평생의 프로젝트가 시작됩니다.<br /><span>그 첫 장면에 소중한 당신을 초대합니다.</span></p>
        </div>
        <div className="reception-date"><span>RECEPTION</span><strong>2026. 08. 15. SAT · 12:00</strong></div>
        <Media src="/assets/reception-cover.jpg" className="opening-image" />
      </section>

      <section className="panel portrait-panel">
        <Media src="/assets/reception-portrait.jpg" className="portrait-image" />
      </section>

      <section className="panel moments-panel">
        <div className="moments-grid">
          <Media type="video" src="/assets/reception-film-01.mp4" className="moment moment-wide" />
          <Media type="video" src="/assets/reception-film-02.mp4" className="moment moment-tall" />
        </div>
      </section>

      <section className="panel information-panel">
        <div className="information-lead">
          <h2>8월 15일,<br />서울에서 만나요.</h2>
          <p>가까운 친구들과 함께 편안히 식사하고<br />이야기를 나누는 자리를 준비했습니다.</p>
        </div>
        <dl className="information-list">
          <div><dt>일시</dt><dd>2026년 8월 15일 토요일, 낮 12시</dd></div>
          <div><dt>장소</dt><dd>보다 BODA<br /><small>서울 강남구 도산대로 308 코오롱빌딩</small></dd></div>
        </dl>
        <a className="directions" href="https://naver.me/GctrqOF5" target="_blank" rel="noreferrer">길 찾기 <span>↗</span></a>
        <p className="signature">산희와 기륭 올림</p>
      </section>
    </main>
  );
}
