import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="font-semibold py-2 text-gray-900 text-lg">
              <div className="text-black-500 text-xm">
                {item.card.info.name}
              </div>
              <div>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <div className="text-sm text-gray-500">
                {item.card.info.description}
              </div>
            </div>
          </div>

          <div className="w-3/12 m-2 p-2">
            <div>
              <button className="p-2 bg-white text-green-500 font-bold shadow-lg absolute mx-4 my-32 rounded-xl w-32 hover:bg-gray-200">
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
