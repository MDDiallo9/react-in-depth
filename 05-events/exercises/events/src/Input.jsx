function Input(){
    const onInput = (e) => {
        console.log(`[INPUT id=ex1]:${e.target.value}`)
    }
    return (
        <>
        <input type="text" onInput={onInput} />
        </>
    )
}

export default Input