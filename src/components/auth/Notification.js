import styles from '../../styles/pages/auth/Notification.module.scss'

/** Component which returns notifications/error messages */
const Notification = ({ children, type }) => {
    const types = ['success', 'error', 'warning']
    return (
        <div
            className={`${styles.notification} ${
                types.includes(type) ? styles[type] : styles.warning
            }`}>
            <p>{children}</p>
        </div>
    )
}

export default Notification
