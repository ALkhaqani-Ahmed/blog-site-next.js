import Hero from "../components/home-page/hero";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-post";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Ahmed</title>
        <meta name='description'
        content="I post about programing and my works" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60
  };
}

export default HomePage;
