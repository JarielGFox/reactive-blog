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
        // questo AbortController ci permette di stoppare la fetch se serve
        const abortCont = new AbortController();

        // funzione asincrona per il fetch dei dati (utilizziamo async/await)
        const fetchData = async () => {
            // usiamo il blocco try/catch siccome stiamo usando async/await
            try {
                // usiamo l'await per aspettare che si risolva la promise
                const response = await fetch(url, { signal: abortCont.signal });

                // se il response è diverso da ok, lanciamo l'errore
                if (!response.ok) {
                    throw Error('Impossible to fetch data');
                }
                // processiamo il response
                const data = await response.json();

                setData(data);
                setIsPending(false);
                setError(null);
            } catch (err) {
                if (err.name === 'AbortError') {
                    setError('Fetch was cancelled');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            }
        };

        fetchData();
        //cleanup function: viene eseguita quando non ci serve più il componente e cancella la fetch se sta ancora avvenendo
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;