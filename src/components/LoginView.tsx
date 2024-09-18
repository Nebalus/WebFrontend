/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/yEJE8mDzbIa
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import SiteLogo from "@/components/SiteLogo.tsx";

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
// import { Card, CardContent } from "@assets/components/shadcnui/card"
// import { Label } from "@assets/components/shadcnui/label"
// import { Input } from "@assets/components/shadcnui/input"
// import { Button } from "@assets/components/shadcnui/button"
// import StarBackground from "@/components/StarBackground.tsx";

export default function LoginView() {
  return (
      <>
        <div className="w-screen h-screen items-center flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <SiteLogo className="mx-auto h-10 w-auto flex justify-center items-center" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Dont have an account?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register
              </a>
            </p>
          </div>
        </div>
      </>
  )
}
// <>
//   <StarBackground/>
//   <div className="flex h-screen w-full items-center justify-center">
//     <div className="w-full max-w-md space-y-6 bg-green-500">
//       <div className="space-y-2 text-center">
//         <h1 className="text-3xl font-bold">Welcome back</h1>
//         <p className="text-muted-foreground">Please insert your login credentials</p>
//       </div>
//       <Card>
//         <CardContent className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="email">E-Mail</Label>
//             <Input id="email" type="email" placeholder="your email" required/>
//           </div>
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <Label htmlFor="password">Password</Label>
//               {/*<Link href="#" className="text-sm underline" prefetch={false}>*/}
//               {/*  Passwort vergessen?*/}
//               {/*</Link>*/}
//             </div>
//             <Input id="password" type="password" placeholder="your password" required/>
//           </div>
//           <Button className="w-full" type="submit">
//             Anmelden
//           </Button>
//         </CardContent>
//       </Card>
//       {/*<Alert variant="destructive">*/}
//       {/*  <div />*/}
//       {/*  <AlertTitle>Oops, something went wrong!</AlertTitle>*/}
//       {/*  <AlertDescription>Please check your login details and try again</AlertDescription>*/}
//       {/*</Alert>*/}
//     </div>
//   </div>
// </>