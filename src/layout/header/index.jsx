import React from "react";
import logo from '../../assets/logo.svg'
import { headerData } from "../../data/home";
import search from '../../assets/search.svg'

export const Header = () => {


    return (
        <>
            <div className="container  flex items-center justify-between py-8 pl-24">
                <nav className="flex items-center gap-8">
                    <img src={logo} alt="dribble_logo" className="w-76px h-18px" />
                    <ul className="flex gap-8 border-red-600">
                        {headerData.map((item) => (
                            <li key={item.id} className="list-none text-stone-500"><a href={item.path} className="no-underline text-sm/[14px] hover:text-pink-600">{item.name}</a></li>
                        ))}
                    </ul>
                </nav>
                <div className="flex gap-8 items-center">
                <div className="items-center flex gap-5">
                    <img src={search} alt="search" className="w-6 h-6" />
                    <p className="text-stone-500 text-base">Sign in</p>
                </div>
                <div className="">
                    <button className="w-20 h-10 border-0 bg-pink-600 text-white rounded-lg hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300">Sign up</button>
                </div>
                </div>
            </div>
        </>
    )
}