import Image from 'next/image';
import React from 'react'
import { Calistoga } from 'next/font/google';

const calistoga = Calistoga({
	subsets: ["latin"],
	weight: ["400"],
});


export default function InstallTaabs() {
  return (
		<div id='install' className="container p-5 lg:p-20 flex flex-col gap-10 ">
			<div className="flex flex-col gap-3">
				<h1
					className={`${calistoga.className} text-[2.4rem] font-semibold tracking-tight`}
				>
					Simple Steps to Install and Use Taabs
				</h1>
				<p>
					Installing Taabs is a breeze. Follow these easy steps to enhance your
					Chrome experience.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				<div className="flex flex-col gap-3">
					<div className="relative aspect-video rounded-xl overflow-hidden">
						<Image
							src="/trial.png"
							alt="Taabs Installation guide"
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
					<h3 className="text-[1.3rem] font-medium tracking-tighter">
						Step 1: Install the Extension from Chrome Web Store
					</h3>
					<p className="tracking-tight">
						Clone the Taabs repository to obtain the extension files
					</p>
				</div>
				<div className="flex flex-col gap-3">
					<div className="relative aspect-video rounded-xl overflow-hidden">
						<Image
							src="/trial.png"
							alt="Taabs Installation guide"
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
					<h3 className="text-[1.3rem] font-medium tracking-tighter">
						Step 2: Add Taabs to Your Browser
					</h3>
					<p className="tracking-tight">
						Open your browser, go to Extensions, and load the unpacked
						extension.
					</p>
				</div>
				<div className="flex flex-col gap-3">
					<div className="relative aspect-video rounded-xl overflow-hidden">
						<Image
							src="/trial.png"
							alt="Taabs Installation guide"
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
					<h3 className="text-[1.3rem] font-medium tracking-tighter">
						Step 3: Switch on Lazy Loading and enhance your browser experience
					</h3>
					<p className="tracking-tight">
						Access the extension settings to tailor your preferences.
					</p>
				</div>
			</div>
		</div>
	);
}
