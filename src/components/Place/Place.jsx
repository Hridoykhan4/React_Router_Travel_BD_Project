import { Link } from "react-router-dom";

const Place = ({ place }) => {
  const { id, image, description: desc, place_name: name } = place;
  return (
    <Link to={`/places/${id}`}>
      <div className="card bg-base-100 p-4 border-black/39 rounded-lg border shadow-sm">
        <figure className="h-56">
          <img className="w-full h-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{desc}</p>
          <p className="border-t border-dashed border-black/50"></p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Place;
