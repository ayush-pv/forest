import React from 'react'
import './Home.css'
import Graph from './Graph'
import Content from './Content'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home_home'>
            <div className='hometrial'>
                <p className='hometrial_india'><span className='home_in'>IN</span><span className='home_d'>D</span><span className='home_ia'>IA</span></p>
                <p className='hometrial_selectone'><ArrowForwardIosIcon />Select State
                    <select onChange={(e) => { window.location.href = "/" + e.target.value }} className='hometrial_select'>
                        <option>Choose from the dropdown list</option>
                        <option value='assam' >assam </option>
                        <option value='meghalaya'>meghalaya</option>
                        <option value='punjab'>punjab</option>
                        <option value='odisha'>odisha</option>
                        <option value='andhra pradesh'>andhra pradesh</option>
                        <option value='chandigarh'>chandigarh</option>
                        <option value='west bengal'>west bengal</option>
                        <option value='uttrakhand'>uttrakhand</option>
                        <option value='tamil nadu'>tamil nadu</option>
                        <option value='sikkim'>sikkim</option>
                    </select></p>
                <div className='hometrial_statement'>
                    <p>Select a <strong>state</strong> from the above dropdown list to know where can further <strong>rainforestment</strong> take place in that particular state
                        to know which plantations having high levels of <b>Oxygen</b> can be grown in those states that suits the <strong>soil type</strong> and <strong>climatical conditions</strong> available for <strong>plant growth</strong>.</p>
                </div>
                <div>
                    <Link to='about'>
                        <p className='hometrial_readmore'>Read More</p>
                    </Link>
                </div>
            </div>
            <div className='hometrial_explore'>
                <p>Explore Graphs and basic Data information to know about the loss in the total tree cover area taken place Globally and in India between the years <strong>2001</strong> to <strong>2020</strong> </p>
            </div>
            <div className='hometrial_body'>
                <Graph
                    titleone='FROM 2002 TO 2020'
                    title='Here ia a graph showing decline in the total tree cover area globally.'
                    image='https://imgs.mongabay.com/wp-content/uploads/sites/20/2021/03/31001809/tropical-primary-and-tree-cover-loss-2020.jpg'
                />

                <Graph
                    titleone='FROM 2002 TO 2017'
                    title='Here ia a graph showing decline in the total tree cover area in India.'
                    image='https://pbs.twimg.com/media/D45Vr0_U0AUsFqi.jpg'
                />

            </div>
            <div className='hometrial_body_two'>
                <Content
                    titleagain='Tree Cover Loss in india'
                    info='Top 5 regions responsible for maximum tree cover loss in India between the years 2001 and 2020 are:-'
                    p1='ASSAM'
                    p2='MIZORAM'
                    p3='NAGALAND'
                    p4='ARUNACHAL PRADESH'
                    p5='MANIPUR'
                />
                <Content
                    titleagain='Tree Cover Loss Golobally'
                    info='Top 5 regions responsible for maximum tree cover loss Globally between the years 2001 and 2020 are:-'
                    p1='RUSSIA'
                    p2='UNITED STATES'
                    p3='CANADA'
                    p4='BRAZIL'
                    p5='INDONESIA'
                />
                <Content
                    titleagain='Minimal tree Cover Loss in india'
                    info='Top 5 regions responsible for minimum tree cover loss in India between the years 2001 and 2020 are:-'
                    p1='GUJARAT'
                    p2='CHANDIGARH'
                    p3='NCT OF DELHI'
                    p4='DADRA AND NAGAR HAVELI'
                    p5='DaAMAN AND DIUs'
                />
            </div>
        </div>
    )
}

export default Home
