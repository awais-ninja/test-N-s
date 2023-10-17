import { useState } from "react";

function GetUser() {
  const [userData, setUserData] = useState([]);
  async function GetUsers() {
    const res = await fetch("http://localhost:4040/get");
    const data = await res.json();

    setUserData([...data]);
  }

  return (
    <div>
      <button onClick={GetUsers}> CLick Here</button>
      <ul>
        {userData.map((item, index) => {
          return <li key={index}> {item} </li>;
        })}
      </ul>
    </div>
  );
}

export default GetUser;
