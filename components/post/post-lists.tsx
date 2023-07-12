import { Post } from '@/types/collection';
import PostCard from './post-card';

interface PostListProps {
  posts: Post[];
  layout?: 'vertical' | 'horizontal';
}

//posts comes from app/page.tsx where the post data is fed in via props and recieved here.
const PostList = ({ posts, layout = 'vertical' }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr">
      {posts?.map(post => (
        <PostCard layout={layout} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
