// import AutoplayCarousel from "@/components/CarouselHero";
import Categories from "@/components/Categories";
import GeneralInfo from "@/components/GeneralInfo";
import NewArrivals from "@/components/NewArrivals";
// import Navbar from '@@/components/Navbar'
// import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen ">
      {/* <Navbar /> */}
     {/* <AutoplayCarousel /> */}
     <HeroSection />
     <Categories />
     <GeneralInfo />
     <NewArrivals />
    <Footer />
    </main>
  );
}
