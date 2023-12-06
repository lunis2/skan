import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./InvalidPage.module.scss";

export default function ErrorPage() {
    return (
        <>

            <Header/>
            <main className={styles.content}>
                <h1>Тут ничего не найдено.</h1>
            </main>
            <Footer/>
        </>
);
}