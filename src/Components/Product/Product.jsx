import React from "react";

const Product = ({ item }) => {
  const { img, name, category, price, description, creation_date } = item;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={img} />
        </figure>
        <div className="card-body h-auto box-border">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <h1 className="text-md font-bold">Category: {category}</h1>
          <h1 className="text-md font-bold">Posted On: {creation_date}</h1>
          <div className="card-actions flex gap-4 justify-center items-center py-4">
            <h1 className="text-md font-bold">Price: ${price}</h1>
            <button className="btn btn-sm btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
