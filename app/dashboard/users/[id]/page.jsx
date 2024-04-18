import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.png" alt="" fill />
        </div>
        John Cena
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="john cena" />
          <label>Email</label>
          <input type="email" name="email" placeholder="john@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="password" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="999 999 999" />
          <label>Address</label>
          <textarea name="address" id="" placeholder="city"></textarea>
          <label>is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}> Yes</option>
            <option value={false}> No </option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="isActive">
            <option value={true}> Yes</option>
            <option value={false}> No </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
