import React from "react";
import DegreesCard from "./DegreesCard";

const DegreesGroup=({title, degreesGroupObject})=>{
    return(
        <div>
            {/* We need to put out the title then iterate */}
            <h2>{title} Degrees</h2>
            <div className="degreesList">
                {degreesGroupObject.map((p, i)=>
                    <div key={i} className="degreeListItem">
                        {/* Triple dots means that you pass in all elements of an object*/}
                        <DegreesCard {...p}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DegreesGroup;