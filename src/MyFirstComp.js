
import MySecondComp from "./MySecondComp"

function MyFirstComp(props) {

console.log(props)

    return(
        <div id="MyFirstComp">
           <h1>My First Component - {props.parent} </h1>
           <MySecondComp data={props.parent} />
        </div>
    )
}

export default MyFirstComp