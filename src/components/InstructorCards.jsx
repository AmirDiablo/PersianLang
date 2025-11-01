import { Instructors } from "../assets/assets/dummyData";

const InstructorCards = ({Instructor, index}) => {
    return ( 
        <div
        key={index}
        className="rounded-2xl shrink-0 w-[150px] md:w-[200px] flex flex-col gap-2 p-5 border border-black/20"
        >
            <img
            src={Instructor.img}
            className="rounded-full w-20 h-20 aspect-square object-cover mx-auto"
            alt={Instructor.name}
            />
            <div>
                <p className="font-bold text-xl text-center">{Instructor.name}</p>
                <p className="text-center">{Instructor.language} Instructor</p>
            </div>    
        </div>
     );
}
 
export default InstructorCards;