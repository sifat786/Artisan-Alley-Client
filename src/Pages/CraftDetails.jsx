import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import { FaPaintBrush, FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";



const CraftDetails = () => {

    const loadedCraftDetails = useLoaderData();

    const { name,price,rating,time,category,photo,customization,stock,description} = loadedCraftDetails;

    return (
        <div className="container my-[100px] mb-5 lg:my-[70px] lg:pt-1 flex flex-col justify-center items-center">
            <Helmet>
                <title>{name}</title>
            </Helmet>

            <h3 className='text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-l from-yellow-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text'>{name} Details</h3>

            <div className="rounded-[5px] border border-neutral-200 p-[15px] md:p-[20px] lg:p-[30px] mt-2 md:mt-8">
                <img className='w-auto h-auto md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[420px] rounded-[5px]' src={photo} />

                <div className="flex items-center p-2 md:p-4 w-[300px] md:w-[600px] lg:w-[800px]">
                        <Marquee speed={100} pauseOnHover={true}>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stock}</p>
                        </Marquee>
                </div>

                <div>
                    <h3 className='text-[17px] md:text-[20px] lg:text-[25px] font-semibold lg:font-bold '>{name}</h3>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2 mb-2'>
                            <FaPaintBrush className='text-xl'/>
                            <p className='text-sm md:text-[18px] my-1 font-semibold'>{category}</p>
                        </div>
                        <p className='mt-[-30px] md:mt-[-40px] lg:mt-[-50px] md:mr-4 rounded-md text-base font-medium bg-black text-white pt-[4px] pb-[3px] px-3'>$ {price}</p>
                    </div>
                    <p className='text-sm md:text-base font-normal md:w-[600px] lg:w-[800px]'><b>Description : </b>{description}</p>
                    <p className='text-sm md:text-base font-semibold my-1'><b>Customization : </b>{customization}</p>

                    <div className='flex py-1 w-full bg-black items-center justify-between rounded-md mt-5 gap-10'>
                        <p className='text-base font-medium text-white ml-5'><b>Time : </b> {time} hr</p>
                        <div className='flex items-center gap-2 text-white mr-5'>
                            <FaRegStar className='text-[18px]'/>
                            <p className='mb-[-2px] '>{rating}</p>
                        </div>
                    </div> 
                    
                </div>

            </div>
        </div>
    );
};

export default CraftDetails;