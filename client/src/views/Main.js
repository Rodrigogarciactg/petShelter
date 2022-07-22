import React, { useEffect, useState } from "react";
import axios from "axios";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";
const Main = (props) => {
  const [pet, setPet] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/").then((res) => {
      setPet(res.data);
    });
  });

  const removeFromDom = (petId) => {
    setPet(pet.filter((pet) => pet._id != petId));
  };

  return (
    <div>
      {/* <PetForm pet={pet} setPet={setPet} /> */}
      <hr />
      <PetList pet={pet} setPet={setPet} removeFromDom={removeFromDom} />
    </div>
  );
};
export default Main;
