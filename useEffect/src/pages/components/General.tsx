import styles from './app.module.css';
import Details from './Details';
import List from './List';
import { useState, useEffect } from 'react';
import { getList, getItem } from '@/pages/api/ServerApi';



export interface notesProp {
  name: string,
  id: string
}



export default function App(): JSX.Element {
  const [lists, setLists] = useState<notesProp[]>([]);
  const [details, setDetails] = useState()
  

  const [hash, setHash] = useState({
    prevID: '',
    
  })
  
  
  useEffect( ()=> {
    getList()
  .then((response) => {
    setLists(response)

  })
  }, [])
  

  const addNoteOnCLick = (event: React.MouseEvent<HTMLParagraphElement>): void => {
    event.preventDefault();

  
    getItem((event.target as HTMLParagraphElement).id)
    .then((response) => {
      if(hash.prevID === (event.target as HTMLParagraphElement).id){
        setHash({
          prevID: (event.target as HTMLParagraphElement).id,
        })
        return
      }
      setHash({
        prevID: (event.target as HTMLParagraphElement).id,
      })
      setDetails(response)


 
    })
 

  }


  return (
    <div className={styles.container}>
      <div>
        {
          lists.map((list) => (
          <List key={list.id} openDetails={addNoteOnCLick} name={list.name} id={list.id} />
        ))
        }
      </div>
     
      {details && <Details data={details} />}
    </div>
  );
}