import { ICardProps } from "./types";
import styles from "./styles.module.css"

export default function Card({children}: ICardProps) {
    return (
        <div className={styles.cardContainer}>
            {children}
        </div>
    )
}