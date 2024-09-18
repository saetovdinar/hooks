import useJsonFetch from '../hook/useJsonFetch'


export default function FirstRequest() {
  // http://localhost:7070/error
  // http://localhost:7070/loading 
  // http://localhost:7070/data 
  const [data] = useJsonFetch('http://localhost:7070/loading')
  console.log(data)
    return (
            <div  >
                {data.loading && <p>Loading...</p>}
              <p >{
                data.error?.message
                }</p>
                 <p >{
                data.data.status
                }</p>
            </div>

          
      
    );
  }