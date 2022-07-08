import React from 'react'

function LeftSidebar() {
    return (
        <div>
            <div className=' rounded-lg bg-gray-100'>
                <div className='py-4 mx-4 home_leftbar_name'>Hit Deal</div>
                <div className='py-4  px-4'>
                    <div className='flex justify-between hover:text-sky-400 '>
                        <div>Nike</div>
                        <div>2</div>
                    </div>
                    <div className='flex justify-between hover:text-sky-400 mt-4'>
                        <div>Aimax</div>
                        <div>48</div>
                    </div>
                    <div className='flex justify-between hover:text-sky-400 mt-4'>
                        <div>Nike</div>
                        <div>2</div>
                    </div>
                    <div className='flex justify-between hover:text-sky-400 mt-4'>
                        <div>Nike</div>
                        <div>2</div>
                    </div>
                    <div className='flex justify-between hover:text-sky-400 mt-4'>
                        <div>Nike</div>
                        <div>2</div>
                    </div>
                    <div className='flex justify-between hover:text-sky-400 mt-4'>
                        <div>Nike</div>
                        <div>2</div>
                    </div>
                </div>
            </div>

            <div className=' rounded-lg bg-gray-100 mt-6'>
                <div className='py-4 mx-4 home_leftbar_name'>PRICES</div>
                <div className='flex justify-between py-4 px-4'>
                    <div>Ranger</div>
                    <div>$13.99 - $25.99</div>
                </div>
                <div className='px-4'>
                    <input type="range" value={70} className='w-full' />
                </div>
            </div>

            <div className='home_leftbar_name bg-gray-100  rounded-lg mt-6'>
                <div className='py-4 mx-4'>COLOR</div>
                <span className="flex justify-around items-center py-2 ">
                    <div className='flex'>
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                    </div>

                    {/* <label className=" relative flex items-center justify-center  ring-gray-400">
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                        <span aria-hidden="true" className="h-8 w-8 bg-blue-500 border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <label className=" relative flex items-center justify-center  ring-gray-400">
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                        <span aria-hidden="true" className="h-8 w-8 bg-red-300 border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <label className=" relative flex items-center justify-center  ring-gray-400">
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                        <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <label className=" relative flex items-center justify-center  ring-gray-400">
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                        <span aria-hidden="true" className="h-8 w-8 bg-yellow-200 border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <label className=" relative flex items-center justify-center  ring-gray-400">
                        <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                        <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <label className=" relative  flex items-center justify-center ring-gray-900">
                        <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                        <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                    </label> */}
                </span>
            </div>

            <div className=' bg-gray-100  rounded-lg mt-6'>
                <div className='py-4 mx-4 home_leftbar_name'>BRAND</div>
                <div className='py-4 px-4 '>
                    <div className='flex justify-between hover:text-sky-400 '>
                        <div>Nike</div>
                        <div>2</div>
                    </div>
                    <div className='flex justify-between hover:text-sky-400 mt-4'>
                        <div>Aimax</div>
                        <div>48</div>
                    </div>
                    <div className='flex justify-between hover:text-sky-400 mt-4'>
                        <div>Nike</div>
                        <div>2</div>
                    </div>
                    <div className='flex justify-between hover:text-sky-400 mt-4'>
                        <div>Nike</div>
                        <div>2</div>
                    </div>
                </div>
            </div>
            <div className='home_leftbar_name bg-gray-100 rounded-lg text-center mt-6 py-6 hover:text-sky-400'>MORE</div>
        </div>

    )
}

export default LeftSidebar
