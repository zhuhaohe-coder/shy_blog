interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  source?: string
}

const projectsData: Project[] = [
  {
    title: 'React Playground',
    description: `React Playground 是一个用于测试和实验 React 组件的互动环境。允许开发者实时查看 React 组件的渲染效果，无需重新加载页面。支持对组件代码的动态编辑和即时反馈。本项目基于 Monaco Editor 和 Babel 开发。
    `,
    imgSrc: '/static/images/cover_playground.webp',
    href: 'https://zhuhaohe-coder.github.io/react-playground/',
    source: 'https://github.com/zhuhaohe-coder/react-playground',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
