import axios from "axios";
import React from "react";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function page() {
  await wait(4000);
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  throw new Error("not auth!");

  return <div>page login : {JSON.stringify(data)}</div>;
}

export default page;
