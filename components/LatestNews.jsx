import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews=()=>{
  return(
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="text-base-100 bg-[#D72050] border-none inline px-3 py-1">Latest</p>
      <Marquee speed={100} pauseOnHover={true} className="space-x-10">
        <Link to={"/news"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, odit.</Link>
        <Link to={"/news"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, odit.</Link>
        <Link to={"/news"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, odit.</Link>
      </Marquee>
    </div>
  );
}
export default LatestNews; 