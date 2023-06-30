import { ArrowRight } from 'lucide-react';

import { Post } from '@/types/collection';
import { getReadingTime } from '@/lib/helpers';
import { getRelativeDate } from '@/lib/helpers';
interface PostContentProps {
  post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div className="text-sm gap-2 items-center flex text-neutral-400">
        <div
          className={`font-medium ${
            post.category.title === 'Cities'
              ? 'text-emerald-600'
              : 'text-indigo-600'
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{getReadingTime(post.body)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      {/* title */}
      <h2 className="@lg:text-3xl text-xl @md:text-2xl font-medium">
        {post.title}
      </h2>
      {/* Description */}
      <p className="text-base @lg:text-lg text-neutral-600 leading-snug">
        {post.description}
      </p>
      {/* Read More */}
      <div className="flex items-center gap-2 pt-3">
        Read More <ArrowRight size="14" />
      </div>
    </div>
  );
};

export default PostContent;
