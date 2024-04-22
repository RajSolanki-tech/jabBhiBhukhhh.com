import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData?.info;
  return (
    <div className="m-2 p-2 w-72 rounded-lg hover:scale-95 transition">
      <img
        className="w-[575px] h-[175px] rounded-lg object-cover"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="card-data">
        <h3 className="font-bold pt-3 text-lg text-black/75">{name}</h3>
        <h3 className="font-semibold text-black/75">
          {avgRating} stars | {sla?.slaString}
        </h3>
        <h4 className="text-gray-700 text-start">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-700">{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
