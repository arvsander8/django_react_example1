import {NavLink, Link} from "react-router-dom";
import logo_milkneko from 'assets/images/logo.png'
import {useState, Fragment} from "react";


function HooksList() {

    return (
        <nav className='w-full py-36 transition duration-300 ease-in-out '>
            <div className="px-4 sm:px-6">
                <div
                    className="-ml-4 -mt-2 flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">

                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/hooksUseState'
                                 className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition ease-in duration-500 mx-4">UseState</NavLink>
                        <NavLink to='/hooksUseEffect'
                                 className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition ease-in duration-500 mx-4">UseEffect</NavLink>
                        <NavLink to='/hooksUseContext'
                                 className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition ease-in duration-500 mx-4">UseContext</NavLink>
                        <NavLink to='/hooksUseReducer'
                                 className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition ease-in duration-500 mx-4">UseReducer</NavLink>

                    </div>
                </div>

            </div>

        </nav>


    )
}
export default HooksList
