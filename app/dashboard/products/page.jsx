import Image from "next/image"
import Link from "next/link"
import styles from "@/app/ui/dashboard/products/products.module.css"


const ProductPage = () => {

  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
          <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
          </Link>         
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Createt At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>
              <div className={styles.product}>
              <Image src="/avatar.png" height={40} width={40}/>
              Laptop
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>$899</td>
            <td>30.09.2024</td>
            <td>available</td>
            <td>
            <Link href="/dashboard/products/singleproduct">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
                 <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

               

        </tbody>
      </table>
    </div>
  )
}

export default ProductPage
