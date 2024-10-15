import Link from "next/link";
import React from "react";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
	subsets: ["latin"],
	weight: ["400"],
});
export default function CTA() {
	return (
		<div className="w-full flex items-center justify-center border-t ">
			<div className="container flex flex-col items-center gap-10 p-10 lg:p-20">
				<h2
					className={`${calistoga.className} flex flex-col text-[2.5rem]  w-full max-w-[600px] text-balance text-center  leading-tight text-neutral-800 `}
				>
					Unlock Enhanced Performance and Productivity with Taabs for Chrome.
				</h2>
				<div className="h-full flex gap-5">
					<Link
						href={"/"}
						className="group text-neutral-100 flex items-center gap-1 border border-transparent  max-w-[220px] rounded-xl py-3 px-6 hover:border-orange-400 hover:bg-[#172554] bg-orange-400 hover:text-neutral-100 transition-all duration-300 ease-in font-[500]"
					>
						Install Taabs
					</Link>
					<Link
						href={"/"}
						className="group text-neutral-100 flex items-center gap-1 border border-orange-400 max-w-[220px] rounded-xl py-3 px-6 bg-[#172554] hover:bg-orange-400 hover:text-neutral-100 transition-all duration-300 ease-in font-[500]"
					>
						Watch Demo
					</Link>
				</div>
			</div>
		</div>
	);
}
