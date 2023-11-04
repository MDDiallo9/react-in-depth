import albumImage from "./../public/spdgar.jpg"

function Card(){
    let url = "./public/spdgar.jpg"
    return (
      <div className="card">
      <img src={albumImage} alt="" />
      <h2>SPD-GAR-002</h2>
      <p>Album</p>
      </div>
    )
  }

export default Card