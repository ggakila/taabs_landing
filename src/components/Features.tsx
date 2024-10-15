import React from 'react'
import Image from "next/image";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
	subsets: ["latin"],
	weight: ["400"],
});

export default function Features() {
  return (
		<div
			id="features"
			className="container p-5 lg:p-20 flex flex-col gap-10"
		>
			<h2
				className={`${calistoga.className} text-[2.4rem] font-semibold tracking-tight`}
			>
				Features
			</h2>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col lg:flex-row gap-10">
					<div className="bg-[#f4f6ff] p-5 md:p-10 flex flex-col  gap-10 rounded-xl w-full lg:w-2/3">
						<div className="w-full">
							<h2 className="px-3 py-1 my-3 bg-[#172554] bg-opacity-55 rounded-xl text-md font-medium tracking-tight text-white inline-block">
								Manage
							</h2>
							<h3
								className={`${calistoga.className} my-3 text-[1.3rem] font-semibold tracking-tight`}
							>
								Effortlessly Manage Your Chrome Tabs Today
							</h3>
							<p>
								With Taabs, you can easily find and manage all your tabs in one
								place. Say goodbye to cluttered browsing and hello to
								streamlined efficiency.
							</p>
						</div>
						<div className="w-full">
							<div className="relative aspect-video rounded-xl overflow-hidden">
								<Image
									src="/trial.png"
									alt="Taabs Installation guide"
									fill
									style={{ objectFit: "cover" }}
									className="w-full h-full"
								/>
							</div>
						</div>
					</div>
					<div className="bg-[#f4f6ff] p-5 md:p-10 flex flex-col justify-between gap-10 rounded-xl w-full lg:w-1/3">
						<div className="w-full">
							<h2 className="px-3 py-1 my-3 bg-[#172554] bg-opacity-55 rounded-xl text-md font-medium tracking-tight text-white inline-block">
								Manage
							</h2>
							<h3
								className={`${calistoga.className} my-3  text-[1.3rem] font-semibold tracking-tight`}
							>
								Effortlessly Manage Your Chrome Tabs Today
							</h3>
							<p>
								With Taabs, you can easily find and manage all your tabs in one
								place. Say goodbye to cluttered browsing and hello to
								streamlined efficiency.
							</p>
						</div>
						<div className="w-full">
							<div className="relative aspect-video rounded-xl overflow-hidden">
								<Image
									src="/trial.png"
									alt="Taabs Installation guide"
									fill
									style={{ objectFit: "cover" }}
									className="w-full h-full"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#f4f6ff] p-5 md:p-10 flex flex-col justify-between gap-10 rounded-xl w-full">
					<div className="w-full">
						<h2 className="px-3 py-1 my-3 bg-[#172554] bg-opacity-55 rounded-xl text-md font-medium tracking-tight text-white inline-block">
							Manage
						</h2>
						<h3
							className={`${calistoga.className} my-3  text-[1.3rem] font-semibold tracking-tight`}
						>
							Effortlessly Manage Your Chrome Tabs Today
						</h3>
						<p>
							With Taabs, you can easily find and manage all your tabs in one
							place. Say goodbye to cluttered browsing and hello to streamlined
							efficiency.
						</p>
					</div>
					<div className="w-full">
						<div className="relative aspect-video rounded-xl overflow-hidden">
							<Image
								src="/trial.png"
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
	);
}
