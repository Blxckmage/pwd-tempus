import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackButton />
        <Footer />
      </body>
    </html>
  );
}
