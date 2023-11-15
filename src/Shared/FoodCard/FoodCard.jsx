import PropTypes from "prop-types";
import image1 from "../../assets/menu/salad-bg.jpg"




const FoodCard = ({ item }) => {
  const { title, description } = item;
  return (
    <div>
      <div className="card bg-base-300 rounded-none shadow-md">
        <div>
          <img
            src={image1}
            alt="food"
          />
        </div>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
          <button className="btn bg-base-200 hover:bg-gray-700 hover:text-white rounded-lg border-b-4 border-b-orange-400">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
