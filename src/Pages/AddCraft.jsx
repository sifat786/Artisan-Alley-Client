

const AddCraft = () => {

    const handleAddPainting = (e) =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const description = form.description.value;

        const newPainting = {
            name,
            price,
            rating,
            time,
            category,
            photo,
            customization,
            stock,
            description,
            };
            console.log(newPainting);
        };

    return (    
        <div className="my-[100px] container">
            <form onSubmit={handleAddPainting} className="border-2 border-indigo-400 py-10 px-14 rounded-xl">
                <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-l from-yellow-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text mb-10">Create New Painting</h1>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="font-rale text-xl ">Name</label>
                            <input type="text" name="name" placeholder="Enter painting name" className="input input-info mt-2 py-[11px] pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3 flex flex-col">
                            <label className="font-rale text-xl">Subcategory Name</label>
                            <select defaultValue='option1' name="category" className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md ">
                                <option value='option1'>Landscape Painting</option>
                                <option>Portrait Drawing</option>
                                <option>Water Color Painting</option>
                                <option>Oil Painting</option>
                                <option>Charcoal Sketching</option>
                                <option>Cartoon Drawing</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">Image</label>
                            <input type="url" name="photo" placeholder="Enter photo url" className="input input-info mt-2 py-[11px] pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">Price</label>
                            <input type="text" name="price" placeholder="Enter painting price" className="input input-info mt-2 py-[11px] pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">customization</label>
                            <select defaultValue='op1' name="customization" className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md ">
                                <option value='op1'>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">Rating</label>
                            <input type="text" name="rating" placeholder="Enter painting rating" className="input input-info mt-2 py-[11px] pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">Processing Time(hr)</label>
                            <input type="text" name="time" placeholder="Enter painting processing time" className="input input-info mt-2 py-[11px] pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">Stock Status</label>
                            <select defaultValue='op1' name="stock" className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md ">
                                <option value='op1'>In stock</option>
                                <option>Made to order</option>
                            </select>
                        </div>

                        <div className="col-span-full">
                            <label className=" font-rale text-xl">Description</label>
                            <textarea name="description" cols="30" rows="10" className="input input-info mt-2 pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>
                        <div className="col-span-full mt-5 flex justify-center lg:justify-end">
                            <input type="submit" value="Add Painting" className='py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] w-full lg:w-auto px-0 lg:px-[100px] cursor-pointer text-2xl font-bold'/>
                        </div>
                    </div>
            </form>
        </div>
    );
};

export default AddCraft;