import Image from "next/image"
import Link from "next/link"
import { formatDate } from "../helpers"

const CardPost = ({ id, title, description, image, date, cannonicalURL}) => {
    return (
        //<Link href={`${id}`}>
        
        <Link href={`${cannonicalURL}`}>
            <article>
                <Image src={`${image}`} width={400} height={200} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <p>{formatDate(date)}</p>
                    <p>{description}</p>
                </div>
            </article>
        </Link>

    )

}

export default CardPost