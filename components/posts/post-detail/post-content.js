//导入解析markdown的包
import reactMarkdown from "react-markdown";
import PostsHeader from "./post-header";
import classes from './post-content.module.css';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


const DUMMY_POST = {
    slug:'getting-started-with-nextjs',
      title:'Html相关内容',
      image:'getting-started-with-nextjs.png',
      date:'2023-02-21',
      content:'# 这是第一篇文章'
};

function PostsContent(){
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostsHeader  title={DUMMY_POST.title} image={imagePath}/>
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    );
    
}

export default PostsContent;