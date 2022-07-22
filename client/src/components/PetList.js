import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
const PetList = (props) => {
  const { removeFromDom, pet, setPet } = props;
  const deletePet = (petID) => {
    axios
      .delete("http://localhost:8000/api/pets/" + petID)
      .then((res) => {
        removeFromDom(petID);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="top">
        <h1>Pet Shelter</h1>
        <Link className="add" to={"/pets/new"}>
          Add a pet to the shelter
        </Link>
      </div>
      <div>
        <h3>These pets are looking for a good home</h3>
      </div>
      {pet.map((pet, index) => {
        return (
          <div key={index}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr">
                  <td>{pet.petName}</td>
                  <td>{pet.petType}</td>
                  <td>
                    {" "}
                    <Link className="tabs" to={"/pets/" + pet._id}>
                      {" "}
                      Details
                    </Link>
                    |
                    <div className="btnContainer">
                      <Link className="btn" to={"/pets/edit/" + pet._id}>
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* {pet.petName}, {pet.petType}, */}
            {/* <Link className="tabs" to={"/pets/" + pet._id}>
              {" "}
              Details
            </Link>
            <div className="btnContainer">
              <Link className="btn" to={"/pets/edit/" + pet._id}>
                Edit
              </Link>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default PetList;
