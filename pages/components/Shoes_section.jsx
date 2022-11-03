import React from 'react'

function Shoes_section() {
    return (
        <>
        <div className='main_shoes_conatiner'>
            <div className='flex flex-wrap justify-center bg-sky-400'>
                <div className="shoes_section_text">
                    <div className=' text-white text_content'>Adidas Men Running <br/>Sneakers</div>
                    <div className='text-white text_content2 mt-5'>Performance and design. Taken right to the edge.</div>
                    <div className='text-white text_content3 underline '>SHOP NOW</div>
                </div>
                <div className='shoes_image'>
                    <img src='./shoes_image.png' alt='Loding' />
                </div>

            </div>
        </div>
        </>

    )
}

export default Shoes_section