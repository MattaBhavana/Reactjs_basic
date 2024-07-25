import CardUI from './CardUI'
function two() {
    const userObj = {name:"Bhavana", branch:"AIML", Year:"3",college:"SVECW"}
    const users = ["Name1","Name2","Name3","Name4","Name5","Name6","Name7","Name8"]
    return(
        <div style={{display:'flex',flexWrap:'wrap'}}>
           {
            users.map(
                (user, index)=>(<CardUI key = {index}
                    program = {user}
                    user = {userObj}
                    useFromArray={user} />
                    
                )
            )
           }   
        </div>
    );
}
export default two;