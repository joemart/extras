import styles from "@/styles/Navbar/index.module.scss"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

    const [burger, setBurger] = useState(false)

    const arr = [
        { text: "Linear gradient SVG lines", link: "/LinearGradient" },
        { text: "Carousel", link: "/Carousel" }
    ]

    return <section className={styles["section"]}>
        <Link href="/" className={styles["link"]}>Home</Link>
        <div className={styles["projects"]} onClick={() => setBurger(!burger)}>Projects</div>
        <ul className={`${styles["list"]} ${burger ? "" : styles["list_open"]} `}>
            {arr.map((v, i) => <Link className={styles["link"]} href={v.link} key={i}>{v.text}</Link>)}
        </ul>
    </section>
}