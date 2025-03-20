import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredMarkVisitedPlace,
  getStoredWishedPlaces,
} from "../../utils/addToDB";
import { useLoaderData } from "react-router-dom";
import Place from "../Place/Place";
const ListedPlaces = () => {
  const [visitedPlaces, setVisitedPlaces] = useState([]);
  const [wishToGoPlaces, setWishToGoPlaces] = useState([]);

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

  return (
    <div className="my-3">
      <h3 className="text-2xl font-bold mb-2 underline text-red-600">
        Listed Places
      </h3>

      <div className="flex justify-center items-center">
        <details className="dropdown">
          <summary className="btn bg-green-600 text-white m-1">Sort By</summary>
          <ul className="menu dropdown-content  rounded-box z-1 w-52 p-2">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
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
              <Place key={place.id} place={place}></Place>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">
            Places You Wish To Go: {wishToGoPlaces.length}
          </h2>
          <div className="grid sm:grid-cols-2 my-2 grid-cols-1 gap-5">
            {wishToGoPlaces.map((place) => (
              <Place key={place.id} place={place}></Place>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedPlaces;
