import React from "react";

function Recommendation({data}) {
  return (
    <div className="w-full">
      <h1 className="mb-2">Here's Something I got for you.</h1>
      <div className="w-full grid grid-cols-3 gap-2">
        {
            data.map((item,index)=>{
                return (<Card title={item.title} key={index} url={item.url} image={item.images_list[0]}/>)
            })
        }
      </div>
    </div>
  );
}

function Card({title,image,url}) {
  return (
    <div class="w-full border rounded-lg shadow bg-gray-700 border-none relative hover:scale-105 hover:z-50 hover:shadow-lg transition-all ease-in-out duration-300 cursor-pointer group" onClick={()=>{
        window.open(url,"_blank")
    }}>
      <img
        class="rounded-t-lg w-full aspect-square object-cover"
        src={image}
        alt=""
      />
      <div class="p-5">
        <h5 class="mb-2 text-md font-bold tracking-tight dark:text-white group-hover:underline transition-all ease-in-out duration-300">
          {title}
        </h5>
      </div>
    </div>
  );
}

export default Recommendation;
