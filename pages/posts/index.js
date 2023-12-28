import AllPosts from "../../components/posts/all-poest";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";


function AllPostsPage(props) {
    return (
      <>
      <Head>
        <title>All Posts</title>
        <meta name='description'
        content="A list of all my works"/> 
      </Head>
      <AllPosts posts={props.posts}/>
      </>
    ) 
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage;