import React, {useReducer} from 'react';

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function ExReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <div
                    className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ejemplo de Reducer</span>
                        <span className="block text-indigo-600">El Contador esta en: {state.count}</span>
                    </h2>
                    <div className="mt-8 inline-flex lg:mt-0 lg:flex-shrink-0">
                        <a onClick={() => dispatch({type: 'increment'})}
                           href="#"
                           className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                        >
                            +
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a onClick={() => dispatch({type: 'decrement'})}
                           href="#"
                           className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                            -
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ExReducer