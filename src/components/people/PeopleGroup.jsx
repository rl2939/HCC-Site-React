import React from "react";
import PeopleModal from "./PeopleModal";

const PeopleGroup=({title, peopleGroupObject})=>{
    return(
        <div>
            {/* We need to put out the title then iterate */}
            <h2>{title}</h2>
            <div className="peopleList">
                {peopleGroupObject.map((p, i)=>
                    <div key={i} className="peopleListItem">
                        <img src={p.imagePath} alt="person"/>
                        {/* Triple dots means that you pass in all elements of an object*/}
                        <PeopleModal {...p}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PeopleGroup;