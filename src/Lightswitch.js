import react, { Component } from 'react';
                
                
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }
    
    render() {
        return (
            <fieldset>
                <p>The light is currently { this.state.position }</p>
                <button onClick={ this.flipSwitch }>Flip Switch</button>
            </fieldset>
        );
    }
    flipSwitch = () => {
        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }
}
                
export default LightSwitch;