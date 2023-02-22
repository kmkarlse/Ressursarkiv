import {resources} from "../resources"
import Title from "./Title"
import Link from "./Link"
import { useState } from "react"
import Cat from "./Cat"

export default function Content() {
    const [selectedResource, setSelectedResource] = useState({category: "html", title: "W3Schools", url: "https://www.w3schools.com/html/"})

    const handleButtonClick = (resource) => {
        setSelectedResource(resource)

        
    }

return (
        <div className="container text-center">
            <div className="row">
                <header className="col-6">
                    <h1>Ressursarkiv</h1>
                    <nav>
                        {resources.map((resource, index) => (
                            <button key={index}
                            onClick={() => handleButtonClick(resource)} >
                                {resource.title}
                            </button>
                        ))}
                    </nav>
                </header>
            </div>
            <main className="row">
                <article className="col-6" id="page-container">
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




            