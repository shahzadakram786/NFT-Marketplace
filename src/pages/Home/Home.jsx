import Catogries from "../../components/catogries";
import React from "react";
import Hero from "../../components/hero/Hero";
import TrendingCollection from "../../components/TrendingCollection/TrendingCollection";
import Topcreators from "../../components/topCreators/Topcreators";
import DiscoverNft from "../../components/discoverMoreNft/DiscoverNft";
import WorksComponent from "../../components/works";
import DigestComponent from "../../components/digest";
import Trending from "../../components/TrendingCollection/TrendingCollectionData";
import topCreators from "../../components/topCreators/TopCardsData";
import categories from "../../components/catogries/catogriesData";
import Discover from "../../components/discoverMoreNft/discoverData";

const Home = () => {
  return (
    <>
      <section className="bg-[#2B2B2B] flex flex-col justify-center items-center gap-16 py-20">
        <Hero />

        <TrendingCollection data={Trending} />

        <Topcreators data={topCreators} />

        <Catogries data={categories} />

        <DiscoverNft data={Discover} />

        <WorksComponent />

        <DigestComponent />
      </section>
    </>
  );
};

export default Home;
