import React, { useState, useEffect } from "react";

export default function useCallAPI(
    apiLink,
    seed = "",
    page = "",
    results = ""
) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, getData] = useState([]);

    const [optSeed, setOptSeed] = useState(`&seed=${seed}` || "");

    useEffect(() => {
        fetch(apiLink)
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
    return { loading: isLoaded, data: data, error: error };

    // function SimpleFetch(apiLink) {
    //     const [error, setError] = useState(null);
    //     const [isLoaded, setIsLoaded] = useState(false);
    //     const [data, getData] = useState([]);
    //     useEffect(() => {
    //         fetch(apiLink)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log("Success:", data);
    //                 setIsLoaded(true);
    //                 getData(data.results);
    //             })
    //             .catch((error) => {
    //                 console.error("Error:", error);
    //                 setIsLoaded(true);
    //                 setError(error);
    //             });
    //     }, []);
    //     return { loading: isLoaded, data: data, error: error };
    // }
    // function RamdomUserFetch(apiLink, seed, page, results) {
    //     const [error, setError] = useState(null);
    //     const [isLoaded, setIsLoaded] = useState(false);
    //     const [data, getData] = useState([]);
    //     useEffect(() => {
    //         fetch(
    //             `${apiLink}?
    //         ${page ? `&page=${page}` : ""}
    //         ${results ? `&results=${results}` : ""}
    //         ${seed ? `&seed=${seed}` : ""}`
    //         )
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log("Success:", data);
    //                 setIsLoaded(true);
    //                 getData(data.results);
    //             })
    //             .catch((error) => {
    //                 console.error("Error:", error);
    //                 setIsLoaded(true);
    //                 setError(error);
    //             });
    //     }, []);
    //     return { loading: isLoaded, data: data, error: error };
    // }
}
