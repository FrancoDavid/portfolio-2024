import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

import type { IProject } from "../../interfaces/IProject"

import "./Projects.grid.style.css"

const ProjectsGrid = (props: { projects: Array<Array<IProject>>, title: string }) => {
    const { projects, title } = props

    const totalPagesProjects = projects?.length - 1;

    const [projectsGrid, setProjectsGrid] = useState<Array<Array<IProject>>>([]);
    const [projectsGrigPage, setProjectsGrigPage] = useState<number>(0)

    const [showMore, setShowMore] = useState<boolean>(false)
    const [showLess, setShowLess] = useState<boolean>(false)

    const titleRef = useRef<HTMLDivElement | null>(null);

    const handleMoreProjects = () => {
        const currentPage = projectsGrigPage + 1;

        setProjectsGrid((prev) => {
            return [...prev, ...[projects[currentPage]]]
        })
        setProjectsGrigPage(currentPage)
        setShowMore(currentPage < totalPagesProjects)
        setShowLess(true)
    }
    const handleLessProjects = () => {
        setProjectsGrid((prev) => {
            return prev.slice(0, prev.length - 1)
        })
        setProjectsGrigPage(projectsGrigPage - 1)
        setShowMore(true)
        setShowLess(projectsGrigPage - 1 > 0)

        titleRef.current && titleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    useEffect(() => {
        setProjectsGrid([projects[projectsGrigPage]])
        setShowMore(totalPagesProjects > 0)
    }, [projects])

    return (
        <>
            <div className="project-container__header" ref={titleRef}>
                <h3 className="hidden">{title}</h3>
            </div>
            <div className="project-grid__container hidden">
                {
                    projectsGrid &&
                    projectsGrid?.map(projects => (

                        projects?.map((project, index) => (
                            <motion.div
                                className="project-card"
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <div className="project-card__header">
                                    <h4>{project.title}</h4>
                                </div>
                                <div className="project-card__content">
                                    <img src={project.image} alt="Carpeta" />
                                </div>
                                <div className="project-card__footer">
                                    <div>
                                        {project && project?.tags.map((tag, index) => (
                                            <img key={index} src={tag} />
                                        ))}
                                    </div>
                                    
                                    {project?.demo && <a href={project?.demo}>DEMO</a>}
                                
                                    <a href={project?.url} target="_blank">
                                        <img src="/imgs/icons8-github-30.png" alt="Github" />
                                    </a>
                                </div>
                            </motion.div>
                        ))
                    ))
                }
            </div>
            <div className="project-grid__more hidden">
                <div>{showLess && <p onClick={handleLessProjects}>Menos...</p>}</div>
                <div>{showMore && <p onClick={handleMoreProjects}>Más...</p>}</div>
            </div>
        </>

    )
}

export default ProjectsGrid