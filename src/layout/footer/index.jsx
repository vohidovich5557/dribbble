import React from "react";
import logoPink from '../../assets/logoPink.svg'
import social from '../../assets/socials.svg'


export const Footer = () => {


    return (
        <>
            <div className=" container flex gap-16">
                <div className=" w-64 h-auto pr-1">
                    <img src={logoPink} alt="logoPink" className=" mb-6" />
                    <p className="width-[17rem] text-left mb-5">Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
                    <img src={social} alt="social_img" />
                </div>
                <div className="w-[58.8rem] grid grid-cols-5 gap-10">
                    <div>
                        <h2 className="mb-5 text-md text-black">For designers</h2>
                        <p className="mb-3 text-black/50 text-sm">Go Pro!</p>
                        <p className="mb-3 text-black/50 text-sm">Explore design work</p>
                        <p className="mb-3 text-black/50 text-sm">Design blog</p>
                        <p className="mb-3 text-black/50 text-sm">Overtime podcast</p>
                        <p className="mb-3 text-black/50 text-sm">Playoffs</p>
                        <p className="mb-3 text-black/50 text-sm">Weekly Warm-Up</p>
                        <p className="mb-3 text-black/50 text-sm">Refer a Friend</p>
                        <p className="mb-3 text-black/50 text-sm">Code of conduct</p>
                    </div>
                    <div>
                        <h2 className="mb-5 text-md text-black">Hire designers</h2>
                        <p className="mb-3 text-black/50 text-sm">Post a job opening</p>
                        <p className="mb-3 text-black/50 text-sm">Post a freelance project</p>
                        <p className="mb-3 text-black/50 text-sm">Search for designers</p>
                        <h2 className="mb-5 text-md text-black">Brands</h2>
                        <p className="mb-3 text-black/50 text-sm">Advertise with us</p>
                    </div>
                    <div >
                        <h2 className="mb-5 text-md text-black">Company</h2>
                        <p className="mb-3 text-black/50 text-sm">About</p>
                        <p className="mb-3 text-black/50 text-sm">Careers</p>
                        <p className="mb-3 text-black/50 text-sm">Support</p>
                        <p className="mb-3 text-black/50 text-sm">Media kit</p>
                        <p className="mb-3 text-black/50 text-sm">Testimonials</p>
                        <p className="mb-3 text-black/50 text-sm">API</p>
                        <p className="mb-3 text-black/50 text-sm">Terms of service</p>
                        <p className="mb-3 text-black/50 text-sm">Privacy policy</p>
                        <p className="mb-3 text-black/50 text-sm">Cookie policy</p>
                    </div>
                    <div>
                        <h2 className="mb-5 text-md text-black">Directories</h2>
                        <p className="mb-3 text-black/50 text-sm">Design jobs</p>
                        <p className="mb-3 text-black/50 text-sm">Designers for hire</p>
                        <p className="mb-3 text-black/50 text-sm">Freelance designers for hire</p>
                        <p className="mb-3 text-black/50 text-sm">Tags</p>
                        <p className="mb-3 text-black/50 text-sm">Places</p>
                        <h2 className="mb-5 text-md text-black">Design assets</h2>
                        <p className="mb-3 text-black/50 text-sm">Dribbble Marketplace</p>
                        <p className="mb-3 text-black/50 text-sm">Creative Market</p>
                        <p className="mb-3 text-black/50 text-sm">Fontspring</p>
                        <p className="mb-3 text-black/50 text-sm">Font Squirrel</p>

                    </div>
                    <div>
                        <h2 className="mb-5 text-md text-black">Design Resources</h2>
                        <p className="mb-3 text-black/50 text-sm">Freelancing</p>
                        <p className="mb-3 text-black/50 text-sm">Design Hiring</p>
                        <p className="mb-3 text-black/50 text-sm">Design Portfolio</p>
                        <p className="mb-3 text-black/50 text-sm">Design Education</p>
                        <p className="mb-3 text-black/50 text-sm">Creative Process</p>
                        <p className="mb-3 text-black/50 text-sm">Design Industry Trends</p>
                    </div>
                </div>
            </div>
        </>
    )
}