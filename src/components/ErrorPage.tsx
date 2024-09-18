/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Vg1WjQeWI4S
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { Link } from "react-router-dom";
import StarBackground from "@/components/StarBackground.tsx";

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

export default function ErrorPage() {
  return (
      <>
        <StarBackground />
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-9xl font-bold tracking-tight text-primary">404</h1>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Oops, the page you were looking for does not exist.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                  to={"/"}
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Go to Homepage
              </Link>
              {/*<Link*/}
              {/*    to={"/"}*/}
              {/*    className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"*/}
              {/*>*/}
              {/*  About Us*/}
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </>
  )
}
