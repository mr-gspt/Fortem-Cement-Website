import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

const page = () => {
  return (
    <main className='bg-white'>
        <Header/>
        <div className="mx-auto flex w-full max-w-[90rem] px-6 pt-6">
          <Breadcrumb
            items={[
              { href: "/brands", label: "Brands" },
            ]}
          />
        </div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 justify-center items-center">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="text-center text-xl font-bold text-yellow-500 sm:text-5xl">OUR CEMENT BRANDS</h1>
        <div className="h-1 w-120 bg-yellow-500 rounded mx-auto mt-2"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Gallery/brand1.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Gallery/brand2.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Gallery/brand3.png" alt="content"/>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Gallery/brand4.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Gallery/brand5.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Gallery/brand6.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Gallery/brand7.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Gallery/brand8.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 justify-center items-center">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 className="text-center text-xl font-bold text-yellow-500 sm:text-5xl">OUR PLAYWOOD BRANDS</h1>
      <div className="h-1 w-120 bg-yellow-500 rounded mx-auto mt-2"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4 justify-center gap-12">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Plywood/FEDERAL PLY.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Plywood/Stallion ply.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-60 rounded w-full object-cover object-center mb-6" src="/Plywood/TITAN PLY.png" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 justify-center items-center">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 className="text-center text-xl font-bold text-yellow-500 sm:text-5xl">OUR ADMIX BRANDS</h1>
      <div className="h-1 w-120 bg-yellow-500 rounded mx-auto mt-2"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4 justify-center gap-12">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/user-2.gif" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/user-2.gif" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/user-2.gif" alt="content"/>
          {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </main>
  )
}

export default page
