function Cars(){
    const cars = ["BMW","Ferrari","Subaru","Nissan","KIA"]

    return (
        <>
        {cars.map((item) => <p>{item}</p>)}
        </>
    )
}


export default Cars