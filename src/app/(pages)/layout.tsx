import BackButton from "@/components/BackButton";
import { inter } from "../layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackButton />
      </body>
    </html>
  );
}
