import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from "react-helmet";

import abstract from "../assets/abstract.png";
import stocktifity from "../assets/stocktifity.png";
import list from "../assets/pasienlist.jpg";
import lab from "../assets/formlab.jpg";
import fisik from "../assets/formfisik.jpg";
import saran from "../assets/formsaran.jpg";
import cuaca from "../assets/cuaca.png";

const Project = () => {
  return (
    //create card portofolio
    <section className="mt-5" id="project">
      <h1
        className="text-center text-gray-50 text-lg mt-10 md:mt-0"
        id="portfolio"
      >
        Portfolio
      </h1>
      <div className="px-2 sm:px-5 md:px-10 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="rounded-3xl overflow-hidden bg-gray-700">
          <a
            href="https://whennnd.my.id/"
            className="block relative hover:opacity-75 transition ease-in-out duration-150"
          >
            <img
              className="w-full rounded-t-3xl"
              src={abstract}
              alt="AbstractCoffee"
            />
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
              Abstract Coffee is an online store that sells a variety of coffee
              products. Our mission is to provide customers with high-quality
              coffee products and an exceptional shopping experience. We offer a
              wide selection of coffee blends from around the world, as well as
              coffee equipment and accessories. Our website is user-friendly,
              making it easy for customers to browse and purchase products.
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
          <a
            href="https://github.com/whend12/Warehouse-Stocktifity"
            className="block relative hover:opacity-75 transition ease-in-out duration-150"
          >
            <img
              className="w-full rounded-t-3xl"
              src={stocktifity}
              alt="AbstractCoffee"
            />
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
              Stocktifity is a warehouse management system designed to help
              businesses manage their inventory and supply chain more
              effectively. It provides real-time visibility into inventory
              levels, enables efficient order fulfillment, and helps reduce
              errors and costs associated with manual processes.
            </p>
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
        {/* Card 3 */}
        <div className="rounded-3xl overflow-hidden bg-gray-700">
          <Carousel showArrows={true} infiniteLoop={true}>
            <div>
              <a
                href="#"
                className="block relative hover:opacity-75 transition ease-in-out duration-150"
              >
                <img
                  className="w-full h-auto rounded-t-3xl"
                  src={saran}
                  alt="Stocktifity1"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="block relative hover:opacity-75 transition ease-in-out duration-150"
              >
                <img
                  className="w-full h-auto rounded-t-3xl"
                  src={fisik}
                  alt="Stocktifity2"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            </div>
            <div>
              <a className="block relative hover:opacity-75 transition ease-in-out duration-150">
                <img
                  className="w-full h-auto rounded-t-3xl"
                  src={lab}
                  alt="Stocktifity2"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            </div>
            <div>
              <a className="block relative hover:opacity-75 transition ease-in-out duration-150">
                <img
                  className="w-full h-auto rounded-t-3xl"
                  src={list}
                  alt="Stocktifity2"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            </div>
          </Carousel>
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-50 text-xl mb-2">
              MCU Information System
            </div>
            <p className="text-gray-50 text-justify text-sm">
              The Medical Check Up Information System is a special platform
              designed to help manage medical check up information efficiently.
              It offers real-time data visibility, prompts if something is
              abnormal, simplifies the process of performing medical
              examinations, and helps minimize errors and costs associated with
              manual documentation processes.
            </p>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              React Js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              TailwindCss
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              Expres JS
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-3xl overflow-hidden bg-gray-700">
          <a
            href="https://kelompok3-final-project-4.netlify.app/"
            className="block relative hover:opacity-75 transition ease-in-out duration-150"
          >
            <img
              className="w-full h-auto rounded-t-3xl"
              src={cuaca}
              alt="AbstractCoffee"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition ease-in-out duration-150">
              <div className="bg-gray-900 bg-opacity-75 rounded-lg px-3 py-1">
                <p className="text-white font-bold">Visit</p>
              </div>
            </div>
          </a>
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-50 text-xl mb-2">
              Weather Forecast Website
            </div>
            <p className="text-gray-50 text-justify text-sm">
              The Weather Forecast website is an interactive platform offering
              current weather updates and forecasts for various regions.
              Providing real-time data and extended predictions, it assists
              users in planning daily activities with precise weather insights.
            </p>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              Boostrap
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-gray-400 transition duration-300 ease-in-out">
              Javascript
            </span>
          </div>
        </div>
      </div>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4479966978851297"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
    </section>
  );
};

export default Project;
