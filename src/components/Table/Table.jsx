import React, { useState, useEffect } from "react";
import styles from "./Table.module.css";

export default function Table(props) {
    return (
        <>
            <div className={styles.tableItem}>
                <h4>FullName: </h4>
                <img src={props.data.picture.thumbnail} alt="avt" />
                <span>
                    {props.data.name.first + " " + props.data.name.last}
                </span>
                <h4>User name: </h4>
                <span>{props.data.login.username}</span>
                <h4>Gender: </h4>
                <span>{props.data.gender}</span>
                <h4>Age: </h4>
                <span>{props.data.dob.age}</span>
                <h4>Phone: </h4>
                <span>{props.data.phone}</span>
                <h4>Email: </h4>
                <span>{props.data.email}</span>
            </div>
            <hr />
        </>
    );
}
