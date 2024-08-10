import { Unbounded, Albert_Sans } from "next/font/google";
import Features from "./components/Features";
import SvgOne from "./utils/SvgOne";
import SvgTwo from "./utils/SvgTwo";
import SvgThree from "./utils/SvgThree";
import Image from "next/image";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700"],
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Feature() {
  return (
    <>
      <div className="flex flex-col gap-8 relative lg:bottom-24">
        <h1 className="text-center font-normal text-customSize3 lg:text-customSize4 text-customGreen font-Thesignature -mb-16 lg:-mb-20">
          Beyond Premium
        </h1>
        <h2
          className={`text-customGreenBold text-xl lg:text-3xl font-bold text-center ${unbounded.className}`}
        >
          ELEVATE YOUR EXPERIENCE
        </h2>
      </div>
      <div className="flex flex-col gap-y-2 lg:flex-row relative lg:bottom-10">
        <Features
          Title="PERSONAL ITINERARIES"
          Description="Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires."
          SvgComponent={SvgOne}
        />
        <Features
          Title="EXCLUSIVE EXPERIENCES"
          Description="From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level."
          SvgComponent={SvgTwo}
        />
        <Features
          Title="BEST FACILITIES"
          Description="Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence."
          SvgComponent={SvgThree}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
        <Image
          src={"/images/Discover.png"}
          alt="Discover"
          width={398}
          height={188}
          className="lg: w-3/4"
        />
        <div className="flex flex-col justify-center items-center lg:items-start gap-5 lg:mt-16 px-10 lg:px-20">
          <h1
            className={`text-customGreenBold text-2xl lg:text-3xl font-bold text-center lg:text-start ${unbounded.className}`}
          >
            Discover Tailored Experiences
          </h1>
          <h2
            className={`font-normal text-sm lg:text-lg ${albertSans.className} text-center lg:text-start lg:max-w-5xl`}
          >
            Create your own journey, personalized to suit your preferences and
            interests, ensuring a once-in-a-lifetime adventure awaits.
          </h2>
          <a
            className={`bg-customGreenBold hover:bg-customGold cursor-pointer ${albertSans.className} text-lg font-bold text-white w-full lg:w-fit rounded-full text-center px-6 py-3 lg:px-6 lg:py-4`}
          >
            Custumize your Trip
          </a>
        </div>
      </div>
      <svg
        width="1096"
        height="97"
        viewBox="0 0 1096 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" w-11/12 mt-10"
      >
        <path
          d="M802.251 48.3794L791.51 36.3162L780.769 48.3794L791.51 60.4426L802.251 48.3794Z"
          fill="#D6B66B"
        />
        <path
          d="M315.245 48.3833L304.504 36.3201L293.763 48.3833L304.504 60.4466L315.245 48.3833Z"
          fill="#D6B66B"
        />
        <path
          d="M36.0917 48.3772L29.3866 40.8466L22.6814 48.3772L29.3866 55.9079L36.0917 48.3772Z"
          fill="#D6B66B"
        />
        <path
          d="M1073.33 48.3813L1066.63 40.8506L1059.92 48.3813L1066.63 55.912L1073.33 48.3813Z"
          fill="#D6B66B"
        />
        <path
          d="M354.647 38.24L350.907 28.27L335.682 47.19H347.444L354.647 38.24Z"
          fill="#179999"
        />
        <path
          d="M346.971 49H335.209L350.915 68.5L354.788 58.71L346.971 49Z"
          fill="#0B7373"
        />
        <path
          d="M356.266 59.4399L352.393 69.2399H539.318L530.601 59.4399H356.266Z"
          fill="#004040"
        />
        <path
          d="M739.974 59.4399H565.638L556.912 69.2399H743.847L739.974 59.4399Z"
          fill="#004040"
        />
        <path
          d="M749.028 47.48H760.79L745.324 28.27L741.594 38.23L749.028 47.48Z"
          fill="#0B7373"
        />
        <path
          d="M740.187 37.32L743.856 27.52H556.912L565.638 37.32H740.187Z"
          fill="#179999"
        />
        <path
          d="M352.375 27.52L356.052 37.32H530.602L539.318 27.52H352.375Z"
          fill="#179999"
        />
        <path
          d="M567.25 57.63H740.134L747.587 48.38L740.134 39.13H567.25L575.486 48.38L567.25 57.63Z"
          fill="#0B7373"
        />
        <path
          d="M528.982 39.13H356.098L348.654 48.38L356.098 57.63H528.991L520.746 48.38L528.982 39.13Z"
          fill="#0B7373"
        />
        <path
          d="M741.443 58.71L745.316 68.5L760.791 49.29H749.029L741.443 58.71Z"
          fill="#004040"
        />
        <path
          d="M548.134 35.1891L536.367 48.4049L548.134 61.6207L559.901 48.4049L548.134 35.1891Z"
          fill="#D6B66B"
        />
        <path
          d="M547.119 63.64L534.529 49.5H524.556L547.119 74.84V63.64Z"
          fill="#B39859"
        />
        <path
          d="M549.113 33.12L561.703 47.26H571.675L549.113 21.92V33.12Z"
          fill="#EDD395"
        />
        <path
          d="M547.119 33.12V21.92L524.556 47.26H534.529L547.119 33.12Z"
          fill="#D6B66B"
        />
        <path
          d="M549.113 63.64V74.84L571.675 49.5H561.703L549.113 63.64Z"
          fill="#B39859"
        />
        <path
          d="M791.51 48.38H1066.62"
          stroke="#D6B66B"
          stroke-width="3.9"
          stroke-miterlimit="10"
        />
        <path
          d="M29.3828 48.38H304.491"
          stroke="#D6B66B"
          stroke-width="3.9"
          stroke-miterlimit="10"
        />
      </svg>
    </>
  );
}
