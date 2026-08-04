import type { Metadata } from "next";
import Reception from "./reception";

export const metadata: Metadata = {
  title: "산희와 기륭",
  description: "산희와 기륭의 새로운 시작에 초대합니다.",
  openGraph: {
    title: "산희와 기륭",
    description: "산희와 기륭의 새로운 시작에 초대합니다.",
    images: [{ url: "/assets/pics%20(2).jpg", alt: "산희와 기륭" }],
  },
};

export default function ReceptionPage() { return <Reception />; }
