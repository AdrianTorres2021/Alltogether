import React from "react";

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            clicks: this.props.age,
        };
    }
    render(){
        return(
            <div>
                <h1>{this.props.firstname}, {this.props.lastname}</h1>
                <p>age: {this.state.clicks}</p>
                <p>Hair Color: {this.props.haircolor}</p>
                <button onClick={ this.IncrementItem }>Birthday Button for {this.props.firstname} {this.props.lastname}</button>
            </div>
        )
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
}
}
export default PersonCard;




