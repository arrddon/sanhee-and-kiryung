import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanhee-and-kiryung.vercel.app"),
  title: "산희와 기륭",
  description: "산희와 기륭의 새로운 시작에 초대합니다.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "산희와 기륭",
    description: "산희와 기륭의 새로운 시작에 초대합니다.",
    images: [{ url: "/assets/pics%20(2).jpg", alt: "산희와 기륭" }],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "산희와 기륭",
    description: "산희와 기륭의 새로운 시작에 초대합니다.",
    images: ["/assets/pics%20(2).jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
