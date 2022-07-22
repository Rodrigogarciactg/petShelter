import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Detail = (props) => {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { removeFromDom } = props;
  const deletePet = (id) => {
    axios
      .delete("http://localhost:8000/api/pets/" + id)
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + id)
      .then((res) => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="top">
        <h1>Pet Shelter</h1>
        <Link className="add" to={"/home"}>
          Back to Home{" "}
        </Link>
      </div>
      <div className="top">
        <h3 className="details">Details about : {pet.petName}</h3>
        <button
          className="adoptbtn"
          onClick={(e) => {
            deletePet(pet._id);
          }}
        >
          Adopt {pet.petName}
        </button>
      </div>
      <div className="body">
        <div className="bodyItems">
          <div className="outputs">
            <div className="type">
              <p className="bold">Pet Type: </p>
              <div className="type2">
                <p>{pet.petType}</p>
              </div>
            </div>
            <div className="des">
              <p className="bold">Description: </p>
              <div className="des2">
                <p>{pet.petDescription}</p>
              </div>
            </div>
            <div className="skills">
              <p className="bold">Skills: </p>
              <div className="skill">
                <p>{pet.petSkill}</p>
                <p>{pet.petSkill2} </p>
                <p>{pet.petSkill3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
