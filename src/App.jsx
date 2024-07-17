import CreateCourse from "./components/CreateCourse"
 import { courseContextProvider } from "./providers/CoursesContextProvider"

const App = () =>{


    return<>
    <courseContextProvider>
    <CreateCourse/>
    </courseContextProvider>
    </>
}

export default App