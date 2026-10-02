import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

interface SectionMarkdownProps {
  content: string;
  className?: string;
}

/** Consistent markdown rendering for gated long-form sections — same pattern as the blog. */
export default function SectionMarkdown({ content, className }: SectionMarkdownProps) {
  return (
    <div className={cn('prose prose-sm prose-invert max-w-none', className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
