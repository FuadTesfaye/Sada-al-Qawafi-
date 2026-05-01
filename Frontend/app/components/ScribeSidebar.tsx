"use client";

import { motion } from "framer-motion";
import { 
  Feather, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Library,
  LogOut,
  User as UserIcon,
  Settings,
  Bell
} from "lucide-react";
import { Link, useRouter, usePathname } from '@/i18n/routing';

interface ScribeSidebarProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export default function ScribeSidebar({ activeTab, setActiveTab }: ScribeSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { id: "all", label: "The Diwan", icon: BookOpen, href: "/feed" },
    { id: "following", label: "Circle of Peers", icon: Users, href: "/peers" },
    { id: "trending", label: "Echoing Verses", icon: TrendingUp, href: "/trending" },
  ];

  const archiveItems = [
    { id: "profile", label: "My Profile", icon: UserIcon, href: "/profile" },
    { id: "manuscripts", label: "My Manuscripts", icon: Library, href: "/manuscripts" },
    { id: "notifications", label: "Echoes (Alerts)", icon: Bell, href: "/notifications" },
    { id: "settings", label: "Scribe Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <aside className="w-72 hidden lg:flex flex-col border-r border-gold/20 h-screen sticky top-0 p-8 bg-paper-aged/30 z-20 overflow-y-auto">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3 mb-12 group">
        <motion.div whileHover={{ rotate: -15 }}>
          <Feather className="text-gold w-6 h-6" />
        </motion.div>
        <span className="text-xl font-bold text-ink-wet font-heading uppercase tracking-widest group-hover:text-gold transition-colors">
          Sada
        </span>
      </Link>

      <nav className="space-y-10 flex-1">
        {/* Main Feed Section */}
        <div>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold-dim font-bold block mb-4 px-1">Archives Feed</span>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link 
                  href={item.href}
                  onClick={() => setActiveTab?.(item.id)}
                  className={`flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all group ${
                    (pathname === item.href && activeTab === item.id) || (pathname === item.href && !activeTab && item.id === 'all')
                      ? 'text-ink-wet' 
                      : 'text-ink-faded hover:text-gold'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${(pathname === item.href && activeTab === item.id) || (pathname === item.href && !activeTab && item.id === 'all') ? 'text-gold' : 'text-gold/40 group-hover:text-gold'}`} />
                  {item.label}
                  {((pathname === item.href && activeTab === item.id) || (pathname === item.href && !activeTab && item.id === 'all')) && (
                    <motion.div layoutId="activeTab" className="w-1.5 h-1.5 rounded-full bg-gold ml-auto" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* User Study Section */}
        <div>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold-dim font-bold block mb-4 px-1">My Study</span>
          <ul className="space-y-4">
            {archiveItems.map((item) => (
              <li key={item.id}>
                <Link 
                  href={item.href}
                  className={`flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all group ${
                    pathname === item.href ? 'text-ink-wet' : 'text-ink-faded hover:text-gold'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${pathname === item.href ? 'text-gold' : 'text-gold/40 group-hover:text-gold'}`} />
                  {item.label}
                  {pathname === item.href && (
                    <motion.div layoutId="activeStudy" className="w-1.5 h-1.5 rounded-full bg-gold ml-auto" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Logout */}
      <div className="pt-8 border-t border-gold/10">
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ink-faded hover:text-red-500 transition-all w-full text-left"
        >
          <LogOut className="w-4 h-4" />
          Leave Library
        </button>
      </div>
    </aside>
  );
}
