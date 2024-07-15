import { auth } from '@clerk/nextjs/server';
import { snippetGetSchema, snippetPostSchema } from './schema';
import prisma from '@/db';

export async function GET(req: Request) {
  //if (!auth().userId) {
  //  return new Response('User must be signed in before sending requests.', { status: 401 })
  //}

  try {
    const filters = Object.fromEntries(new URL(req.url).searchParams)

    snippetGetSchema.parse(filters)

    const snippets = await prisma.snippet.findMany({ where: { ...filters } });
    return Response.json(snippets)
  } catch (err) {
    return new Response(`Error on getting snippets: ${err}`, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!auth().userId) {
    return new Response('User must be signed in before sending requests.', { status: 401 })
  }

  try {
    const body = await req.json()

    snippetPostSchema.parse(body)

    const newSnippet = await prisma.snippet.create({ data: body });
    return Response.json(newSnippet)
  } catch (err) {
    return new Response(`Error on creating snippet: ${err}`, { status: 500 })
  }
}
