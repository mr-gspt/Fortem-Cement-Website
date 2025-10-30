import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

const page = () => {
  return (
    <main className='bg-white'>
        <Header/>
        <div className="mx-auto flex w-full max-w-6xl px-6 pt-6">
          <Breadcrumb
            items={[
              { href: "/products", label: "Products" },
              { href: "#", label: "Cement" },
            ]}
          />
        </div>
<section>
  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-yellow-500 sm:text-6xl">Cement</h2>

      <p className="mt-7 max-w-6xl text-2xl text-black-500">
        A portfolio of Type 1 cement engineered for reliable performance, consistent quality, andcompatibility with admixtures. Designed to support durable builds, improved workability, and theflexibility to meet specific concrete requirements.
      </p>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img src="/Cement/stallion type 1.png" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img src="/Cement/federal type 1.png" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img src="/Cement/conch type 1.png" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img src="/Cement/red lion type 1.png" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>
        </a>
      </li>
      
      <li>
        <a href="#" className="group block overflow-hidden">
          <img src="/Cement/tough type 1.png" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>
        </a>
      </li>
      <li>
        <a href="#" className="group block overflow-hidden">
          <img src="/Cement/xuan type 1.png" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>
        </a>
      </li>
      <li>
        <a href="#" className="group block overflow-hidden">
          <img src="/Cement/titan type 1.png" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>
        </a>
      </li>
    </ul>
  </div>
</section>

        <Footer/>
    </main>
  )
}

export default page
