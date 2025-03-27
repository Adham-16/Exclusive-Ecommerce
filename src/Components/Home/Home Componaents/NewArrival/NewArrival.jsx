export default function NewArrival() {
    return (
        <section className="py-12 px-6 md:px-20">

            <div className="flex items-center mb-8">
                <div className="w-5 h-10 bg-[#DB4444] rounded mr-3"></div>
                <p className="text-[#DB4444] font-semibold">Featured</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">New Arrival</h2>


            <div className="flex flex-col lg:flex-row gap-6">

                <div className="lg:w-1/2 relative bg-black  h-[600px] overflow-hidden">
                    <img
                        src="/PlayStation5.png"
                        alt="PlayStation 5"
                        className="w-full h-full object-cover opacity-90 p-[55px] pb-0 "
                    />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-xl md:text-2xl font-medium mb-2">PlayStation 5</h3>
                        <p className="text-sm mb-6 w-2/3">Black and White version of the PS5 coming out on sale.</p>
                        <button className="bg-transparent text-white p-0 hover:text-[#DB4444] transition-colors">
                            <span className="border-b-2 border-white hover:border-[#DB4444] pb-1">Shop Now</span>
                        </button>
                    </div>
                </div>


                <div className="lg:w-1/2 h-[600px] flex flex-col gap-6">
                    {/* Women’s Collections */}
                    <div className="relative bg-black  h-[300px] overflow-hidden">
                        <img
                            src="/women.jpeg"
                            alt="Women’s Collections"
                            className="w-full h-full object-contain ms-36  "
                        />
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-xl md:text-2xl font-medium mb-2">Women’s Collections</h3>
                            <p className="text-sm mb-4 w-2/3">Featured woman collections that give you another vibe</p>
                            <button className="bg-transparent text-white p-0 hover:text-[#DB4444] transition-colors">
                                <span className="border-b-2 border-white hover:border-[#DB4444] pb-1">Shop Now</span>
                            </button>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Speakers */}
                        <div className="md:w-1/2 relative bg-[#000000e3]  h-[300px] overflow-hidden">
                            <img
                                src="/public/Speakers.png"
                                alt="Speakers"
                                className="w-full h-full object-contain scale-[1.5] ms-8 opacity-90"
                                style={{ filter: 'drop-shadow(rgba(255, 255, 255, 0.2) 10px -10px 60px)' }}
                            />
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="text-xl md:text-2xl font-medium mb-2">Speakers</h3>
                                <p className="text-sm mb-6">Amazon wireless speakers</p>
                                <button className="bg-transparent text-white p-0 hover:text-[#DB4444] transition-colors">
                                    <span className="border-b-2 border-white hover:border-[#DB4444] pb-1">Shop Now</span>
                                </button>
                            </div>
                        </div>

                        {/* Perfume */}
                        <div className="md:w-1/2 relative bg-[#000000e3]  h-[300px] overflow-hidden">
                            <img
                                src="/public/Perfume.png"
                                alt="Perfume"
                                className="w-full h-full object-contain scale-[0.86] opacity-90"
                                style={{ filter: 'drop-shadow(rgba(255, 255, 255, 0.4) 10px -10px 60px)' }}

                            />
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="text-xl md:text-2xl font-medium mb-2">Perfume</h3>
                                <p className="text-sm mb-6">Premium quality perfumes</p>
                                <button className="bg-transparent text-white p-0 hover:text-[#DB4444] transition-colors">
                                    <span className="border-b-2 border-white hover:border-[#DB4444] pb-1">Shop Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}