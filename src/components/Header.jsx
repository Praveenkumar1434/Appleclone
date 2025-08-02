import vid from '../assets/Videos/iphonevideo.mp4'
import iphone from '../assets/images/iPhone16max.png'
import mac from '../assets/images/macbook.png'

function Header() {
    return (
        <>
            <header className=' bg-gray-100 py-6'>
                <div className='flex justify-around mb-8 items-center'>
                    <h1 className=' font-bold  md:text-5xl'>iPhone</h1>
                    <h2 className=' font-semibold md:text-2xl md:mt-4 '>Designed to be loved.</h2>
                </div>
                <video className=' w-[90%]  mx-auto rounded-xl' src={vid} autoPlay muted loop></video>
            </header>

            <div className="bg-gray-100 my-4 p-2 text-center">
                <div className=" py-6 space-y-4">
                    <h1 className=" text-2xl font-bold md:text-5xl">iPhone</h1>
                    <h3 className=' text-xl font-semibold md:text-3xl text-gray-800 mb-4'>Meet the iPhone 16 family</h3>
                    <div className="flex justify-center space-x-4">
                        <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                            Learn more
                        </button>
                        <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                            Shop iPhone
                        </button>
                    </div>
                    <p className="text-center text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                        Built for Apple Intelligence.
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={iphone} alt="iphone16mx" />
                </div>
            </div>

            <div className="bg-[linear-gradient(to_bottom,_#D4EAF7,_#ffffff)] my-4 p-2 text-center">
                <div className=" py-6 space-y-5">
                    <h1 className=" text-2xl font-bold md:text-5xl">MacBook Air</h1>
                    <h3 className=' text-xl font-semibold md:text-3xl text-gray-800 leading-relaxed'>
                        Sky blue Color.<br />
                        Sky high performance with M4.
                    </h3>
                    <div className="flex justify-center space-x-4">
                        <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                            Learn more
                        </button>
                        <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                            Buy
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={mac} alt="Macbook" className=' h-64 md:h-full' />
                </div>
                <p className="text-center text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                    Built for Apple Intelligence.
                </p>
            </div>
            </>
            )
}
            export default Header;
