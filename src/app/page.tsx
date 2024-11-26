import FeatureArticles from "./(components)/FeatureArticles";
import HeroSection from "./(components)/HeroSection";
import LatestArticle from "./(components)/LatestArticle";
import SideBar from "./(components)/SideBar";

export default function Home() {
  return (
    <div>
    <HeroSection />
    <SideBar />
    <FeatureArticles />
    <LatestArticle />
    </div>
  );
}
