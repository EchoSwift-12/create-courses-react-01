import { useState } from "react"

const CreateCourse = () => {

    const [courseName, setcourseName] = useState("")
    const [courseDescription, setcourseDescription] = useState("")

    const changeCourseNameInput  = (e) =>{
        setcourseName(e.target.value)
        console.log(courseName)
    }
    const changeCourseDescriptionInput = (e) =>{
        setcourseDescription(e.target.value)
    }

    return <>
        <input type="text" placeholder="Enter Course Name"
            onChange={changeCourseNameInput} />
        <input type="text" placeholder="Enter Course Description" 
        onChange={changeCourseDescriptionInput}/>   
        <p>{courseName}</p>
        <p>{courseDescription}</p>
    </>
}

export default CreateCourse
