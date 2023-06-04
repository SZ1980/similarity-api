import { db } from "@/lib/db";

export default async function Home() {
  await db.set("hello", "hello");
  return <main className="bg-red-500">Hello</main>;
}
