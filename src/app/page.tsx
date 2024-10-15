import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import InstallTaabs from "@/components/InstallTaabs";
import Landing from "@/components/Landing";


export default function Home() {
  return (
		<div className="flex flex-col items-center">
			<Landing />
			<Features/>			
			<InstallTaabs/>
			<CTA/>
			<Footer/>
		</div>
	);
}
