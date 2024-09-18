import styles from './list.module.css'

interface listProps {
  name: string
  id: string
  openDetails: (event: React.MouseEvent<HTMLParagraphElement>) => void
}


export default function List({name, id, openDetails}: listProps): JSX.Element {

    return (
      <div  className={styles.container}>
        <p id={id} onClick={openDetails} className={styles.text}>{name}</p>
      </div>
    );
  }