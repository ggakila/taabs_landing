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
								Enhanced Perfomance
							</h2>
							<h3
								className={`${calistoga.className} my-3 text-[1.3rem] font-semibold tracking-tight`}
							>
								Unlock Enhanced Performance and Productivity with Taabs for
								Chrome.
							</h3>
							<p>
								Experience a faster browsing experience as Taabs optimizes
								resource usage by implementing lazy loading for inactive tabs.
								Manage your tabs effortlessly and boost your productivity with
								organized tab groups. Taabs intelligently loads tabs only when
								you need them, saving resources and enhancing performance.
							</p>
						</div>
						<div className="w-full">
							<div className="relative aspect-video rounded-xl overflow-hidden">
								<Image
									src="/grouptabs.png"
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
								Organize
							</h2>
							<h3
								className={`${calistoga.className} my-3  text-[1.3rem] font-semibold tracking-tight`}
							>
								Manage your tabs effortlessly with intuitive grouping and
								searching features.
							</h3>
							<p>
								Organize your browsing experience like never before with Taabs.
								Our tab group feature allows you to categorize and manage your
								tabs efficiently. Group related tabs together for a more
								streamlined browsing experience. Switch between your tab groups
								effortlessly for improved productivity.
							</p>
						</div>
						<div className="w-full">
							<div className="relative aspect-video rounded-xl overflow-hidden">
								<Image
									src="/groupsearch.png"
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
							Create & Manage
						</h2>
						<h3
							className={`${calistoga.className} my-3  text-[1.3rem] font-semibold tracking-tight`}
						>
							Effortlessly Create and Manage Your Chrome Tab Groups with Taabs
						</h3>
						<p className="">
							Taabs revolutionizes your Chrome experience by implementing lazy
							loading for newly opened tabs. This means that inactive tabs won't
							consume valuable resources, allowing your browser to run smoothly
							and efficiently. Enjoy a more organized workspace as Taabs helps
							you manage, search, and group your tabs effortlessly.
						</p>
					</div>
					<div className="w-full">
						<div className="relative aspect-video rounded-xl overflow-hidden">
							<Image
								src="/install.png"
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
