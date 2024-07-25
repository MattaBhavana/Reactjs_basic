import { useRef } from "react";

function Five() {
    //to get control over something that is happend to element
    const firstRef = useRef(null);
    const formSubmitted = (event)=>{
        //prevent the form from refreshing
        event.preventDefault();
        console.log("Form Submitted");
        console.log(firstRef.current.value);
        firstRef.current.value=''; //clear value
        
    }
    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type = "text" ref= {firstRef}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Five;