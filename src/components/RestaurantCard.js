import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="card-data">
        <h3>{name}</h3>
        <h3>
          {avgRating} stars | {sla.slaString}
        </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
