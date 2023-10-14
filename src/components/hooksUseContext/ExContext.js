import React, {useContext} from 'react';

// 1. Crear un contexto
const ThemeContext = React.createContext('light');

function ExContext() {
    return (
        // 2. Proveer un valor al contexto
        <ThemeContext.Provider value="dark">
            <Toolbar/>
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
            <div>
                <div
                    className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ejemplo con Botón con Contexto</span>
                        <span className="block text-indigo-600">El Tema Dark, se encuentra definido fuera del botón en un Contexto</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className='text-white pl-5 ml-5'>
                            <CustomButton/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

function CustomButton() {
    // 3. Usar el valor del contexto
    const theme = useContext(ThemeContext);
    return <button style={{background: theme === 'dark' ? '#333' : '#eee'}}>I am a {theme} button</button>;
}

export default ExContext