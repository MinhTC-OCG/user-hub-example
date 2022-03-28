import React, { useState, useEffect } from "react";
import styles from "./main.module.css";
import useUserData from "../services/useUserData";
import Table from "../components/Table/Table";

export default function Main() {
    // const [option, setOption] = useState({
    //     seed: "",
    //     page: 1,
    //     size: 1,
    // });
    console.log(process.env.REACT_APP_SEED);
    const users = useUserData(process.env.REACT_APP_SEED, 1, 10);
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.headerText}>User Hub</h1>
            </header>
            <section className={styles.container}>
                {users.map((user) => (
                    <Table data={user} />
                ))}
            </section>
        </div>
    );
}
