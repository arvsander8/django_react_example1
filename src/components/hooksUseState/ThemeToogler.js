import React, {useState} from 'react';

function ThemeToggler() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'bg-gray-50') {
            setTheme('bg-gray-500');
        } else {
            setTheme('bg-gray-50');
        }
    }

    return (
        <div>
            <div className={theme}>
                <div
                    className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Cambio de Tema</span>
                        <span className="block text-indigo-600">El tema actual es: {theme}</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                onClick={toggleTheme}
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                            >
                                Cambiar Tema
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThemeToggler