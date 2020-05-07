import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ShowSubjects extends React.Component{
    constructor(){
        super();
        this.state={
            subjects:[]
        };
        
    }

    componentDidMount(){
    	axios.get('http://127.0.0.1:8000/subject/show').then(
        (response)=>{
          console.log(response.data);
          
          this.setState((prevState)=>{
              return {subjects:response.data};
            }
          )

          console.log(this.state.subjects);
        });

    }

    render(){
      const count=0;
      return(
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Subjects List</h1>
                { 
                  // let count=0;
                  this.state.subjects.map((subject)=>{
                     // count++;
                     return (
                        <h3>
                          {count}
                          <span>{subject.id}</span>
                          {subject.subject_name}
                        </h3>
                      );  
                    }
                  ) 
                }
              </div>
            </div>
          </div>
           
        )

    }
}

export default ShowSubjects;

