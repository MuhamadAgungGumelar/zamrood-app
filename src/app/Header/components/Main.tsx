import Image from "next/image";
import { Unbounded, Albert_Sans } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700"],
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Main() {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden lg:mt-12 lg:bottom-40 z-0">
        <Image
          src="/images/Main.png"
          alt="Main Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="flex flex-col gap-2 xl:gap-6 items-center justify-center absolute inset-0 z-10 lg:px-56 lg:items-start">
          <h1 className="text-center font-normal text-customSize lg:text-customSize2 text-customGold font-Thesignature -mb-16 lg:-mb-20">
            Premium Travel
          </h1>
          <h2
            className={`text-white text-2xl lg:text-customSize3 font-bold ${unbounded.className}`}
          >
            Beyond Expectation
          </h2>
          <h3
            className={`text-white text-center lg:text-start text-lg lg:text-2xl font-normal lg:max-w-[708px] ${albertSans.className}`}
          >
            Experience the finest that Indonesia has to offer with our curated
            selection of premium trips, ensuring comfort every step of the way
          </h3>
          <h2
            className={`text-white text-md font-bold ${albertSans.className} rounded-full border p-3 hover:cursor-pointer hover:bg-customGold hover:border-b-2 hover:border-customGold`}
          >
            Take me there
          </h2>
        </div>
      </div>
    </>
  );
}
