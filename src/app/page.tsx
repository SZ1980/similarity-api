import Button from "@/components/ui/Button";
import { db } from "@/lib/db";

export default async function Home() {
  // await db.set("hello", "hello");

  // interface UserMock {
  //   name: string
  // }

  // const user: UserMock = {
  //   name: ''
  // }

  return <Button variant="ghost">Hello</Button>;
}
