import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const Homelayout=()=>{
  return(
    <div>
    <header>
      <Header></Header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
    </header>
    </div>
  );
}
export default Homelayout;