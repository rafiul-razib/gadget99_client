import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner/gears/banner (1).jpg";
import banner2 from "../../assets/banner/gears/banner (2).jpg";
import banner3 from "../../assets/banner/gears/banner (3).jpg";
import banner4 from "../../assets/banner/banner (4).jpg";
import banner5 from "../../assets/banner/banner (5).jpg";
import banner6 from "../../assets/banner/banner (6).jpg";
import banner7 from "../../assets/banner/banner (7).jpg";
import banner8 from "../../assets/banner/banner (8).jpg";
import banner9 from "../../assets/banner/banner (9).jpg";
import banner10 from "../../assets/banner/banner (10).jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img className="banner-img" src={banner1} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img className="banner-img" src={banner2} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img className="banner-img" src={banner3} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
