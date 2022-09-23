import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = ({projectsPropsArray, deleteProject}) => {
  return (

    <>

    <div className="container">

        <div className="row">
            <div className="col-8 offset-2">

                <ul>
                    {projectsPropsArray.map(projectObj =>{

                        return  <ProjectItem key={projectObj.id} projectObjProp={projectObj} onDelete={deleteProject} />
                    })}

                </ul>
            </div>
        </div>
    </div>
    
    
    </>


  )
}

export default Projects