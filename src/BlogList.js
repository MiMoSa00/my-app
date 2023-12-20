import blogs from './Task.js';
const BlogList = (props) => {
    const blogs = props.blogs;
    return (
        <div className="Blog-list">
              {blogs.map((blogs) => (
            <div className="blog-preview" key={blogs.id}>
         <h2>{ blogs.title }</h2>
         <p>Written by { blogs.author }</p>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;
   
