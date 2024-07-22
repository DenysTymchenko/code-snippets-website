import { FC } from 'react';

interface SnippetsByTechnologyPageProps {
  params: { technology: string };
}

const SnippetsByTechnologyPage: FC<SnippetsByTechnologyPageProps> = ({ params }) => {
  return (
    <div>{params.technology}</div>
  )
}

export default SnippetsByTechnologyPage;
