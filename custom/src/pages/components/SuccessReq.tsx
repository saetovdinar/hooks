import useJsonFetch from '../hook/useJsonFetch'


export default function SuccessReq() {


  const [data] = useJsonFetch('http://localhost:7070/data')
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