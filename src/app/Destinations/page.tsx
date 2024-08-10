"use client";

import { Unbounded, Albert_Sans } from "next/font/google";
import DestinationCard from "./components/DestinationCard";
import { useQuery } from "@tanstack/react-query";
import fetchProductsData from "./Api/fetchProductsData";
import DestinationCarousel from "./components/DestinationCarousel";

// Define the types for the data structure returned by fetchProductsData
interface Gallery {
  src: string;
}

interface RelatedVariant {
  itinerary_variant_pub_price: string;
}

interface DestinationData {
  itinerary_name: string;
  itinerary_short_description: string;
  related_galleries: Gallery[];
  related_variant: RelatedVariant;
}

interface FetchProductsResponse {
  data: DestinationData[];
}

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700"],
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Destinations() {
  const { data, isError, isLoading } = useQuery<FetchProductsResponse>({
    queryKey: ["itineraries"],
    queryFn: fetchProductsData,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }

  const limitedData = data?.data.slice(0, 3) || [];

  return (
    <>
      <div className="flex flex-col px-5 lg:pb-5">
        <svg
          width="1096"
          height="97"
          viewBox="0 0 1096 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        ></svg>
        <div className="flex flex-col lg:flex-row gap-6 px-2 lg:mt-14">
          <h1
            className={`text-customGreenBold text-2xl lg:text-4xl font-bold ${unbounded.className}`}
          >
            Destinations
          </h1>
          <div className="flex flex-row gap-4 hover:text-customGold hover:cursor-pointer items-center">
            <a className="border p-2 border-customGreenBold hover:border-customGold rounded-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.64582 4.14708C7.84073 3.95147 8.15731 3.9509 8.35292 4.14582L13.8374 9.6108C14.0531 9.82574 14.0531 10.1751 13.8374 10.39L8.35292 15.855C8.15731 16.0499 7.84073 16.0493 7.64582 15.8537C7.4509 15.6581 7.45147 15.3415 7.64708 15.1466L12.8117 10.0004L7.64708 4.85418C7.45147 4.65927 7.4509 4.34269 7.64582 4.14708Z"
                  fill="#004040"
                />
              </svg>
            </a>
            <h2
              className={`font-bold text-base lg:font-normal ${albertSans.className}`}
            >
              EXPLORE MORE
            </h2>
          </div>
        </div>
        {limitedData.map((destination, key) => {
          const limitedGalleries = destination.related_galleries.slice(0, 2);
          return limitedGalleries.map((gallery, index) => (
            <DestinationCard
              key={`${key}-${index}`}
              title={destination.itinerary_name}
              description={destination.itinerary_short_description}
              price={destination.related_variant.itinerary_variant_pub_price}
              image={gallery.src}
              index={index}
            />
          ));
        })}
      </div>

      <DestinationCarousel />

      <div className="flex flex-row self-center my-10 lg:hidden gap-4 hover:text-customGold hover:cursor-pointer items-center">
        <a className="border p-2 border-customGreenBold hover:border-customGold rounded-full">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.64582 4.14708C7.84073 3.95147 8.15731 3.9509 8.35292 4.14582L13.8374 9.6108C14.0531 9.82574 14.0531 10.1751 13.8374 10.39L8.35292 15.855C8.15731 16.0499 7.84073 16.0493 7.64582 15.8537C7.4509 15.6581 7.45147 15.3415 7.64708 15.1466L12.8117 10.0004L7.64708 4.85418C7.45147 4.65927 7.4509 4.34269 7.64582 4.14708Z"
              fill="#004040"
            />
          </svg>
        </a>
        <h2
          className={`font-bold text-base lg:font-normal ${albertSans.className}`}
        >
          EXPLORE MORE
        </h2>
      </div>
    </>
  );
}
