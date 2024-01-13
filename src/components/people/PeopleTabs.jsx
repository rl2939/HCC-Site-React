//room for includes
import React, {useState} from 'react'
import getData from '../../utils/getData';
import { Tab } from 'semantic-ui-react'
import PeopleGroup from './PeopleGroup'

const PeopleTabs = () => {
    //"instance vars"
    const [loaded, setPepLoaded] = useState(false);
    const [pepObj, setPepObj] = useState();

    const panes = [
        { menuItem: 'Faculity', render: () => <Tab.Pane>
            <PeopleGroup title="Faculty" peopleGroupObject={pepObj.faculty}/>
        </Tab.Pane> },
        { menuItem: 'Staff', render: () => <Tab.Pane>
            <PeopleGroup title="Staff" peopleGroupObject={pepObj.staff}/>
        </Tab.Pane> },
    ]
    
    //methods
    React.useEffect(()=>{
        getData('people/')
            .then((json)=>{
                console.log('peps',json);
                setPepObj(json);
                setPepLoaded(true);
            })
    }, []);

    //fading animation
    if (!loaded) return(
        <>
            <div className='fading-big'></div>
        </>
    )

    return(
        <>
            <h2>{pepObj.title}</h2>
            <h3>{pepObj.subtitle}</h3>
            {/*Now I need tabs*/}
            <Tab panes={panes}/>
        </>
    )

}

export default PeopleTabs;

/*
const People = () =>{
    //"instance vars"
    const [loaded, setPepLoaded] = useState(false);
    const [pepObj, setPepObj] = useState();
    
    //methods
    React.useEffect(()=>{
        getData('people/')
            .then((json)=>{
                console.log('peps',json);
                setPepObj(json);
                setPepLoaded(true);
            })
    }, []);

    if (!loaded) return(
        <>
            <h1>Hello from People</h1>
            <h2>Loading...</h2>
        </>
    )

    return(
        <>
            <h2>{pepObj.title}</h2>
            <h3>{pepObj.subtitle}</h3>

            <h3>Faculty</h3>
            {/* map is the object iterator in React * /}
            <div className='peopleList'>
                {pepObj.faculty.map((p) =>
                    <div key={p.email} className='peopleListItem'>
                        <h3>{p.name}</h3>
                        <img src={p.imagePath} alt="person"></img>
                    </div>
                )}
            </div>
            <h3>Staff</h3>
            <div className='peopleList'>
                {pepObj.staff.map((p) =>
                    <div key={p.email} className='peopleListItem'>
                        <h3>{p.name}</h3>
                        <img src={p.imagePath} alt="person"></img>
                    </div>
                )}
            </div>
        </>

    )
}*/
