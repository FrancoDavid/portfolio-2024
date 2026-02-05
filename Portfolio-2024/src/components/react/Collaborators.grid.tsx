import type { ICollaborator } from "../../interfaces/ICollaborator"

import "./Collaborators.grid.style.css"

const CollaboratorsGrid = (props: { collaborators: Array<ICollaborator> }) => {
    const { collaborators } = props

    return (
        collaborators && collaborators?.map((collaborator) => (
            <a key={collaborator.slug} className="collaborator-img__container" href={collaborator.url} target="_blank" rel="noopener noreferrer">
                <img src={collaborator.img} alt={collaborator.alt} width={collaborator.width} height={collaborator.height}/>
            </a>
        )))
}

export default CollaboratorsGrid