import { Link } from 'react-router-dom';

const Posts = ({posts}) => {
    return (
      <div>
        <h1>Posts</h1>
        <ol>
            {
                posts.map( post => {
                  return (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title} 
                        </Link>
                    </li>
                    );
                })
            }
        </ol>
      </div>
    );
  };

  export default Posts;