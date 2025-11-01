import Cards from "./Cards";
import { dummyTouristAttraction } from "../assets/assets/dummyData";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Locations = () => {
    const navigate = useNavigate()
    
    return ( 
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden mb-30">

            <div className="relative flex items-center justify-between pt-20 pb-10">
                <p className="text-blue-700 font-medium text-lg">Tourist attractions</p>
                <button onClick={()=> {navigate("/touristAttractions"), scrollTo(0,0)}} className="group cursor-pointer flex items-center gap-2 text-sm text-blue-700">
                    View All <FaArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5"/>
                </button>
            </div>

            <div className="flex flex-wrap max-sm:justify-between gap-8 mt-8 *:mx-auto">
                {dummyTouristAttraction.slice(0, 4).map(item=> (
                    <Cards name={item.name} photo={item.img} location={item.location}  />
                ))}
            </div>

        </div>
     );
    
}
 
export default Locations;