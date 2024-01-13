//room for includes
import React, {useState} from 'react'
import getData from '../../utils/getData';
import { Tab } from 'semantic-ui-react'
import DegreesGroup from './DegreesGroup'

const DegreesTabs = () => {
    //"instance vars"
    const [loaded, setDegLoaded] = useState(false);
    const [DegObj, setDegObj] = useState();

    const panes = [
        { menuItem: 'Undergraduate', render: () => <Tab.Pane>
            <DegreesGroup title="Undergraduate" degreesGroupObject={DegObj.undergraduate}/>
        </Tab.Pane> },
        { menuItem: 'Graduate', render: () => <Tab.Pane>
            <DegreesGroup title="Graduate" degreesGroupObject={DegObj.graduate}/>
        </Tab.Pane> },
    ]
    
    //methods
    React.useEffect(()=>{
        getData('degrees/')
            .then((json)=>{
                console.log('degrees',json);
                setDegObj(json);
                setDegLoaded(true);
            })
    }, []);

    //fading animation
    if (!loaded) return(
        <>
            <div className='fading-big'></div>
            <div className='fading-big'></div>
            <div className='fading'></div>
        </>
    )

    return(
        <>
            <h2>Degrees</h2>
            {/*Now I need degrees*/}
            <Tab panes={panes}/>
        </>
    )

}

export default DegreesTabs;
