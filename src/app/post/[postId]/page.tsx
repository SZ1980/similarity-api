import { FC } from "react";

interface pageProps {
  params: {
    postId: string;
  };
}

const page: FC<pageProps> = ({ params }) => {
  return <div>{params.postId}</div>;
};

export default page;
