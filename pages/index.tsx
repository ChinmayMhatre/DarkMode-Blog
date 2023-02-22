import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Roboto} from "@next/font/google"
import Button from '../component/Button'
const roboto = Roboto({
  weight:"900",
  subsets:["latin"]
})

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center h-screen flex-col">
        <h2 className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}>LIGHT MODE</h2>
        <h2 className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-white `}>DARK MODE</h2>
        {/* <button className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
          Toggle Mode
        </button> */}
        <Button/>
      </main>
    </div>
  )
}

export default Home
