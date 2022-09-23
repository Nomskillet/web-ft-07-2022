import React, {useState, useEffect} from 'react'
import Projects from './projectManagement/Projects'
import AddProject from './projectManagement/AddProject'
import {v4 as uuidv4} from 'uuid'

const ProjectManagement = () => {


  const [projects, setProjects] = useState([])  // [{}, {}, {}]

  console.log(projects);

  //callback will run once 
  //componentDidMount
  useEffect(() => {
    
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

    setProjects(filteredProjects)  //reseting our state with project removed

  }

  const handleAddProject = (newProjectObj) => {

    setProjects([newProjectObj, ...projects])
    
  }
  
  return (

    <>
    <h1>Project Management</h1>


    <Projects projectsPropsArray={projects} deleteProject={id=>handleRemoveProject(id)} />

    <AddProject addProjectProp={project=>handleAddProject(project)} />


    </>
  )
}

export default ProjectManagement


// const outer = (id) => handleRemoveProject(id)


// setProject = () => {
  
//   this.setState({
//     project: projects
//   })
// }