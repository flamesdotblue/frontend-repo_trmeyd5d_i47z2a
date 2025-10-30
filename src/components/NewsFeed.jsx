import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Tag } from 'lucide-react';

export default function NewsFeed({ query }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const url = new URL(`${backend}/articles`);
        if (query) url.searchParams.set('q', query);
        const res = await fetch(url.toString());
        const data = await res.json();
        if (!cancelled) setArticles(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!cancelled) setArticles([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [query, backend]);

  return (
    <section id="latest" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Latest Headlines</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{query ? `Results for “${query}”` : 'Curated by AI, summarized for speed.'}</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
            View all <ArrowRight size={16} />
          </a>
        </div>

        {loading ? (
          <div className="mt-8 text-sm text-neutral-500">Loading…</div>
        ) : (
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.id || article._id} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span>{article.source}</span>
                  <span>{article.time}</span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{article.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(article.tags || []).map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1 text-xs">
                      <Tag size={12} /> {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href={article.url || '#'} className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                    Read more <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
