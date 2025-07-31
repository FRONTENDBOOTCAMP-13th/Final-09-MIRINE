export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p>향수 상세 목록</p>
      {children}
    </>
  );
}
