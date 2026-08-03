import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanhee-and-kiryung.vercel.app"),
  title: "산희와 기륭의 프로젝트 페이지",
  description: "산희와 기륭의 삶과 프로젝트, 그리고 2026년 8월 15일 리셉션.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "산희와 기륭의 프로젝트 페이지",
    description: "산희와 기륭의 삶과 프로젝트, 그리고 2026년 8월 15일 리셉션.",
    images: [{ url: "/assets/reception-cover.jpg", alt: "산희와 기륭" }],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "산희와 기륭의 프로젝트 페이지",
    description: "산희와 기륭의 삶과 프로젝트, 그리고 2026년 8월 15일 리셉션.",
    images: ["/assets/reception-cover.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
