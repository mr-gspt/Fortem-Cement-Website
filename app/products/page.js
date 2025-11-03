import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import CementKg from '../components/CementKg'
import PlaywoodTb from '../components/PlaywoodTb'

const page = () => {
  return (
    <main className='bg-white'>
        <Header/>
        <div className="mx-auto flex w-full max-w-[90rem] px-6 pt-6">
          <Breadcrumb
            items={[
              { href: "/products", label: "Products" },
              { href: "Cement", label: "Cement" },
            ]}
          />
        </div>
<section>
  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 id="Cement"className="text-xl font-bold text-yellow-500 sm:text-6xl">Cement</h2>

      <p className="indent-10 mt-7 max-w-6xl text-2xl text-black-500">
        A portfolio of Type 1 cement engineered for reliable performance, consistent quality, and compatibility with admixtures. Designed to support durable builds, improved workability, and the flexibility to meet specific concrete requirements.
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

    <header>
      <h2 className="text-xl font-bold text-yellow-500 sm:text-6xl">Cement</h2>

      <p className="indent-10 mt-7 max-w-7xl text-2xl text-black-500">
      Type 1P and Type 1L are blended portland cements designed to enhance long-term durability andchecmical resistance. Its enhanced durability and improved workability is well-suited for general construction, marine environments, and sulfate-resistant applications.
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
  <CementKg/>
</section>
{/* Playwood Section */}
<section>
  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-yellow-500 sm:text-6xl">Playwood</h2>

      <p className="indent-10 mt-7 max-w-7xl text-2xl text-black-500">
      Fortem offers both ordinary and marine plywood suited for a variety of residential and industrialapplications. We offer flexibility through customized sizing to match specific project requirementsand reduce on-site adjustments.
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

    <header>
      <h2 className="text-xl font-bold text-yellow-500 sm:text-6xl">Playwood</h2>

      <p className="indent-10 mt-7 max-w-6xl text-2xl text-black-500">
      Fortem 4x8 feet ordinary and marine plywood brands are available in the followingthickness:
      </p>
    </header>
    <PlaywoodTb/>
  </div>
</section>
{/* Kalsi Section */}
<section>
<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
<header>
      <h2 className="text-xl font-bold text-yellow-500 sm:text-6xl">Fiber Cement Board</h2>
      <p className="indent-10 mt-7 max-w-6xl text-2xl text-black-500">
      Fortem is the exclusive distributor of Kalsi Fiber Cement Boards in the Philippines. Kalsi offers arobust, cost-effective, and reliable solution ideal for smart builders and homeowners who trustone of the world’s largest fiber cement manufacturers with their projects.
      </p>
    </header>
</div>

</section>

        <Footer/>
    </main>
  )
}

export default page
