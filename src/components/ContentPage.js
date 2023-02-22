import {useParams} from "react-router-dom"

export default function ContentPage({resources}) {
    const {slug} = useParams()
    
    const resource = resources.filter((res) => res.category === slug)
    console.log(resource)

    return (
        <>
            {resource.map((e, index) => (
                <section key={index}>
                    <h1>{e.title}</h1>
                    <a href={e.url}>{e.url}</a>
                    <h3>{e.category}</h3>
                </section>
            ))}
        </>
    )
}