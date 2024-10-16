import React from "react";
import Link from "next/link";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});


export default function Footer() {
	return (
		<div className="w-full h-full flex justify-center text-neutral-100 bg-[#172554]">
			<div className="container flex flex-col gap-10 lg:gap-20 p-5 lg:p-20">
				<div className="flex flex-col md:flex-row w-full justify-between gap-20">
					<div className="flex flex-col gap-5  items-start">
						<div className={` ${comfortaa.className} text-[6rem] font-bold`}>
							Taabs
						</div>
						<div className="w-full h-full flex gap-5 justify-start items-start">
							<p className="w-full max-w-[500px]">
								Explore Taabs, the Chrome extension that boosts your browsing
								efficiency. With our innovative lazy loading feature, you can
								easily manage your tabs while conserving resources.
							</p>
						</div>
					</div>
					<div className="flex gap-10 lg:gap-20">
						<div className="flex flex-col gap-3  items-start text-start">
							<h3 className="font-semibold text-orange-400">Connect With Us</h3>
							<div className="flex flex-col gap-2">
								<Link
									href="https://www.twitter.com"
									className="relative group"
								>
									<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300  before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										Twitter
									</span>
								</Link>
								<Link
									href="https://www.instagram.com"
									className="relative group"
								>
									<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300  before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										Instagram
									</span>
								</Link>
								<Link
									href="https://www.linkedin.com"
									className="relative group"
								>
									<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300  before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										LinkedIn
									</span>
								</Link>
								<Link
									href="https://www.youtube.com/watch?v=xSujiSkGHfg"
									className="relative group"
								>
									<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300  before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										YouTube
									</span>
								</Link>
							</div>
						</div>

						<div className="flex flex-col gap-3  items-start text-start">
							<h3 className="font-semibold text-orange-400">
								Quick Navigation
							</h3>
							<div className="flex flex-col gap-2">
								<Link
									href="/"
									className="relative group"
								>
									<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										Home
									</span>
								</Link>
								<Link
									href="/#features"
									className="relative group"
								>
									<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										Features
									</span>
								</Link>
								<Link
									href="/#install"
									className="relative group"
								>
									<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										How to Install
									</span>
								</Link>
								<Link
									href="/#cta"
									className="relative group"
								>
									<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										Try Taabs
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-2 md::gap-10 w-full justify-between items-center border-t border-t-neutral-500  pt-10 ">
					<div className="flex  gap-2">
						<p>© Taabs 2024</p>
						<p>All rights reserved.</p>
					</div>
					<div className="flex gap-3">
						<Link
							href="/terms-of-service"
							className="relative group"
						>
							<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
								Terms of Service
							</span>
						</Link>
						<Link
							href="/privacy-policy"
							className="relative group"
						>
							<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
								Privacy Policy
							</span>
						</Link>
						<Link
							href="/privacy-policy"
							className="relative group"
						>
							<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
								Privacy Policy
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
