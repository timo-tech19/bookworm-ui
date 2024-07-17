import Navbar from "./_components/navbar";

// Bookworm Landing page layout
async function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}

export default LandingLayout;
