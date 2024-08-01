'use client'

import { TypeAnimation } from 'react-type-animation'

export const HomeDescription = () => {
  return (
    <>
      <p className="mb-5 text-3xl tracking-widest">
        Hi, I'm
        <span className="ml-3 text-5xl font-bold text-red-500">J</span>
        <span className="ml-1 text-5xl font-bold text-blue-500">i</span>
        <span className="ml-1 text-5xl font-bold text-green-500">m</span>
      </p>
      <TypeAnimation
        className="text-2xl tracking-widest md:text-5xl"
        sequence={[500, '一名前端开发工程师 。', 1000, 'A Web <Developer /> .', 1000]}
        speed={10}
        repeat={Infinity}
      />
    </>
  )
}
