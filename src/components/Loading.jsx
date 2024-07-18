import React from 'react'
import styles from './Loading.module.css'

export const Loading = () => {
    return (
        <>
            <svg className={styles.loader} viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </>
    )
}
