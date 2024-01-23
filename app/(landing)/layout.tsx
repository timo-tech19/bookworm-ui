import Navbar from "./_components/navbar";

// Bookworm Landing page layout
function LandingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='h-full'>
			<Navbar />
			<main>{children}</main>
		</div>
	);
}

export default LandingLayout;
