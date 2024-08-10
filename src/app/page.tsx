import Image from "next/image";
import Header from "./Header/page";
import Feature from "./Feature/page";
import Destinations from "./Destinations/page";
import Footages from "./Footages/page";
import Articles from "./Articles/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 lg:py-5 lg:px-56 bg-customBG">
      <Header />
      <Feature />
      <Destinations />
      <Footages />
      <Articles />
      <Footer />
    </main>
  );
}
