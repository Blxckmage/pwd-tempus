import BackButton from "@/components/BackButton";

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
      </body>
    </html>
  );
}
