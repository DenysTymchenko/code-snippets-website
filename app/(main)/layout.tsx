import { RedirectToSignIn, SignedOut } from '@clerk/nextjs';
import Header from "../../components/header";
import '../globals.css'
import Nav from '@/components/nav';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <Header />

      <main className='flex'>
        <Nav />
        {children}
      </main>
    </>
  );
}
