import React, { useState } from "react";
import { projects } from "../data/data";
import { AiOutlineLaptop } from "react-icons/ai";
import { TbWorldCode } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Slide, Overlay, MenuNav } from "hero-slider";
// import HeroSlider from "hero-slider/dist/HeroSlider";

function Project({nav}) {
  const [option, setOption] = useState("webData");
  const handelOnClick = (e) => {
    setOption(e.target.value);
  };
  let a = [];
  if (option === "webData") {
    a = projects.webData;
  } else if (option === "hardwareData") {
    a = projects.hardwareData;
  } else {
    a = projects.graphicData;
  }

  return (
    <div
      name="projects"
      className="w-full min-h-[100vh] text-[#f3f3f3] bg-[#1e1e1e]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full bg-[#1e1e1e]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#1D94D4] border-[#1D94D4]">
            Projects
          </p>
          <p className="py-4">The following are some of the works that I am involved in.</p>
        </div>
        <div
          className="inline-flex rounded-md shadow-sm mx-auto"
          role="group">
          <button
            type="button"
            onClick={handelOnClick}
            value={"webData"}
            className="inline-flex items-center px-4 sm:px-16 py-4 text-sm align-middle text-center font-medium text-[#f3f3f3] bg-[#2e2e2e] border border-gray-400 rounded-l-lg hover:bg-gray-900 hover:text-[#1D94D4] focus:ring-2 focus:ring-[#1D94D4] focus:text-[#1D94D4] ">
            <svg
              className="w-3 h-3 mr-2"
              aria-hidden="true"
              version="1.1"
              fill="currentColor"
              id="Layer_1"
              viewBox="0 0 512 512">
              <path
                d="M512,256c0-68.38-26.63-132.668-74.981-181.019C388.668,26.629,324.38,0,256,0
	C187.619,0,123.332,26.629,74.98,74.981C26.629,123.332,0,187.62,0,256s26.629,132.668,74.981,181.02
	C123.332,485.371,187.619,512,256,512c68.38,0,132.668-26.629,181.019-74.98C485.37,388.668,512,324.38,512,256z M471.909,343.53
	c-19.928-18.858-45.447-32.163-73.256-41.424c1.522-15.065,2.31-30.482,2.31-46.11c0-15.627-0.788-31.041-2.31-46.105
	c27.808-9.262,53.326-22.568,73.253-41.428c11.004,27.041,17.084,56.59,17.084,87.537
	C488.989,286.944,482.91,316.491,471.909,343.53z M134.044,255.997c0-13.405,0.605-26.63,1.778-39.577
	c36.192,9.092,74.607,12.428,108.671,13.017v53.127c-34.062,0.589-72.477,3.926-108.671,13.015
	C134.649,282.631,134.044,269.404,134.044,255.997z M244.492,487.923c-27.028-4.988-52.52-27.467-72.765-64.557
	c-0.366-0.67-0.72-1.354-1.082-2.031c23.512-16.669,48.395-26.35,73.846-28.595V487.923z M267.503,392.742
	c25.452,2.244,50.336,11.923,73.846,28.593c-0.361,0.678-0.717,1.362-1.083,2.033c-20.244,37.088-45.737,59.569-72.764,64.557
	L267.503,392.742L267.503,392.742z M267.503,24.069c27.027,4.988,52.52,27.469,72.764,64.557c0.366,0.67,0.72,1.353,1.082,2.03
	c-23.508,16.669-48.391,26.35-73.845,28.593L267.503,24.069L267.503,24.069z M244.492,119.248
	c-25.452-2.245-50.336-11.927-73.844-28.596c0.36-0.675,0.715-1.358,1.079-2.026c20.245-37.088,45.737-59.569,72.765-64.557V119.248
	z M267.503,142.33c29.093-2.161,57.341-12.516,83.846-30.581c10.24,24.369,17.697,51.963,22.064,81.453
	c-30.339,7.986-65.981,12.485-105.91,13.207V142.33L267.503,142.33z M359.606,76.051c-8.943-16.111-18.913-29.839-29.674-41.011
	c17.006,5.704,33.138,13.326,48.15,22.598C372.056,64.299,365.89,70.433,359.606,76.051z M152.391,76.048
	c-6.283-5.617-12.448-11.75-18.472-18.408c15.009-9.271,31.139-16.891,48.142-22.596C171.3,46.213,161.333,59.94,152.391,76.048z
	 M244.492,142.33v64.079c-39.929-0.723-75.572-5.221-105.912-13.208c4.368-29.491,11.824-57.085,22.064-81.454
	C187.152,129.813,215.399,140.168,244.492,142.33z M244.492,305.59v64.069c-29.091,2.162-57.339,12.518-83.847,30.583
	c-10.239-24.368-17.696-51.958-22.063-81.446C168.921,310.81,204.564,306.313,244.492,305.59z M152.394,435.933
	c8.943,16.109,18.905,29.851,29.665,41.024c-17.008-5.707-33.142-13.329-48.154-22.604
	C139.936,447.689,146.105,441.553,152.394,435.933z M359.601,435.929c6.29,5.622,12.462,11.759,18.492,18.424
	c-15.015,9.276-31.15,16.899-48.161,22.606C340.694,465.785,350.658,452.041,359.601,435.929z M267.503,369.658v-64.069
	c39.928,0.723,75.57,5.22,105.909,13.205c-4.368,29.488-11.823,57.078-22.062,81.445
	C324.842,382.175,296.594,371.82,267.503,369.658z M267.503,282.564v-53.127c34.062-0.588,72.477-3.926,108.669-13.016
	c1.172,12.946,1.778,26.171,1.778,39.576c0,13.408-0.605,26.633-1.778,39.582C339.979,286.489,301.566,283.152,267.503,282.564z
	 M461.504,146.317c-0.075,0.077-0.156,0.144-0.23,0.223c-15.45,16.585-37.696,29.965-65.643,39.852
	c-5.066-32.301-13.662-62.5-25.437-89.027c9.267-7.87,18.272-16.743,26.983-26.577C423.646,91.013,445.669,116.767,461.504,146.317z
	 M114.821,70.789c8.71,9.833,17.715,18.705,26.98,26.573c-11.776,26.527-20.372,56.726-25.438,89.028
	c-27.946-9.887-50.19-23.266-65.638-39.851c-0.074-0.079-0.154-0.146-0.229-0.222C66.331,116.767,88.354,91.014,114.821,70.789z
	 M40.095,168.463c19.925,18.859,45.443,32.164,73.248,41.426c-1.522,15.064-2.31,30.48-2.31,46.106
	c0,15.629,0.788,31.046,2.31,46.112c-27.807,9.261-53.325,22.565-73.252,41.421C29.09,316.491,23.011,286.944,23.011,256
	C23.011,225.053,29.091,195.505,40.095,168.463z M50.491,365.675c0.076-0.077,0.158-0.145,0.232-0.226
	c15.45-16.582,37.695-29.958,65.641-39.844c5.066,32.297,13.662,62.494,25.434,89.019c-9.268,7.87-18.277,16.743-26.989,26.577
	C88.345,420.977,66.325,395.224,50.491,365.675z M397.189,441.202c-8.714-9.835-17.723-18.709-26.992-26.58
	c11.774-26.525,20.368-56.72,25.433-89.018c27.947,9.884,50.194,23.262,65.645,39.845c0.075,0.081,0.156,0.147,0.234,0.226
	C445.675,395.225,423.654,420.978,397.189,441.202z"
              />
            </svg>
            WEB
          </button>
          <button
            type="button"
            value={"hardwareData"}
            onClick={handelOnClick}
            className="inline-flex items-center px-4 sm:px-10 py-4 text-sm font-medium text-[#f3f3f3] bg-[#2e2e2e] border border-gray-400  hover:bg-gray-900 hover:text-[#1D94D4] focus:ring-2 focus:ring-[#1D94D4] focus:text-[#1D94D4]">
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 76 76"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M 19,19L 57,19L 57,22.063C 56.1374,22.285 55.5,23.0681 55.5,24C 55.5,24.9319 56.1374,25.715 57,25.937L 57,57L 19,57L 19,27.937C 19.8626,27.715 20.5,26.9319 20.5,26C 20.5,25.0681 19.8626,24.285 19,24.063L 19,19 Z M 21.9998,22.0005L 21.9998,24.0005L 23.9998,24.0005L 23.9998,22.0005L 21.9998,22.0005 Z M 24.9998,22.0005L 24.9998,24.0005L 26.9998,24.0005L 26.9998,22.0005L 24.9998,22.0005 Z M 27.9998,22.0005L 27.9998,24.0005L 29.9998,24.0005L 29.9998,22.0005L 27.9998,22.0005 Z M 30.9998,22.0005L 30.9998,24.0005L 32.9998,24.0005L 32.9998,22.0005L 30.9998,22.0005 Z M 33.9998,22.0005L 33.9998,24.0005L 35.9998,24.0005L 35.9998,22.0005L 33.9998,22.0005 Z M 36.9998,22.0005L 36.9998,24.0005L 38.9998,24.0005L 38.9998,22.0005L 36.9998,22.0005 Z M 39.9998,22.0005L 39.9998,24.0005L 41.9998,24.0005L 41.9998,22.0005L 39.9998,22.0005 Z M 42.9995,22.0005L 42.9995,24.0005L 44.9995,24.0005L 44.9995,22.0005L 42.9995,22.0005 Z M 45.9995,22.0005L 45.9995,24.0005L 47.9995,24.0005L 47.9995,22.0005L 45.9995,22.0005 Z M 48.9995,22.0004L 48.9995,24.0004L 50.9995,24.0004L 50.9995,22.0004L 48.9995,22.0004 Z M 51.9996,22.0004L 51.9996,24.0004L 53.9996,24.0004L 53.9996,22.0004L 51.9996,22.0004 Z M 21.9998,25.0004L 21.9998,27.0004L 23.9998,27.0004L 23.9998,25.0004L 21.9998,25.0004 Z M 24.9998,25.0004L 24.9998,27.0004L 26.9998,27.0004L 26.9998,25.0004L 24.9998,25.0004 Z M 27.9998,25.0004L 27.9998,27.0004L 29.9998,27.0004L 29.9998,25.0004L 27.9998,25.0004 Z M 30.9998,25.0004L 30.9998,27.0004L 32.9998,27.0004L 32.9998,25.0004L 30.9998,25.0004 Z M 33.9998,25.0004L 33.9998,27.0004L 35.9998,27.0004L 35.9998,25.0004L 33.9998,25.0004 Z M 36.9998,25.0004L 36.9998,27.0004L 38.9998,27.0004L 38.9998,25.0004L 36.9998,25.0004 Z M 39.9998,25.0004L 39.9998,27.0004L 41.9998,27.0004L 41.9998,25.0004L 39.9998,25.0004 Z M 42.9996,25.0004L 42.9996,27.0004L 44.9996,27.0004L 44.9996,25.0004L 42.9996,25.0004 Z M 45.9996,25.0004L 45.9996,27.0004L 47.9996,27.0004L 47.9996,25.0004L 45.9996,25.0004 Z M 48.9996,25.0004L 48.9996,27.0004L 50.9996,27.0004L 50.9996,25.0004L 48.9996,25.0004 Z M 51.9996,25.0004L 51.9996,27.0004L 53.9996,27.0004L 53.9996,25.0004L 51.9996,25.0004 Z M 21.9998,28.0004L 21.9998,30.0004L 23.9998,30.0004L 23.9998,28.0004L 21.9998,28.0004 Z M 24.9998,28.0004L 24.9998,30.0004L 26.9998,30.0004L 26.9998,28.0004L 24.9998,28.0004 Z M 27.9998,28.0004L 27.9998,30.0004L 29.9998,30.0004L 29.9998,28.0004L 27.9998,28.0004 Z M 30.9998,28.0004L 30.9998,30.0004L 32.9998,30.0004L 32.9998,28.0004L 30.9998,28.0004 Z M 33.9998,28.0004L 33.9998,30.0004L 35.9998,30.0004L 35.9998,28.0004L 33.9998,28.0004 Z M 36.9998,28.0004L 36.9998,30.0004L 38.9998,30.0004L 38.9998,28.0004L 36.9998,28.0004 Z M 39.9998,28.0004L 39.9998,30.0004L 41.9998,30.0004L 41.9998,28.0004L 39.9998,28.0004 Z M 42.9996,28.0004L 42.9996,30.0004L 44.9996,30.0004L 44.9996,28.0004L 42.9996,28.0004 Z M 45.9997,28.0004L 45.9997,30.0004L 47.9997,30.0004L 47.9997,28.0004L 45.9997,28.0004 Z M 48.9997,28.0003L 48.9997,30.0003L 50.9997,30.0003L 50.9997,28.0003L 48.9997,28.0003 Z M 51.9997,28.0003L 51.9997,30.0003L 53.9997,30.0003L 53.9997,28.0003L 51.9997,28.0003 Z M 21.9998,31.0003L 21.9998,33.0003L 23.9998,33.0003L 23.9998,31.0003L 21.9998,31.0003 Z M 24.9998,31.0003L 24.9998,33.0003L 26.9998,33.0003L 26.9998,31.0003L 24.9998,31.0003 Z M 27.9998,31.0003L 27.9998,33.0003L 29.9998,33.0003L 29.9998,31.0003L 27.9998,31.0003 Z M 45.9997,31.0003L 45.9997,33.0003L 47.9997,33.0003L 47.9997,31.0003L 45.9997,31.0003 Z M 48.9997,31.0003L 48.9997,33.0003L 50.9997,33.0003L 50.9997,31.0003L 48.9997,31.0003 Z M 51.9997,31.0003L 51.9997,33.0003L 53.9997,33.0003L 53.9997,31.0003L 51.9997,31.0003 Z M 21.9998,34.0001L 21.9998,36.0001L 23.9998,36.0001L 23.9998,34.0001L 21.9998,34.0001 Z M 24.9999,34.0001L 24.9999,36.0001L 26.9999,36.0001L 26.9999,34.0001L 24.9999,34.0001 Z M 27.9999,34.0001L 27.9999,36.0001L 29.9999,36.0001L 29.9999,34.0001L 27.9999,34.0001 Z M 45.9997,34.0001L 45.9997,36.0001L 47.9997,36.0001L 47.9997,34.0001L 45.9997,34.0001 Z M 48.9997,34.0001L 48.9997,36.0001L 50.9997,36.0001L 50.9997,34.0001L 48.9997,34.0001 Z M 51.9997,34.0001L 51.9997,36.0001L 53.9997,36.0001L 53.9997,34.0001L 51.9997,34.0001 Z M 21.9999,37.0001L 21.9999,39.0001L 23.9999,39.0001L 23.9999,37.0001L 21.9999,37.0001 Z M 24.9999,37.0001L 24.9999,39.0001L 26.9999,39.0001L 26.9999,37.0001L 24.9999,37.0001 Z M 27.9999,37.0001L 27.9999,39.0001L 29.9999,39.0001L 29.9999,37.0001L 27.9999,37.0001 Z M 45.9997,37.0001L 45.9997,39.0001L 47.9997,39.0001L 47.9997,37.0001L 45.9997,37.0001 Z M 48.9998,37.0001L 48.9998,39.0001L 50.9998,39.0001L 50.9998,37.0001L 48.9998,37.0001 Z M 51.9998,37.0001L 51.9998,39.0001L 53.9998,39.0001L 53.9998,37.0001L 51.9998,37.0001 Z M 21.9999,40.0001L 21.9999,42.0001L 23.9999,42.0001L 23.9999,40.0001L 21.9999,40.0001 Z M 24.9999,40.0001L 24.9999,42.0001L 26.9999,42.0001L 26.9999,40.0001L 24.9999,40.0001 Z M 27.9999,40.0001L 27.9999,42.0001L 29.9999,42.0001L 29.9999,40.0001L 27.9999,40.0001 Z M 45.9998,40.0001L 45.9998,42.0001L 47.9998,42.0001L 47.9998,40.0001L 45.9998,40.0001 Z M 48.9998,40.0001L 48.9998,42.0001L 50.9998,42.0001L 50.9998,40.0001L 48.9998,40.0001 Z M 51.9998,40.0001L 51.9998,42.0001L 53.9998,42.0001L 53.9998,40.0001L 51.9998,40.0001 Z M 21.9999,43.0001L 21.9999,45.0001L 23.9999,45.0001L 23.9999,43.0001L 21.9999,43.0001 Z M 24.9999,43.0001L 24.9999,45.0001L 26.9999,45.0001L 26.9999,43.0001L 24.9999,43.0001 Z M 27.9999,43.0001L 27.9999,45.0001L 29.9999,45.0001L 29.9999,43.0001L 27.9999,43.0001 Z M 45.9998,43.0001L 45.9998,45.0001L 47.9998,45.0001L 47.9998,43.0001L 45.9998,43.0001 Z M 48.9998,43.0001L 48.9998,45.0001L 50.9998,45.0001L 50.9998,43.0001L 48.9998,43.0001 Z M 51.9998,43.0001L 51.9998,45.0001L 53.9998,45.0001L 53.9998,43.0001L 51.9998,43.0001 Z M 21.9999,46.0001L 21.9999,48.0001L 23.9999,48.0001L 23.9999,46.0001L 21.9999,46.0001 Z M 24.9999,46.0001L 24.9999,48.0001L 26.9999,48.0001L 26.9999,46.0001L 24.9999,46.0001 Z M 27.9999,46.0001L 27.9999,48.0001L 29.9999,48.0001L 29.9999,46.0001L 27.9999,46.0001 Z M 30.9999,46.0001L 30.9999,48.0001L 32.9999,48.0001L 32.9999,46.0001L 30.9999,46.0001 Z M 33.9999,46.0001L 33.9999,48.0001L 35.9999,48.0001L 35.9999,46.0001L 33.9999,46.0001 Z M 36.9999,46.0001L 36.9999,48.0001L 38.9999,48.0001L 38.9999,46.0001L 36.9999,46.0001 Z M 39.9999,46.0001L 39.9999,48.0001L 41.9999,48.0001L 41.9999,46.0001L 39.9999,46.0001 Z M 42.9999,46.0001L 42.9999,48.0001L 44.9999,48.0001L 44.9999,46.0001L 42.9999,46.0001 Z M 45.9999,46.0001L 45.9999,48.0001L 47.9999,48.0001L 47.9999,46.0001L 45.9999,46.0001 Z M 48.9999,46.0001L 48.9999,48.0001L 50.9999,48.0001L 50.9999,46.0001L 48.9999,46.0001 Z M 51.9999,46.0001L 51.9999,48.0001L 53.9999,48.0001L 53.9999,46.0001L 51.9999,46.0001 Z M 21.9999,49.0001L 21.9999,51.0001L 23.9999,51.0001L 23.9999,49.0001L 21.9999,49.0001 Z M 24.9999,49.0001L 24.9999,51.0001L 26.9999,51.0001L 26.9999,49.0001L 24.9999,49.0001 Z M 27.9999,49.0001L 27.9999,51.0001L 29.9999,51.0001L 29.9999,49.0001L 27.9999,49.0001 Z M 30.9999,49.0001L 30.9999,51.0001L 33,51.0001L 33,49.0001L 30.9999,49.0001 Z M 34,49.0001L 34,51.0001L 36,51.0001L 36,49.0001L 34,49.0001 Z M 37,49.0001L 37,51.0001L 39,51.0001L 39,49.0001L 37,49.0001 Z M 40,49.0001L 40,51.0001L 42,51.0001L 42,49.0001L 40,49.0001 Z M 42.9999,49.0001L 42.9999,51.0001L 44.9999,51.0001L 44.9999,49.0001L 42.9999,49.0001 Z M 45.9999,49L 45.9999,51L 47.9999,51L 47.9999,49L 45.9999,49 Z M 48.9999,49L 48.9999,51L 50.9999,51L 50.9999,49L 48.9999,49 Z M 51.9999,49L 51.9999,51L 53.9999,51L 53.9999,49L 51.9999,49 Z M 22,52L 22,54L 24,54L 24,52L 22,52 Z M 25,52L 25,54L 27,54L 27,52L 25,52 Z M 28,52L 28,54L 30,54L 30,52L 28,52 Z M 31,52L 31,54L 33,54L 33,52L 31,52 Z M 34,52L 34,54L 36,54L 36,52L 34,52 Z M 37,52L 37,54L 39,54L 39,52L 37,52 Z M 40,52L 40,54L 42,54L 42,52L 40,52 Z M 43,52L 43,54L 45,54L 45,52L 43,52 Z M 46,52L 46,54L 48,54L 48,52L 46,52 Z M 49,52L 49,54L 51,54L 51,52L 49,52 Z M 52,52L 52,54L 54,54L 54,52L 52,52 Z M 31,31L 31,45L 45,45L 45,31L 31,31 Z M 33.6375,36.64L 33.4504,36.565L 33.3733,36.375L 33.4504,36.1829L 33.6375,36.1067L 33.8283,36.1829L 33.9067,36.375L 33.8283,36.5625L 33.6375,36.64 Z M 33.8533,40L 33.4266,40L 33.4266,37.3334L 33.8533,37.3334L 33.8533,40 Z M 36.9467,40L 36.52,40L 36.52,38.4942C 36.52,37.9336 36.3092,37.6533 35.8875,37.6533C 35.6697,37.6533 35.4896,37.7328 35.3471,37.8917C 35.2046,38.0506 35.1333,38.2514 35.1333,38.4942L 35.1333,40L 34.7066,40L 34.7066,37.3333L 35.1333,37.3333L 35.1333,37.7992L 35.1441,37.7992C 35.3486,37.4531 35.6444,37.28 36.0317,37.28C 36.3278,37.28 36.5543,37.3739 36.7112,37.5617C 36.8682,37.7495 36.9467,38.0206 36.9467,38.375L 36.9467,40 Z M 39.0267,39.9642L 38.6208,40.0533C 38.1447,40.0533 37.9067,39.7945 37.9067,39.2767L 37.9067,37.7067L 37.4267,37.7067L 37.4267,37.3333L 37.9067,37.3333L 37.9067,36.6733L 38.3333,36.5333L 38.3333,37.3333L 39.0267,37.3333L 39.0267,37.7067L 38.3333,37.7067L 38.3333,39.1892C 38.3333,39.3658 38.3647,39.4918 38.4275,39.5671C 38.4903,39.6424 38.5942,39.68 38.7392,39.68L 39.0267,39.5733L 39.0267,39.9642 Z M 41.6933,38.7733L 39.8267,38.7733C 39.8339,39.0628 39.9142,39.2863 40.0675,39.4438C 40.2208,39.6013 40.4319,39.68 40.7008,39.68C 41.003,39.68 41.2805,39.5911 41.5333,39.4133L 41.5333,39.8042C 41.3,39.9703 40.9911,40.0533 40.6067,40.0533C 40.2311,40.0533 39.9361,39.9331 39.7217,39.6925C 39.5072,39.452 39.4,39.1133 39.4,38.6767C 39.4,38.2645 39.516,37.9286 39.7479,37.6692C 39.9799,37.4097 40.268,37.28 40.6125,37.28C 40.9564,37.28 41.2225,37.3921 41.4108,37.6163C 41.5992,37.8404 41.6933,38.152 41.6933,38.5508L 41.6933,38.7733 Z M 41.2667,38.4C 41.265,38.1645 41.2058,37.9811 41.0892,37.85C 40.9725,37.7189 40.8103,37.6533 40.6025,37.6533C 40.4019,37.6533 40.2317,37.7222 40.0917,37.86C 39.9517,37.9978 39.8653,38.1778 39.8325,38.4L 41.2667,38.4 Z M 42.76,40L 42.3333,40L 42.3333,36.0533L 42.76,36.0533L 42.76,40 Z " />
            </svg>
            Hardware
          </button>
          <button
            type="button"
            value={"graphicData"}
            onClick={handelOnClick}
            className="inline-flex items-center px-4 sm:px-10 py-4 text-sm font-medium text-[#f3f3f3] bg-[#2e2e2e] border border-gray-400 rounded-r-lg hover:bg-gray-900 hover:text-[#1D94D4] focus:ring-2 focus:ring-[#1D94D4] focus:text-[#1D94D4]">
            <svg
              className="w-3 h-3 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16.871 16.871">
              <g>
                <g>
                  <path
                    d="M6.847,5.772H6.822c-0.127,0.511-0.254,1.16-0.395,1.657L5.917,9.25h1.898L7.28,7.429
			C7.128,6.919,6.975,6.283,6.847,5.772z"
                  />
                  <path
                    d="M15.837,0H1.033C0.462,0,0,0.462,0,1.033v14.805c0,0.57,0.462,1.033,1.033,1.033h14.805
			c0.57,0,1.033-0.463,1.033-1.033V1.033C16.871,0.463,16.408,0,15.837,0z M8.758,12.905l-0.663-2.203H5.638l-0.612,2.203H3.014
			l2.624-8.583h2.546l2.663,8.583H8.758z M13.793,12.905h-1.937V6.678h1.937V12.905z M12.813,5.914
			c-0.611,0-1.019-0.434-1.007-0.969c-0.012-0.561,0.396-0.979,1.021-0.979c0.623,0,1.018,0.419,1.03,0.979
			C13.857,5.48,13.45,5.914,12.813,5.914z"
                  />
                </g>
              </g>
            </svg>
            Graphic-Design
          </button>
        </div>
        {/* container for projects */}
        {/* Hardware and web section */}
        <div
          className={
            option !== "graphicData"
              ? "mt-10 grid sm:grid-cols-1 md:grid-cols-2 gap-4"
              : "hidden"
          }>
          {/* Gird Item */}
          {a.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-lg
            flex justify-center text-center items-center mx-auto content-div bg-cover">
              {/* Hover effect for images */}
              <div className="w-[100%] h-[100%] p-2 opacity-0 group-hover:opacity-100 bg-opacity-80 bg-[#1e1e1e]">
                <span className="text-3xl font-bold text-[#1D94D4] tracking-wider ">
                  {item.name}
                </span>
                <br />
                <span className=" text-[#555] tracking-wider ">{item.des}</span>
                <div className="pt-8 text-center align-center">
                  {/* For Graphic section */}
                  <div
                    className={
                      option === "graphicData" ? "h-[250px] " : "hidden"
                    }></div>
                  {/* eslint-disable-next-line */}
                  <a
                    href={item.github}
                    className={item.github === "" ? "hidden" : ""}
                    target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fefefe] hover:animate-pulse font-bold text-md inline">
                      <p className="flex ">
                        <AiOutlineLaptop className="mt-1 mr-3" size={16} />
                        Code
                      </p>
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a
                    href={item.live}
                    className={item.live === "" ? "hidden" : ""}
                    target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-gradient-to-r from-[#1D94D4] to-cyan-500 text-[#fefefe] font-bold text-md hover:animate-pulse">
                      <p className="flex ">
                        <TbWorldCode className="mt-1 mr-3" size={15} />
                        Live
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Graphic Section only */}
        <div className={option === "graphicData" && !nav ? "" : "hidden"}>
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={false}
            autoFocus
            useKeyboardArrows
            showIndicators={false}
            emulateTouch
            interval={2500}
            centerMode
            stopOnHover
            thumbWidth={100}
            showThumbs ={true}
            showStatus={false}>
            {a.map((item, index) => (
              <div
                key={index}
                className="max-w-[90%] max-h-auto my-[30px] m-auto bg-contain z-0">
                <img
                  src={item.image}
                  className="object-contain relative max-h-[50vh] m-auto z-0"
                  alt="Graphic Images"
                />
                <p className="legend z-0">
                  <p className="text-2xl z-0 text-[#1D94D4]">{item.name}</p>
                  <p className="text-xm z-0 text-blue-100">{item.des}</p>
                </p>
              </div>
            ))}
          </Carousel>
          {/* Simple Slider */}
          {/* {a.map((item, index) => {
              const images = [];
              for (let i = 0; i < item.image.length; i++) {
                images.push(
                  <div
                    key={i}
                    className="flex justify-center object-center px-4 py-10 bg-base-200">
                    <img
                      className="object-fill "
                      src={item.image[i]}
                      alt="Graphic Images"
                    />
                  </div>
                );
              } 

            return (
              <div key={index} className="bg-inherit z-[0]">
                <div className="mockup-window border-[1px] border-[#777] shadow-lg shadow-black h-[60vh] bg-base-400 overflow-hidden scrollbar-hidden hover:overflow-y-auto modal-scroll">
                  {item.name}
                  {images}
                </div>
              </div>
            );
          })} */}

          {/* Hero Slider */}
          {/* {a.map((item, index) => {
            const images = [];
            for (let i = 0; i < item.image.length; i++) {
              images.push(
                <Slide
                  label={item.name}
                  background={{
                    backgroundImageSrc: item.image[i],
                    backgroundImageClassName:
                      "object-contain h-auto max",
                  }}
                />
              );
            }

            return (
              // <HeroSlider
              //   slidingAnimation="left_to_right"
              //   orientation="horizontal"
              //   initialSlide={1}
              //   onBeforeChange={(previousSlide, nextSlide) => {
              //     console.log("onbeforechange", previousSlide, nextSlide);
              //   }}
              //   onChange={(nextSlide) => {
              //     console.log("onChange", nextSlide);
              //   }}
              //   onAfterChange={(nextSlide) => {
              //     console.log("after", nextSlide);
              //   }}
              //   style={{
              //     backgroundColor: "#1e1e1e",
              //   }}
              //   settings={{
              //     slideDuration: 250,
              //     slidingDelay: 100,
              //     shouldAutoPlay: true,
              //     shouldDisplayButtons:true,
              //     autoplayDuration: 5000,
              //     height: "50vh"
              //   }}>

              // Hero Slider
              <HeroSlider
                settings={{}}
                controller={{
                  initialSlide: 1,
                  slidingDuration: 500,
                  shouldAutoPlay: true,
                  shouldDisplayButtons: true,
                  autoplayDuration: 5000,
                  slidingDelay: 100,
                  onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                  onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                      "onBeforeSliding(previousSlide, nextSlide): ",
                      previousSlide,
                      nextSlide
                    ),
                  onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide),
                }}>
                <Overlay></Overlay>
                {images}
                <MenuNav />
              </HeroSlider>
            );
          })} */}
          {/* end */}
        </div>
      </div>
    </div>
  );
}

export default Project;
