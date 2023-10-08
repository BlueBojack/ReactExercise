import Age from "./Age";

const Welcome = ({name = "Missing name", age}) => {
    return(
        <>
          <p>Welcome {name}!</p>
          {(age > 18 && age < 65) && <Age age={age} /> }         
        </>
    )
}
export default Welcome;