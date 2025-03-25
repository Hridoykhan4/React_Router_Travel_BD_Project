import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredMarkVisitedPlace,
  getStoredWishedPlaces,
  removeFromVisited,
  removeFromWish,
} from "../../utils/addToDB";
import { useLoaderData } from "react-router-dom";
import Place from "../Place/Place";
const ListedPlaces = () => {
  const [visitedPlaces, setVisitedPlaces] = useState([]);
  const [wishToGoPlaces, setWishToGoPlaces] = useState([]);
  const [sort, setSort] = useState("");
  const places = useLoaderData();

  useEffect(() => {
    const storedMarkVisitedPlaces = getStoredMarkVisitedPlace();
    const storedMatched = [];
    if (places.length) {
      for (const placeId of storedMarkVisitedPlaces) {
        const matchedPlace = places.find((place) => place.id === placeId);
        storedMatched.push(matchedPlace);
      }
      setVisitedPlaces(storedMatched);
    }

    // wish places
    const storedWishedPlaces = getStoredWishedPlaces();
    const wishList = places.filter((place) =>
      storedWishedPlaces.includes(place.id)
    );
    setWishToGoPlaces(wishList);
  }, [places]);

  //sort
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "cost") {
      const moneySort = [...visitedPlaces].sort(
        (a, b) => a.cost_price - b.cost_price
      );
      setVisitedPlaces(moneySort);
    }
    if (sortType === "rating") {
      const ratingSort = [...visitedPlaces].sort((a, b) => b.rating - a.rating);
      setVisitedPlaces(ratingSort);
      setWishToGoPlaces(ratingSort);
    }
  };

  const handleRemoveFromVisted = (id) => {
    removeFromVisited(id);
    const remaining = visitedPlaces.filter((place) => place.id !== id);
    setVisitedPlaces(remaining);
  };
  const handleRemoveFromWishList = (id) => {
    removeFromWish(id);
    const remaining = wishToGoPlaces.filter((place) => place.id !== id);
    setWishToGoPlaces(remaining);
  };

  return (
    <div className="my-3">
      <h3 className="text-2xl font-bold mb-2 underline text-red-600">
        Listed Places
      </h3>

      <div className="flex mb-6 justify-center items-center">
        <details className="dropdown">
          <summary className="btn bg-green-600 px-9  text-white m-1">
            {sort
              ? `Sort By ` + sort[0].toUpperCase() + sort.slice(1)
              : "Sort By"}
          </summary>
          <ul className="menu dropdown-content  rounded-box z-1 w-52 p-2">
            <li>
              <a onClick={() => handleSort("cost")}>Cost</a>
            </li>
            <li>
              <a onClick={() => handleSort("rating")}>Rating</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Visited Places</Tab>
          <Tab>Wished Places</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl mb-3">
            Places You Visited: {visitedPlaces.length}
          </h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
            {visitedPlaces.map((place) => (
              <Place
                handleRemoveFromVisted={handleRemoveFromVisted}
                fromVisited={true}
                key={place.id}
                place={place}
              ></Place>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">
            Places You Wish To Go: {wishToGoPlaces.length}
          </h2>
          <div className="grid sm:grid-cols-2 my-2 grid-cols-1 gap-5">
            {wishToGoPlaces.map((place) => (
              <Place
                handleRemoveFromWishList={handleRemoveFromWishList}
                fromWishList={true}
                key={place.id}
                place={place}
              ></Place>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedPlaces;
