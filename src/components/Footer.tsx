import React from "react";
import Link from "next/link";
import { Comfortaa } from "next/font/google";
import Image from "next/image";

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
							<h3 className="font-semibold text-orange-400 flex whitespace-nowrap">
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
						<div className="flex flex-col gap-3  items-start text-start">
							<h3 className="font-semibold text-orange-400 flex whitespace-nowrap">
								Connect With Us
							</h3>
							<div className="flex flex-col gap-2">
								<Link
									href="https://www.linkedin.com/in/erick-barasa357-61b0599b/"
									target="_blank"
									className="relative group"
								>
									<span className="flex gap-1 items-center whitespace-nowrap relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300  before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										<div className="relative w-5 h-5">
											<Image
												src="/linkedin.png"
												alt="Taabs Installation guide"
												fill
												style={{ objectFit: "cover" }}
												className="w-full h-full"
											/>
										</div>
										Erick Baraza
									</span>
								</Link>
								<Link
									href="https://www.linkedin.com/in/haggai-gisore/"
									target="_blank"
									className="relative group"
								>
									<span className="flex gap-1 items-center whitespace-nowrap relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300  before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
										<div className="relative w-5 h-5">
											<Image
												src="/linkedin.png"
												alt="Taabs Installation guide"
												fill
												style={{ objectFit: "cover" }}
												className="w-full h-full"
											/>
										</div>
										Haggai Gisore
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-2 md::gap-10 w-full justify-between items-center border-t border-t-neutral-500 text-sm pt-10 ">
					<div className="flex  gap-2">
						<p>© Taabs 2024</p>
						<p>All rights reserved.</p>
					</div>
					<div className="flex gap-3 ">
						<Link
							href="https://github.com/procode3/taabs?tab=readme-ov-file#terms-of-service"
							target="_blank"
							className="relative group"
						>
							<span className="relative border-b-2 pb-1 border-b-transparent w-full text-neutral-100 transition-all duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100">
								Terms of Service
							</span>
						</Link>
						<Link
							href="https://github.com/procode3/taabs?tab=readme-ov-file#privacy-policy"
							target="_blank"
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
