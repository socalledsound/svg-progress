import React from 'react'

const num1 = 32;
const num2 = 15;


const tasks = [
    {
        id: 0,
        name: 'thing',
        done: false, 
    },
    {
        id: 1,
        name: 'other thing',
        done: false,

    },
    {
        id: 2,
        name: 'tacos',
        done: false
    },
    {
        id: 3,
        name: 'yaya',
        done: false,
    },
    {
        id: 4,
        name: 'tada',
        done: false
    }
]


const App = () => {
    return (  
    <div>    
        <div>
            <svg 
                viewBox={{}`0 0 30 ${tasks.length * 50}`}
                width="30"
                    
            >    
        <title id="timeline">timeline element</title>
        <line x1="10" x2="10" y1={num2} y2={tasks.length * num1 - num2} />
        {tasks.map((task) => (
           <circle
            // key={task.id}
             key={`mt-circle-${task.name}-${index}`}
             onClick={updateDoneTasks(index)}
             cx="10"
             r="4"
             cy={index * +num1 + +num2}
             fill={
               task.slug.current === currentStage ? 'currentColor' : 'black'
             }
             className={styles['tracker-select']}
           />
         ))}
        
            </svg>
        </div>
        <div>
             <div>
                 {{ task.name }}
             </div>
        </div>     
    </div>    
    );
}
 
export default App;