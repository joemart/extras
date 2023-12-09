import styles from "@/styles/LinearGradient/index.module.scss"
import { useState } from "react"

export default function LinearGradient() {

    const [width, setWidth] = useState<any>(0)
    const maxWidth = 275

    return <main className={styles["main"]}>
        Linear Gradient
        <br />
        Move the gradient with the slide
        <input type="range" min={0} max={maxWidth} onChange={(e) => setWidth(e.target.value)} />

        <svg
            data-position="top-left"
            fill="none"
            // height="51"
            // width="237"
            viewBox="0 0 237 51"

        >
            <path
                stroke="url(#:R4h69rqjlta:)"
                stroke-linecap="round"
                stroke-width="1.2842189902148675"
                d="M0.5 1.5L43 1.5C43.5523 1.5 44 1.94772 44 2.5L44 48.5C44 49.0523 44.4477 49.5 45 49.5L91 49.5C91.5523 49.5 92 49.0523 92 48.5L92 41C92 36.8579 95.3579 33.5 99.5 33.5L236 33.5"></path>
            <defs>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id=":R4h69rqjlta:"
                    x1={width}
                    x2={width - 40}
                    y1={0}
                    y2={0}>
                    <stop stop-color="#3291FF" stop-opacity="0"></stop>
                    <stop stop-color="#3291FF"></stop>
                    <stop offset="1" stop-color="#61DAFB" stop-opacity="0"></stop>
                </linearGradient>
            </defs>
        </svg>

        {/* <svg width="317" height="80" viewBox="0 0 317 80" fill="none">
            <path
                d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"
                stroke="black"
                stroke-opacity="0.2"
            />
            <path
                d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"
                stroke="url(#pulse)"
                stroke-linecap="round"
                stroke-width="2"
            />
            <defs>
                <linearGradient
                    id="pulse"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    x2="0"
                    y1={height2}
                    y2={height2 * 2}
                >
                    <stop stop-color="#2EB9DF" stop-opacity="0" />
                    <stop stop-color="#2EB9DF" />
                    <stop offset="1" stop-color="#9E00FF" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg> */}
    </main>
}
