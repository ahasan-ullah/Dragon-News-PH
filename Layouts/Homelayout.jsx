import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const Homelayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">Left</aside>
        <section className="col-span-6">Main</section>
        <aside className="col-span-3">Right</aside>
      </main>
    </div>
  );
};
export default Homelayout;
