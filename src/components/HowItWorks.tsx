import React from "react";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
	subsets: ["latin"],
	weight: ["400"],
});
export default function HowItWorks() {
	return (
		<div
			id="howitworks"
			className="bg-[#ebeff8] w-full text-neutral-900"
		>
			<div className="container p-5 lg:p-20 flex flex-col gap-10">
				<h2
					className={`${calistoga.className} text-[2.4rem] font-semibold tracking-tight`}
				>
					How it works
				</h2>
				<div className="flex flex-col  gap-10 ">
					<div>
						<h2
							className={`${calistoga.className} text-[1.5rem] font-semibold tracking-tight`}
						>
							Effortlessly Manage Your Chrome Tabs
						</h2>
					</div>
					<div className="grid grod-cols-1 md:grid-cols-2 gap-10">
						<div className="flex flex-col gap-5 p-10 rounded-xl bg-[#172554] text-neutral-100">
							<h3
								className={`${calistoga.className} font-medium tracking-wide`}
							>
								Lazy Loading
							</h3>
							<p>
								Automatically load tabs only when you need them, saving system
								resources and enhancing performance.
							</p>
						</div>
						<div className="flex flex-col gap-5 p-10 rounded-xl bg-[#172554] text-neutral-100">
							<h3
								className={`${calistoga.className} font-medium tracking-wide`}
							>
								Lazy Loading
							</h3>
							<p>
								Automatically load tabs only when you need them, saving system
								resources and enhancing performance.
							</p>
						</div>
						<div className="flex flex-col gap-5 p-10 rounded-xl bg-[#9daee6] text-neutral-100">
							<h3
								className={`${calistoga.className} font-medium tracking-wide`}
							>
								Lazy Loading
							</h3>
							<p>
								Automatically load tabs only when you need them, saving system
								resources and enhancing performance.
							</p>
						</div>
						<div className="flex flex-col gap-5 p-10 rounded-xl bg-[#172554] text-neutral-100">
							<h3
								className={`${calistoga.className} font-medium tracking-wide`}
							>
								Lazy Loading
							</h3>
							<p>
								Automatically load tabs only when you need them, saving system
								resources and enhancing performance.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
