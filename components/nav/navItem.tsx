import { SnippetMetadata } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface NavItemProps {
  snippetMetaData: SnippetMetadata
}

const NavItem: FC<NavItemProps> = ({ snippetMetaData }) => {
  return (
    <li className='transition-transform hover:scale-110'>
      <Link href={`/snippets/technology/${snippetMetaData.technology}`} className='flex items-center gap-3'>
        <Image src={snippetMetaData.src} alt={snippetMetaData.label} width={30} height={30} />
        {snippetMetaData.label}
      </Link>
    </li>
  );
};

export default NavItem;
