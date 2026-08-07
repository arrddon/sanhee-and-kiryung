import type { Metadata } from "next";
import Reception from "../reception/reception";

const description = "8월 22일, 경주에서 열리는 산희와 기륭의 결혼식에 초대합니다.";

export const metadata: Metadata = {
  title: "산희와 기륭",
  description,
  openGraph: {
    title: "산희와 기륭",
    description,
    siteName: "산희와 기륭",
    images: [{ url: "/assets/pics%20(2).jpg", alt: "산희와 기륭" }],
  },
};

export default function BeautifulWeddingPage() {
  return (
    <Reception
      openingDate="2026. 08. 22. SAT · 17:30"
      eventDate="8월 22일 (토) 17시 30분"
      invitationHeading="결혼식에 초대합니다"
      venue="경주 힐튼호텔 파인룸"
      address={<><span>경북 경주시 보문로 484-7</span><br /><span>주차 가능</span></>}
      mapUrl="https://naver.me/GrmafdbQ"
      enhancedReadability
      introduction={
        <>
          <p>7년 동안 함께한 시간이<br />새로운 이야기로 이어집니다.</p>
          <p>저희를 사랑으로 키워 주신 가족들 앞에서<br />이 기쁜 소식을 나누고자 합니다.</p>
        </>
      }
      familyIntroduction={
        <>
          <p><strong>남태우 · 故 김귀향</strong>의 장남 <strong>기륭</strong></p>
          <p><strong>정동암 · 김희수</strong>의 장녀 <strong>산희</strong></p>
        </>
      }
      closingSignature="남기륭 정산희 올림"
    />
  );
}
