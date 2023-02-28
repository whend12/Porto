import React from 'react'
import abstract from '../assets/abstract.png'
import stocktifity from '../assets/stocktifity.png'

const Project = () => {
  return (
    //create card portofolio
    <section className="mt-5" id='project'>
      <h1 className="text-center text-gray-50 text-lg mt-10 md:mt-0" id="portfolio">
        Portfolio
      </h1>
      <div className="px-2 sm:px-5 md:px-10 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="rounded-3xl overflow-hidden bg-gray-700">
          <a href="https://whennnd.my.id/" className="block relative hover:opacity-75 transition ease-in-out duration-150">
            <img className="w-full rounded-t-3xl" src={abstract} alt="AbstractCoffee" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition ease-in-out duration-150">
              <div className="bg-gray-900 bg-opacity-75 rounded-lg px-3 py-1">
                <p className="text-white font-bold">Visit</p>
              </div>
            </div>
          </a>
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-50 text-lg mb-2">
              Abstract Coffee
            </div>
            <p className="text-gray-50 text-justify text-sm">
              Abstract Coffee is an online store that sells a variety of coffee products. Our mission is to provide customers with high-quality coffee products and an exceptional shopping experience. We offer a wide selection of coffee blends from around the world, as well as coffee equipment and accessories. Our website is user-friendly, making it easy for customers to browse and purchase products.
            </p>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              UI Design
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              Wordpress
            </span>
          </div>
        </div>


        {/* Card 2 */}
        <div className="rounded-3xl overflow-hidden bg-gray-700">
          <a href="https://github.com/whend12/Warehouse-Stocktifity" className="block relative hover:opacity-75 transition ease-in-out duration-150">
            <img className="w-full rounded-t-3xl" src={stocktifity} alt="AbstractCoffee" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition ease-in-out duration-150">
              <div className="bg-gray-900 bg-opacity-75 rounded-lg px-3 py-1">
                <p className="text-white font-bold">Visit</p>
              </div>
            </div>
          </a>
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-50 text-xl mb-2">
              Stocktifity - Warehouse Management System
            </div>
            <p className="text-gray-50 text-justify text-sm">
              Stocktifity is a warehouse management system designed to help businesses manage their inventory and supply
              chain more effectively. It provides real-time visibility into inventory levels, enables efficient order
              fulfillment, and helps reduce errors and costs associated with manual processes.</p>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              ReactJs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              Express
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              NodeJs
            </span>
          </div>
        </div>
      </div>
    </section >
  );
}


export default Project;