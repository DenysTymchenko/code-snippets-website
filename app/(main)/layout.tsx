import { RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Header from "../components/header";
import "../globals.css";

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <Header />
      <main>{children}</main>
    </>
  );
}
