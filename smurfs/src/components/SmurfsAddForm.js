import React, { useState } from "react";
import axios from "axios";

const SmurfsAddForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(smurf);
    //Add Post service
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
    setSmurf({
      name: "",
      age: "",
      height: ""
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={smurf.name}
        name="name"
        placeholder="Name for Smurf"
        onChange={handleChanges}
      />
      <input
        type="text"
        value={smurf.age}
        name="age"
        placeholder="Age for Smurf"
        onChange={handleChanges}
      />
      <input
        type="text"
        value={smurf.height}
        name="height"
        placeholder="Height for Smurf"
        onChange={handleChanges}
      />
      <button>Add</button>
    </form>
  );
};

export default SmurfsAddForm;
