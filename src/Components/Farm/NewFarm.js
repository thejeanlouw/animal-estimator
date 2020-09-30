import React, { Component } from 'react'

class NewFarm extends Component {
    state = {
        title: '',
        description: '',
        geolocation: '',
        company: ''
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
                    <h5 className="grey-text text-darken-3">New Farm</h5>

                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea  className="materialize-textarea" id="description" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <label htmlFor="geolocation">Geolocation</label>
                        <input type="text" id="geolocation" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewFarm
