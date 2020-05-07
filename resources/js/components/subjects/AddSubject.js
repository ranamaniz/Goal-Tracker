import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddSubject extends React.Component{
    constructor(){
        super();
        this.state={
            subjectName:'',
            formSubmitted:false
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeSubjectName = this.onChangeSubjectName.bind(this);
        // this.formSubmitRenew = this.formSubmitRenew.bind(this);
    }

    onChangeSubjectName(e){
        this.setState({
            subjectName: e.target.value
        });
    }

    onFormSubmit(e){
        e.preventDefault();
        const subject={
            subject_name:this.state.subjectName
        }; 

        axios.post('http://127.0.0.1:8000/subject/store',subject).
        then((res)=>{console.log(res)});

        this.setState(
            (prevState)=>{
                return { 
                    subjectName:'',
                    formSubmitted: true
                    };
                }
            );
        setTimeOut(formSubmitRenew,5000);
    }

    // formSubmitRenew(){
    //     console.log('fetch');
    //     this.setState((prevState)=>{
    //         formSubmitted:false
    //     });
    // }

    render(){
        const afterSubmitStyle= this.state.formSubmitted?{'display':'none'}:{'display':'block'};
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="text-success" style={afterSubmitStyle}> Subject Sucessfully Added</div>
                        <form onSubmit={this.onFormSubmit}>
                            <div className="form-group">
                                <label >Subject or Topic To Learn:</label>
                                <input  id="subjectName" 
                                        type="text" 
                                        value={this.state.subjectName}    
                                        className="form-control" 
                                        onChange={this.onChangeSubjectName}
                                />
                            </div>
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSubject;

