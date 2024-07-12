import prisma from '@/db';

export default async function Home() {
  const snippets = await prisma.snippet.findMany();
  return (
    <h1>{JSON.stringify(snippets)}</h1>
  );
}
