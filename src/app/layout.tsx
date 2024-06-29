import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Primum Vitare",
	description: "Œuvrer pour que le travail n'altère pas la santé et soit une opportunité pour l'améliorer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
