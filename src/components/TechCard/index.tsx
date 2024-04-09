import { type FC, memo } from 'react'
import type { Tech } from '@/entities/tech'
import Image from 'next/image'

interface TechProps {
  tech: Tech
}

const TechCard: FC<TechProps> = ({ tech }) => {
  return (
    <li
      className="flex min-h-[140px] min-w-[140px] flex-col items-center
      space-y-2 rounded-md bg-white p-2 hover:shadow-xl"
    >
      <Image
        className="size-[100px] md:size-[140px]"
        src={`/assets/images/${tech.name}.png`}
        alt={tech.name}
        width={140}
        height={140}
      />
      <p className="cursor-default text-xl font-bold">{tech.name}</p>
    </li>
  )
}

export default memo(TechCard)
