import type { FC, ReactNode } from 'react'

interface SlideProps {
  children: ReactNode | ReactNode[]
}

const Slide: FC<SlideProps> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col items-center py-5">{children}</div>
  )
}

export default Slide
