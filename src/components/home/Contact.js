import React from 'react'

const Contact = () => {
  return (
    <div className="py-10 text-lg md:py-20 md:text-xl">
      <p className="mb-10 text-4xl font-bold">Contact me 📫</p>
      <p>Thank you for spending time with me.</p>
      <br />
      <p>
        If my portfolio makes you impressed, feel free to drop me a message.
        I&apos;m quite active on the internet since I&apos;m a developer 👀
      </p>
      <br />
      <div className="flex flex-col gap-2">
        <a
          className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
          href="https://www.facebook.com/tungtm09/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
          href="https://dev.to/mangor1no"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev.to
        </a>
        <a
          className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
          href="https://www.linkedin.com/in/tungmanhtran09/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:tungtm998@gmail.com"
        >
          Send me an email
        </a>
      </div>
    </div>
  )
}

export default Contact
