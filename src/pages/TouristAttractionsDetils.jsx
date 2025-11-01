import { useLocation, useParams } from "react-router-dom";
import { dummyTouristAttraction } from "../assets/assets/dummyData";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const TouristAttractionsDetails = () => {
    const [attractionData, setAttractionData] = useState([])
    const [imgIndex, setImgIndex] = useState(0)
    const {name} = useParams()

    console.log(name)

    useEffect(()=> {
        const foundData = dummyTouristAttraction.filter(item=> item.name == name)
        setAttractionData(foundData)
    }, [])

    return ( 
        <div className="mt-30 px-5 lg:px-20 lg:mt-40">
            {attractionData.map(item=> (
                <div className="lg:flex lg:flex-row lg:gap-10">
                    <img className=" rounded-2xl w-full lg:w-[60%] lg:min-w-[60%]" src={item.img[imgIndex]} />
                    
                    <div>
                        <div className="flex items-center mt-5 gap-2 overflow-x-auto">
                            {item.img.map((i, index)=> (
                                <img src={i} onClick={()=> setImgIndex(index)} className={`object-cover rounded-2xl size-30 cursor-pointer ${imgIndex == index ? "opacity-50" : ""}`} />
                            ))}
                        </div>
                        
                        <p className="flex items-center gap-2 mt-5">
                            <span className="flex-none w-5 h-5 self-start">
                                <FaLocationDot className="w-full h-full text-red-500 fill-red-500" />
                            </span> {item.location}
                        </p>

                        <p className="mt-5">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default TouristAttractionsDetails;