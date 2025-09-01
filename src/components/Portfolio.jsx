import React from "react";



import reactParallax from "../asset/portfolio/reactParallax.jpg";


const portfolio = () => {
  const portfolios = [
  
     {
      id: 1,
      src: "https://res.cloudinary.com/ddwazfkl9/image/upload/v1756717974/sard_smebgm.png",
      Demo: "https://www.sardioncare.ca/",
      Code: "https://github.com/Enterphilic/sadion-cares",
    },
     {
      id: 2,
      src: "https://res.cloudinary.com/ddwazfkl9/image/upload/v1756717974/buddy_jsnc60.png",
      Demo: "https://buddy-chat-olive.vercel.app/",
      Code: "https://github.com/Enterphilic/buddy-chat",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dbpcptmco/image/upload/v1701521309/Screenshot_2023-12-02_134730_rtgr1g.png",
      Demo: "https://famous-shop.vercel.app/",
      // Code: "https://github.com/Dc-Valerian/Kode10xEcommerce/",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dbpcptmco/image/upload/v1718022754/Screenshot_2024-06-10_132855_yxgizo.png",
      Demo: "https://sparklecleanersola.com/",
      // Code: "https://github.com/Dc-Valerian/SparkleCleaners",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/ddwazfkl9/image/upload/v1740662752/headsimg_pkpbrj.png",
      Demo: "https://www.heads-toes.com/",
      Code: "https://github.com/Enterphilic/fashion-commerce",
    },
  
    {
      id: 6,
      src: "https://res.cloudinary.com/ddwazfkl9/image/upload/v1740662752/lunimage_rmmfnu.png",
      Demo: "https://www.lunned.com/",
      Code: "https://github.com/Enterphilic/Lunn-ed",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/ddwazfkl9/image/upload/v1740662752/immaculate_hnoqty.png",
      Demo: "https://www.immaculategoodnews.com/",
      Code: "https://github.com/Enterphilic/emmaculate-loan",
    },
    {
      id: 8,
      src: reactParallax,
      Demo: "https://bank-lunema-app.vercel.app/",
      Code: "https://github.com/Enterphilic/bank_lunema_app.git",
    },

      {
      id: 9,
      src: "https://res.cloudinary.com/ddwazfkl9/image/upload/v1740663547/download_hkutds.png",
      Demo: "https://real-estate-six-azure.vercel.app/",
      Code: "https://github.com/Enterphilic/real-landing-page-main.gitt",
    },
    
      {
      id: 10,
      src: "https://res.cloudinary.com/dbpcptmco/image/upload/v1729683292/Screenshot_2024-10-23_122649_pdvt0z.png",
      Demo: "https://www.solomondavidandmichaelltd.com/",
      // Code: "https://github.com/Dc-Valerian/Construction_Project",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dbpcptmco/image/upload/v1729683298/Screenshot_2024-10-23_122733_rqquli.png",
      Demo: "https://domusmariae.vercel.app/",
      // Code: "https://github.com/Dc-Valerian/domusmariae_Main",
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
