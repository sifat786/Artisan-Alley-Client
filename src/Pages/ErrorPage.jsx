import { Link } from 'react-router-dom';
import error from '../assets/error.svg';
import { FaArrowLeftLong } from 'react-icons/fa6';


const ErrorPage = () => {
    return (
        <div className='mt-[100px] md:mt-10 lg:mt-0'>
            <div className='flex justify-center'>
                <img className='w-auto lg:w-[60%] object-cover' src={error}/>
            </div>
            <div className="rounded-md flex justify-center">
                <Link to={'/'}>
                    <button className="flex items-center gap-2 btn bg-gradient-to-b from-green-600 via-green-400 to-green-200 md:text-xl text-left justify-start">
                        <FaArrowLeftLong/>
                        Back to home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;