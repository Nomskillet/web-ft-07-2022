import React from 'react'

const ProjectItem = ({projectObjProp, onDelete}) => {
  return (
    <>
    
    <li>
        <div className="row">
            <div className="col-8">
                {projectObjProp.title}
                &nbsp;  &nbsp;

                {projectObjProp.category}

            </div>
            <div className="col-4">

                <a href="#" onClick={()=>onDelete(projectObjProp.id)}>X</a>
            </div>
        </div>
    </li>
    </>
  )
}

export default ProjectItem