"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import fetchProductsData from "../Destinations/Api/fetchProductsData";
export default function Footage() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["itineraries"],
    queryFn: fetchProductsData,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }

  const limitedData = data?.data.slice(0, 1) || [];
  const limitedData2 = data?.data.slice(0, 3) || [];
  const data1 = limitedData[0];
  const data2 = limitedData[1];

  return (
    <>
      <div className="bg-customGold w-screen justify-center items-center flex flex-col  p-10">
        <h1 className="text-start flex self-start lg:pl-96 font-normal text-customSize3 lg:text-customSize4 text-customGreen font-Thesignature mt-4">
          Luxury Footages
        </h1>
        <div id="mobile" className="flex flex-row lg:hidden">
          {limitedData.map((destination, key) => {
            const limitedGalleries = destination.related_galleries.slice(0, 1);

            return limitedGalleries.map((galery, index) => (
              <Image
                key={key}
                src={galery.src}
                width={358}
                height={256}
                alt="Discover"
                className="rounded-md"
              />
            ));
          })}
        </div>

        <div
          id="desktop"
          className="flex flex-col justify-center items-center gap-10"
        >
          <div className="hidden lg:grid lg:grid-cols-3 justify-center items-center lg: gap-10 lg:w-full">
            {limitedData2.map((destination, key) => {
              const limitedGalleries = destination.related_galleries.slice(
                0,
                1
              );

              return limitedGalleries.map((galery, index) => (
                <div key={key} className="relative w-full min-h-[349px]">
                  <Image
                    fill
                    src={galery.src}
                    alt="Discover"
                    sizes="100vw"
                    className="rounded-md"
                  />
                </div>
              ));
            })}
          </div>
          <svg
            width="1096"
            height="97"
            viewBox="0 0 1096 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:flex"
          >
            <path
              d="M802.251 48.4695L791.51 36.4062L780.769 48.4695L791.51 60.5327L802.251 48.4695Z"
              fill="#FAF9F5"
            />
            <path
              d="M315.245 48.4729L304.504 36.4097L293.763 48.4729L304.504 60.5361L315.245 48.4729Z"
              fill="#FAF9F5"
            />
            <path
              d="M36.0917 48.4672L29.3866 40.9365L22.6814 48.4672L29.3866 55.9979L36.0917 48.4672Z"
              fill="#FAF9F5"
            />
            <path
              d="M1073.33 48.4711L1066.63 40.9404L1059.92 48.4711L1066.63 56.0018L1073.33 48.4711Z"
              fill="#FAF9F5"
            />
            <path
              d="M354.647 38.3299L350.907 28.3599L335.682 47.2799H347.444L354.647 38.3299Z"
              fill="#FAF9F5"
            />
            <path
              d="M346.971 49.0898H335.209L350.915 68.5898L354.788 58.7998L346.971 49.0898Z"
              fill="#FAF9F5"
            />
            <path
              d="M356.266 59.5298L352.393 69.3298H539.318L530.601 59.5298H356.266Z"
              fill="#FAF9F5"
            />
            <path
              d="M739.974 59.5298H565.638L556.912 69.3298H743.847L739.974 59.5298Z"
              fill="#FAF9F5"
            />
            <path
              d="M749.028 47.5699H760.79L745.324 28.3599L741.594 38.3199L749.028 47.5699Z"
              fill="#FAF9F5"
            />
            <path
              d="M740.187 37.4099L743.856 27.6099H556.912L565.638 37.4099H740.187Z"
              fill="#FAF9F5"
            />
            <path
              d="M352.375 27.6099L356.052 37.4099H530.602L539.318 27.6099H352.375Z"
              fill="#FAF9F5"
            />
            <path
              d="M567.25 57.7197H740.134L747.587 48.4697L740.134 39.2197H567.25L575.486 48.4697L567.25 57.7197Z"
              fill="#FAF9F5"
            />
            <path
              d="M528.982 39.2197H356.098L348.654 48.4697L356.098 57.7197H528.991L520.746 48.4697L528.982 39.2197Z"
              fill="#FAF9F5"
            />
            <path
              d="M741.443 58.7999L745.316 68.5899L760.791 49.3799H749.029L741.443 58.7999Z"
              fill="#FAF9F5"
            />
            <path
              d="M548.134 35.2788L536.367 48.4946L548.134 61.7105L559.901 48.4946L548.134 35.2788Z"
              fill="#FAF9F5"
            />
            <path
              d="M547.119 63.7298L534.529 49.5898H524.556L547.119 74.9298V63.7298Z"
              fill="#FAF9F5"
            />
            <path
              d="M549.113 33.2098L561.703 47.3498H571.675L549.113 22.0098V33.2098Z"
              fill="#FAF9F5"
            />
            <path
              d="M547.119 33.2098V22.0098L524.556 47.3498H534.529L547.119 33.2098Z"
              fill="#FAF9F5"
            />
            <path
              d="M549.113 63.7298V74.9298L571.675 49.5898H561.703L549.113 63.7298Z"
              fill="#FAF9F5"
            />
            <path
              d="M791.51 48.4697H1066.62"
              stroke="#FAF9F5"
              stroke-width="3.9"
              stroke-miterlimit="10"
            />
            <path
              d="M29.3828 48.4697H304.491"
              stroke="#FAF9F5"
              stroke-width="3.9"
              stroke-miterlimit="10"
            />
          </svg>
          <div className="hidden lg:grid lg:grid-cols-3 justify-center items-center lg: gap-10 lg:w-full">
            {limitedData2.map((destination, key) => {
              const limitedGalleries = destination.related_galleries.slice(
                0,
                1
              );

              return limitedGalleries.map((galery, index) => (
                <div key={key} className="relative w-full min-h-[349px]">
                  <Image
                    fill
                    src={galery.src}
                    alt="Discover"
                    sizes="100vw"
                    className="rounded-md"
                  />
                </div>
              ));
            })}
          </div>
        </div>
      </div>
    </>
  );
}
