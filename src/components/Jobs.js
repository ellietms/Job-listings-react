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
    const langsAndTools = [];
    const roleAndLevel = [];
    if(role){
        roleAndLevel.push(role);
    }
    if(level){
        roleAndLevel.push(level);
    }
    if(languages) {
        langsAndTools.push(...languages);
    }
    if(tools){
        langsAndTools.push(...tools);
    }
    return(
  <div className="flex bg-white shadow-md m-4 p-6">
    <div>
      <img src={logo} alt={company} />
    </div>
    <div className="flex flex-col justify-between  ml-4">
      <h3 className="font-bold  text-teal-500 ">{company}</h3>
      <h2 className="font-bold text-2lg">{position}</h2>
      <p className="text-gray-700">
        {postedAt} . {contract} . {location}
      </p>
    </div>
    <div className="flex items-center ml-auto">
        {
            roleAndLevel.map((roleAndLevel) =>
            <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                    {roleAndLevel}
            </span>)

        }
        {langsAndTools.map((langAndTool) =>
                <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                    {langAndTool}
                </span>)
        }
    </div>
  </div>
    )};

export default Jobs;
