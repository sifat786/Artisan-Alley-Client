import { useEffect, useState } from "react";


const useCrafts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch('https://artisan-alley-server-rose.vercel.app/crafts');
            const data = await res.json();
            setData(data);
            setLoading(false);
        }

        fetchData();

    }, [])

    return { data, loading };
};

export default useCrafts;