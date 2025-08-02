import React from "react";
import { useEffect } from "react";

function Github() {
    // fetching data
    const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Aayush251105")
    .then((response) => response.json())
    .then(data => {
        // console.log(data);
        setData(data);
    })
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github    followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
    // fetching data from url
  );
}

export default Github;
