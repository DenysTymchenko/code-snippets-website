import { SNIPPETS_METADATA } from '@/utils/constants';
import NavItem from './navItem';

const Nav = () => {
  const snippetsMetaData = Object.values(SNIPPETS_METADATA);

  return (
    <nav className='text-white bg-main-900 text-sm rounded-lg p-4 h-full overflow-y-auto'>
      <ul className='space-y-4'>
        {snippetsMetaData.map((snippetMetaData) =>
          <NavItem key={snippetMetaData.technology} snippetMetaData={snippetMetaData} />
        )}
      </ul>
    </nav>
  );
};

export default Nav;
