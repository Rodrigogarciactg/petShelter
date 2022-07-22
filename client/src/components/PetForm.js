import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
const PetForm = (props) => {
  const { pet, setPet } = props;
  // const { id } = useParams();
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petSkill, setPetSkill] = useState("");
  const [petSkill2, setPetSkill2] = useState("");
  const [petSkill3, setPetSkill3] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pets", {
        petName,
        petType,
        petDescription,
        petSkill,
        petSkill2,
        petSkill3,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/home");
        setPet([...pet, res.data]);
        setPetName("");
        setPetType("");
        setPetDescription("");
        setPetSkill("");
        setPetSkill2("");
        setPetSkill3("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="top">
        <h1>Pet Shelter</h1>
        <Link className="" to={"/home"}>
          Back to Home{" "}
        </Link>
      </div>
      <div>
        <h3>Know a pet needing a home?</h3>
      </div>
      <>
        <Form onSubmit={onSubmitHandler}>
          <div className="test">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Pet Name:</Form.Label>
              <Form.Control
                className="input"
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                required
              />
              {petName.length < 3 && petName.length > 0 ? (
                <p>Pet Name must be at least 3 characters</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Pet Type:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPetType(e.target.value)}
                value={petType}
                required
              />
              {petType.length < 3 && petType.length > 0 ? (
                <p>Pet Type must be at least 3 characters</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Pet Description:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPetDescription(e.target.value)}
                value={petDescription}
                required
              />
              {petDescription.length < 3 && petDescription.length > 0 ? (
                <p>Pet Description must be at least 3 characters</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Skill 1:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPetSkill(e.target.value)}
                value={petSkill}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Skill 2:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPetSkill2(e.target.value)}
                value={petSkill2}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Skill 3:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPetSkill3(e.target.value)}
                value={petSkill3}
              />
            </Form.Group>
          </div>
          <input className="addbtn" type="submit" value="Add Pet" />
        </Form>
        {/* </div> */}
      </>
    </div>
  );
};

export default PetForm;
