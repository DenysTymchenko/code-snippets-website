import { Snippet } from '@prisma/client';

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/snippet/');
  const snippets = await response.json();

  return (
    <div>
      {snippets.map((snippet: Snippet) => (
        <h1 key={snippet.id}>{snippet.title}</h1>
      ))}
    </div>
  );
}
