import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken, faHeartCircleBolt, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './post-list-item.css';

class PostListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            important: false,
            like: false
        }

        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);

    }
    
    onImportant() {                        
        
        console.log(this.state.important);
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {                        
        
        console.log(this.state.like);
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        // console.log(this);
        const {label} = this.props;
        const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (            
            <div className={classNames}>
                <span 
                onClick={this.onLike}
                className="app-list-item-label">
                {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.onImportant} type="button" className="btn-star btn-sm">
                        <FontAwesomeIcon icon={faStar} />
                        
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <FontAwesomeIcon icon={faTrashAlt} />
                        
                    </button>
                    
                    <button type="button" className="btn-heart btn-sm">
                        
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    
                </div>
            </div>
    
        )
    }

}

// const PostListItem = () => {

// }

export default PostListItem;