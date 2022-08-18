import React from 'react';
import { Link } from 'react-router-dom';
import Graph from './Graph'
import Content from './Content'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function west_bengal() {
  return(
       <div className='home'>
            <div className='home_head'>
                <div className='home_left'>
                    <p className='home_title'><span className='home_in'>IN</span><span className='home_d'>D</span><span className='home_ia'>IA</span></p>
                    <p className='home_selectone'><ArrowForwardIosIcon/>West Bengal<select className='home_select'>
                        <option value='meghalaya'>west bengal</option>
                        <Link to="/west bengal">
                        <option value='west bengal'>assam</option>
                        </Link>
                        <Link to="/meghalaya">
                        <option value='meghalaya'>meghalaya</option>
                        </Link>
                        <Link to="/punjab">
                        <option value='punjab'>punjab</option>
                        </Link>
                        <Link to="/odisha">
                        <option value='odisha'>odisha</option>
                        </Link>
                        <Link to="/andhra pradesh">
                        <option value='andhra pradesh'>andhra pradesh</option>
                        </Link>
                        <Link to="/chandigarh">
                        <option value='chandigarh'>chandigarh</option>
                        </Link>
                        <Link to="/uttrakhand">
                        <option value='uttrakhand'>uttrakhand</option>
                        </Link>
                        <Link to="/tamil nadu">
                        <option value='tamil nadu'>tamil nadu</option>
                        </Link>
                        <Link to="/sikkim">
                        <option value='sikkim'>sikkim</option>
                        </Link>
                    </select></p>
                    <div className='home_statement'>
                        <p>In 2010, <strong>West Bengal</strong> had <strong>253kha</strong> of natural forest, extending over <strong>3.9%</strong> of its land area. In 2020, 
                            it <strong>lost 159ha</strong> of natural forest, equivalent to <strong>76.0kt</strong> of emissions.</p>
                    </div>
                </div>
                <section className='home_image'>
                    <img className='bottom' src='https://content.globalforestwatch.org/wp-content/uploads/2018/06/38108148404_f05e9fa671_z.jpg' alt=''/>
                    <img className='top' src='https://services.meteored.com/img/article/la-forestacion-una-alternativa-contra-el-calentamiento-global-ecologia-cambio-climatico-sembrar-arboles-358431-1_1024.jpeg' alt=''/>
                </section>
            </div> 
            <div className='home_explore'>
                <p>Explore Graphs and basic Data information to know about the loss in the total tree cover area taken place in <b>WEST BENGAL</b> between the years <strong>2001</strong> to <strong>2020</strong> </p>
            </div>
            <div className='home_body'>
                <Graph
                    titleone='FROM 2002 TO 2020'
                    title='Here ia a graph showing decline in the total tree cover in West Beangal.'
                    image='11.jpg'
                />
            

                <Graph
                    titleone='FROM 2002 TO 2017'
                    title='Here ia a graph showing the total area of tree cover loss in India.'
                    image='https://pbs.twimg.com/media/D45Vr0_U0AUsFqi.jpg'
                />

            </div>
            <div className='home_body_two'>
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
                    titleagain='Tree Cover Loss in Assam'
                    info='Top 5 regions responsible for maximum tree cover loss in West Bengal between the years 2001 and 2020 with the top 1 region being responsible for 58% of all tree cover loss:-'
                    p1='ALIPURDWAR'
                    p2='JALPAIGURI'
                    p3='DARJILING'
                    p4='PASCHIM MEDINIPUR'
                    p5='UTTAR DINAJPUR'
                />
                <Content
                    titleagain='Tree Cover Loss in india'
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
};

export default west_bengal;
