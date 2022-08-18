import React from 'react';
import './Content.css';

function Content({titleagain,info,p1,p2,p3,p4,p5}) {
    return (
        <div className='content'>
            <p className='content_title'><strong>{titleagain}</strong></p>
            <p className='content_info'>{info}</p>
            <div>
                <ol  className='content_list'>
                    <li><span className='content_liststyle'>{p1}</span></li><br/>
                    <li><span className='content_liststyle'>{p2}</span></li><br/>
                    <li><span className='content_liststyle'>{p3}</span></li><br/>
                    <li><span className='content_liststyle'>{p4}</span></li><br/>
                    <li><span className='content_liststyle'>{p5}</span></li><br/>
                </ol>
            </div>
        </div>
    )
}

export default Content
