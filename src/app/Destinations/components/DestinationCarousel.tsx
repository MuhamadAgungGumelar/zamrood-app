import Destination from "./DestinationCard";
import { useQuery } from "@tanstack/react-query";
import fetchProductsData from "../Api/fetchProductsData";
import DestinationCarouselCard from "./DestinationCardCarousel";

export default function DestinationCarousel() {
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

  const limitedData = data?.data.slice(0, 3) || [];
  return (
    <>
      <div className="carousel carousel-center rounded-box max-w-md lg:max-w-full space-x-4 p-4">
        <div className="carousel-item">
          {limitedData.map((destination, key) => {
            const limitedGalleries = destination.related_galleries.slice(0, 2);
            return limitedGalleries.map((gallery, index) => (
              <DestinationCarouselCard
                key={`${key}-${index}`}
                title={destination.itinerary_name}
                price={destination.related_variant.itinerary_variant_pub_price}
                image={gallery.src}
              />
            ));
          })}
        </div>
      </div>
    </>
  );
}
