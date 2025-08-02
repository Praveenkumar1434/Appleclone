import ipad from '../assets/images/ipad.jpg'
import iwatch from '../assets/images/iwatch.png'
import macStu from '../assets/images/macforstudents.jpg'
import airpod from '../assets/images/airpods.avif'
import trade from '../assets/images/tradein1.png'
import macpro from '../assets/images/macpro.png'
function Article() {
    return (
        <>

            <div className="container p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div className="bg-black text-center p-4">
                    <div className="py-4 space-y-4">
                        <h1 className="text-2xl text-white font-bold lg:text-3xl">iPad Pro</h1>
                        <h3 className="text-xl text-white font-semibold lg:text-2xl mb-4">
                            Unbelievably thin. Incredibly powerful
                        </h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>
                        <p className="text-center text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>
                        <div className="flex items-center justify-center">
                            <img src={ipad} alt="iPad" className="h-64 object-contain" />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 text-center">
                    <div className="space-y-4 py-4">
                        <h1 className=" text-2xl text-gray-600 font-bold lg:text-3xl">iWatch</h1>
                        <h3 className=' text-xl text-gray-600 font-semibold lg:text-2xl  mb-4'>Thinstant classic</h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>
                        <p className="text-center text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>
                        <div className='flex items-center justify-center'>
                            <img src={iwatch} alt="ipad" className='w-full object-contain h-64' />
                        </div>
                    </div>
                </div>
                <div className=" text-center relative ">
                    <div className="flex items-center justify-center  ">
                        <img src={macStu} alt="iPad" className="h-[550px] object-cover" />
                    </div>
                    <div className="py-4 absolute  bottom-6 right-14 lg:right-[160px] space-y-4">
                        <h1 className="text-2xl text-white font-bold lg:text-3xl">Mac for Students</h1>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>
                        <p className="text-center text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>

                    </div>
                </div>
                <div className="bg-[#B4A7B9] text-center  relative">
                    <div className="flex items-center justify-center">
                        <img src={airpod} alt="iPad" className="h-[550px] object-cover" />
                    </div>
                    <div className="py-4 space-y-4 absolute  bottom-2 lg:bottom-6 right-[34px] lg:right-[40px]">
                        <h1 className="text-2xl text-white font-bold lg:text-3xl">Airpods</h1>

                        <div className="flex  justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>
                        <p className="text-center text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>

                    </div>
                </div>
                <div className="bg-black text-center p-4">
                    <div className="py-4 space-y-4">
                        <h1 className="text-2xl text-white font-bold lg:text-3xl">MacBook Pro</h1>
                        <h3 className="text-xl text-white font-semibold lg:text-2xl mb-4">
                            A Work of Smart
                        </h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-black border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>
                        <p className="text-center text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>
                        <div className="flex items-center justify-center">
                            <img src={macpro} alt="iPad" className="h-64 object-contain" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#F5F5F7] text-center relative">
                    <div className="flex items-center justify-center">
                        <img src={trade} alt="iPad" className="h-[550px] object-cover" />
                    </div>
                    <div className="py-4 space-y-4 absolute  top-1 right-14 md:right-[180px]  ">
                        <h1 className="text-2xl text-black font-bold lg:text-3xl">Trade In</h1>
                        <h3 className="text-xl text-black font-semibold lg:text-2xl mb-4">
                            Upgrade and Save. It's that easy.
                        </h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-8 bg-blue-600 text-white font-extrabold rounded-full">
                                Buy
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-2xl font-semibold absolute  bottom-20 right-14 md:right-[180px] bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                        Built for Apple Intelligence.
                    </p>
                </div>
            </div>
        </>
    )
}
export default Article;