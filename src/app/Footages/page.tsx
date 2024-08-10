"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import fetchProductsData from "../Destinations/Api/fetchProductsData";
import SvgFootage from "./utils/SvgFootage";

// Tipe data untuk respons dari fetchProductsData
interface Gallery {
  src: string;
}

interface Destination {
  related_galleries: Gallery[];
}

interface FetchProductsDataResponse {
  data: Destination[];
}

export default function Footage() {
  const { data, isError, isLoading } = useQuery<FetchProductsDataResponse>({
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

  return (
    <>
      <div className="bg-customGold w-screen justify-center items-center flex flex-col p-10">
        <h1 className="text-start flex self-start lg:pl-96 font-normal text-customSize3 lg:text-customSize4 text-customGreen font-Thesignature mt-4">
          Luxury Footages
        </h1>
        <div id="mobile" className="flex flex-row lg:hidden">
          {limitedData.map((destination, key) => {
            const limitedGalleries = destination.related_galleries.slice(0, 1);

            return limitedGalleries.map((galery, index) => (
              <Image
                key={index} // Pertimbangkan menggunakan ID yang unik jika ada
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
          <div className="hidden lg:grid lg:grid-cols-3 justify-center items-center gap-10 lg:w-full">
            {limitedData2.map((destination, key) => {
              const limitedGalleries = destination.related_galleries.slice(
                0,
                1
              );

              return limitedGalleries.map((galery, index) => (
                <div key={index} className="relative w-full min-h-[349px]">
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
          <SvgFootage />
          <div className="hidden lg:grid lg:grid-cols-3 justify-center items-center gap-10 lg:w-full">
            {limitedData2.map((destination, key) => {
              const limitedGalleries = destination.related_galleries.slice(
                0,
                1
              );

              return limitedGalleries.map((galery, index) => (
                <div key={index} className="relative w-full min-h-[349px]">
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
