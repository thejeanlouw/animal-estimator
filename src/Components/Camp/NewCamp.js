import React, { Component } from 'react'

class NewCamp extends Component {
    state = {
        identifier: '',
        animaltype: '',
        additional: '',
        farm: ''
    }

    handleChange = (e) =>
    {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New Camp</h5>

                    <div className="input-field">
                        <label htmlFor="identifier">Identifier</label>
                        <input type="text" id="identifier" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="animaltype">Animal Type</label>
                        <input type="text" id="animaltype" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="additional">Additional</label>
                        <textarea  className="materialize-textarea" id="additional" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <label htmlFor="farm">Farm</label>
                        <input type="text" id="farm" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewCamp
