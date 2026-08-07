"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/assets/pics%20(2).jpg": { width: 4672, height: 7008 },
  "/assets/pics%20(3).jpg": { width: 2000, height: 3000 },
  "/assets/pics%20(4).jpg": { width: 1700, height: 2551 },
  "/assets/reception-cover.jpg": { width: 2336, height: 2652 },
};

function Media({ type = "image", src, priority = false }: { type?: "image" | "video"; src: string; priority?: boolean }) {
  const dimensions = imageDimensions[src];
  if (type === "video") {
    return (
      <video className="asset" muted loop playsInline autoPlay preload="metadata" draggable={false} disablePictureInPicture aria-label="산희와 기륭의 영상">
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  // These source files are already prepared for the invitation; serve them without recompression.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="asset" src={src} alt="산희와 기륭" width={dimensions?.width} height={dimensions?.height} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" draggable={false} />;
}

type ReceptionProps = {
  openingDate?: string;
  eventDate?: string;
  invitationHeading?: string;
  venue?: string;
  address?: ReactNode;
  mapUrl?: string;
  enhancedReadability?: boolean;
  familyIntroduction?: ReactNode;
  introduction?: ReactNode;
};

export default function Reception({
  openingDate = "2026. 08. 15. SAT · 12:30",
  eventDate = "8월 15일 (토) 12시 30분",
  invitationHeading = "피로연에 초대합니다",
  venue = "중식당 보다",
  address = <><span>서울 강남구 도산대로 308</span><br /><span>코오롱빌딩 · 주차 가능</span></>,
  mapUrl = "https://naver.me/GctrqOF5",
  enhancedReadability = false,
  familyIntroduction,
  introduction = <><p>7년 동안 함께한 시간이<br />새로운 이야기로 이어집니다.</p><p>가족들과의 작은 결혼식을 앞두고<br />소중한 분들과 이 기쁜 소식을 나누고자 합니다.</p></>,
}: ReceptionProps) {
  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => event.preventDefault();
    document.addEventListener("contextmenu", preventContextMenu);

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );
    elements.forEach((element) => observer.observe(element));

    const hero = document.querySelector<HTMLElement>(".opening-image");
    const invitation = document.querySelector<HTMLElement>(".invitation");
    const videos = document.querySelectorAll<HTMLVideoElement>(".videos-panel video");
    let frameId = 0;

    const updateScrollEffects = () => {
      frameId = 0;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const distance = Math.min(rect.height * 0.72, window.innerHeight * 0.78);
        const progress = Math.min(1, Math.max(0, -rect.top / distance));
        hero.style.setProperty("--hero-shift", `${(progress * 26).toFixed(2)}px`);
        hero.style.setProperty("--hero-opacity", Math.max(0, 1 - progress * 1.25).toFixed(3));
        hero.style.setProperty("--hero-date-opacity", Math.max(0, 1 - progress * 1.35).toFixed(3));
        hero.style.setProperty("--hero-date-shift", `${(progress * -8).toFixed(2)}px`);
        hero.style.setProperty("--hero-scale", (1 + progress * 0.025).toFixed(4));
      }
    };
    const requestScrollUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateScrollEffects);
    };
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    updateScrollEffects();

    const playVideo = (video: HTMLVideoElement) => {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      void video.play().catch(() => undefined);
    };
    const resumeVideos = () => videos.forEach(playVideo);
    videos.forEach((video) => {
      playVideo(video);
      video.addEventListener("canplay", resumeVideos, { once: true });
    });
    document.addEventListener("touchstart", resumeVideos, { passive: true, once: true });
    document.addEventListener("visibilitychange", resumeVideos);

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-focused", entry.isIntersecting);
          entry.target.parentElement?.classList.toggle("video-frame-focused", entry.isIntersecting);
        });
        invitation?.classList.toggle("video-glass-focus", Boolean(document.querySelector(".videos-panel video.is-focused")));
      },
      { rootMargin: "-22% 0px -22%", threshold: 0.45 },
    );
    videos.forEach((video) => videoObserver.observe(video));

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      window.removeEventListener("scroll", requestScrollUpdate);
      document.removeEventListener("touchstart", resumeVideos);
      document.removeEventListener("visibilitychange", resumeVideos);
      videos.forEach((video) => video.removeEventListener("canplay", resumeVideos));
      if (frameId) window.cancelAnimationFrame(frameId);
      observer.disconnect();
      videoObserver.disconnect();
    };
  }, []);

  return (
    <main className={`invitation${enhancedReadability ? " invitation-readable" : ""}`}>
      <section className="opening">
        <div className="opening-image">
          <Media src="/assets/pics%20(2).jpg" priority />
          <div className="opening-copy">
            <h1>
              <span className="title-name">SANHEE</span>
              <span className="title-row"><span className="title-amp">&amp;</span><span>KIRYUNG</span></span>
            </h1>
          </div>
          <p className="opening-date"><span>{openingDate}</span></p>
        </div>
      </section>

      <section className="information-panel">
        <h2 className="invitation-heading reveal reveal-dissolve">{invitationHeading}</h2>
        <div className="invitation-intro reveal reveal-fade">
          {introduction}
        </div>
        {familyIntroduction ? <div className="family-introduction reveal reveal-fade">{familyIntroduction}</div> : null}
        <dl className="information-list reveal reveal-fade">
          <div><dt>일시</dt><dd>{eventDate}</dd></div>
          <div><dt>장소</dt><dd>{venue}</dd></div>
          <div><dt>찾아오시는 길</dt><dd>{address}</dd></div>
        </dl>
        <a className="directions reveal reveal-fade" href={mapUrl} target="_blank" rel="noreferrer" aria-label="네이버 지도에서 장소 보기">NAVER MAP <span>↗</span></a>
      </section>

      <section className="videos-panel">
        <div className="reveal reveal-fade"><Media type="video" src="/assets/weding01.MP4" /></div>
        <div className="reveal reveal-fade"><Media type="video" src="/assets/weding02.MP4" /></div>
      </section>
      <section className="media-panel"><div className="reveal reveal-clip"><Media src="/assets/pics%20(3).jpg" /></div></section>
      <section className="media-panel"><div className="reveal reveal-clip"><Media src="/assets/pics%20(4).jpg" /></div></section>
      <section className="media-panel"><div className="reveal reveal-clip"><Media src="/assets/reception-cover.jpg" /></div></section>

      <section className="closing-panel">
        <div className="closing-content reveal reveal-fade reveal-slow">
          <div className="closing-message">
            <span>꿈을 나누며 좋은 친구이자 동료로</span>
            <span>함께해 왔습니다.</span>
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
