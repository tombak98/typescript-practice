import React from 'react'
import InputField from './components/InputField'
import TestComponent from './components/TestComponent'

// React Function Component type
const App:React.FC = () => {

    // here I am setting the useState to be type string with the syntax shown. Union | also works inside the brackets. 
    // Array also works
    const [todo, setTodo] = React.useState<string>("")
 
    return (
        <>
        <div>
            Hello World, this is in the tsx only. Okay this is a good starting point for now. Until tomorrow!
        </div>
        <TestComponent/>
        {/* When we give something attributes or props, we need to make sure in the component itself that it is defined */}
        <InputField todo={todo} setTodo={setTodo}/>
        </>
    )
}

export default App