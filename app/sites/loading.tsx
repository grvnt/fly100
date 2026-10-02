export default function SitesLoading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
      <div className="mb-8 flex flex-col gap-2">
        <div className="h-4 w-48 animate-pulse rounded bg-muted" />
        <div className="h-9 w-96 max-w-full animate-pulse rounded bg-muted" />
        <div className="h-5 w-full max-w-2xl animate-pulse rounded bg-muted" />
      </div>
      <div className="mb-8 flex flex-col gap-3 border-b border-border pb-6">
        <div className="h-8 w-full animate-pulse rounded bg-muted" />
        <div className="h-6 w-full animate-pulse rounded bg-muted" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="aspect-[16/9] animate-pulse bg-muted" />
            <div className="flex flex-col gap-3 p-4">
              <div className="h-5 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
