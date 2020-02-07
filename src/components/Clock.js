import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)    

        this.state = {
            timer: new Date().toLocaleDateString()
        }
    };

    componentDidMount() {
       let interval_id = setInterval( () => {
            // Não fazer assim
            // this.state.timer = new Date().toLocaleDateString()
            this.setState({
                timer: new Date().toLocaleTimeString()
            })
            // setState actualiza un estado con los parámetros que le pase
        }, 1000)

        this.setState({
            ...this.state,
            interval_id: interval_id
        })
    }

  
    // Guarda en un estado para poder utilizarlo

    componentWillUnmount() {
        clearInterval(this.state.interval_id);
    }

    render() {
        return ( 
            <div>
                <h1>{this.state.timer}</h1>
            </div>
        )
    }
}