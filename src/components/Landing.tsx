/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
	subsets: ["latin"],
	weight: ["400"],
});



export default function Landing() {
	return (
		<div className=" p-5 min-h-screen bg-[#172554] w-full flex flex-col items-center justify-center relative">
			<div className="container lg:px-20 h-full w-full flex flex-col md:flex-row gap-10 lg:gap-20 justify-between items-center relative">
				<div className="w-full flex flex-col gap-10">
					<div className="text-white flex flex-col gap-7">
						<h2
							className={`${calistoga.className} flex flex-col text-[3rem]  w-full   leading-tight text-neutral-100 `}
						>
							Optimize Your Chrome Experience with Taabs
						</h2>
						<p className="text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] md:leading-[2rem]">
							Discover Taabs, the ultimate Chrome extension designed to enhance
							your browsing efficiency. Save resources and manage your tabs
							effortlessly with our innovative lazy loading feature.
						</p>
					</div>
					<div className="z-10 w-full h-full flex gap-5 items-end">
						<Link
							href={"https://github.com/procode3/taabs"}
							target="_blank"
							className="group text-neutral-100 flex items-center gap-1 border border-transparent  max-w-[220px] rounded-xl py-3 px-6 hover:border-orange-400 hover:bg-[#172554] bg-orange-400 hover:text-neutral-100 transition-all duration-300 ease-in font-[500]"
						>
							Install Taabs
						</Link>
						<Link
							href={"/"}
							className="group text-neutral-100 flex items-center gap-1 border border-orange-400 max-w-[220px] rounded-xl py-3 px-6 hover:bg-white hover:text-neutral-900 transition-all duration-300 ease-in font-[500]"
						>
							Watch Demo
						</Link>
					</div>
				</div>
				<div className="relative w-full flex items-center gap-5">
					{/* Dots Background */}
					<div className="absolute inset-0 z-0">
						<Image
							src="/dots.svg"
							alt="Taabs Installation guide"
							fill
							style={{ objectFit: "cover" }}
							className="w-full h-full"
						/>
					</div>

					{/* Main Content */}
					<div className="w-full">
						<div className="relative aspect-video rounded-xl overflow-hidden">
							<Image
								src="/herogroup.png"
								alt="Taabs Installation guide"
								fill
								style={{ objectFit: "cover" }}
								className="w-full h-full"
							/>
						</div>
					</div>

					<div className="relative z-10 w-full h-full flex flex-col gap-5">
						<div className="w-full">
							<div className="relative aspect-video rounded-xl overflow-hidden">
								<Image
									src="/lazyload.png"
									alt="Taabs Installation guide"
									fill
									style={{ objectFit: "cover" }}
									className="w-full h-full"
								/>
							</div>
						</div>
						<div className="w-full">
							<div className="relative aspect-video rounded-xl overflow-hidden">
								<Image
									src="/load.png"
									alt="Taabs Installation guide"
									fill
									style={{ objectFit: "cover" }}
									className="w-full h-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
