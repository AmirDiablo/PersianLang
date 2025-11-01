import { useNavigate } from "react-router-dom";
import { Instructors } from "../assets/assets/dummyData";

const InstructorCard3 = () => {
    const navigate = useNavigate()

    return ( 
        <div className="flex gap-5 mx-5 lg:mx-50 justify-between my-40 overflow-x-auto">

            {Instructors.map(item=> (
                <div onClick={()=> navigate(`/instructors/${item.name}`)} className="relative flex cursor-pointer">
                    <div className="bg-indigo-500/90  rounded-l-2xl h-70 w-20"></div>
                    <img src={item.removedBg} className="w-40 absolute bottom-0 left-0"/>
                    <div className="bg-white h-70 w-20"></div>

                    <div className="absolute bottom-0 w-full h-20 bg-linear-to-b from-red/10 to-indigo-500 flex flex-col justify-end ">
                        <p className="text-white font-[600] -mb-2 px-2">{item.name}</p>
                        <p className="text-gray-300 text-[14px] px-2">Instructor</p>
                    </div>
                </div>
            ))}

        </div>
     );
}
 
export default InstructorCard3;