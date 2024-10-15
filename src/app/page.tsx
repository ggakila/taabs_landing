import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import InstallTaabs from "@/components/InstallTaabs";
import Landing from "@/components/Landing";


export default function Home() {
  return (
		<div className="flex flex-col items-center">
			<Landing />
			<Features/>
			<HowItWorks/>
			<About/>
			<InstallTaabs/>
			<Footer/>
		</div>
	);
}
