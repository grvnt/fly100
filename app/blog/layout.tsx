import React from 'react';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <main>{children}</main>
      <footer className="py-8 mt-8 border-t">
        <p>&copy; fly100.co. All rights reserved.</p>
      </footer>
    </div>
  );
}

