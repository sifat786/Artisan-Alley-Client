import { Link } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import useCrafts from "../Hooks/useCrafts";



const AllCraft = () => {

    const {data, loading} = useCrafts();

    return (
        <div className="container my-[100px]">
            <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-l from-yellow-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text mb-10 border-4  w-fit mx-auto py-2 px-5 ">All Art And Craft Items</h1>

            {
                loading ?

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
                :
                    <div className="container overflow-x-auto mb-12">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-blue-500">
                                    <th>NO</th>
                                    <th>CATEGORY NAME</th>
                                    <th>PRICE</th>
                                    <th>TIME</th>
                                    <th>RATING</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            {
                                data.map((craft, idx) => {
                                    const { _id,price,rating,time,category } = craft;
                                    return (
                                        <tbody key={_id}>
                                            <tr>
                                                <th>{idx + 1}</th>
                                                <td>{category}</td>
                                                <td>{price}</td>
                                                <td>{time}</td>
                                                <td>{rating}</td>
                                                <td>
                                                    <Link to={`/craftDetails/${_id}`}>
                                                        <button className="btn bg-gradient-to-tr from-purple-300 to-pink-300 text-black font-black">View Details</button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                    </div>
            }

        </div>
    );
};

export default AllCraft;