import Header from './components/Header';
import Hero from './components/Hero';
import NewsFeed from './components/NewsFeed';
import Reports from './components/Reports';
import { Check } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Newsly AI. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <NewsFeed />
        <Reports />

        <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Simple pricing</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Start free. Upgrade when you need richer reports.</p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
                <h3 className="text-lg font-medium">Free</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Daily headlines and brief summaries.</p>
                <div className="mt-4 text-3xl font-semibold">$0</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Check size={16} className="text-green-500" /> Daily briefing</li>
                  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Check size={16} className="text-green-500" /> Curated headlines</li>
                </ul>
                <button className="mt-6 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">Get started</button>
              </div>

              <div className="relative rounded-2xl border-2 border-indigo-500 bg-white dark:bg-neutral-900 p-6 shadow-md">
                <div className="absolute -top-3 right-4 rounded-full bg-indigo-600 text-white text-xs px-2 py-0.5">Popular</div>
                <h3 className="text-lg font-medium">Pro</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Full access to AI reports and market signals.</p>
                <div className="mt-4 text-3xl font-semibold">$12<span className="text-base font-normal text-neutral-500">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Check size={16} className="text-green-500" /> Daily + Market Pulse</li>
                  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Check size={16} className="text-green-500" /> Weekly deep dives</li>
                  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Check size={16} className="text-green-500" /> Export & share</li>
                </ul>
                <button className="mt-6 w-full rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm shadow-sm">Upgrade</button>
              </div>

              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
                <h3 className="text-lg font-medium">Teams</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Collaborative dashboards and exports.</p>
                <div className="mt-4 text-3xl font-semibold">$29<span className="text-base font-normal text-neutral-500">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Check size={16} className="text-green-500" /> Seats & roles</li>
                  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Check size={16} className="text-green-500" /> Team reports</li>
                  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Check size={16} className="text-green-500" /> API access</li>
                </ul>
                <button className="mt-6 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">Contact sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
