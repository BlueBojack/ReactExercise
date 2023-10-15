export function FocusableInput() {

    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current?.focus()
    }, [])

    return (
        <>
            <input type="text" ref={InputRef}></input>
        </>
    )
}