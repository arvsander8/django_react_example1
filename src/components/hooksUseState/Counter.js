import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (


        <div>

            <div className="bg-gray-50">
                <div
                    className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">CONTADOR</span>
                        <span className="block text-indigo-600">Has contado {count} veces</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a onClick={() => setCount(count + 1)}
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                            >
                                Incrementar
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a onClick={() => setCount(count - 1)}
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                            >
                                Decrementar
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
        ;
}

export default Counter