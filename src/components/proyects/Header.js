import {Typewriter} from "react-simple-typewriter";

function Header() {
    return (
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                    <div>
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div
                                className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding.{' '}
                      <a href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true"/>
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                Proyectos <span> </span>
                                <Typewriter
                                    words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={200}
                                    deleteSpeed={70}
                                    delaySpeed={1000}
                                />
                            </h1>


                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Header