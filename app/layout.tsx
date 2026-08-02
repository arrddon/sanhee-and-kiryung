import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "산희 & 기륭",
  description: "산희와 기륭의 삶과 프로젝트, 그리고 2026년 8월 15일 리셉션.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
