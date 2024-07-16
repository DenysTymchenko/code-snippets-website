import { snippetPatchSchema } from './schema';
import prisma from '@/db';

interface DataParams {
  params: { id: string };
}

export async function PATCH(req: Request, data: DataParams) {
  try {
    const id = +data.params.id
    const body = await req.json()

    snippetPatchSchema.parse(body)

    const updatedSnippet = await prisma.snippet.update({ data: body, where: { id } });
    return Response.json(updatedSnippet)
  } catch (err) {
    return new Response(`Error on updating snippet. ${err}`, { status: 500 })
  }
}

export async function DELETE(req: Request, data: DataParams) {
  try {
    const id = +data.params.id
    const deletedSnippet = await prisma.snippet.delete({ where: { id } });
    return Response.json(deletedSnippet);
  } catch (err) {
    return new Response(`Error on deleting snippet. ${err}`, { status: 500 });
  }
}
