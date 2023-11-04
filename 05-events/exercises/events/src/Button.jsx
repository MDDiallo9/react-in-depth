function Button(){
    function clicked(msg){
        console.log(msg)
    }
    return (
        <>
        <button onClick={() => clicked("test")}>Click Me!</button>
        </>
    )
}

export default Button