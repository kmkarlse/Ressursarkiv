import {resources} from "../resources"
import Title from "./Title"
import Link from "./Link"
import { useState } from "react"
import Cat from "./Cat"

export default function Content({button, title,  cat, Catagory}) {
    const [selectedResource, setSelectedResource] = useState(null)

    const handleButtonClick = (resource) => {
        setSelectedResource(resource)
    }

return (
        <div className="conteiner">
            <header>
                <h1>Ressursarkiv</h1>
                <nav>
                    {resources.map((resource, index) => (
                        <button key={index} onClick={() => handleButtonClick(resource)} >{resource.title}</button>
                    ))}
                </nav>
            </header>
            <main>
                <article>
                    {selectedResource && (
                        <>
                            <Title title={selectedResource.title} /> 
                            <Link url={selectedResource.url} />
                            <Cat cat={selectedResource.category}/>
                        </>
                    )}
                </article>
            </main>
        </div>
    )
}




            