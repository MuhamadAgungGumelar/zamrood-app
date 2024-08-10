import Image from "next/image";

export default function ArticlesCard({ image, title, imageHeight, divHeight }) {
  return (
    <>
      <div className={`flex flex-col`}>
        <div className={`h-[277px] lg:${imageHeight} relative w-full`}>
          <Image
            fill
            alt="articles"
            src={image}
            sizes="100vw"
            className="rounded-md bottom-20"
          />
        </div>
        <div
          className={`relative flex items-center bg-customGreen ${divHeight} p-6 bottom-1`}
        >
          <h1 className="font-bold text-white text-base ">{title}</h1>
        </div>
      </div>
    </>
  );
}
