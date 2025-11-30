import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import axios from "axios";
import FeaturedPropertiesCard from "../component/FeaturedPropertiesCard";
const Home = () => {
  const [data, setData] = useState([]);
   useEffect(() => {
    axios
      .get("http://localhost:3000/latest-properties")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error)
      );

  }, [] );


  return (
    <div>
      <Banner></Banner>
<div className="px-6 md:px-10 lg:px-20 py-10 lg:py-20 space-y-4 md:space-y-10">
        <h1 className="text-[#001931] font-bold text-4xl lg:text-5xl text-center">
          Featured Real Estate
        </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((property) => (
            <FeaturedPropertiesCard
              key={property._id}
              property={property}
            ></FeaturedPropertiesCard>
          ))}
        </div>
    </div>
      </div>
  );
};



export default Home;
