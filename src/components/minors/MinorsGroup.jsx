//room for includes
import React, {useState} from 'react'
import getData from '../../utils/getData';
import MinorsAccordion from './MinorsAccordion';

const MinorsGroup = () => {
    //"instance vars"
    const [loaded, setMinorLoaded] = useState(false);
    const [MinorObj, setMinorObj] = useState();
    
    //methods
    React.useEffect(()=>{
        getData('minors/')
            .then((json)=>{
                console.log('minors',json);
                setMinorObj(json);
                setMinorLoaded(true);
            })
    }, []);

    //fading animation
    if (!loaded) return(
        <>
            <div className='fading-big'></div>
            <div className='fading'></div>
            <div className='fading'></div>
        </>
    )
    return(
        <>
            {/* We need to put out the title then iterate */}
            <h2>Minors</h2>
            <div className="degreesList">
                {MinorObj.UgMinors.map((p, i)=>
                    <div key={i} className="degreeListItem">
                        {/* Triple dots means that you pass in all elements of an object*/}
                        <MinorsAccordion title="Minors" {...p}/>
                    </div>
                )}
            </div>
        </>
    )

}

export default MinorsGroup;