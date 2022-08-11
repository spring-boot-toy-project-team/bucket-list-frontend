import Image from "next/image";
import img from "../../../public/image/BucketList.png"
import styles from "../../../styles/Login.module.css"

const BucketListImage = () => {
  return (
    <div className={styles.imageContainer}>
      <Image src={img}/>
    </div>
  )
}

export default BucketListImage;