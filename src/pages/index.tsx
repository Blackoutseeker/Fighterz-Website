import Head from 'next/head'
import { Inter } from 'next/font/google'
import { technologies } from '@/utils/constants'

import Slide from '@/components/Slide'
import TechCard from '@/components/TechCard'
import Viewport from '@/components/Viewport'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fighterz</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center p-4 md:p-20 ${inter.className}`}
      >
        <Slide>
          <p className="text-xl font-bold md:text-4xl">
            Tecnologias utilizadas:
          </p>
          <ul className="my-10 flex max-w-full flex-wrap justify-center gap-6 md:max-w-full md:gap-10 lg:max-w-[80%]">
            {technologies.map(tech => (
              <TechCard key={tech} tech={{ name: tech }} />
            ))}
          </ul>
        </Slide>
        <Slide>
          <h2 className="my-10 text-xl font-bold md:text-4xl">
            Funcionamento da Viewport (FitViewport)
          </h2>
          <Viewport />
        </Slide>
      </main>
    </>
  )
}
