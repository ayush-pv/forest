import React from 'react';
import './Graph.css';

function Graph({titleone,title, image }) {

    return (
        <div className="graph">
          <div className="graph_info">
            <p className='graph_infohead'><strong>{titleone}</strong></p>
            <p>{title}</p>
          </div>
    
          <img className='graph_image' src={image} alt="" />
    
        </div>
      );
    }
    
    export default Graph;
