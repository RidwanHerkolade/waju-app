import React from 'react';
import { BarChart, Bar, XAxis, YAxis,  Tooltip, ResponsiveContainer} from 'recharts';
import './Chart.css'

function Charts(){

  // CREATING A BAR CHART USING REACT RECHART
    const data = [
        {
          name: '2014',
          student: 60,
          number: 50,
        },
        {
          name: '2015',
          student: 100,
          number: 60,
        },
        {
          name: '2016',
          student: 150,
          number: 60,
        },
        {
          name: '2017',
          student: 200,
          number: 60,
        },
        {
          name: '2018',
          student: 170,
          number: 60,
        },
        {
          name: '2019',
          student: 185,
          number: 60,
        },
        {
          name: '2020',
          student: 250,
          number: 60,
        },
        {
          name: '2021',
          student: 185,
          number: 60,
        },
        {
          name: '2022',
          student: 230,
          number: 60,
        },
        {
          name: '2023',
          student: 160,
          number: 60,
        },
      ];
      
    return (
        <div className='chart'>
           <div className='header__blake'>Blake e-learning traction</div>
                   
                  
                    <ResponsiveContainer width="80%" height="70%" padding= "1rem"className="color">
                       <BarChart
                           width={300}
                           height={20}
                           data={data}   
                            barSize={40}

                     >
    
                     <XAxis dataKey="name" padding={{ left: 15, right: 15}} className="x-axis"/>
                     <YAxis />
                     <Tooltip/>
                     <Bar dataKey="student"  fill='#615CA4'/>
                     </BarChart>
                     </ResponsiveContainer>   
            
                    
                 
                  
        
        </div>

    )
}
export default Charts;