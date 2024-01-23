import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bookworm",
	description: "Take control of your reading habit and build a better life.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
