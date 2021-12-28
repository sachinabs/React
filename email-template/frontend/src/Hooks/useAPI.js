import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAPI({ url }) {

    const [product, setProduuct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        axios.get(url)
        .then((response) => {
            setProduuct(response.data);
            console.log(response.data);
            setLoading(false);
        })
        .catch(error =>{
            setError(error);
        });
    }, [url]);

    return [loading, product, error];
}
