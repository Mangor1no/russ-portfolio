import Image from 'next/future/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center py-6">
      <div className="flex flex-1 items-center gap-x-2">
        <p>© 2022 Russ Tran</p>
        <Image
          src="/images/mango.png"
          width={20}
          height={20}
          alt="just a random mango"
        />
      </div>
    </div>
  )
}

export default Footer
