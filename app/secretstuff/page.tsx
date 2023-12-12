import Image from 'next/image'

export default async function SecretStuffPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Image src="/vault.jpg" alt="me" width="300" height="300" />
      </div>
    </>
  )
}
