import React from 'react'
import TestComponent from './components/TestComponent'

// React Function Component type
const App:React.FC = () => {

    // here I am setting the useState to be type string with the syntax shown. Union also works. Array also works
    const [todo, setTodo] = React.useState<string | number>("")
 
    return (
        <>
        <div>
            Hello World, this is in the tsx only. Okay this is a good starting point for now. Until tomorrow!
        </div>
        <TestComponent/>
        </>
    )
}

export default App