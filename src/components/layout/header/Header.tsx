"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
	{
		title: "Qui sommes-nous ?",
		path: "/about",
	},
	{
		title: "Nous contacter",
		path: "/contact",
	},
	{
		title: "Articles",
		path: "/blog",
	},
];

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen((prev) => !prev);
	};
	return (
		<header className="sticky top-0 bg-green-500 shadow-sm z-50">
			<nav className="relative container flex flex-wrap items-center justify-between px-2 py-4 mx-auto lg:justify-between xl:px-0">
				{/* Logo */}
				<div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
					<Link href="/" scroll={true}>
						<span className="flex items-center space-x-2 text-2xl font-medium text-white">
							<span className="bg-white rounded-md">
								<Image
									src="/img/logo-green.png"
									alt="N"
									width="32"
									height="32"
									className="w-8"
								/>
							</span>
							<span>Primum Vitare</span>
						</span>
					</Link>

					<button
						aria-label="Toggle Menu"
						className="px-2 py-1 ml-auto text-white rounded-md lg:hidden hover:text-green-900 focus:text-green-900 focus:bg-green-100 focus:outline-none"
						onClick={handleClick}
					>
						<svg
							className="w-6 h-6 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							{open && (
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							)}
							{!open && (
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							)}
						</svg>
					</button>
					{open && (
						<>
							{links.map((link, index) => (
								<Link
									scroll
									key={index}
									href={link.path}
									className="w-full px-4 py-2 -ml-4 text-white rounded-md hover:text-green-900 focus:text-green-900 focus:bg-green-100 focus:outline-none"
								>
									{link.title}
								</Link>
							))}
						</>
					)}
				</div>
				{/* MENU */}
				<div className="hidden text-center lg:flex lg:items-center">
					<ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
						{links.map((link) => (
							<li key={`link-${link.title}`}>
								<Link
									href={link.path}
									className="inline-block px-4 py-2 text-lg font-normal text-white no-underline rounded-md hover:text-green-900 focus:text-green-900 focus:bg-green-100 focus:outline-none "
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<p></p>
			</nav>
		</header>
	);
};
