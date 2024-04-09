import type { FC } from 'react'
import Image from 'next/image'

const Viewport: FC = () => {
  return (
    <div
      className="flex h-auto resize items-center justify-center overflow-hidden
      border-2 border-red-500 bg-black md:w-[80%] lg:w-[800px]"
    >
      <Image
        className="h-full w-full object-contain"
        src="/assets/images/viewport.png"
        alt="viewport showoff"
        width={700}
        height={700}
        priority
        objectFit="contain"
      />
    </div>
  )
}

export default Viewport
