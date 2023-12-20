import { useState  } from "react";
import BlogList from './BlogList';

const Task = () => {
    const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum....', author: 'mimi', id: 1},
    { title: 'Welcome to the party!', body: 'lorem ipsum....', author: 'esosa', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum....', author: 'okpaise', id: 3}
]);

 return (
    <div className="home">
   <BlogList blogs={blogs} />
        
    </div>
);
}


export default Task;