import { Fragment } from "react";
import Hero from "@/components/home-pages/hero";
import FeaturedPosts from "@/components/home-pages/featured-posts";

//设置虚拟帖子的属性
const DUMMY_POSTS = [
  {
    slug:'getting-started-with-nextjs',
    title:'Html相关内容',
    image:'getting-started-with-nextjs.png',
    excerpt:'HTML',
    date:'2023-02-21',
  },
  {
    slug:'getting-started-with-nextjs1',
    title:'Getting Started with NextJS',
    image:'getting-started-with-nextjs.png',
    excerpt:'HTML',
    date:'2023-02-22',
  },
  {
    slug:'getting-started-with-nextjs2',
    title:'CSS',
    image:'getting-started-with-nextjs2.jpg',
    excerpt:'CSS',
    date:'2023-02-23',
  }
];

function HomePages(){
  return <Fragment>
    <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
}

export default HomePages;

//1）想要展示的介绍部分
//2）特色的帖子