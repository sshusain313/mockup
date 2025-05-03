import Image from "next/image";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Appearl from "./components/Appearl";
import UpcomingTools from "./components/UpcomingTools";
import Cards from "./components/Cards";
import Video from "./components/Video";
import Free from "./components/Free";
import Faqs from "./components/Faqs";
import Last from "./components/Last";
export default function Home() {
  return (
    <div>
      <Header />
      <Grid />
      <Appearl />
      <UpcomingTools />
      <Cards />
      <Video />
      <Free />
      <Faqs />
      <Last />
    </div>
  );
}
