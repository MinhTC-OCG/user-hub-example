import React, { useState, useEffect } from "react";
import styles from "./main.module.css";
import Table from "../components/Table/Table";
import axiosConfig from "../services/axiosConfig";

export default function Main() {
    // const users = useUserData(process.env.REACT_APP_SEED, 1, 10);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, getData] = useState([]);

    useEffect(() => {
        // const params = {
        //     seed: process.env.REACT_APP_ENV,
        //     page: 5,
        //     results: 10,
        // };
        axiosConfig
            .get("/?", {
                params: {
                    seed: process.env.REACT_APP_ENV,
                    page: 5,
                    results: 10,
                },
            })
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

    const handleUsers = () => {
        return isLoaded ? (
            <>
                {data.map((user) => (
                    <Table data={user} key={user.login.username} />
                ))}
            </>
        ) : (
            <h1>Loading...</h1>
        );
    };
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.headerText}>User Hub</h1>
            </header>
            <section className={styles.container}>{handleUsers()}</section>
        </div>
    );
}
