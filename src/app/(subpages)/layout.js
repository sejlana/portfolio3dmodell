import HomeButton from "@/components/projects/HomeButton";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16">
      <HomeButton>Home</HomeButton>
      {children}
    </main>
  );
}
