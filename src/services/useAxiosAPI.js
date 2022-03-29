import axios from "axios";
import { useState, useEffect } from "react";

export default function useAxiosAPI(options = {}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, getData] = useState([]);

    useEffect(() => {
        axios
            .get("https://randomuser.me/api/?", { params: options })
            .then((response) => {
                console.log("Success:", response.data);
                setIsLoaded(true);
                getData(response.data.results);
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoaded(true);
                setError(error);
            });
    }, []);
    return { loaded: isLoaded, data: data, error: error };
}
