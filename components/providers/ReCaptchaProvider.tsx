'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!reCaptchaKey) {
    console.warn('reCAPTCHA site key not found. Please add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to your .env.local file.')
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      {children}
    </GoogleReCaptchaProvider>
  )
}
