// questo file è un custom hook
import { useState, useEffect } from "react";
// in react i custom hook devono iniziare con la keyword "use"

const useFetch = (url) => {
    // vari useState che ci permettono di interagire

    // questo prende i dati dal server 
    const [data, setData] = useState(null);
    // questo permette che si visualizzi il loading message
    const [isPending, setIsPending] = useState(true);
    // questo per gestire i messaggi di errore
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error('Impossible to fetch data');
                }
                return response.json()
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err => {
                setIsPending(false);
                setError(err.message);
            }))
    }, [url])

    return { data, isPending, error }
}

export default useFetch;