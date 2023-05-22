import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Product title
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            ramro xa hai
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            Rs2000
          </div>
        </div>
        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          ghadi ho ghadi
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">Sano</option>
                <option value="2">Sano</option>
                <option value="3">Sano</option>
                <option value="4">Sano</option>
                <option value="5">Sano</option>
                <option value="6">Sano</option>
                <option value="7">Sano</option>
                <option value="8">Sano</option>
                <option value="9">Sano</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
