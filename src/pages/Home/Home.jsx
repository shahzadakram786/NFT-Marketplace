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
import Wrapper from "../../components/wrapper/Wrapper";

const Home = () => {
  return (
    <>
    <Wrapper>
        <Hero />

        <TrendingCollection data={Trending} />

        <Topcreators data={topCreators} />

        <Catogries data={categories} />

        <DiscoverNft data={Discover} />

        <WorksComponent />

        <DigestComponent />

        </Wrapper>
    </>
  );
};

export default Home;
