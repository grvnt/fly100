import React from 'react';
import Header from '@/components/General/Header';
import Footer from '@/components/General/Footer';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center">
        <div className="max-w-3xl w-full px-4">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
