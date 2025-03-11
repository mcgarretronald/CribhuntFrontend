import React from 'react'
import Image from 'next/image'
export default function Review() {
    return (
        <div className='bg-[#DAFCE4] py-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div >
                <Image
                    src={"/images/reviewer.png"}
                    alt='reviewer'
                    width={500}
                    height={500}
                    className='rounded-md'
                />
            </div>
            <div className='flex flex-col justify-center space-y-3'>
                <section>⭐⭐⭐⭐⭐</section>
                <section>
                    <p>
                    &quot;CribHunt transformed my home search experience! I found my dream home in no time, thanks to its user-friendly interface and detailed listings.&quot;
                    </p>
                </section>
                <section className='border-l-2 border-black pl-5'>
                    <p className='font-semibold'>Kingstone Onyango</p>
                    <p>Home Seeker</p>
                </section>
            </div>
        </div>
    )
}
