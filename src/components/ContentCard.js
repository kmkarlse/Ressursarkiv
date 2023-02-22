

export default function ContentCard({title, ingress}) {
    return (
        <article className="content-card">
            <h3>{title}</h3>
            <p>{ingress}</p>
        </article>
    )
}