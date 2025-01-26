import React from "react";
import AllArticles from "@/data/AllArticles";
import Image from "next/image";
import Link from "next/link";

export default async function DetailsArticle({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const articleId = (await params).articleId;
  const article = AllArticles.find(
    (article) => article.id === Number(articleId)
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row my-40 md:m-40 sm:px-[40px] px-0 sm:gap-[100px] gap-[30px] ">
        <div className="w-full md:w-auto flex-[2] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto top-[100px]">
            <Image
              src={article ? article.image : ""}
              width={500}
              height={400}
              alt="product"
              className="rounded-2xl h-[400px] w-[500px] object-contain"
            />
          </div>
        </div>

        <div className="flex-[1.5] w-[80%] md:w-full mx-auto">
          <h2 className=" sm:text-[30px] text-[20px] font-bold">
            {article?.name}
          </h2>
          <p className="price font-bold text-[18px] text-[--palette-1]">
            Prix : {article?.price}
          </p>
          <div className=" text-gray-400 text-[15px] pb-8">
            <p>Le produit est commandé depuis la Belgique</p>
          </div>

          <Link href={"https://forms.gle/PF4s9DRkaupDWa6B9"} target="_blank">
            <div className="w-full bg-[--palette-4] text-center rounded-full py-3 mt-5 text-[var(--palette-1)] font-bold hover:bg-[--palette-5] cursor-pointer">
              Commander maintenant
            </div>
          </Link>

          <div className="mt-10">
            <h4 className="text-md mb-1 font-semibold">Details: </h4>
            <p className="text">{article?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
