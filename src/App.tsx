import * as React from 'react'

// forces name as a type string, can never be changed from a string, will give an error
let name: string;
// likewise with this as well
let age: number;

const App = () => {
    return (
        <div>
            Hello World, this is in the tsx only. Okay this is a good starting point for now. Until tomorrow!
        </div>
    )
}

export default App