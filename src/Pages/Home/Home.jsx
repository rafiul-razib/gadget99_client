import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <Banner />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-bold text-center">
            Discover cutting-edge gadgets, your ultimate tech hub for the latest
            gadgets!!!
          </h1>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
