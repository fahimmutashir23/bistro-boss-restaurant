import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MenuCard from "../../../Shared/MenuCard/MenuCard";

const Menu = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/menu.json")
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === "popular")
            setData(popularItem)
        })
    }, [])
    return (
        <div>
            <SectionTitle title ="from our menu" subTitle="Check it Out"></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    data?.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="flex justify-center my-10">
                <button className="btn btn-ghost rounded-lg border-b-4 border-b-orange-400 bg-base-100">view full menu</button>
            </div>
        </div>
    );
};

export default Menu;