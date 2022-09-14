import Image from "next/image";
import { formatDate } from "../helpers";

const Single = ({single}) => {
   
    const {title, content, imageURL, createdAt, cannonicalURL} = single
    return(
        <>
            <h1>{title}</h1>
            <Image src={`${imageURL}`} width={400} height={200} alt={title} /> 
            <p>{formatDate(createdAt)}</p> 
            <p>{content}</p>
        </>
    )
}

export default Single;

export async function getServerSideProps( {query}) {
    const {cannonicalURL} = query;
    const url = `http://localhost:1337/api/blogs?filters[cannonicalURL]=${cannonicalURL}`
    const res = await fetch(url)
    const resJson = await res.json() 
    return{
      props: {
          single: resJson.data[0].attributes
      }
    }
    
  }