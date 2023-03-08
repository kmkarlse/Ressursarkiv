import {useParams} from "react-router-dom"

export default function ContentPage({resources}) {
    const {slug} = useParams()
    
    const resource = resources.filter((res) => res.category === slug)
    console.log(resource)

    return (
        <section className="article-box">
            {resource.map((e, index) => (
                <article key={index}>
                    <h2>{e.title}</h2>
                    <p>Source: <a href={e.url}>{e.url}</a></p>
                    <h3>Category: {e.category}</h3>
                </article>
            ))}
        </section>
    )
}