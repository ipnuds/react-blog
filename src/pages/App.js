import React from 'react'
import Search from '../components/SearchBar'
import BlogList from '../components/BlogListing'


const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            blogs: [],
            blogsFiltered: []
        }
    }

    componentDidMount() {
        this.handleGetBlogs()
    }

    handleGetBlogs = () => {
        fetch(link)
            .then(res => res.json())
            .then(res => this.setState({blogs: res, blogsFiltered:res, loading: false}))
    }

    handleTypeSearch = (event) => {
        const blogsFiltered = this.state.blogs.filter( 
            blog => blog.title.toLowerCase().indexOf(event.target.value) > -1
            )

        this.setState({
            search : event.target.value,
            blogsFiltered
        })
    }

    render() {
        if(this.state.loading) {
            return (
                <h1>Loading</h1>
            )
        }
        return (            
            <div style={styles.body}>
                <Search
                 onChangeSearch={this.handleTypeSearch}
                />
                {this.state.blogsFiltered.map((blog,index) =>  (
                    <BlogList 
                        key={index} 
                        author={blog.author} 
                        title={blog.title} 
                        content={blog.content} 
                    />                    
                ))}
                </div>
        )
    }
}
export default App

const styles = {
    body :{
        margin: '0 auto',
        maxWidth: '50em',
        fontFamily: "sans-serif",
        lineHeight: '1.5',
        color: '#555',
        padding: '4em 1em',
      }
}