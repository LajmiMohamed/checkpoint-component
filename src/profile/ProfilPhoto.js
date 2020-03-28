import React from "react";
import photo from "../img/photo.jpg";

const PohtoProfil = () => (
  <div style={{marginLeft:"500px",marginTop:"30px"}}>
    <img
      style={{ height: 350,width: 350, borderRadius: 100}}
      src={photo}
      alt="phtoprofile"
    ></img>
  </div>
);

export default PohtoProfil ;