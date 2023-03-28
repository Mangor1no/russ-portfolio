/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const fontInterBold = fetch(
  new URL('../../../public/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const fontInterRegular = fetch(
  new URL('../../../public/fonts/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function OGHandler() {
  const fontDataBold = await fontInterBold
  const fontDataMedium = await fontInterMedium
  const fontDataRegular = await fontInterRegular

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            textAlign: 'center',
            padding: '24px',
            backgroundColor: '#111827',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #1a253c 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a253c 2%, transparent 0%)',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #1a253c 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a253c 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: 900,
              fontFamily: 'Inter-Bold',
              margin: '0',
            }}
          >
            <span>Hi, I&apos;m</span>
            <span
              style={{
                color: '#2dd4bf',
                marginLeft: '16px',
              }}
            >
              Russ
            </span>
          </p>
          <p
            style={{
              fontSize: 32,
              fontFamily: 'Inter-Bold',
              padding: '8px',
            }}
          >
            Let&apos;s craft beautiful and elegant web applications together
          </p>
          <div
            style={{
              margin: '32px 0 0 0',
              padding: '24px 52px',
              backgroundColor: '#2dd4bf',
              fontSize: 32,
              borderRadius: '999999px',
              fontFamily: 'Inter-Bold',
              color: '#111827',
            }}
          >
            Get started
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #ccd1db 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ccd1db 2%, transparent 0%)',
            backgroundColor: 'white',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #ccd1db 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ccd1db 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <img
            width="600"
            height="630"
            src="https://live.staticflickr.com/65535/52490103082_69877e6958_z.jpg"
            alt="banner"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter-Bold',
          data: fontDataBold,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fontDataRegular,
          style: 'normal',
        },
      ],
    }
  )
}
