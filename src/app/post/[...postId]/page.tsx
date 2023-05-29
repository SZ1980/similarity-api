import { FC } from "react";

// interface pageProps {
//   params: {
//     postId: string;
//   };
// }

const page = (props: any) => {
  console.log(props);

  return <div>page</div>;
};
// const page: FC<pageProps> = ({ params }) => {
//   return <div>{params.postId}</div>;
// };

export default page;
