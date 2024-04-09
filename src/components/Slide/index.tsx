import type { FC, ReactNode } from 'react'

interface SlideProps {
  children: ReactNode | ReactNode[]
}

const Slide: FC<SlideProps> = ({ children }) => {
  return <div className="flex flex-1 flex-col items-center">{children}</div>
}

export default Slide
