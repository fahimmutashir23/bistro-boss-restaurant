import PageTitle from "../../../Components/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ContactUs from "../ContactUs/ContactUs";
import FeatureItem from "../FeatureItem/FeatureItem";
import Menu from "../Menu/Menu";
import MiddleBanner from "../MiddleBanner/MiddleBanner";
import OrderOnline from "../OrderOnline/OrderOnline";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <MiddleBanner></MiddleBanner>
            <Menu></Menu>
            <ContactUs></ContactUs>
            <ChefRecommends></ChefRecommends>
            <FeatureItem></FeatureItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;