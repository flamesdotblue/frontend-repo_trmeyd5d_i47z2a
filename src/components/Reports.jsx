import { FileText, Download, Share2, Calendar, TrendingUp } from 'lucide-react';

const reports = [
  {
    id: 'daily',
    title: 'Daily Briefing',
    desc: 'Your morning snapshot: top stories, market movers, and key updates in under 5 minutes.',
    cadence: 'Every weekday at 7:00 AM',
    accent: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 'market',
    title: 'Market Pulse',
    desc: 'Signals and sentiment across tech and AI—price action, funding, and macro highlights.',
    cadence: 'Daily at market close',
    accent: 'from-green-500 via-emerald-500 to-teal-500',
  },
  {
    id: 'weekly',
    title: 'Weekly Deep Dive',
    desc: 'A 10-minute analysis on one major theme, with data, charts, and actionable takeaways.',
    cadence: 'Every Friday afternoon',
    accent: 'from-amber-500 via-orange-500 to-rose-500',
  },
];

export default function Reports() {
  return (
    <section id="reports" className="py-14 sm:py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">AI Reports</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Concise, data-backed reports generated and reviewed by experts.</p>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((r) => (
            <div key={r.id} className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
              <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${r.accent} opacity-30 blur-2xl`} />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <FileText className="text-neutral-700 dark:text-neutral-200" size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{r.title}</h3>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-neutral-500">
                    <Calendar size={14} /> {r.cadence}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{r.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs text-neutral-500">
                  <TrendingUp size={14} /> Data-driven
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
                    <Share2 size={16} /> Share
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-1.5 text-sm shadow-sm">
                    <Download size={16} /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
