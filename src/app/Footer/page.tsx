import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-customGreenBold px-6 py-4 gap-2 relative lg:top-10 w-screen h-full">
        <div>
          <h1 className="font-normal text-base text-center text-white">
            © 2023 Zamrood by PT Teknologi Pandu Wisata
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-6 text-center text-white text-2xl ">
          <AiOutlineFacebook />
          <AiOutlineInstagram />
          <AiOutlineMail />
        </div>
      </div>
    </>
  );
}
