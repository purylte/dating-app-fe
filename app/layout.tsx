import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dating App",
  description: "Dating App LAW 9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="valentine">
      <body className={inter.className}>
        <div className="flex flex-col h-screen w-screen bg-base-100">
          {children}
        </div>
      </body>
    </html>
  );
}
