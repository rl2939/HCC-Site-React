//room for includes
import React, {useState} from 'react'
import getData from '../../utils/getData';
import EmploymentCard from './EmploymentCard';
import EmploymentModal from './EmploymentModal';

const EmploymentGroup = () => {
    //"instance vars"
    const [loaded, setEmploymentLoaded] = useState(false);
    const [EmploymentObj, setEmploymentObj] = useState();
    
    //methods
    React.useEffect(()=>{
        getData('employment/')
            .then((json)=>{
                console.log('employment',json);
                setEmploymentObj(json);
                setEmploymentLoaded(true);
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
            <h2>Employment</h2>
            <div className='employment'>
                <h3>{EmploymentObj.introduction.title}</h3>
                <div className="flex-container">
                    {EmploymentObj.introduction.content.map((p, i)=>
                        <div key={i}>
                            {/* Triple dots means that you pass in all elements of an object*/}
                            <EmploymentCard {...p}/>
                        </div>
                    )}
                </div>
                <h3>{EmploymentObj.degreeStatistics.title}</h3>
                <div className="flex-container">    
                    {EmploymentObj.degreeStatistics.statistics.map((p, i)=>
                        <div key={i}>
                            {/* Triple dots means that you pass in all elements of an object*/}
                            <EmploymentCard {...p}/>
                        </div>
                    )}
                </div>
                <h3>{EmploymentObj.employers.title}</h3>
                <div className="flex-container white">
                    {EmploymentObj.employers.employerNames.map((p, i)=>
                        <div key={i}>
                            {p}
                        </div>
                    )}
                </div>
                <h3>{EmploymentObj.careers.title}</h3>
                <div className="flex-container white">
                    {EmploymentObj.careers.careerNames.map((p, i)=>
                        <div key={i}>
                            {p}
                        </div>
                    )}
                </div>
                <h3>View Our Employment Tables</h3>
                <div className='flex-container white'>
                    <div className="">
                        <EmploymentModal data={EmploymentObj.coopTable} coopType={true}/>
                        {/* Iteration should not happen here, it should happen in the Modal*/}
                    </div>
                    <div className="">
                        <EmploymentModal data={EmploymentObj.employmentTable} coopType={false}/>
                    </div>
                </div>
            </div>
        </>
    )
}

/*



*/

export default EmploymentGroup;