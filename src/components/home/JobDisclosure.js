import React from 'react'
import { Transition, Disclosure } from '@headlessui/react'
import { ArrowDown } from '../Icons'

const JobDisclosure = ({ title, content }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between gap-x-4">
            {title}
            <span
              className={`${open ? 'rotate-180' : 'rotate-0'} duration-500`}
            >
              <ArrowDown />
            </span>
          </Disclosure.Button>
          <Transition
            show={open}
            className="overflow-hidden"
            enter="transition transition-[max-height] duration-300 ease-in"
            enterFrom="transform max-h-0"
            enterTo="transform max-h-[500vh]"
            leave="transition transition-[max-height] duration-500 ease-out"
            leaveFrom="transform max-h-[500vh]"
            leaveTo="transform max-h-0"
          >
            <Disclosure.Panel
              static
              className="mt-4 rounded-xl bg-slate-100/70 p-3 dark:bg-slate-800 md:p-10"
            >
              {content}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default JobDisclosure
