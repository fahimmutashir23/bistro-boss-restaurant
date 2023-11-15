import moment from "moment";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";

const FeatureItem = () => {

    const today = moment().format('MMMM DD, YYYY');

  return (
    <div>
      <div
        className="hero my-10 bg-fixed"
        style={{
          backgroundImage: `url(${featured})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <SectionTitle
              title="from our menu"
              subTitle="Check it Out"
            ></SectionTitle>
            <div className="flex gap-8 max-w-4xl mb-14">
              <div>
                <img src={featured} alt="" className="" />
              </div>
              <div className="text-start">
                <h1>{today}</h1>
                <h3 className="uppercase text-xl">where can i get some</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="btn btn-primary bg-transparent hover:bg-gray-700 text-white rounded-lg border-b-4 border-b-orange-400">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
