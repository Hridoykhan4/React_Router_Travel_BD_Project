import { useEffect, useState } from "react";
import Place from "../Place/Place";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [tempPlaces, setTempPlaces] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/places.json");
      if (!res.ok) {
        alert("");
      }
      const data = await res.json();
      setPlaces(data);
      setTempPlaces(data);
    };
    loadData();
  }, []);

  const handleSearchBtn = () => {
    if (query.trim()) {
      const searchedItems = [];
      for (const e of tempPlaces) {
        if (
          e.place_name.trim().toLowerCase().includes(query.trim().toLowerCase())
        ) {
          searchedItems.push(e);
        }
      }
      setPlaces(searchedItems);
    } else {
      setPlaces(tempPlaces);
    }
  };

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="my-3">
      <h2 className="font-bold text-center text-3xl">Total Places: {tempPlaces.length}</h2>
      {
        query && <h2 className="font-bold text-center text-3xl">Searched Places: {places.length}</h2>
      }
      <div className="flex gap-4 my-3 flex-col justify-start items-start md:flex-row">
        <label className="input  input-accent">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={handleSearchInput}
            type="search"
            className="grow "
            placeholder="Search"
          />
        </label>
        <button onClick={handleSearchBtn} className="btn btn-primary">
          Search Places
        </button>
      </div>

      <div className="grid my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {places.map((place) => (
          <Place key={place.id} place={place}></Place>
        ))}
      </div>
    </div>
  );
};

export default Places;
