import { useState } from "react"
import "./Container.css"

const Container = ({children, title}) => {
    const[hide, setHide] = useState(true)

    const hideHandle = () => {
        setHide((t) => !t);
      };

      return (
        <div className="container">
          <div className="container-btn">
            <button onClick={hideHandle}>Toggle</button>
          </div>
          {hide && (
            <>
              <div className="container-title">{title}</div>
              <div className="container-content">{children}</div>
            </>
          )}
        </div>
      );
    }

export default  Container