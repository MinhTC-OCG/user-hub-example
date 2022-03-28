import React, { useState, useEffect } from "react";
import styles from "./TableItem.module.css";

export default function Table({ title, value, type }) {
    return (
        <div className={styles.item}>
            <h4>FullName: </h4>
            {type === "name" ? <span>avt</span> : ""}
            <span>name</span>
        </div>
    );
}
