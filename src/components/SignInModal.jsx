import { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';

export default function SignInModal({ open, onClose, onSignedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!open) return null;

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${backend}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || 'Failed to sign in');
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('auth_email', data.email);
      onSignedIn({ token: data.token, email: data.email, name: data.name });
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-sm rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Sign in</h3>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"><X size={18} /></button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2">
            <Mail size={16} className="text-neutral-500" />
            <input type="email" required placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full bg-transparent outline-none text-sm" />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2">
            <Lock size={16} className="text-neutral-500" />
            <input type="password" required placeholder="Your password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full bg-transparent outline-none text-sm" />
          </div>
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <button type="submit" disabled={loading} className="w-full rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow-sm disabled:opacity-60">
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
        <p className="mt-3 text-xs text-neutral-500">No account yet? We'll add sign up next.</p>
      </div>
    </div>
  );
}
