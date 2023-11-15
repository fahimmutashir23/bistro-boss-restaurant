import FoodCard from "../../../Shared/FoodCard/FoodCard";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import image1 from "../../../assets/menu/salad-bg.jpg"

const ChefRecommends = () => {
    const description = "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
    const title = "Caeser Salad"
    const item = {image1, description, title}

    return (
        <div className="my-10">
            <SectionTitle title="chef recommends" subTitle="Should Try"></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10">
                <FoodCard item={item}></FoodCard>
                <FoodCard item={item}></FoodCard>
                <FoodCard item={item}></FoodCard>
            </div>            
        </div>
    );
};

export default ChefRecommends;