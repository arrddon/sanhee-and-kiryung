import type { Metadata } from "next";
import Reception from "./reception";

export const metadata: Metadata = {
  title: "산희와 기륭",
  description: "8월 15일 리셉션에 당신을 초대합니다",
  openGraph: {
    title: "산희와 기륭",
    description: "8월 15일 리셉션에 당신을 초대합니다",
    siteName: "산희와 기륭",
    images: [{ url: "/assets/pics%20(2).jpg", alt: "산희와 기륭" }],
  },
};

export default function ReceptionPage() { return <Reception />; }
