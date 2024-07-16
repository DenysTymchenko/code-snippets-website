import { auth } from '@clerk/nextjs/server';
import { Snippet } from '@prisma/client';

const getSnippets = async () => {
  if (!auth().userId) return
  const response = await fetch('http://localhost:3000/api/snippet/', {
    headers: {
      'Authorization': `Bearer ${await auth().getToken()}`
    }
  });
  return await response?.json();
}

export default async function Home() {
  const snippets = await getSnippets()

  return (
    <div>
      {snippets?.map((snippet: Snippet) => (
        <h1 key={snippet.id}>{snippet.title}</h1>
      ))}
    </div>
  );
}
