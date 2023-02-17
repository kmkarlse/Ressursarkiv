import {resources} from "../resources"
import Title from "./Title"
import Catagory  from "./Catagory"
import Link from "./Link"
import { useState } from "react"

export default function Content({title,url,category}) {
    const [selectedResource, setSelectedResource] = useState(null)

    const handleButtonClick = (resource) => {
        setSelectedResource(resource)
    }

return (
        <div className="conteiner">
            <header>
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
                            <Catagory category={selectedResource.category} />
                        </>
                    )}
                </article>
            </main>
        </div>
    )
}




            