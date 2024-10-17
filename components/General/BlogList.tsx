import Link from 'next/link';
import { Post } from '../../types/post';

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="max-w-xl mx-auto"> {/* Added max-width and centering */}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="flex justify-between items-baseline border-b pb-2">
            <Link href={`/${post.slug}`} className="hover:underline font-bold text-lg">
              {post.title}
            </Link>
            <div className="text-sm text-gray-500 flex items-center space-x-2">
              <span>{post.category}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
