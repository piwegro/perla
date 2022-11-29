import styles from '../../styles/pages/user/AcceptedCurrencies.module.scss'

const AcceptedCurrencies = ({ currencies }) => {
    return (
        <div className={styles.listOfCurrencies}>
            {currencies.map(currency => (
                <div className={styles.currency} key={currency.symbol}>
                    <span>{currency.name}</span>
                    <span>{currency.symbol}</span>
                </div>
            ))}
        </div>
    )
}

export default AcceptedCurrencies
