const Grades = () => {
    const handleClick = (e) => {
        console.dir(e.target.textContent)
    }
    return (
        <>
        <table onClick={handleClick}>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Mark</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Maths</td>
                    <td>75</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>100</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>French</td>
                    <td>100</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>82</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>Sports</td>
                    <td>50</td>
                    <td>F</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Grades