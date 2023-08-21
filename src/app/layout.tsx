"use client";

import "./globals.css";
import {Inter} from "next/font/google";
import {UIProvider} from "./context/ui/UIProvider";
import {Navbar} from "./components";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<title>API Rick And Morty</title>
			<body className={inter.className}>
				<Navbar />
				<UIProvider>{children}</UIProvider>
			</body>
		</html>
	);
}
