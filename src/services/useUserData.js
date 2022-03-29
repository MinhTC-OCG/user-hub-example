import { useState, useEffect } from "react";
//seed for fetch the same data
//page for paging option
//results for data size
export default function useUserData(seed, page, results) {
    const [data, getData] = useState([]);

    useEffect(() => {
        fetch(
            `https://randomuser.me/api/?&page=${page}&seed=${seed}&results=${results}`,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                getData(data.results);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    return data;
}
