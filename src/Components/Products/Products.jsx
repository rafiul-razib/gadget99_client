import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productPerPage, setProductPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchedItem, setSearchedItem] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:3000/allProducts?page=${currentPage}&size=${productPerPage}&search=${searchedItem}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [currentPage, productPerPage, searchedItem]);

  const productCount = useLoaderData();
  // console.log(searchedItem);

  const numberOfPages = Math.ceil(productCount.count / productPerPage);

  const pages = [...Array(numberOfPages).keys()];

  const handleSetProductPerPage = (e) => {
    console.log(e.target.value);
    const val = parseInt(e.target.value);
    setProductPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = (e) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (e) => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // console.log(pages);

  const handleSearch = () => {
    const searchField = document.getElementById("searchField");
    const searchText = searchField.value;
    setSearchedItem(searchText);
  };
  return (
    <div>
      <div className="text-center max-w-4xl mx-auto my-14">
        <h1 className="text-red-700 font-bold text-3xl">
          Explore Our Products
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          repellendus voluptate vel voluptatum, voluptatem tempora aliquam
          commodi ab fugit officia! Nulla nesciunt delectus quae. Molestias
          laborum quae nesciunt earum at?
        </p>
      </div>
      <div className="text-center mx-auto">
        <div className="join">
          <input
            type="text"
            id="searchField"
            placeholder="Search"
            className="input input-bordered w-full rounded-l-full max-w-xs mb-4 join-item"
          />
          <button
            onClick={handleSearch}
            className="btn join-item rounded-r-full"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <Product item={item} />
        ))}
      </div>
      <div className="my-12 text-center mx-auto">
        <div className="page">
          {/* <div>Current Page = {currentPage}</div> */}
          <button className="btn btn-primary" onClick={handlePrevPage}>
            Prev
          </button>
          {pages.map((page) => (
            <button
              className={`${
                currentPage === page && "selected btn-accent"
              } btn btn-primary mx-1`}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </button>
          ))}
          <button className="btn btn-primary" onClick={handleNextPage}>
            Next
          </button>
          <select onChange={handleSetProductPerPage}>
            <option>6</option>
            <option>12</option>
            <option>18</option>
            <option>36</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Products;
