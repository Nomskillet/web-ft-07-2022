import React, {useState, useEffect} from 'react'
import Project from './projectManagement/Project'
import AddProject from './projectManagement/AddProject'
import {v4 as uuidv4} from 'uuid'

const ProjectManagement = () => {



  const [projects, setProjects] = useState([])
  
  console.log(projects)

  useEffect(()=>{

    setProjects([

      {
        id: uuidv4(),
        category: 'Front-End',
        title: 'Javascript'
      },
      {
        id: uuidv4(),
        category: 'Back-End',
        title: 'Node'
      },
      {
        id: uuidv4(),
        category: 'Front-End',
        title: 'React'
      }

    ])

  }, [])


  const handleRemoveProject = (id) => {

    let filteredProjects = projects.filter(project=>{
      return id !== project.id
    })

    setProjects(filteredProjects)

  }


  const handleAddProject = (newProjectObj) => {

    setProjects([newProjectObj, ...projects,])

  }


  return (



    <div>
      <h1>ProjectManagement</h1>

      <Project projectsPropsArray={projects} deleteProject={id=>handleRemoveProject(id)} />


      <AddProject addProjectProp={project=>handleAddProject(project)} />


      
      </div>
  )
}






export default ProjectManagement