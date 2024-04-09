import Head from 'next/head'
import { Inter } from 'next/font/google'
import { technologies } from '@/utils/constants'

import Slide from '@/components/Slide'
import TechCard from '@/components/TechCard'
import Viewport from '@/components/Viewport'
import Frame from '@/components/Frame'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

const frameImages: string[] = []

for (let i = 0; i < 4; i++) {
  frameImages.push(`/assets/sprites/frames/${i}.png`)
}

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
          <p className="text-center text-xl font-bold md:text-4xl">
            Tecnologias utilizadas:
          </p>
          <ul className="my-10 flex max-w-full flex-wrap justify-center gap-6 md:max-w-full md:gap-10 lg:max-w-[80%]">
            {technologies.map(tech => (
              <TechCard key={tech} tech={{ name: tech }} />
            ))}
          </ul>
        </Slide>
        <Slide>
          <h2 className="my-10 text-center text-xl font-bold md:text-4xl">
            Funcionamento da Viewport (FitViewport)
          </h2>
          <Viewport />
        </Slide>
        <Slide>
          <h2 className="my-10 text-center text-xl font-bold md:text-4xl">
            Iteração de colisões
          </h2>
          <ul className="flex flex-col gap-5 lg:flex-row">
            {frameImages.map(image => (
              <Frame key={image} image={image} />
            ))}
          </ul>
          <div className="mt-16 rounded-md p-2 hover:shadow-md">
            <Image
              className="size-[240px]"
              src="/assets/sprites/gifs/punch.gif"
              width={100}
              height={100}
              alt="Ryu punching"
            />
          </div>
        </Slide>
      </main>
    </>
  )
}
