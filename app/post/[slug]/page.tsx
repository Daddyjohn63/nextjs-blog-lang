import { DUMMY_POSTS } from '@/DUMMY_DATA';
import { notFound } from 'next/navigation';
import PaddingContainer from '@/components/layout/padding-container';
import PostHero from '@/components/post/post-hero';

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map(post => {
    return {
      slug: post.slug
    };
  });
};

const Page = ({
  params
}: {
  params: {
    slug: string;
  };
}) => {
  // return <div>{params.slug}</div>;
  const post = DUMMY_POSTS.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  //return <PaddingContainer> {post?.title}</PaddingContainer>; //we add the ? in case there is no title available
  return (
    <PaddingContainer>
      <PostHero post={post} />
      <div className="flex gap-10 mt-10">
        <div className="relative">
          <div className="sticky top-20">Share</div>
        </div>

        <div className="h-[1200px] bg-slate-200 w-full">Post Body</div>
      </div>
    </PaddingContainer>
  );
};

export default Page;
