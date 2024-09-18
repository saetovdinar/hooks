import {useState, useEffect} from 'react';


export default function useJsonFetch(url: string) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
  
        setLoading(true);
        try {
        const response = await fetch(url);
        if (!response.ok) { throw new Error(response.statusText); }
        setData(await response.json());
        setError(null);
        } catch (e: any) {setError(e);
        } finally { setLoading(false); }
        };
        fetchData();
    }, []);


    return [{data, loading, error}];
    }