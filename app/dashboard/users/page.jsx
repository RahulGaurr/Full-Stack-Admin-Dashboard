import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/users/users.module.css"


const UserPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.top}>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton} >Add New</button>
           </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/avatar.png" width={40} height={40} alt="icon" className={styles.userImage} />
                John Cena
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>01.09.1992</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
            <button className={`${styles.button} ${styles.view}`}>View</button>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/avatar.png" width={40} height={40} alt="icon" className={styles.userImage}/>
                Triple H
              </div>
            </td>
            <td>tripleh@gmail.com</td>
            <td>04.03.1994</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
            <button className={`${styles.button} ${styles.view}`}>View</button>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/avatar.png" width={40} height={40} alt="icon" className={styles.userImage}/>
                Rock
              </div>
            </td>
            <td>Rock@gmail.com</td>
            <td>07.06.1991</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
            <button className={`${styles.button} ${styles.view}`}>View</button>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/avatar.png" width={40} height={40} alt="icon" className={styles.userImage}/>
                Cody Rhodes
              </div>
            </td>
            <td>cody@gmail.com</td>
            <td>08.10.1999</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
            <button className={`${styles.button} ${styles.view}`}>View</button>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/avatar.png" width={40} height={40} alt="icon" className={styles.userImage}/>
                Roman Reigns
              </div>
            </td>
            <td>roman@gmail.com</td>
            <td>20.05.1998</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
            <button className={`${styles.button} ${styles.view}`}>View</button>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )

};

export default UserPage;
