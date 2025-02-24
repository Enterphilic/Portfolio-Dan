import React from "react";
import presentation from "../asset/portfolio/Presentation1.jpg";
import presentation2 from "../asset/portfolio/Presentation2.jpg";
import navBar from "../asset/portfolio/navbar.jpg";
import reactParallax from "../asset/portfolio/reactParallax.jpg";
import reactSmooth from "../asset/portfolio/reactSmooth.jpg";
import reactWeather from "../asset/portfolio/reactWeather.jpg";

const portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dbpcptmco/image/upload/v1729683292/Screenshot_2024-10-23_122649_pdvt0z.png",
      Demo: "https://www.solomondavidandmichaelltd.com/",
      Code: "https://github.com/Dc-Valerian/Construction_Project",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dbpcptmco/image/upload/v1729683298/Screenshot_2024-10-23_122733_rqquli.png",
      Demo: "https://domusmariae.vercel.app/",
      Code: "https://github.com/Dc-Valerian/domusmariae_Main",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dbpcptmco/image/upload/v1701521309/Screenshot_2023-12-02_134730_rtgr1g.png",
      Demo: "https://famous-shop.vercel.app/",
      Code: "https://github.com/Dc-Valerian/Kode10xEcommerce/",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dbpcptmco/image/upload/v1718022754/Screenshot_2024-06-10_132855_yxgizo.png",
      Demo: "https://sparklecleanersola.com/",
      Code: "https://github.com/Dc-Valerian/SparkleCleaners",
    },
    {
      id: 5,
      src: presentation2,
      Demo: "https://real-estate-six-azure.vercel.app/",
      Code: "https://github.com/Enterphilic/real-landing-page-main.gitt",
    },
    {
      id: 6,
      src: navBar,
      Demo: "https://www.lunema-ng.com/",
      Code: "https://github.com/Enterphilic/bank_lunema_app.git",
    },
    {
      id: 7,
      src: reactParallax,
      Demo: "https://bank-lunema-app.vercel.app/",
      Code: "https://github.com/Enterphilic/bank_lunema_app.git",
    },
    {
      id: 8,
      src: reactSmooth,
      Demo: "https://bank-lunema-app.vercel.app/",
      Code: "https://github.com/Enterphilic/bank_lunema_app.git",
    },
    {
      id: 9,
      src: reactWeather,
      Demo: "https://bank-lunema-app.vercel.app/",
      Code: "https://github.com/Enterphilic/bank_lunema_app.git",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0">
          {portfolios.map(({ id, src, Demo, Code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-48 w-full"
              />
              <div key={id} className="flex item-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  {" "}
                  <a href={Demo}>DEMO</a>{" "}
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  {" "}
                  <a href={Code}>CODE</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
