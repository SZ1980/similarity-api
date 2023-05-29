import axios from "axios";
import React from "react";

async function page() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return <div>page login : {JSON.stringify(data)}</div>;
}

export default page;
