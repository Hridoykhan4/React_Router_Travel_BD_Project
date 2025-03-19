import { useLoaderData, useParams } from "react-router-dom";

const PlaceDetail = () => {
  const placeData = useLoaderData();
  const { placesId } = useParams();

  const id = parseInt(placesId);

  const place = placeData.find((place) => place.id === id);

  const { image, place_name, description , id: currentPlaceId, famous_for} = place;

  return (
    <div className="flex my-4 flex-col md:flex-row gap-7">
      <div className="md:w-1/2 h-[400px]">
        <img
          src={image}
          className="rounded-md w-full h-full object-cover"
          alt={place_name}
        />
      </div>

      <div className="md:w-1/2 space-y-2">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider">
          {place_name}
        </h3>
        <p className="text-gray-700">{description}</p>
        
        <p><span className="font-semibold underline underline-offset-2">Famous For</span>: {famous_for}</p>

        <div className="flex gap-4">
          <button className="btn btn-outline">Visited</button>
          <button className="btn bg-teal-600 text-white">Wish To Go</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
