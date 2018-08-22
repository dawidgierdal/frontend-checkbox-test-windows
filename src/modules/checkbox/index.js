/* eslint-disable */
import React from 'react';


// class Hidden extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//         }
//     }
//     render(){
//         return <div className="hidden-content">
//             hidden content
//         </div>
//     }
// }
//
// class Checkbox extends React.Component {
//     render() {
//         return(
//             <div className="checkbox">
//                 <div className="title">
//                     Checkbox
//                 </div>
//                 <div className="content">
//                     <label className="switch">
//                     <input type="checkbox" />
//                     <span className="slider round"> </span>
//                     </label>
//                 </div>
//                 <Hidden/>
//             </div>
//         );
//     }
// }

class Checkbox extends React.Component {
    constructor() {
        super();

        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        const content = this.state.checked
            ? <div className="hidden-content"> hidden content </div>
            : null;

        return <div className="checkbox">
            Checkbox
                    <div className="center">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={ this.state.checked }
                                onChange={ this.handleChange } />
                            <span className="slider round"> </span>
                        </label>
                <div className="content">
           </div>
            </div>

            { content }
        </div>;
    }
}

export default Checkbox;