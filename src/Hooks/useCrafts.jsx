import { useEffect, useState } from "react";


const useCrafts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch('https://artisan-alley-server-j4rfxbmvn-sifats-projects-19e6a574.vercel.app/crafts');
            const data = await res.json();
            setData(data);
            setLoading(false);
        }

        fetchData();

    }, [])

    return { data, loading };
};

export default useCrafts;