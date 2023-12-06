import React from "react";
import CountUp from "react-countup";
import avatarimg from '../../assets/image/Avatar.png'


const Hero = () => {
    return (
        <section className='pt-0' id='about'>
            <div className='container'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* ======= hero left content ====== */}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos='fade-right' 
                        data-aos-duration='1500' 
                        className='textHeadingColor font-[600] text-[16px]'>
                            Hello welcome
                        </h5>
                        <h1 
                        data-aos='fade-up' 
                        data-aos-duration='1500' className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                            I'm Kerry Pasuhuk <br />
                            Freelance Editing
                        </h1>

                        <div 
                        data-aos='fade-up' 
                        data-aos-duration='1800' 
                        data-aos-delay='200' 
                        className="flex items-center gap-6 mt-7">

                            <a href="#contact">
                                <button className="bg-primaryColor text-white font=[500] flex item-center gap-2 hover:bg-smallTextColor 
                                ease-in duration-300 py-2 px-4 rounded-[8px] ">
                                    <i class="ri-mail-line"></i> Hire Me
                                </button>
                            </a>
                                <a href="#portfolio" className="text-smallTextColor font-[600] text-[16px] border-b border-solid
                                border-smallTextColor"
                                >
                                    See portfolio
                                    </a>
                        </div>
                            <p  data-aos='fade-left' 
                                data-aos-duration='1500' 
                                className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
                            >
                                    <span><i class="ri-apps-line"></i></span>
                                    This portfolio displays my work as a developer in the world of editing.. 
                            </p>
                <div className="flex item-center gap-9 mt-14 ">
                    <span className="text-smallTextColor text-[15px] font-[600]">Follow me:
                    </span>
                    <span>
                        <a 
                        href="https://instagram.com/justkerrr_?igshid=OGQ5ZDc2ODk2ZA==https://instagram.com/justkerrr_?igshid=OGQ5ZDc2ODk2ZA==" 
                        className="text-smallTextColor text-[15px] font-[600]"
                        >
                        <i class="ri-instagram-line"></i></a>
                    </span>
                    <span>
                        <a 
                        href="https://www.facebook.com/kerry.pasuhuk.1?mibextid=ZbWKwL" 
                        className="text-smallTextColor text-[15px] font-[600]"
                        >
                        <i class="ri-facebook-fill"></i></a>
                    </span>
                    <span>
                        <a 
                        href="https://youtube.com/@SUPERTrazz_?si=RCqnD_okuinjOFlv" 
                        className="text-smallTextColor text-[15px] font-[600]"
                        >
                        <i class="ri-youtube-line"></i></a>
                    </span>
                    <span>
                        <a 
                        href="https://github.com/Kerrypasuhuk" 
                        className="text-smallTextColor text-[15px] font-[600]"
                        >
                        <i class="ri-github-fill"></i></a>
                    </span>
                </div>
                    
                    </div>
                    {/* ======= hero left end ====== */}
                    {/* ======= hero img ====== */}
                    <div /*className="basis-1/3 mt-10 sm:mt-0"*/
                        data-aos='fade-left' data-aos-duration='1500' className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                        <figure className="flex item-center justify-center">
                            <img src={avatarimg} alt="" />
                        </figure>
                    </div>
                    {/* ======= hero img end ====== */}
                    {/* ======= hero content right ====== */}
                    <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                    md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={6} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">Years of Experience</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={100} duration={2} suffix="%" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">Success Rate</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={150} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">Happy Clients</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={249} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">Projects Complete</h4>
                        </div>
                    </div>
                    {/* ======= hero content right end ====== */}
                </div>
            </div>
        </section>
    )
}

export default Hero