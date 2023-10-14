import React, {useState} from 'react';

function TextChanger() {
    const [text, setText] = useState('Texto inicial');

    return (

        <div>

            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap px-24 items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Texto que debe Cambiar: {text}</h3>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        {/*<input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               value={text}
                               placeholder="Texto" required/>*/}
                        <button
                            type="button"
                            onClick={() => setText('Nuevo texto')}
                            className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Cambiar Texto
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default TextChanger