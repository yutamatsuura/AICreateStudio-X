import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from './providers';

export const metadata: Metadata = {
  title: "AICreateStudio-X - AI駆動型コンテンツ生成プラットフォーム",
  description: "ペルソナ・テーマ・記事・画像・プロンプトを自動生成",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
