import React from 'react'


import './home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Test board'
        }
    }

    setText(text) {
        this.setState({
            text
        });
    }

    slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .replace(/[\s\W-]+/g, '-');
    }

    goToProblem(event) {
        event.preventDefault();
        this.props.history.push(`/problem/${this.slugify(this.state.text)}`);
    }

    render() {
        return (
            <div className="home-page">
                <h2>Search for Euler problem from 1 to 635</h2>
                <form onSubmit={e => this.goToProblem(e)}>
                    <input type="text" value={this.slugify(this.state.text)}
                        onChange={e => this.setText(e.target.value)} />
                    <button>Go to board</button>
                </form>
            </div>
        );
    }
}
