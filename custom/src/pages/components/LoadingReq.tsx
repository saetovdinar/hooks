import useJsonFetch from '../hook/useJsonFetch'


export default function ErrorReq() {



  const [data] = useJsonFetch('http://localhost:7070/loading')
  console.log(data)
    return (
            <div  >
                {data.loading && <p>Loading...</p>}
              <p >{
                data.error?.message
                }</p>
                 <p >{
                data.data?.status
                }</p>
            </div>

          
      
    );
  }