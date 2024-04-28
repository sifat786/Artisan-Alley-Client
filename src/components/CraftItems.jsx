
import  PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';
import { FaPaintBrush } from "react-icons/fa";


const CraftItems = ({loadedCrafts}) => {

    return (
        <div className="mt-[100px]">
            <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">Painting and Drawing</h1>
            <p className="mb-10 md:py-2 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base font-medium">Explore our website&apos;s painting and drawing section for a diverse array of artistic expressions, from vibrant landscapes to intricate charcoal sketches.</p>

            <div className='mt-5 md:mt-[30px] lg:mt-[40px] grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 space-y-4 md:space-y-0'>
                {   loadedCrafts?.map(craft => {

                    const { _id,name,price,category,photo,stock } = craft;
                    
                    return (
                        <div key={_id} className='w-auto md:w-[338px] lg:w-[395px] relative font-lora'>

                                            <div className='bg-base-300 p-5 rounded-xl'>
                                                <img className='w-auto md:w-[338px] lg:w-[420px] h-auto md:h-[180px] lg:h-[250px] rounded-xl object-cover mb-5' src={photo} />
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

                                                <div className='text-center mt-8'>
                                                    <Link>
                                                        <button className="bg-gradient-to-l from-rose-400 to-indigo-500 w-full py-2 px-4 md:py-[9px] md:px-11 text-white md:text-base lg:text-xl font-medium rounded-lg">View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default CraftItems;

CraftItems.propTypes = {
    loadedCrafts: PropTypes.array
}