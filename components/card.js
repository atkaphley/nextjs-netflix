import FeaturedImage from './featuredImage'
import Image from 'next/image'
import Link from 'next/link'

const Card  = ({title, featuredImage, slug}) => {
    return <div>
        {featuredImage &&
            <Link href={`/titles/${slug}`}>  
                <a>
                    <FeaturedImage data = {featuredImage} />
                </a>
            </Link>
        }
       
    </div>
}
export default Card