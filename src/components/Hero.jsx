import { Sparkles, Search, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs text-indigo-700 dark:text-indigo-300">
              <Sparkles size={14} /> AI-Powered News & Insights
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Your daily briefing, distilled by AI
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
              Get concise, reliable tech and business news. Smart summaries, market signals, and deep-dive reports delivered every day.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 shadow-sm">
                <Search className="text-neutral-500" size={18} />
                <input
                  type="text"
                  placeholder="Search topics: AI, startups, markets..."
                  className="w-full bg-transparent outline-none text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400"
                />
              </div>
              <button className="inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow transition-all">
                Explore Latest
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="inline-flex items-center gap-2"><TrendingUp size={16} className="text-green-600" /> Market Pulse</div>
              <div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Daily Briefings</div>
              <div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-500" /> Weekly Reports</div>
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-4">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
              <div className="space-y-3">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-900/80">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-neutral-900 dark:text-white">AI curates {i === 1 ? 'Top Headlines' : i === 2 ? 'Tech Trends' : i === 3 ? 'Funding Rounds' : i === 4 ? 'Policy Watch' : 'Research Breakthroughs'}</div>
                      <Sparkles size={16} className="text-indigo-500" />
                    </div>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
                      Smart summaries highlight the why, so you skip the noise and keep the signal.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
