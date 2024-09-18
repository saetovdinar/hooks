import styles from './details.module.css';
import Image from 'next/image'

interface detailsProps {
  data: {
    id: number
    name: string
    avatar: string
    details: {
        city: string
        company: string
        position: string
    }
  }
}


export default function Details({data}: detailsProps): JSX.Element {


    return (

      <div className={styles.container}>

        <Image src={data.avatar } alt="avatar" width={200} height={200}/>
        <h2>{data?.name}</h2>
        <h3>{data?.details.city}</h3>
        <h3>{data?.details.company}</h3>
        <h3>{data?.details.position}</h3>
        
      </div>

          
      
    );
  }