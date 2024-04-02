'use client'

import Image from 'next/image'

import { Card } from '@mui/material'

function ContactUsCard() {
  return (
    <div className=" mb-10 mt-2 grid grid-cols-1 place-items-center">
      <Card
        sx={{
          width: '80vw',
          borderRadius: '10px',
          minHeight: '300px',
          backgroundColor: '#1B1212',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image src="/images/contactus.jpg" alt="contact us" width={400} height={400} />
          <div className="col-span-1.8 mt-10 items-center justify-center">
            <div className=" text-center">
              <h1 className="mb-4 text-4xl font-semibold" style={{ color: '#DBDBDB' }}>
                Contact Us
              </h1>
              <p className="text-md p-4" style={{ color: '#DBDBDB' }}>
                Got a question? We&apos;d love to hear from you. <br />
                Send us a message and we&apos;ll respond as soon as possible.
              </p>
              <div className="inline-block">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="w-80 rounded-lg border-0 bg-gray-800 px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  style={{ color: '#DBDBDB' }}
                />
                <button className="m-2 ml-4 rounded-lg bg-blue-500 px-4 py-3 font-bold text-white hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ContactUsCard
