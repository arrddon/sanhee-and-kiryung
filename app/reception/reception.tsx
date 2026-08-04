"use client";

import { useEffect } from "react";

function Media({ type = "image", src }: { type?: "image" | "video"; src: string }) {
  return type === "video" ? (
    <video className="asset" src={src} muted loop playsInline autoPlay preload="metadata" draggable={false} aria-label="산희와 기륭의 영상" />
  ) : (
    <img className="asset" src={src} alt="산희와 기륭" loading="eager" decoding="async" draggable={false} />
  );
}

export default function Reception() {
  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => event.preventDefault();
    document.addEventListener("contextmenu", preventContextMenu);
    return () => document.removeEventListener("contextmenu", preventContextMenu);
  }, []);

  return (
    <main className="invitation">
      <section className="opening">
        <div className="opening-image reveal">
          <Media src="/assets/pics%20(2).jpg" />
          <div className="opening-copy">
            <h1>
              <span className="title-name">SANHEE</span>
              <span className="title-row"><span className="title-amp">&amp;</span><span>KIRYUNG</span></span>
            </h1>
          </div>
          <p className="opening-date">2026. 08. 15. SAT · 12:30</p>
        </div>
      </section>

      <section className="information-panel">
        <h2 className="invitation-heading reveal">결혼 잔치에 초대합니다</h2>
        <p className="invitation-intro reveal">7년 동안 함께한 저희의 시간이<br />새로운 이야기로 이어집니다.<br />그 순간을 소중한 분들과 함께하고자 합니다.</p>
        <dl className="information-list reveal">
          <div><dt>일시</dt><dd>8월 15일 (토) 12:30</dd></div>
          <div><dt>장소</dt><dd>중식당 보다</dd></div>
          <div><dt>찾아오시는 길</dt><dd>서울 강남구 도산대로 308<br />코오롱빌딩 · 주차 가능</dd></div>
        </dl>
        <a className="directions reveal" href="https://naver.me/GctrqOF5" target="_blank" rel="noreferrer" aria-label="네이버 지도에서 장소 보기">NAVER MAP <span>↗</span></a>
      </section>

      <section className="videos-panel">
        <div className="reveal"><Media type="video" src="/assets/weding01.MP4" /></div>
        <div className="reveal"><Media type="video" src="/assets/weding02.MP4" /></div>
      </section>
      <section className="media-panel"><div className="reveal"><Media src="/assets/pics%20(3).jpg" /></div></section>
      <section className="media-panel"><div className="reveal"><Media src="/assets/pics%20(4).jpg" /></div></section>
      <section className="media-panel"><div className="reveal"><Media src="/assets/reception-cover.jpg" /></div></section>

      <section className="closing-panel">
        <div className="closing-content reveal">
          <div className="closing-message">
            <span>꿈을 나누며 좋은 친구이자 동료로 함께해 왔습니다.</span>
            <span>지금처럼 변함없이</span>
            <span>서로를 응원하는 절친한 짝꿍이 되겠습니다.</span>
            <span>저희 두 사람의 앞날을 가까이에서 축복해 주세요.</span>
          </div>
          <span className="closing-divider" aria-hidden="true" />
          <p className="closing-copy">정산희 남기륭 올림</p>
        </div>
      </section>
    </main>
  );
}
