import Swal from "sweetalert2";


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

        const newCrafts = {name,price,rating,time,category,photo,customization,stock,description};
        console.log(newCrafts);

        //! data send to server:
        fetch('http://localhost:5000/crafts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCrafts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Painting added successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
            form.reset();
        })
        .catch(err => console.log(err))
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
                            <select name="category" className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md ">
                                <option>Landscape Painting</option>
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
                            <input type="number" name="price" placeholder="Enter painting price" className="input input-info mt-2 py-[11px] pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">customization</label>
                            <select name="customization" className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md ">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">Rating</label>
                            <input type="text" name="rating" placeholder="Enter painting rating" className="input input-info mt-2 py-[11px] pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">Processing Time(hr)</label>
                            <input type="number" name="time" placeholder="Enter painting processing time" className="input input-info mt-2 py-[11px] pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className=" font-rale text-xl">Stock Status</label>
                            <select name="stock" className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md ">
                                <option>In stock</option>
                                <option>Made to order</option>
                            </select>
                        </div>

                        <div className="col-span-full">
                            <label className=" font-rale text-xl">Description</label>
                            <textarea name="description" cols="30" rows="10" className="input input-info mt-2 pl-[11px]  text-opacity-60 text-base w-full font-rale rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>
                        <div className="col-span-full mt-5 flex justify-center lg:justify-end">
                            <input type="submit" value="Add Painting" className='py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] w-full lg:w-auto px-0 lg:px-[100px] cursor-pointer text-black text-2xl font-bold'/>
                        </div>
                    </div>
            </form>
        </div>
    );
};

export default AddCraft;