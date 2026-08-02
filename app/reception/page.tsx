import type { Metadata } from "next";
import Reception from "./reception";

export const metadata: Metadata = {
  title: "Reception — 산희와 기륭",
  description: "2026년 8월 15일, 산희와 기륭의 결혼 리셉션에 초대합니다.",
};

export default function ReceptionPage() { return <Reception />; }
