import React from 'react';
import './top5.scss';

function Top5(){
  return(
    <>
      <div className='top5'>
        <div className="title">
          <span>Top 5</span>
        </div>
        <div className="content">
          <div>
            <h4> Highest AVG age </h4>
            <div className='ranking' >
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
            </div>
          </div>
          <div>
            <h4> Lowest AVG age </h4>
            <div className='ranking' >
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
              <div className='team'> 
                <span className='name'>Inter Milan</span>
                <span className='avg'>90</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top5;