//引入相关的css，注意是PostItem，而不是classes
import PostItem from './posts.item';
//引入样式S
import classes from './posts-grid.module.css';


function PostsGrid(props) {
    const { posts } = props;
    /**动态输出每个帖子到每一个帖子的项目里*/
    /**用到了css里渲染的网格列 */
    return (
        <ul className={classes.grid}>
            {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
        ))}
        </ul>
    );
}

export default PostsGrid;