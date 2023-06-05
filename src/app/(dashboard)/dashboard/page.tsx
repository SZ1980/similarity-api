import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  if (!session) notFound();
  return <pre>{JSON.stringify(session)}</pre>;
};

export default page;
