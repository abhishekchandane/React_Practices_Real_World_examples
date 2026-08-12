import { useState } from "react" 

function Simpleounter(){ 
        const [a,b] = useState(0);
        // console.log(a); 

    return(

        <>

            <div className="mb-5">
                <p className="p-1 bg-success text-light">1. Simple Counter</p>
                <h1> Count : {a}  </h1>

                <button onClick={ ()=> b(a+1) } > + </button>

                <button onClick={ ()=> b(a-1) }> - </button>

                <button onClick={ ()=> b(0) } > Reset </button>

                <hr />

            </div>
        
        </>

    )


}



export default Simpleounter