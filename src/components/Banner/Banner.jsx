import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="lg:w-1/2 rounded-lg" src={banner} />
          <div>
            <h1 className="text-5xl font-bold">
              Discover the Beauty of Bangladesh
            </h1>
            <p className="py-6">
              From the serene hills of Bandarban to the endless shores of Cox’s
              Bazar, experience the warmth of nature and heritage like never
              before.
            </p>

            <Link to={"/dashboard"}>
              <button className="btn btn-primary">View The Visited List</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex">
        <Marquee pauseOnClick={true} speed={30}>
          <img className="h-48 mx-3"
            src="https://media.istockphoto.com/id/2193289579/photo/a-scenic-view-of-ratargul-swamp-forest-sylhet-bangladesh.webp?a=1&b=1&s=612x612&w=0&k=20&c=euPadqKYzwVPuc354td91q4ZEJB0Fjce8xAOkXiNebE="
            alt=""
          />
          <img className="h-48 mx-3"
            src="https://media.istockphoto.com/id/1962154796/photo/bangladesh-national-martyrs.jpg?s=612x612&w=0&k=20&c=l4g_wVYdUwel7lpgye7xbijt35Z1TvR40nh169DFR7c="
            alt=""
          />
          <img className="h-48 mx-3"
            src="https://media.istockphoto.com/id/1326184024/photo/ahsan-manzil-former-residential-palace-of-the-nawab-of-dhaka-banglade.jpg?s=612x612&w=0&k=20&c=6Yk8S_zFp5fNx5Fr0xM_XlX90dEwsBwmWdRMvC7EZ3Y="
            alt=""
          />
          <img className="h-48 mx-3"
            src="https://media.istockphoto.com/id/1500613694/photo/aerial-view-of-wooden-passenger-boats-along-the-buriganga-river-sadarghat-dhaka-bangladesh-on.jpg?s=612x612&w=0&k=20&c=nLXkpf5fAsI8-90DXmsqypzWoDgism1MwUHaQnnYTs8="
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
