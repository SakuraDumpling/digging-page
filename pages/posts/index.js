import AllPosts from "@/components/posts/all-posts";

//暂时使用的虚拟帖子
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

function AllPostsPages(){
    return <AllPosts posts={DUMMY_POSTS}/>
}

export default AllPostsPages;