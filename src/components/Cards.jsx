import { useNavigate } from "react-router-dom";
import logo from "../assets/UniLogo.png"
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Cards = ({photo, name, location}) => {
    const navigate = useNavigate()

    return ( 
        <div className="flex flex-col justify-between p-3 shadow-2xl rounded-2xl hover:-translate-y-1 transition duration-300 w-66">
            <img onClick={()=> {navigate(`/touristAttractions/${name}`); scrollTo(0,0)}} src={photo[0]} alt="thumbnail" className="rounded-lg h-52 w-full object-cover object-bottom-right cursor-pointer" />

            <p className="font-semibold mt-2 truncate">{name}</p>

            <div className="flex items-center justify-between mt-4 pb-3">
                <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
                    <span className="flex-none w-4 h-4 self-start">
                        <FaLocationDot className="w-full h-full text-red-500 fill-red-500" />
                    </span>
                    {location}
                </p>
            </div>
        </div>
     );
}
 
export default Cards;