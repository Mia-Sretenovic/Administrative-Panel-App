import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        }
    }

    changeHandler = ({ target }) => {
        this.setState({ searchString: target.value });
        this.props.useSearchString(target.value);
    }

    

    render() {
        return (<div className="row search" >
            <div className="col-8">
                <input type='text' value={this.state.searchString} onChange={this.changeHandler}
                    placeholder="Search candidates" />
            </div>
            <div className="col-4">
            </div>

        </div>
        );
    }
}

export default Search;