const session = null;

export default function Home() {
  if (!session) throw new Error("Auth is required to reach this info session!");
  return <main className="bg-red-500">Hello</main>;
}
