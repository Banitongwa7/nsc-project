"use client";

import React from 'react'
import AllArticles from "@/data/AllArticles";
import CardArticle from "@/components/card/CardArticle";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ItemType } from "@/types/types";

export default function Arcticles() {

  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [filterProduct, setFilterProduct] = useState<string>("");
  const [filterPrice, setFilterPrice] = useState<string>("");
  const [itemsFiltered, setItemsFiltered] = useState<ItemType[]>(AllArticles);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setVisibleItems((prev) => Math.min(prev + 6, AllArticles.length));
    }
  }, [inView]);

  useEffect(() => {
    if (filterProduct) {
      if (filterPrice) {
        setItemsFiltered(
          AllArticles.filter(
            (item) =>
              item.marque.toLowerCase() === filterProduct.toLowerCase() &&
              item.price.toLowerCase() === filterPrice.toLowerCase()
          )
        );
      } else {
        setItemsFiltered(
          AllArticles.filter((item) =>
            item.marque.toLowerCase()  === filterProduct.toLowerCase()
          )
        );
      }
    } else {
      if (filterPrice) {
        setItemsFiltered(
          AllArticles.filter((item) =>
            item.price.toLowerCase() === filterPrice.toLowerCase()
          )
        );
      } else {
        setItemsFiltered(AllArticles);
      }
    }
  }, [filterProduct, filterPrice]);



  return (
     <div className="max-w-7xl mx-auto px-4 w-full my-10">
            <div className="text-center space-y-5">
              <h2 className="font-extrabold text-[--palette-1] text-5xl">
                Tous nos produits
              </h2>
              <p className="text-md text-gray-600 font-medium">
                Consultez tous nos produits Nyota Skincare
              </p>
            </div>
    
            <div className="w-full my-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0">
              <div className="max-w-lg mx-auto">
                <label
                  htmlFor="products"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Les produits
                </label>
                <select name="products" id="products" onChange={(e) => setFilterProduct(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[200px] p-2.5">
                  <option value="">Tous</option>
                  <option value="CeraVe">CeraVe</option>
                  <option value="The ordinary">The ordinary</option>
                  <option value="La roche posay">La roche posay</option>
                  <option value="Eucerin">Eucerin</option>
                </select>
              </div>
    
              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="number-input"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Prix (USD)
                </label>
                <input
                  type="number"
                  id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5"
                  placeholder="USD"
                  onChange={(e) => setFilterPrice(e.target.value)}
                  value={filterPrice}
                />
              </form>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14 lg:px-8 md:px-8 px-8">
              {itemsFiltered.slice(0, visibleItems).map((item) => (
                <CardArticle key={item.id} item={item} />
              ))}
            </div>
            <div ref={ref} className="text-center py-4">
              {visibleItems < itemsFiltered.length && <span>Chargement ...</span>}
            </div>
          </div>
  )
}
