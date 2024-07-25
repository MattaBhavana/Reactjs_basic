function CardUI (props){

    return(

<div className="card" style={{width:'350px'}}>
    <img src = "/image.png"alt=" " width = {100}
    style = {{border:'5px solid black',borderRadius:'200px'}}></img>
    <div class="card-body">
    <h3>{props.program}</h3>
    <h3>{props.user.branch}</h3>
    <h3>{props.user.Year}</h3>
    <h3>{props.user.college}</h3>
    <button type="button" className="btn btn-primary">Connect</button>
</div>
</div>
    );
}





export default CardUI;