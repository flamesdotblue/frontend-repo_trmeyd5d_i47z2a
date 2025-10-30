import { ArrowRight, ExternalLink, Tag } from 'lucide-react';

const mockArticles = [
  {
    id: 1,
    title: 'Open-source model outperforms on key benchmarks',
    source: 'Tech Journal',
    time: '2h ago',
    tags: ['AI', 'Open Source'],
    summary:
      'A new community-driven model sets a high-water mark on multiple leaderboards, signaling a shift in AI innovation dynamics.',
    url: '#',
  },
  {
    id: 2,
    title: 'Markets rally on strong earnings from cloud leaders',
    source: 'Market Watch',
    time: '4h ago',
    tags: ['Markets', 'Cloud'],
    summary:
      'Major indices closed higher as hyperscalers reported better-than-expected growth in AI workloads and enterprise migration.',
    url: '#',
  },
  {
    id: 3,
    title: 'Regulators unveil guidelines for safe AI deployment',
    source: 'Policy Daily',
    time: '6h ago',
    tags: ['Policy', 'Safety'],
    summary:
      'The framework emphasizes transparency, evals, and risk management, aiming to balance innovation with responsibility.',
    url: '#',
  },
];

export default function NewsFeed() {
  return (
    <section id="latest" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Latest Headlines</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Curated by AI, summarized for speed.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
            View all <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((article) => (
            <article key={article.id} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>{article.source}</span>
                <span>{article.time}</span>
              </div>
              <h3 className="mt-2 text-lg font-medium text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{article.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {article.tags.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1 text-xs">
                    <Tag size={12} /> {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a href={article.url} className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                  Read more <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
