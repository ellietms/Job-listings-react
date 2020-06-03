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
}) => (
  <div className="flex bg-white shadow-md m-4 p-4">
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
    <div>
        { languages ? 
            languages.map((lang) =>
                <span>
                    {lang}
                </span>) : ''
        }
        { tools ? 
            tools.map((tool) => 
           <span>
               {tool}
           </span>  
            ) : ''
        }
    </div>
  </div>
);

export default Jobs;
