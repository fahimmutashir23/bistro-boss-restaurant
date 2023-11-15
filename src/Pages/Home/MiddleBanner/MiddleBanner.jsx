import photo from "../../../assets/home/banner.jpg"



const MiddleBanner = () => {
    return (
        <div>
            <div className="p-32 bg-fixed mb-10" style={{backgroundImage: `url(${photo})`}}>
                <div className="md:p-20 bg-white">
                    <h1 className="text-4xl text-center uppercase">Bistro Boss</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default MiddleBanner;