import { Navbar } from "@/components/main";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className=" flex items-center justify-center gap-10 flex-col  mt-10 lg:mt-24 p-5">
        {children}
      </main>
    </>
  );
}
