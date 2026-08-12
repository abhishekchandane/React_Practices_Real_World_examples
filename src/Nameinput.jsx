import { useState } from "react";





function Nameinput (){

    const [name, setName] = useState("");

    return(

        <div className="mb-5">
            <p className="p-1 bg-success text-light">3. Name Input</p>

            <input placeholder="Enter Anything" className="my-2" type="text" value={name} onChange={ (event)=>{setName(event.target.value)} } />

            <h1 className="m-0">{name}</h1>

            <hr />  
        </div>

    )

}



export default Nameinput