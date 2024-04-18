import Image from "next/image"
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Status</td>
                <td>Date</td>
                <td>Amount</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                        John Cena
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.pending}`}>
                        Pending
                    </span>
                </td>
                <td>14.02.2024</td>
                <td>$999</td>
            </tr>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                        Brock Lesner
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.pending}`}>
                        Pending
                    </span>
                </td>
                <td>11.12.2021</td>
                <td>$789</td>
            </tr>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                        Undertaker
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.done}`}>
                        Done
                    </span>
                </td>
                <td>05.02.2025</td>
                <td>$451</td>
            </tr>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                        Seth Rollins
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.cancel}`}>
                        Cancelled
                    </span>
                </td>
                <td>16.05.2023</td>
                <td>$399</td>
            </tr>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}/>
                        Drew Mcintyre
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.done}`}>
                        Done
                    </span>
                </td>
                <td>29.07.2024</td>
                <td>$899</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
