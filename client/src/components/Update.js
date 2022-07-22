import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
  const { id } = useParams();
  const [petName, setPetName] = useState();
  const [petType, setPetType] = useState();
  const [petDescription, setPetDescription] = useState();
  const [petSkill, setPetSkill] = useState();
  const [petSkill2, setPetSkill2] = useState();
  const [petSkill3, setPetSkill3] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + id)
      .then((res) => {
        setPetName(res.data.petName);
        setPetType(res.data.petType);
        setPetDescription(res.data.petDescription);
        setPetSkill(res.data.petSkill);
        setPetSkill2(res.data.petSkill2);
        setPetSkill3(res.data.petSkill3);
      })
      .catch((err) => console.log(err));
  }, []);

  const updatePet = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/pets/" + id, {
        petName,
        petType,
        petDescription,
        petSkill,
        petSkill2,
        petSkill3,
      })
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className="top">
          <h1>Pet Shelter</h1>
          <Link className="add" to={"/home"}>
            Back to Home{" "}
          </Link>
        </div>
        <div>
          <h3>Edit {petName}</h3>
        </div>
        <form onSubmit={updatePet}>
          <div className="test1">
            <p className="mb-3">
              <label> Pet Name:</label>
              <br />
              <input
                type="text"
                name="petName"
                value={petName}
                onChange={(e) => {
                  setPetName(e.target.value);
                }}
              />
            </p>
            <p className="mb-3">
              <label htmlFor=""> Pet Type:</label>
              <br />
              <input
                type="text"
                name="petType"
                value={petType}
                onChange={(e) => {
                  setPetType(e.target.value);
                }}
              />
            </p>
            <p className="mb-3">
              <label> Pet Description:</label>
              <br />
              <input
                type="text"
                name="petDescription"
                value={petDescription}
                onChange={(e) => {
                  setPetDescription(e.target.value);
                }}
              />
            </p>
            <p className="mb-3">
              <label> Pet Skill 1:</label>
              <br />
              <input
                type="text"
                name="petSkill"
                value={petSkill}
                onChange={(e) => {
                  setPetSkill(e.target.value);
                }}
              />
            </p>
            <p className="mb-3">
              <label> Pet Skill 2:</label>
              <br />
              <input
                type="text"
                name="petSkill2"
                value={petSkill2}
                onChange={(e) => {
                  setPetSkill2(e.target.value);
                }}
              />
            </p>
            <p className="mb-3">
              <label> Pet Skill 3:</label>
              <br />
              <input
                type="text"
                name="petSkill3"
                value={petSkill3}
                onChange={(e) => {
                  setPetSkill3(e.target.value);
                }}
              />
            </p>
            <input className="editbtn" type="submit" value="Edit Pet" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
