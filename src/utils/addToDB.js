import toast from "react-hot-toast";

const getStoredMarkVisitedPlace = () => {
  const storedVisited = localStorage.getItem("visited-places");
  return storedVisited ? JSON.parse(storedVisited) : [];
};

const addToStoredVisitedPlaces = (id) => {
  const storedVisitedLists = getStoredMarkVisitedPlace();
  if (storedVisitedLists.includes(id)) {
    // alert("Duru Shala");
  } else {
    storedVisitedLists.push(id);
    localStorage.setItem("visited-places", JSON.stringify(storedVisitedLists));
  }
};

const getStoredWishedPlaces = () => {
  const storedWishPlaces = localStorage.getItem("wish-places");
  return storedWishPlaces ? JSON.parse(storedWishPlaces) : [];
};

const addToStoredWishList = (id) => {
  const storedPlaces = getStoredWishedPlaces();
  if (storedPlaces.includes(id)) {
    toast.error("Can not add twice in wishList", {
      duration: 2000,
      position: "top right",
      className: "p-4 font-semibold",
      removeDelay: 2000,
    });
  } else {
    toast.success('Added as Wish List', {
      position:'top-right'
    })
    console.log('Jp');
    storedPlaces.push(id);
    localStorage.setItem("wish-places", JSON.stringify(storedPlaces));
  }
};

export {
  addToStoredVisitedPlaces,
  addToStoredWishList,
  getStoredMarkVisitedPlace,
  getStoredWishedPlaces,
};
