'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-paper/50 hover:bg-paper-dark/50 transition-all duration-300 group"
      title={t('label')}
    >
      <Languages className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform duration-500" strokeWidth={1.5} />
      <span 
        className="text-xs font-medium tracking-wider text-ink-faded group-hover:text-ink-wet transition-colors uppercase"
        style={{ fontFamily: 'var(--font-amiri), serif' }}
      >
        {locale === 'en' ? 'AR' : 'EN'}
      </span>
    </motion.button>
  );
}
