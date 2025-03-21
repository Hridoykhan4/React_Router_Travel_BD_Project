import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { getStoredMarkVisitedPlace } from "../../utils/addToDB";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const [placeCart, setPlaceCart] = useState([]);
  const loadPlaces = useLoaderData();

  const nav = useNavigate();

  useEffect(() => {
    const cartItems = getStoredMarkVisitedPlace();
    if (cartItems.length <= 0) {
      console.log("Hi");
    } else {
      if (cartItems.length) {
        const visitedPlaces = cartItems;
        const arrMatched = [];

        for (const id of visitedPlaces) {
          const getMatch = loadPlaces.find((place) => place.id === id);
          if (getMatch) {
            arrMatched.push({
              name: getMatch.place_name,
              rating: getMatch.rating,
            });
          }
        }

        setPlaceCart([...arrMatched]);
      }
    }
  }, [loadPlaces]);

  return (
    <div>
      {placeCart.length <= 0 ? (
        <div className="flex flex-col h-[200px] justify-center  items-center">
          <div className="">
            <h3>You have not selected Any Marked Place here</h3>
          </div>
        </div>
      ) : (
        <div className="my-10">
          {" "}
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={placeCart}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rating" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <button
            onClick={() => nav("/")}
            className="text-center cursor-pointer btn-primary block mx-auto my-4 btn"
          >
            Back To Home
          </button>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
