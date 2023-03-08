import { Link } from 'react-router-dom';
import ContentCard from './ContentCard'
export default function Main({resources}) {

    const cat = resources.map((e) => e.category)
    const res = [...new Set(cat)]
return (
    <>
        {res.map((resource, index) => (
            <Link className='button' key={index} to={resource} >
                <ContentCard title={resource}/>
            </Link>
        ))}
    </>
)
}
