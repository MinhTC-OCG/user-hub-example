import React from "react";
import styles from "./main.module.css";
import Table from "../components/Table/Table";
import useAxiosAPI from "../services/useAxiosAPI";

export default function Main() {
    // const users = useUserData(process.env.REACT_APP_SEED, 1, 10);
    const { loaded, data } = useAxiosAPI({
        page: 5,
        results: 10,
    });

    const handleUsers = () => {
        return loaded ? (
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
