import { Card, CardContent } from "@assets/components/shadcnui/card.tsx"
// import { Input } from "@assets/components/ui/input.tsx"
// import { Textarea } from "@assets/components/ui/textarea.tsx"
// import { Button } from "@assets/components/ui/button.tsx"
import {Link, Outlet} from "react-router-dom";
import StarBackground from "@/components/StarBackground.tsx";
import SiteLogo from "@/components/SiteLogo.tsx";

export default function LandingPage() {

  const getWavingHandColor = () => {
      const waving_hands = ['👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿'];
      const random_selector = Math.floor(Math.random() * waving_hands.length);
      return waving_hands[random_selector];
  }

  return (
      <>
        <Outlet />
        <StarBackground/>
        <div className="flex flex-col min-h-[100dvh] bg-black">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <SiteLogo />
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link className="text-sm font-bold hover:underline underline-offset-4" to={"https://status.nebalus.dev"}>
                Status
              </Link>
              <Link className="text-sm font-bold hover:underline underline-offset-4" to={"/login"}>
                Login
              </Link>
            </nav>
          </header>
          <main className="flex-1 z-10">
            <section className="w-full mt-20">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_700px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-black">
                        Hey there, I'm Nebalus {getWavingHandColor()}
                      </h1>
                      <p className="max-w-[600px] text-muted-foreground bg-black md:text-xl">
                        I'm a <strong>Fullstack</strong> Computer Engineer trainee based in Germany.
                      </p>
                      <p className="max-w-[600px] text-muted-foreground bg-black md:text-xl">
                        I spend my days coding on some hobby projects, diving into games, and enjoying life’s
                        little adventures. ;)
                      </p>
                      <p className="max-w-[600px] text-muted-foreground bg-black md:text-xl">
                        On this corner of the web, I will host & present a small variety of my services and personal hobby projects.
                      </p>
                    </div>
                  </div>
                  <img
                      draggable="false"
                      src="/static/media/images/splash_hey_2.png"
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
                  <Card className="rounded-2xl">
                    <CardContent className="flex flex-col gap-3">
                      <img
                          draggable="false"
                          src="/static/media/images/mandelbrot.jpg"
                          alt="Picture of an mandelbrot fractal"
                          className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold">Mandelbrot</h3>
                        <p className="text-muted-foreground">An user interface written in Java to explore the wonders of the Mandelbrot-set fractal.</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col gap-3">
                      <img
                          draggable="false"
                          src="/static/icons/placeholder.svg"
                          alt="Melodybot Icon"
                          className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      />
                      <h3 className="text-xl font-bold">Melody </h3>
                      <p className="text-muted-foreground">An open-source Discord music bot in Java! Currently WIP!!!</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col gap-3">
                      <img
                          draggable="false"
                          src="/static/icons/placeholder.svg"
                          alt="Picture wuth stars in the background while the Text 'Cosmoventure' is highlited in the foreground"
                          className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      />
                      <h3 className="text-xl font-bold">Cosmoventure</h3>
                      <p className="text-muted-foreground">This is a 2D jump n run, story game made with my house own game engine. Currently WIP!!!</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col gap-3">
                      <img
                          draggable="false"
                          src="/static/icons/placeholder.svg"
                          alt="GFW Icon"
                          className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      />
                      <h3 className="text-xl font-bold">GalaxyFrameWork</h3>
                      <p className="text-muted-foreground">Simplifies Java app development by streamlining file organization, logging, GUI rendering, and source code optimization. Currently WIP!!!</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
            {/*<section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">*/}
            {/*  <div className="container px-4 md:px-6">*/}
            {/*    <div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
            {/*      <div className="space-y-2">*/}
            {/*        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>*/}
            {/*        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
            {/*          Here are some of my technical and soft skills.*/}
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
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted z-10">
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <p>Made with ♥️ by Nebalus</p>
              {/*<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>*/}
              {/*  Datenschutz*/}
              {/*</Link>*/}
              {/*<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>*/}
              {/*  Impressum*/}
              {/*</Link>*/}
            </nav>
          </footer>
        </div>
      </>
  )
}