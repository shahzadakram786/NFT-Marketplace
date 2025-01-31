import Catogries from '../../components/catogries'
import React from "react";
import Hero from "../../components/hero/Hero";
import TrendingCollection from "../../components/TrendingCollection/TrendingCollection";
import Topcreators from "../../components/topCreators/Topcreators";
import DiscoverNft from "../../components/discoverMoreNft/DiscoverNft";
import WorksComponent from '../../components/works';
import DigestComponent from '../../components/digest';
import Trending from '../../components/TrendingCollection/TrendingCollectionData';

const Home = () => {

  return (
    <>
    



    
      
        <Hero />
    
      <section className="bg-[#2B2B2B] flex justify-center items-center py-20">
          <TrendingCollection data={Trending}/>
      </section>
      <section className="py-20">
          <Topcreators/>
      </section>
      <section className="bg-[#2B2B2B] flex justify-center items-center py-20">
          <Catogries/>
      </section>
      <section className="bg-[#2B2B2B] flex justify-center items-center py-20">
          <DiscoverNft/>
      </section>
      <section className="bg-[#2B2B2B] flex justify-center items-center py-20">
          <WorksComponent/>
      </section>
      <section className="bg-[#2B2B2B] flex justify-center items-center py-20">
          <DigestComponent/>
      </section>

    </>
  );
};

export default Home;