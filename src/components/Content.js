import {resources} from "../resources"

export default function Content({title,url,category}) {
return (
        <main>
            {resources.map((ressurs) => (
                <Content title={ressurs.title} url={ressurs.url} category={ressurs.category} />
            ))}
        </main>
    )
}