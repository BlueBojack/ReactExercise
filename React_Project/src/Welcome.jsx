import Age from "./Age";

const Welcome = ({name = "Missing name", age}) => {
    return(
        <>
          <p>Welcome {name}!</p>
          {age &&<Age age={age} /> }         
        </>
    )
}
export default Welcome;