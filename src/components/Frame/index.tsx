import type { FC } from 'react'
import Image from 'next/image'

interface FrameProps {
  image: string
}

const Frame: FC<FrameProps> = ({ image }) => {
  return (
    <li className="rounded-md p-2 hover:shadow-md">
      <Image
        className="size-[240px]"
        src={image}
        width={100}
        height={100}
        alt="Frame image"
        priority
      />
    </li>
  )
}

export default Frame
