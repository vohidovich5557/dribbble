import React from "react";
import { MainLayout } from "../../layout/main-layout";
import bgImg from '../../assets/bg_img.svg'
import { cardData, hero2Data, heroData } from "../../data/home";
import searchBlack from '../../assets/searchBlack.svg'
import vector from '../../assets/vector.svg'
import like from '../../assets/like.svg'
import view from '../../assets/view.svg'


export const Home = () => {


    return (
        <>
            <MainLayout>
                <section className="container relative pl-0 text-center">
                    <img src={bgImg} alt="bg_img" className="absolute w-full -z-10 " />

                    <ul className="flex gap-8 whitespace-nowrap pt-10 w-full items-center justify-center">
                        {heroData.map((item) => (
                            <li key={item.id} className=""><a href={item.path} className="text-white bg-zinc-800/50 hover:text-black hover:bg-white w-30 py-4 px-5  rounded-full">{item.name}</a></li>
                        ))}
                    </ul>

                    <h2 className=" w-96 text-center font-bold text-white text-3xl ml-auto mr-auto mt-11">Explore the world’s leading design portfolios</h2>
                    <p className="w-[42rem] text-center text-white text-base mt-4 ml-auto mr-auto">Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>

                    <form className="flex items-center gap-5 mt-6 w-[41rem] bg-white h-14 rounded-[50px] pl-3 ml-auto mr-auto ">
                        <img src={searchBlack} alt="search_btn" className="w-6 h-6" />
                        <input type="search" name="search" placeholder="Search..." className="w-[30rem] h-10 pl-2 border-none outline-none text-lg" />
                    </form>
                    <div className="flex items-center gap-4 mt-6 w-full  justify-center">
                        <p className="text-white text-xs font-normal">Trending searches</p>
                        <ul className="flex items-center gap-5">
                            {hero2Data.map((item) => (
                                <li key={item.id} className="w-28 border-2 border-slate-400 pt-1 pb-1 rounded-[50px] text-white whitespace-nowrap"><a href={item.path}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className=" container mx-[72px]  mt-48 items-center ml-auto mr-auto ">
                    <div className="flex items-center justify-between mb-[31px]">
                        <select name="popular" id="" className=" w-28 pt-[10px] pb-[10px] outline-none rounded-[8px] border-inherit border-2 py-0.5 px-0.5">
                            <option value="Popular">Popular</option>
                            <option value="Unpopular">Unpopular</option>
                            <option value="none">None</option>
                        </select>
                        <div className="flex items-center gap-4 border-2 border-inherit w-28 pt-[10px] pb-[10px] pl-[10px] rounded-[8px]">
                            <img src={vector} alt="vector" className="w-6 h-6" />
                            <p className="">Filters</p>
                        </div>
                    </div>
                    <div className="w-full gap-8 grid grid-cols-4 mb-10">
                        {cardData.map((item) => (
                          <>
                           <div key={item.id}>
                            <img src={item.img} alt="img_card" className="w-full h-auto rounded-[13px]" />
                            <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-3">
                                <h3 className="text-black text-sm font-medium">{item.name}</h3>
                                <p className="text-sm text-white w-12 px-1 py-0.5 bg-gray-500/50 rounded-[3px] text-center">{item.position}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <img src={like} alt="like_icon" className="w-[14px] h-[11px]" />
                                    <p>{item.likes}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={view} alt="view_icon" className="w-[14px] h-[17px]" />
                                    <p>{item.viewrs}</p>
                                </div>
                            </div>
                            </div>
                           </div>
                          </>
                        ))}
                    </div>
                    <div className="w-full justify-center items-center gap-12 flex mb-11">
                        <div>
                        <button className=" w-60 h-10 rounded-[8px] bg-pink-600 text-white">Sign up to continue</button>
                        </div>
                        <div>
                        <button className=" text-pink-600">or sign in</button>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}