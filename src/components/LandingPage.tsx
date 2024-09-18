/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/9VwV2mKRptu
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card, CardContent } from "@assets/components/shadcnui/card.tsx"
// import { Input } from "@assets/components/ui/input.tsx"
// import { Textarea } from "@assets/components/ui/textarea.tsx"
// import { Button } from "@assets/components/ui/button.tsx"
import {SquareTerminal} from "lucide-react";
import {Link} from "react-router-dom";
import StarBackground from "@/components/StarBackground.tsx";

export default function LandingPage() {

  const getWavingHandColor = () => {
      const waving_hands = ['👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿'];
      const random_selektor = Math.floor(Math.random() * waving_hands.length);
      return waving_hands[random_selektor];
  }


  return (
      <>
        <StarBackground/>
        <div className="flex flex-col min-h-[100dvh] bg-black">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <div className="flex items-center">
              <SquareTerminal className="h-7 w-7"/>
              <span className="ml-2 text-lg font-bold">nebalus.dev</span>
            </div>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link className="text-sm font-bold hover:underline underline-offset-4" to={"/login"}>
                Login
              </Link>
            </nav>
          </header>
          <main className="flex-1 z-10">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_700px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hey there, im
                        Nebalus {getWavingHandColor()}</h1>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        I'm a Computer Engineer trainee based in germany.
                      </p>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        I spend my days coding on some crazy projects, diving into exciting games, and enjoying life’s
                        little adventures.
                      </p>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        On this corner of the web, i will host & present a small variety of my services and personal hobby projects.
                      </p>
                    </div>
                  </div>
                  <img
                      src="/static/images/splash_hey_2.png"
                      width="550"
                      height="550"
                      alt="Splash Pic"
                      className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  />
                </div>
              </div>
            </section>
            <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Here are some of my projects that I have worked on
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                  <Card>
                    <CardContent className="flex flex-col gap-2">
                      <img
                          src="/static/icons/placeholder.svg"
                          width="550"
                          height="310"
                          alt="Projekt 1"
                          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      />
                      <h3 className="text-xl font-bold">Project 1</h3>
                      <p className="text-muted-foreground">Bla</p>
                    </CardContent>
                  </Card>
                  {/*<Card>*/}
                  {/*  <CardContent className="flex flex-col gap-2">*/}
                  {/*    <img*/}
                  {/*        src="/static/icons/placeholder.svg"*/}
                  {/*        width="550"*/}
                  {/*        height="310"*/}
                  {/*        alt="Projekt 2"*/}
                  {/*        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"*/}
                  {/*    />*/}
                  {/*    <h3 className="text-xl font-bold">Project 2</h3>*/}
                  {/*    <p className="text-muted-foreground">Bla Bla</p>*/}
                  {/*  </CardContent>*/}
                  {/*</Card>*/}
                  {/*<Card>*/}
                  {/*  <CardContent className="flex flex-col gap-2">*/}
                  {/*    <img*/}
                  {/*        src="/static/icons/placeholder.svg"*/}
                  {/*        width="550"*/}
                  {/*        height="310"*/}
                  {/*        alt="Projekt 3"*/}
                  {/*        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"*/}
                  {/*    />*/}
                  {/*    <h3 className="text-xl font-bold">Project 3</h3>*/}
                  {/*    <p className="text-muted-foreground">Bla Bla Bla</p>*/}
                  {/*  </CardContent>*/}
                  {/*</Card>*/}
                </div>
              </div>
            </section>
            {/*<section id="skills" className="w-full py-12 md:py-24 lg:py-32">*/}
            {/*  <div className="container px-4 md:px-6">*/}
            {/*    <div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
            {/*      <div className="space-y-2">*/}
            {/*        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meine Fähigkeiten</h2>*/}
            {/*        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
            {/*          Hier sind einige meiner wichtigsten technischen und softskills.*/}
            {/*        </p>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">*/}
            {/*      <Card>*/}
            {/*        <CardContent className="flex flex-col gap-2">*/}
            {/*          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Technische Fähigkeiten</div>*/}
            {/*          <ul className="list-disc pl-4 space-y-2">*/}
            {/*            <li>React.js</li>*/}
            {/*            <li>JavaScript</li>*/}
            {/*            <li>TypeScript</li>*/}
            {/*            <li>HTML/CSS</li>*/}
            {/*            <li>Node.js</li>*/}
            {/*            <li>Git</li>*/}
            {/*          </ul>*/}
            {/*        </CardContent>*/}
            {/*      </Card>*/}
            {/*      <Card>*/}
            {/*        <CardContent className="flex flex-col gap-2">*/}
            {/*          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Softskills</div>*/}
            {/*          <ul className="list-disc pl-4 space-y-2">*/}
            {/*            <li>Teamarbeit</li>*/}
            {/*            <li>Kommunikation</li>*/}
            {/*            <li>Problemlösung</li>*/}
            {/*            <li>Kreativität</li>*/}
            {/*            <li>Lernbereitschaft</li>*/}
            {/*          </ul>*/}
            {/*        </CardContent>*/}
            {/*      </Card>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}
            {/*<section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">*/}
            {/*  <div className="container px-4 md:px-6">*/}
            {/*    <div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
            {/*      <div className="space-y-2">*/}
            {/*        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kontakt</h2>*/}
            {/*        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
            {/*          Fühlen Sie sich frei, mich über das Kontaktformular zu erreichen.*/}
            {/*        </p>*/}
            {/*      </div>*/}
            {/*      <div className="mx-auto w-full max-w-sm space-y-2">*/}
            {/*        <form className="flex flex-col gap-4">*/}
            {/*          <Input type="text" placeholder="Name" className="max-w-lg flex-1" />*/}
            {/*          <Input type="email" placeholder="E-Mail" className="max-w-lg flex-1" />*/}
            {/*          <Textarea placeholder="Nachricht" className="max-w-lg flex-1" />*/}
            {/*          <Button type="submit">Senden</Button>*/}
            {/*        </form>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}
          </main>
          {/*<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">*/}
          {/*  <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. Alle Rechte vorbehalten.</p>*/}
          {/*  <nav className="sm:ml-auto flex gap-4 sm:gap-6">*/}
          {/*    /!*<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>*!/*/}
          {/*    /!*  Datenschutz*!/*/}
          {/*    /!*</Link>*!/*/}
          {/*    /!*<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>*!/*/}
          {/*    /!*  Impressum*!/*/}
          {/*    /!*</Link>*!/*/}
          {/*  </nav>*/}
          {/*</footer>*/}
        </div>
      </>
  )
}