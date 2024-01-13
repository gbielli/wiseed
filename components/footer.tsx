
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-gradient-to-r from-[#e73f115a] via-[#0f1d32] to-[#0f1d32] z-10'>
    <footer className='text-white pt-20 pb-6 px-10'>
       <div className='first-line'>
        <div className='grid grid-cols-3 items-center'>
            <div className='text-4xl col-span-2'>
                Lorem ipsum dolor sit amet. Morbi cursus dictum orci ornare faucibus
            </div>
            <div className='col-span-1 ml-auto'>
                <div  className='line flex mb-4 gap-2'>
                    <Image src="/circle.svg" width={24} height={24} alt='icon' />
                    <p>Balma</p>
                </div>
                <div  className='line flex gap-2'>
                    <Image src="/pin.svg" width={24} height={24} alt='icon' />
                    <p>+012 345 678</p>
                </div>
            </div>
        </div>
       </div>
       <div className='mt-20 h-[0.5px] bg-slate-600'></div>
      
       <div className='second-line grid grid-cols-3 mt-6 text-sm'>
        <div className='flex gap-10 col-span-2'>
            <span>Le groupe WiSEED​</span>
            <span>Nos Services d’Investissement</span>
            <span>Nos agréments​</span>
        </div>
        <div className='col-span-1 ml-auto'>
            <span className='text-slate-400'>© 2023 Wiseed. All Rights Reserved</span>
        </div>
       </div>
    </footer>
    </section>
  )
}

export default Footer