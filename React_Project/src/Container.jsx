import "./Container.css"

const Container = ({children, title}) => {
    return (
        <>
            <div className="container">
                <div>{title}</div>
                {children}
            </div>
        </>
    )
}

export default  Container