import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay } from 'swiper/modules';
import { Typewriter } from "react-simple-typewriter";


const Banner = () => {

    

    return (
        <div className="mt-10 mb-6 md:mb-10">
            <Swiper
                navigation = {true} 
                modules = {[Navigation, Autoplay]}
                loop = {true}
                autoplay = {
                    {delay: 20000}
                }
            >
                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.postimg.cc/DymNQFM9/2148200041.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Unleash Your Creativity with Our <span className="text-red-700">
                        <Typewriter
                            words={['Landscape Painting', 'Portrait Drawing', 'Water-Color Painting', 'Oil Painting', 'Charcoal Sketching', 'Cartoon Drawing']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={200}
                            deleteSpeed={150}
                            delaySpeed={1000}
                        />
                            </span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">Your one-stop destination for handcrafted treasures and DIY delights. Explore our curated collection of art and craft supplies, where creativity knows no bounds. Unleash your imagination today.</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Explore More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.postimg.cc/nLKSVLXD/2147772345.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Unleash Your Creativity with Our <span className="text-red-700">
                        <Typewriter
                            words={['Landscape Painting', 'Portrait Drawing', 'Water-Color Painting', 'Oil Painting', 'Charcoal Sketching', 'Cartoon Drawing']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={200}
                            deleteSpeed={150}
                            delaySpeed={1000}
                        />
                            </span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">Your one-stop destination for handcrafted treasures and DIY delights. Explore our curated collection of art and craft supplies, where creativity knows no bounds. Unleash your imagination today.</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Explore More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.postimg.cc/sfH6gqgw/2148419513.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Unleash Your Creativity with Our <span className="text-red-700">
                        <Typewriter
                            words={['Landscape Painting', 'Portrait Drawing', 'Water-Color Painting', 'Oil Painting', 'Charcoal Sketching', 'Cartoon Drawing']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={200}
                            deleteSpeed={150}
                            delaySpeed={1000}
                        />
                            </span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">Your one-stop destination for handcrafted treasures and DIY delights. Explore our curated collection of art and craft supplies, where creativity knows no bounds. Unleash your imagination today.</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Explore More</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;