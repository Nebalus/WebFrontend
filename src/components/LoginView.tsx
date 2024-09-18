/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/yEJE8mDzbIa
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

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
import { Card, CardContent } from "@assets/components/shadcnui/card"
import { Label } from "@assets/components/shadcnui/label"
import { Input } from "@assets/components/shadcnui/input"
import { Button } from "@assets/components/shadcnui/button"
import StarBackground from "@/components/StarBackground.tsx";

export default function LoginView() {
  return (
      <>
        <StarBackground/>
        <div className="flex h-screen w-full items-center justify-center bg-background">
          <div className="w-full max-w-md space-y-6 bg-green-500">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Welcome back</h1>
              <p className="text-muted-foreground">Please insert your login credentials</p>
            </div>
            <Card>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="your email" required/>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    {/*<Link href="#" className="text-sm underline" prefetch={false}>*/}
                    {/*  Passwort vergessen?*/}
                    {/*</Link>*/}
                  </div>
                  <Input id="password" type="password" placeholder="your password" required/>
                </div>
                <Button className="w-full" type="submit">
                  Anmelden
                </Button>
              </CardContent>
            </Card>
            {/*<Alert variant="destructive">*/}
            {/*  <div />*/}
            {/*  <AlertTitle>Oops, something went wrong!</AlertTitle>*/}
            {/*  <AlertDescription>Please check your login details and try again</AlertDescription>*/}
            {/*</Alert>*/}
          </div>
        </div>
      </>
  )
}
