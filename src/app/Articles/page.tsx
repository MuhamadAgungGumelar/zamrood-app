"use client";

import Image from "next/image";
import { Unbounded, Albert_Sans } from "next/font/google";
import ArticlesCard from "./components/ArticleCard";
import fetchArticlesData from "./API/fetchArticlesData";
import { useQuery } from "@tanstack/react-query";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700"],
});

interface Article {
  id: string;
  title: string;
  featured_image: string;
}

export default function Articles() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["id"],
    queryFn: fetchArticlesData,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }

  const limitedData = (data?.data.slice(1, 5) || []) as Article[];

  console.log(data?.data[0].title);

  return (
    <>
      <div className="flex flex-col gap-4 p-4 mt-6 lg:w-full">
        <div>
          <Image
            src="/images/BannerKecil.png"
            width={1096}
            height={102}
            className="lg:hidden"
            alt="Banner Mobile"
          />
          <Image
            src="/images/Banner.png"
            width={1096}
            height={102}
            className="hidden lg:flex lg:w-full"
            alt="Banner Desktop"
          />
        </div>

        <div className="mt-10">
          <h1
            className={`${unbounded.className} font-bold text-customGreen text-2xl`}
          >
            Articles
          </h1>
          <p className="font-normal text-base text-customGreen">
            Our curated writings, offering something for every reader.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <ArticlesCard
              key={data?.data[0].id}
              title={data?.data[0].title}
              image={data?.data[0].featured_image}
              imageHeight={`h-[649px]`}
              divHeight={`lg:h-44`}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {limitedData.map((article) => (
              <ArticlesCard
                key={article.id}
                title={article.title}
                image={article.featured_image}
                imageHeight={`h-auto`}
                divHeight={`lg:h-32`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
