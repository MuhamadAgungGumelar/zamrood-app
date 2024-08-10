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

export default function DestinationCarouselCard({ title, price, image }) {
  return (
    <>
      <div className="flex flex-row relative">
        <div className={`grid grid-cols-1 gap-10 px-10 mt-14 max-w-sm`}>
          <div className="relative w-full h-[256px]">
            <Image
              fill
              src={image}
              alt="Discover"
              sizes="100vw"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col justify-between gap-5">
            <div>
              <h1 className={`font-normal ${albertSans.className} text-xs`}>
                7 DAYS 6 NIGHTS
              </h1>
              <h1
                className={`text-customGreen text-base font-bold ${unbounded.className}`}
              >
                {title}
              </h1>
              <h1
                className={`text-customGreenBold lg:text-base ${albertSans.className} font-bold text-sm mt-2`}
              >
                Organized by Pandooin
              </h1>
            </div>
            <div className="flex flex-col gap-4 justify-between mt-2">
              <div>
                <p
                  className={`text-customGreenBold ${albertSans.className} font-normal text-xs`}
                >
                  Start from
                </p>
                <h1
                  className={`text-customGreen text-base font-medium ${unbounded.className}`}
                >
                  IDR {price}
                </h1>
              </div>
              <a className="border-2 border-customGreenBold hover:bg-customGreenBold hover:text-white hover:cursor-pointer rounded-full p-3 w-fit font-bold text-customGreenBold">
                See Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
