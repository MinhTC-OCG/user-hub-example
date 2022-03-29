import { useState, useEffect } from "react";

export default function useFetchAPI(options = {}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, getData] = useState([]);

    // const handleLink = () => {
    //     return (
    //         "https://randomuser.me/api/?" +
    //         (options.page ? options.page : "") +
    //         (options.results ? options.results : "")
    //     );
    // };

    useEffect(() => {
        fetch("https://randomuser.me/api/?", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setIsLoaded(true);
                getData(data.results);
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoaded(true);
                setError(error);
            });
    }, []);
    return { loaded: isLoaded, data: data, error: error };
}
