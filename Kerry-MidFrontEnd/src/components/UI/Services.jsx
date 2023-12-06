import React from "react";
import frontendimg from '../../assets/image/front-end.png'
import backendimg from '../../assets/image/backend.png'
import appsimg from '../../assets/image/apps.png'
import designimg from '../../assets/image/design.png'

const Services = () => {
    return(
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        What do I help
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                    I have experience in the field of Video and Photo Editing, with applications such as Adobe Creative.</p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm;max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">

                        {/* ========= vertical line running through the middle ========= */}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

                        {/* ========= left card ========= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12"></div>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group
                                        hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-2xl ">Editing Photo </h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                            group-hover:font-[500]">I have experience in using photo editing applications such as Adobe Photoshop and Lightroom.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={frontendimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        {/* ========= right card ========= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12"></div>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1400' 
                                        data-aos-delay='50'
                                        className="bg-white p-4 rounded shadow group
                                        hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-2xl ">Editing Video </h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                            group-hover:font-[500]">I have experience in using video editing applications such as Adobe Premiere and After Effects.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={backendimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        {/* ========= left card ========= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12"></div>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group
                                        hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-2xl ">Adobe Story</h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                            group-hover:font-[500]">Adobe Creative Cloud is a platform that provides all its programs in one place which can be paid for by subscription, either for all programs or specific programs. Of course the cost will depend on how many applications you want to use in Adobe CC</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={designimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        {/* ========= left right ========= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12"></div>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1400'
                                        data-aos-delay='50' 
                                        className="bg-white p-4 rounded shadow group
                                        hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-2xl ">ALL Apps </h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                            group-hover:font-[500]">Acrobat Pro, Photoshop, Illustrator ,InDesign, Premiere Pro, After Effects, Lightroom, XD.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={appsimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services