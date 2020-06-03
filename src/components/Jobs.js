import React from "react";

const Jobs = ({job : {
   company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools }
}) => {
    const langsAndTools = [role,level];
    if(languages) {
        langsAndTools.push(...languages);
    }
    if(tools){
        langsAndTools.push(...tools);
    }
    return(
  <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded
   ${featured && 'border-l-4 border-teal-500 border-solid'}
  }`}>
    <div>
      <img className="-mt-16 mb-4 w-20 h-20" src={logo} alt={company} />
    </div>
    <div className="flex flex-col justify-between  ml-4">
      <h3 className="font-bold  text-teal-500 ">
          {company}
          {isNew && (
          <span className="text-teal-100 
          bg-teal-500 font-bold m-2 p-2 rounded-full">
              New
         </span>)
          }   
          {featured && (
          <span  className="text-white
          bg-red-700 font-bold m-2 px-2 py-1 rounded-full
          ">
          Featured</span>)
          }         
      </h3>
      <h2 className="font-bold text-2lg my-2">{position}</h2>
      <p className="text-gray-700">
        {postedAt} . {contract} . {location}
      </p>
    </div>
    <div className="flex flex-wrap mr-4  items-center mt-4 pt-4 border-t border-gray-200 border-solid">

        {langsAndTools.map((langAndTool) =>
                <span className="text-teal-500 mb-2 bg-teal-100 font-bold
                 mr-2 p-2 rounded">
                    {langAndTool}
                </span>)
        }
    </div>
  </div>
    )};

export default Jobs;
