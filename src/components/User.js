import { useState } from "react";

const User = ({name , location , contact}) => {
  const [count , setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <button onClick={()=>setCount(count+1)}>IncreaseCount</button>
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : {contact}</h4>
    </div>
  );
};

export default User;
