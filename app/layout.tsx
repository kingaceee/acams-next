import type { Metadata } from "next";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/global.scss'

export const metadata: Metadata = {
  title: {
    default: "Finger AML Hub",
    template: "%s | ACAMS",
  },
  description: "금융 시스템의 건전성 향상을 위한 플랫폼",
};

export default function Layout({ children }: { children: React.ReactNode;}) {
  return (
    <html lang="ko">
      <body>
        <div className="container">
          <Header />
          <main className="contents">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
