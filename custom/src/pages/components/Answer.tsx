import useJsonFetch from '../hook/useJsonFetch'


export default function SuccessReq({url}: {url:string}) {


  const [data] = useJsonFetch(url)
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