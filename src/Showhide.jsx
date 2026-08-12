import { useState } from "react";






function Showhide(){

    const [ a,b ] = useState(true);

    return(

        <>

            <div className="mb-5">
                <p className="p-1 bg-success text-light">2. Show / Hide</p> 
                <h1></h1>


                <h1 className="btn btn-primary m-0" onClick={ ()=> b(!a) } >
                 Click Me To :    {a ? "Hide" : "Show"}
                </h1>

                {  a &&  <h1 className="my-2">This is My Paragraph</h1> }    


                <hr />  
            </div>  
        </>

    )


}



export default Showhide