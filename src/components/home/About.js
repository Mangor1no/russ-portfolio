import React, { forwardRef } from 'react'
import flag from 'public/images/flag-vn.png'
import Image from 'next/future/image'

const About = forwardRef((props, ref) => {
  return (
    <div className="py-10 text-lg md:py-20 md:text-xl" ref={ref}>
      <p className="mb-10 text-4xl font-bold">Hello there 👋</p>
      <p>
        I&apos;m a front end developer from{' '}
        <Image src={flag} alt="vietnam" width={24} className="inline" />{' '}
        <span className="font-semibold text-teal-500 dark:text-teal-400">
          Vietnam
        </span>
        . My real name is{' '}
        <span className="font-semibold text-teal-500 dark:text-teal-400">
          Tran Manh Tung
        </span>
        , but you can call me{' '}
        <span className="font-semibold text-teal-500 dark:text-teal-400">
          Russ Tran
        </span>
        . I&apos;m currently working with React in my projects, and I&apos;m a
        TailwindCSS fan.
      </p>
      <br />
      <p>
        Since 2018, I have been working in the technology industry. I believe
        that all clients&apos; products should be treated meticulously and
        carefully. The final product delivered to customers needs to be
        satisfied with a responsive design, accessibility, pleasing vibe and
        well performed.
      </p>
    </div>
  )
})

export default About
