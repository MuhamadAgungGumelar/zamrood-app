import PropTypes from "prop-types";
import { Unbounded, Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Features({ Title, Description, SvgComponent }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center px-10">
        <SvgComponent />
        <h1
          className={`font-bold text-customGreen ${albertSans.className} text-base lg:text-2xl`}
        >
          {Title}
        </h1>
        <h2
          className={`font-normal text-sm ${albertSans.className} lg:text-base`}
        >
          {Description}
        </h2>
      </div>
    </>
  );
}

Features.propTypes = {
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  SvgComponent: PropTypes.elementType.isRequired,
};
