import React, {Component} from 'react';

class Photo extends Component
{
    render()
    {
        return (
            <img src={this.props.url} alt="" /> 
        );
    }
}

export default Photo;