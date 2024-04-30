import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import landscape from '../assets/Landscape Painting.jpg';
import portrait from '../assets/Portrait Drawing.jpg';
import water from '../assets/Watercolour Painting.jpg';
import oil from '../assets/Oil Painting.jpg';
import coal from '../assets/coal.jpg';
import cartoon from '../assets/Cartoon Drawing.jpg';


const ArtCategory = () => {
        
    return (
        <div className="mt-10 md:mt-[70px] lg:mt-[100px]">
            <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text mb-5 md:mb-10 border-4  w-fit mx-auto py-2 px-5 ">Art and Craft Categories</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 space-y-4 md:space-y-0">

                <div>
                    <img className='object-cover rounded-lg w-[400px] h-[280px]' src={landscape} />
                    <Link to={'/subCategory/Landscape Painting'}>
                        <button className='flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]'>
                            Landscape Painting
                            <FaArrowRightLong/>
                        </button>
                    </Link>
                </div>

                <div>
                    <img className='object-cover rounded-lg w-[400px] h-[280px]' src={portrait} />
                    <Link to={'/subCategory/Portrait Drawing'}>
                        <button className='flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]'>
                            Portrait Drawing
                            <FaArrowRightLong/>
                        </button>
                    </Link>
                </div>

                <div>
                    <img className='object-cover rounded-lg w-[400px] h-[280px]' src={water} />
                    <Link to={'/subCategory/Water Color Painting'}>
                        <button className='flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]'>
                            WaterColor Painting
                            <FaArrowRightLong/>
                        </button>
                    </Link>
                </div>

                <div>
                    <img className='object-cover rounded-lg w-[400px] h-[280px]' src={oil} />
                    <Link to={'/subCategory/Oil Painting'}>
                        <button className='flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]'>
                            Oil Painting
                            <FaArrowRightLong/>
                        </button>
                    </Link>
                </div>

                <div>
                    <img className='object-cover rounded-lg w-[400px] h-[280px]' src={coal} />
                    <Link to={'/subCategory/Charcoal Sketching'}>
                        <button className='flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]'>
                            Charcoal Sketching
                            <FaArrowRightLong/>
                        </button>
                    </Link>
                </div>

                <div>
                    <img className='object-cover rounded-lg w-[400px] h-[280px]' src={cartoon} />
                    <Link to={'/subCategory/Cartoon Drawing'}>
                        <button className='flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]'>
                            Cartoon Drawing
                            <FaArrowRightLong/>
                        </button>
                    </Link>
                </div>

            </div> 
        </div>
    );
};

export default ArtCategory;