
export const Hero = () => {
    return (
        <div className="px-4  flex flex-col items-center justify-center text-center my-20">
            <div className="px-4 py-1.5 backdrop-blur-[10px] tracking-wide rounded-full border-transparent text-xs font-medium bg-neutral-200/50 text-black hover:bg-gray-200 cursor-pointer">We're hiring Founding Ruby Engineers
            </div>
            <h1 className="font-medium text-6xl mt-10  line-height[0.9] text-center tracking-tight">
                Magically simplify <br />accounting and taxes
            </h1>
            <p className="mt-5 text-[#595959] text-xl text-center tracking-tight">Automated bookkeeping. Effortless tax filing. Financial clarity. <br />Set up in 10 mins. Back to building by 6:59pm.</p>
            <div className="flex mt-5 gap-x-2">
                <button className='bg-[#2579F4] text-white px-4  py-2 rounded-lg font-medium shadow-lg text-shadow-md  text-center cursor-pointer hover:bg-[#2262C7]'>Get started</button>
                <button className="px-4 py-2 font-medium rounded-lg cursor-pointer hover:bg-slate-300 transition duration-300">Pricing &rarr;</button>
            </div>
            <p className="mt-6 text-neutral-400 text-xs">For US-based startups.</p>
        </div>
    )
} 