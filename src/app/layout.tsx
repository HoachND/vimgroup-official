import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vimgroup.vn"),
  title: "VIMGROUP - Kiến Tạo Nền Tảng, Dẫn Dắt Tương Lai",
  description: "VIMGROUP là tập đoàn đầu tư đa ngành hàng đầu, kiến tạo hệ sinh thái toàn diện từ Công nghiệp phụ trợ, Năng lượng xanh, Thương mại đến Công nghệ AI & Tự động hóa.",
  keywords: "VIMGROUP, tập đoàn VIMGROUP, đầu tư đa ngành, công nghiệp phụ trợ, năng lượng xanh, VimSolar, VimSupply, VimAI, AI Homes, tự động hóa, chuyển đổi số",
  openGraph: {
    title: "VIMGROUP - Kiến Tạo Nền Tảng, Dẫn Dắt Tương Lai",
    description: "Khám phá hệ sinh thái đa ngành của VIMGROUP: Công nghiệp, Năng lượng, Thương mại và Công nghệ đỉnh cao.",
    type: "website",
    url: "https://vimgroup.vn",
    siteName: "VIMGROUP",
    locale: "vi_VN",
    images: [
      {
        url: "/images/vimgroup-banner-v2.png",
        width: 1200,
        height: 630,
        alt: "VIMGROUP Corporate Banner",
      },
    ],
  },
  icons: {
    icon: "/images/logo-vimgroup.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-slate-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
