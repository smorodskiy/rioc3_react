import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './post-list-item.css';

// console.log(this);
class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.counter = this.counter.bind(this);
        // console.log(props);
    }
    
    counter() {        
        // console.log(this);
        // this.setState(state => ({
        //     count: ++state.count
        // }));
    }

    render() {
        // console.log(this);
        const {label, important = false} = this.props;


        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }

        return (            
            <div className={classNames}>
                <span className="app-list-item-label">
                    {label}                    
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.counter} type="button" className="btn-star btn-sm">
                        <FontAwesomeIcon icon={faStar} />
                        {/* <i></i> */}
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <FontAwesomeIcon icon={faTrashAlt} />
                        {/* <i></i> */}
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
    
        )
    }

}

// const PostListItem = () => {

// }

export default PostListItem;