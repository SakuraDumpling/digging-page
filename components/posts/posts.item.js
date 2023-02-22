//因为帖子是需要链接的，所以导入link
import Link from "next/link";
//导入图片
import Image from "next/image";
//导入相关样式
import classes from './post-item.module.css';

function PostItem(props){
    const { title, image, excerpt, date, slug } = props.post;
    //date的显示格式可能不对，所以需要写一段确保格式正确的代码,并确定一个参照对象，这里选择中国
    const formattedDate = new Date(date).toDateString('zh-CN',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });

    //图像的来源,这里框选的是分词的标点
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

     /**此处教程里链接需要再加一个a的标签告诉链接应该呈现锚标记，但我制作的时候加上a会报错 */
    return (
    <li className={classes.post}>
        <Link href={linkPath}>
            <div className={classes.div}>
                <div className={classes.image}>
                    <Image  src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </div>
        </Link>
    </li>
    );
}

export default PostItem;