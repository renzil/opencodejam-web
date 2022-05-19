import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenCodeJam</title>
        <meta name="description" content="Open. Code. Jam." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full h-16 text-center mb-4 flex flex-row justify-center items-center">
        <h1 className="text-lg font-bold">OpenCodeJam</h1>
      </nav>
      <main className="w-full flex flex-row justify-center mb-4">
        <section className="md:w-1/2">
          <h2 className="w-full text-left text-lg mb-4">
            CURRENT JAMS
          </h2>
          <div className="w-full border rounded-lg flex flex-col">
            <div className="w-full mb-5 border-b">
              <img className="rounded-t-lg" alt="Preview of Little One's Bookhub hackathon" src="lobh-preview.jpg"></img>
            </div>
            <div className="ml-4 pb-4">
              <p className="text-base mb-2"><b>Little One&apos;s Bookhub</b></p>
              <p className="text-base mb-2">by Little One&apos;s Bookhub</p>
              <p className="text-base mb-2">Status: <b>Active</b></p>
              <p className="text-base mb-2">Tech stack: <b>HTML</b> | <b>CSS</b> | <b>JS</b> | <b>Sheets API</b></p>
              <p className="text-base mb-2">Top contributors: <b>Priya</b> | <b>Olan</b> | <b>Amos</b> | <b>Al-Ameen</b></p>
              <p className="text-base mb-2">Mentor: <b>Renzil</b></p>
              <p className="text-base mb-2">Website: <a className="text-base mb-2 underline" href="https://littleonesbookhub.netlify.app" target="_blank">Click here</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-1 py-8 border-t border-gray-100 justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center flex-1"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
