import Layout from "@/components/Layout";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import LoginModal from "@/components/models/LoginModal";
import RegisterModal from "@/components/models/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import ReviewModal from "@/components/models/ReviewModal";
import SearchModal from "@/components/models/SearchModal";


const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce-app",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={font.className}>
      <main>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <ToasterProvider />
          <ReviewModal />
          <SearchModal/>
        </ClientOnly>
        <Layout>{children}</Layout>
      </main>
    </body>
  </html>
  )
}
