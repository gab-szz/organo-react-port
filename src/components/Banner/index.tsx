import bannerImg from "@images/banner.png";
import "./Banner.css";

export const Banner = () => {
  return (
    <header className="banner">
      <img src={bannerImg} alt="Banner" className="banner" />
    </header>
  );
};

export default Banner;
