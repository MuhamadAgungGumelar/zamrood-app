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

export default function DestinationCard({
  title,
  description,
  price,
  image,
  index,
}) {
  // Tentukan arah flex berdasarkan indeks
  const flexDirection = index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div
      className={`flex flex-col ${flexDirection} px-2 lg:flex-1 mt-14 gap-10`}
    >
      <div className="relative flex-1 w-full min-h-[256px] lg:min-h-[374px]">
        <Image
          fill
          src={image}
          alt="Discover"
          sizes="100vw"
          className="rounded-md "
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-5">
        <div>
          <h1 className="font-normal text-base">7 DAYS 6 NIGHTS</h1>
          <h1
            className={`text-customGreen text-base lg:text-4xl font-bold ${unbounded.className}`}
          >
            {title}
          </h1>
          <h1
            id="desktop"
            className={`text-customGreenBold hidden lg:flex lg:text-base ${albertSans.className} font-bold text-sm mt-2`}
          >
            Organized by Pandooin
          </h1>
          <p
            className={` text-xs lg:text-base font-normal ${albertSans.className}`}
          >
            {description}
          </p>
          <h1
            id="mobile"
            className={`text-customGreenBold lg:hidden text-sm ${albertSans.className} font-bold text-sm mt-2`}
          >
            Organized by Pandooin
          </h1>
        </div>
        <div className="flex flex-row justify-between mt-4">
          <div>
            <p
              className={`text-customGreenBold ${albertSans.className} font-normal text-xs lg:text-base`}
            >
              Start from
            </p>
            <h1
              className={`text-customGray line-through hidden lg:flex lg:text-base font-medium ${unbounded.className}`}
            >
              IDR 9,999,999
            </h1>
            <h1
              className={`text-customGreen text-lg lg:text-4xl font-medium ${unbounded.className}`}
            >
              IDR {price}
            </h1>
          </div>
          <a className=" flex justify-center items-center border-2 border-customGreenBold hover:bg-customGreenBold hover:text-white hover:cursor-pointer rounded-full px-3 text-base font-bold text-customGreenBold">
            See Details
          </a>
        </div>
      </div>
    </div>
  );
}
