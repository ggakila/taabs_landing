/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetClose,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Zeyada, Comfortaa } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";


const myname = Zeyada({
	subsets: ["latin"],
	weight: ["400"],
});


const comfortaa = Comfortaa({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});


const sheets = [
	{ href: "/", name: "Home" },
	{ href: "/#features", name: "Features" },
	{ href: "/#howitworks", name: "How it Works" },
	{ href: "/#about", name: "About" },
	{ href: "/#install", name: "Install Taabs" },
	{ href: "/#demo", name: "Demo" },
];

export default function Header() {
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);
	const headerRef = useRef<HTMLDivElement>(null);
	const observerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let prevScrollPos = window.pageYOffset;
		let ticking = false;

		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
						setIsHeaderVisible(false);
					} else {
						setIsHeaderVisible(true);
					}
					prevScrollPos = currentScrollPos;
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<header
			ref={headerRef}
			className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 p-5  w-full flex justify-center backdrop-blur-md bg-[#172554] ${
				isHeaderVisible ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<div className="container lg:px-20 flex w-full justify-between items-center">
				<div className="flex justify-center text-[16px] text-neutral-100  tracking-tighter font-bold">
					<h1
						className={`${comfortaa.className} font-[500] tracking-tight text-[1.5rem] md:text-[2rem]`}
					>
						Taabs
					</h1>
				</div>
				<div className="flex gap-5 items-center">
					<div className="hidden w-full md:flex bg-white/10 py-2 px-3 md:px-5 rounded-xl justify-between items-center text-[1rem] leading-[17px] gap-5 text-white/50 font-500">
						<Link
							href="/#features"
							className="relative py-2 md:py-3 px-2 text-neutral-100 h-full whitespace-nowrap w-fit bg-transparent transition-all duration-400 hover:text-white before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-orange-400 before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
						>
							Features
						</Link>
						<Link
							href="/#howitworks"
							className="relative py-2 md:py-3 px-2 text-neutral-100 h-full whitespace-nowrap w-full bg-transparent transition-all duration-400 hover:text-white before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-orange-400 before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
						>
							How it Works
						</Link>
						<Link
							href="/#about"
							className="relative py-2 md:py-3 px-2 text-neutral-100 h-full whitespace-nowrap w-full bg-transparent transition-all duration-400 hover:text-white before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-orange-400 before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
						>
							About
						</Link>
						<Link
							href="/#install"
							className="relative py-2 md:py-3 px-2 text-neutral-100 h-full whitespace-nowrap w-full bg-transparent transition-all duration-400 hover:text-white before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-orange-400 before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
						>
							Install Taabs
						</Link>
						<Link
							href="/#demo"
							className="relative py-2 md:py-3 px-2 text-neutral-100 h-full whitespace-nowrap w-full bg-transparent transition-all duration-400 hover:text-white before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-orange-400 before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
						>
							Watch Demo
						</Link>
					</div>
					<div className="flex items-center">
						<Sheet>
							<SheetTrigger className="group px-3 py-2 rounded-xl relative bg-transparent ">
								<div className="h-[30px] w-[30px] flex flex-col items-end justify-center gap-[8px]">
									<div className="h-[1.5px] bg-white group-hover:bg-orange-400 w-full transition-all duration-300 ease-in-out"></div>
									<div className="h-[1.5px] bg-white group-hover:bg-orange-400 w-2/3 transition-all duration-200 ease-in-out"></div>
									<div className="h-[1.5px] bg-white group-hover:bg-orange-400 w-4/5 transition-all duration-100 ease-in-out"></div>
								</div>
							</SheetTrigger>
							<SheetContent
								side="right"
								className=" w-[300px] text-neutral-100 rounded-r-xl border-none flex flex-col justify-between"
							>
								<div className="flex flex-col gap-10">
									<SheetHeader className=" flex flex-col gap-5">
										<SheetTitle className=" flex items-center justify-between">
											<SheetClose
												asChild
												className=""
											>
												<Link
													href="/"
													className={`${comfortaa.className} flex items-center text-neutral-800 text-[1.1rem] font-bold tracking-tight`}
												>
													Taabs
												</Link>
											</SheetClose>
											<SheetClose className="group flex items-center overflow-hidden bg-[#172554] rounded-xl px-3 transition-opacity text-[0.8rem] border text-white hover:text-orange-300 disabled:pointer-events-none">
												{`Close`}
											</SheetClose>
										</SheetTitle>
									</SheetHeader>
									<SheetDescription className=" text-neutral-100 flex flex-col w-full capitalize">
										<div className=" nav-links w-full flex flex-col text-start overflow-y-auto">
											{sheets.map((sheet, index) => (
												<SheetClose
													key={index}
													asChild
													className=""
												>
													<Link
														href={sheet.href}
														className="text-[16px] text-neutral-800 tracking-tighter py-1 px-2  hover:bg-[#172554] hover:text-white rounded-xl"
													>
														{sheet.name}
													</Link>
												</SheetClose>
											))}
										</div>
									</SheetDescription>
								</div>
								<SheetFooter>
									<div className="flex flex-col  w-full gap-1">
										<p className=" text-neutral-900 font-[400] text-[0.8rem] leading-[1rem] tracking-tight">
											@ 2024 Taabs
										</p>
										<p className=" text-neutral-900 font-[400] text-[0.8rem] leading-[1rem] tracking-tight">
											All rights reservedN
										</p>
									</div>
								</SheetFooter>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
