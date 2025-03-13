import React from "react";

const UserCard = ({ name, age, hobbies }) => {
  return (
    <>
      <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <h3>Hobbies: </h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserCard;
