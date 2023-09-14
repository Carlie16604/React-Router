import { Link } from 'react-router-dom';

const Posts = ({posts}) => {
    return (
      <div>
        <h2>Posts</h2>
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
      </div>
    );
  };

  export default Posts;