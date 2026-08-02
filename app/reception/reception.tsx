"use client";

import { FormEvent, useState } from "react";

function Media({ type = "image", src, label, className = "" }: { type?: "image"|"video"; src:string; label:string; className?:string }) {
  const [ready,setReady] = useState(false);
  const [failed,setFailed] = useState(false);
  return <div className={className}>
    {!ready && <div className="asset-placeholder"><span>{failed ? `ADD ${label} TO /PUBLIC/ASSETS` : `LOADING ${label}`}</span></div>}
    {type === "video" ? <video className="asset" src={src} muted loop playsInline autoPlay onCanPlay={()=>setReady(true)} onError={()=>setFailed(true)} style={{display:ready?"block":"none"}} /> : <img className="asset" src={src} alt="산희와 기륭" onLoad={()=>setReady(true)} onError={()=>setFailed(true)} style={{display:ready?"block":"none"}} />}
  </div>;
}

export default function Reception() {
  const [message,setMessage] = useState("");
  async function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); const data = new FormData(e.currentTarget);
    const text = `[산희와 기륭 리셉션 RSVP]\n이름: ${data.get("name")}\n참석: ${data.get("attendance")}\n인원: ${data.get("guests")}명\n메시지: ${data.get("note") || "-"}`;
    try { await navigator.clipboard.writeText(text); setMessage("응답을 복사했습니다. 산희 또는 기륭에게 메시지로 보내주세요."); }
    catch { setMessage("복사하지 못했습니다. 화면을 캡처해 산희 또는 기륭에게 보내주세요."); }
  }
  return <main className="invitation">
    <section className="sheet cover">
      <header className="masthead"><span>Wedding reception<br/>August 15, 2026</span><span className="monogram">S&amp;K</span></header>
      <div className="cover-copy"><p className="kicker">YOU’RE JOYFULLY INVITED</p><h1>Sanhee<br/><i>&amp;</i> Kiryung</h1><p className="intro">우리답게 사랑하고 살아가기 위한<br/>첫 번째 축하의 자리에 초대합니다.</p></div>
      <Media src="/assets/reception-cover.jpg" label="COVER.JPG" className="hero-frame" />
      <div className="date-band"><span>15 · 08 · 2026</span><span>SEOUL, KOREA</span></div>
    </section>

    <section className="sheet portrait-sheet">
      <div className="topline"><span className="section-index">01 / US</span><span className="section-index">TOGETHER, ALWAYS</span></div>
      <Media src="/assets/reception-portrait.jpg" label="PORTRAIT.JPG" className="portrait-frame" />
      <div className="portrait-caption"><strong>We do.</strong><span>SANHEE<br/>KIRYUNG</span></div>
    </section>

    <section className="sheet film-sheet">
      <div className="film-head"><h2>A little<br/>glimpse.</h2><p>함께한 날들의 작은 장면들을 모았습니다.</p></div>
      <div className="film-stack">
        <Media type="video" src="/assets/reception-film-01.mp4" label="FILM-01.MP4" className="media-frame" />
        <Media type="video" src="/assets/reception-film-02.mp4" label="FILM-02.MP4" className="media-frame" />
      </div>
    </section>

    <section className="sheet details-sheet">
      <div>
        <div className="details-title"><div><span className="section-index">02 / THE DETAILS</span><h2>Meet us<br/>in Seoul.</h2></div><span className="stamp">save<br/>the date</span></div>
        <dl className="detail-list">
          <div className="detail-row"><dt>WHEN</dt><dd>2026년 8월 15일 토요일<br/>낮 12시</dd></div>
          <div className="detail-row"><dt>WHERE</dt><dd>보다 · BODA<small>서울 강남구 도산대로 308 코오롱빌딩</small></dd></div>
          <div className="detail-row"><dt>DRESS</dt><dd>Come as you are<small>가장 당신다운 모습으로 와주세요.</small></dd></div>
        </dl>
        <a className="map-link" href="https://naver.me/GctrqOF5" target="_blank" rel="noreferrer">네이버 지도에서 길 찾기 <span>↗</span></a>
      </div>
      <p className="intro">맛있는 점심과 음악, 그리고 오래 기억할 이야기를 준비해둘게요.</p>
    </section>

    <section className="sheet rsvp-sheet">
      <span className="section-index">03 / RSVP</span><h2>Will you<br/>join us?</h2><p className="rsvp-intro">자리를 정성껏 준비할 수 있도록<br/>8월 8일까지 참석 여부를 알려주세요.</p>
      <form className="rsvp-form" onSubmit={submit}>
        <div className="field"><label htmlFor="name">NAME · 성함</label><input id="name" name="name" required placeholder="성함을 입력해주세요" /></div>
        <fieldset className="choice"><legend>ATTENDANCE · 참석 여부</legend><div className="choice-options"><input id="yes" type="radio" name="attendance" value="참석" required/><label htmlFor="yes">기쁘게 참석할게요</label><input id="no" type="radio" name="attendance" value="불참"/><label htmlFor="no">마음으로 축하할게요</label></div></fieldset>
        <div className="field"><label htmlFor="guests">GUESTS · 참석 인원</label><input id="guests" name="guests" type="number" min="1" max="10" defaultValue="1" required /></div>
        <div className="field"><label htmlFor="note">NOTE · 전하고 싶은 말</label><textarea id="note" name="note" placeholder="짧은 메시지를 남겨주세요" /></div>
        <button className="submit-button" type="submit">RSVP 응답 복사하기</button><p className="form-note" role="status">{message || "응답은 복사된 뒤 메시지로 전달할 수 있습니다."}</p>
      </form>
      <div className="closing"><strong>See you there.</strong><span>WITH LOVE,<br/>SANHEE &amp; KIRYUNG</span></div>
    </section>
  </main>;
}
