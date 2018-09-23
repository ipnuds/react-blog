import React from 'react'

class BlogListing extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
            <p>{this.props.author}</p>
            </div>
        )
    }
}

export default BlogListing