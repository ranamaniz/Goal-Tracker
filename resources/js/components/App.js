import React from 'react';
import ReactDOM from 'react-dom';
import AddSubject from './subjects/AddSubject';
import ShowSubjects from './subjects/ShowSubjects';


class App extends React.Component{
    render(){
        return (
            <div>
            	<ShowSubjects />
                <AddSubject />
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
