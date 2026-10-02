import Link from 'next/link';
import Header from '@/components/General/Header';
import Footer from '@/components/General/Footer';

export default function SitesNotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-foreground">Destination not found</h1>
        <p className="text-muted-foreground">
          That destination isn&apos;t in the directory yet.
        </p>
        <Link href="/sites" className="text-sky-400 hover:underline">
          Back to all destinations
        </Link>
      </main>
      <Footer />
    </>
  );
}
