import { Fragment } from "react";
import Hero from "@/components/home-pages/hero";
import FeaturedPosts from "@/components/home-pages/featured-posts";

//设置虚拟帖子的属性
const DUMMY_POSTS = [
  {
    slug:'getting-started-with=nextjs',
    title:'Getting Started with NextJS',
    image:'getting-started-with=nextjs,png',
    excerpt:'这是一段简述。',
    date:'2023-02-21',
  }
];

function HomePages(){
  return <Fragment>
    <Hero />
    <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
}

export default HomePages;

//1）想要展示的介绍部分
//2）特色的帖子