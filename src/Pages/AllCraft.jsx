import { Link, useLoaderData } from "react-router-dom";



const AllCraft = () => {

    const loaderCrafts = useLoaderData();

    return (
        <div className="container my-[100px]">
            <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text mb-10 border-4  w-fit mx-auto py-2 px-5 ">All Art And Craft Items</h1>

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
                        loaderCrafts.map((craft, idx) => {
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
                                                <button className="btn">View Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
};

export default AllCraft;