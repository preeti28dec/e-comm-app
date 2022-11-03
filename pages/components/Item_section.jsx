import React, { useState } from 'react'
import Products from '../Products';




function Item_section() {
    const [dataCount, setDataCount] = useState(4);
    const [pageIndex, setPageIndex] = useState(1)

    const loadMore = () => {
        console.log("count " + dataCount + " pageIndex " + pageIndex)
        setDataCount(dataCount + 3)
        setPageIndex(pageIndex + 1)
    }
    return (
        <div>
            <div className='flex  text-3xl mt-8 justify-center font-bold'>BEST SELLER</div>

            <div className='my-2 item_section_text'>
                <span className='mx-6 text-blue-400 underline'>All</span>
                <span className='mx-6 hover:text-blue-500 hover:underline'>Bags</span>
                <span className='mx-6 hover:text-blue-500 hover:underline'>Sneakers</span>
                <span className='mx-6 hover:text-blue-500 hover:underline'>Belt</span>
                <span className='mx-6 hover:text-blue-500 hover:underline'>Sunglasses</span>
            </div>
            <Products/>
            <div className='text-sm text-center text-blue-400 my-6 underline ' onClick={() => loadMore()}><span className=''>LOAD MORE</span> </div>
        </div>


    )
}
export default Item_section