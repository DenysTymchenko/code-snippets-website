import Image from "next/image"

export const metadata = {
  title: 'Auth',
  description: 'Authentication page ',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex h-screen w-full">
      <div className='flex-1 flex justify-center items-center'>{children}</div>
      <div className='flex-1 flex flex-col gap-4 items-center justify-center shadow-2xl bg-main-700'>
        <Image src='/logo.png' alt='Logo' width={450} height={112} />
        <h1 className='text-2xl text-white text-center'>The one place fpr all tour code snippets</h1>
      </div>
    </main>
  )
}
