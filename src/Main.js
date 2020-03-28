import React from "react";
import PohtoProfil  from "./profile/ProfilPhoto";
import FullName from "./profile/name";
import Adress from "./profile/adresse"
const Main = props => {
  return (
    <React.Fragment>
      <PohtoProfil  />
      <FullName />
   <Adress />
    </React.Fragment>
  );
};

export default Main;