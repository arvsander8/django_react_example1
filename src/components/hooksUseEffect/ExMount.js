import React, {useEffect} from 'react';

function ExMount() {
    useEffect(() => {
        // Simulando una suscripción al montar el componente.
        console.log('Componente montado');

        // Simulando la cancelación de la suscripción al desmontar el componente.
        return () => {
            console.log('Componente desmontado');
        }
    }, []);

    return (
        <div>
            <div>
                <div
                    className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Montando y Desmontando Componentes</span>
                        <span className="block text-indigo-600">Salida en el LOG</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                           El Último Mount, es por que al ser un hijo esta dependiendo de cambios que pudo tener en el padre
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExMount