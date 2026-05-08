'use client';
import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const TOPICS = ['製品について', '採用について', '取材・広報', '共同開発', 'その他'];

export default function ContactForm() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    await new Promise((r) => setTimeout(r, 800));
    setPending(false);
    setSent(true);
  };

  return (
    <div className="relative rounded-3xl border border-ink-100 bg-white p-8 shadow-soft md:p-10">
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-3xl bg-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-flex size-16 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-500"
            >
              <Check className="size-7" strokeWidth={2.4} />
            </motion.div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
              送信しました。
            </h3>
            <p className="mt-2 max-w-sm text-pretty text-center text-sm text-ink-500">
              ご連絡ありがとうございます。担当より 2 営業日以内にご返信いたします。
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
            お問い合わせ種別
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {TOPICS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                  topic === t
                    ? 'border-ink-900 bg-ink-900 text-white'
                    : 'border-ink-200 bg-white text-ink-600 hover:border-ink-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {[
          { id: 'name', label: 'お名前', type: 'text', required: true },
          { id: 'company', label: '会社名 / 団体名', type: 'text' },
          { id: 'email', label: 'メールアドレス', type: 'email', required: true },
        ].map((f) => (
          <Field key={f.id} {...f} />
        ))}

        <div>
          <label
            htmlFor="message"
            className="text-xs font-medium uppercase tracking-[0.2em] text-ink-500"
          >
            お問い合わせ内容 *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="mt-3 w-full resize-none rounded-2xl border border-ink-200 bg-white px-5 py-4 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-aqua-500"
            placeholder="ご相談内容をお書きください"
          />
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <p className="text-xs text-ink-500 leading-relaxed">
            送信前に
            <a href="#" className="text-ink-900 underline underline-offset-4">
              プライバシーポリシー
            </a>
            にご同意ください。
          </p>
          <MagneticButton onClick={() => {}}>
            {pending ? '送信中...' : '送信する'}
          </MagneticButton>
        </div>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  type,
  required,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
        {label} {required && '*'}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-3 w-full rounded-2xl border border-ink-200 bg-white px-5 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-aqua-500"
      />
    </div>
  );
}
