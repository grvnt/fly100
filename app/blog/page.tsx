import { headers } from 'next/headers';

async function fetchBlogContent(path: string) {
  const res = await fetch(`https://blog.fly100.co${path}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch blog content');
  }
  
  return res.text();
}

export default async function BlogPage() {
  const headersList = headers();
  const path = headersList.get('x-invoke-path') || '/';
  
  try {
    const content = await fetchBlogContent(path.replace('/blog', ''));
    
    return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    );
  } catch (error) {
    console.error('Error fetching blog content:', error);
    return <div>Error loading blog content. Please try again later.</div>;
  }
}

export const dynamic = 'force-dynamic';