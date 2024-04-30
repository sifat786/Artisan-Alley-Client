import { FaPaintBrush } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import useCrafts from "../Hooks/useCrafts";
import { Vortex } from "react-loader-spinner";


const SubCategory = () => {

    const loadedData = useLoaderData();
    const {loading} = useCrafts();

    return (
        <div className="my-10 md:my-[70px] lg:my-[100px] container">
            <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text mb-5 lg:mb-10 border-4  w-fit mx-auto py-2 px-5 ">{loadedData[0].category}</h1>

            {
                loading ? 
                    <>
                        <div className="mx-auto flex justify-center my-[100px] items-center">
                            <Vortex
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="vortex-loading"
                                wrapperStyle={{}}
                                wrapperClass="vortex-wrapper"
                                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                            />
                        </div>
                    </>
                :

                    <div className="mt-5 md:mt-[30px] lg:mt-[40px] grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
                        {
                            loadedData.map((i => {
                                const { _id,name, price, rating, category, photo, customization, stock} = i;
                                return (
                                    <div key={_id} className=' relative font-lora'>

                                        <div className='bg-base-300 p-5 rounded-md'>
                                            <img className='w-auto md:w-[338px] lg:w-[420px] h-auto md:h-[180px] lg:h-[250px] rounded-md object-cover mb-5' src={photo} />
                                            <div className='py-1 px-3 bg-red-700 absolute top-[30px] right-[1.75rem] rounded-md'>
                                                <p className='text-[16px] font-medium text-white'>{stock}</p>
                                            </div>
                                            <h5 className='text-[23px] font-bold'>{name}</h5>
                                            <div className='flex font-medium gap-2'>
                                                <FaPaintBrush className='text-xl'/>
                                                <p className='text-base font-medium'>{category}</p>
                                            </div>
                                            <div className='flex justify-end mt-[-45px] mr-2'>
                                                <h6 className='border-2 border-black px-3 w-fit py-1 rounded-lg text-[18px] font-bold '>${price}</h6>
                                            </div>

                                            <div className="flex items-center justify-between my-5">
                                                <p><b>Customization: </b>{customization}</p>
                                                <div className="flex items-center gap-1 mr-2">
                                                    <IoStar/>
                                                    <span>{rating}</span>
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to={`/craftDetails2/${_id}`}>
                                                    <button className="bg-gradient-to-l from-rose-400 to-indigo-500 w-full py-2 px-4 md:py-[9px] md:px-11 text-white md:text-base lg:text-xl font-medium rounded-lg">View Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }))
                        }
                    </div>
            }

        </div>
    );
};

export default SubCategory;