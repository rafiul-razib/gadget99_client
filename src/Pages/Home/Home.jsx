import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
        <div className="col-span-2">
          <Banner />
        </div>
        <div className="flex justify-center items-center mx-auto">
          <h1 className="text-2xl lg:text-5xl font-bold text-center">
            Discover cutting-edge Man's Gears, your ultimate hub for the latest
            styles!!!
          </h1>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
