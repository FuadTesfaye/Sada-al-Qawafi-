"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Feather, 
  Search, 
  Heart, 
  MessageSquare, 
  Share2, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Library,
  PenLine,
  MoreVertical,
  LogOut,
  Send,
  X,
  UserPlus,
  Check
} from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';
import { useState, useRef, useEffect } from "react";
import ScribeSidebar from "@/app/components/ScribeSidebar";

// Types
interface Comment {
  id: number;
  author: string;
  text: string;
  time: string;
}

interface Poem {
  id: number;
  author: string;
  authorTitle: string;
  content: string;
  translation: string;
  likes: number;
  isLiked: boolean;
  comments: Comment[];
  time: string;
  parchmentColor: string;
}

export default function FeedPage() {
  const t = useTranslations('Feed');
  const locale = useLocale();
  const router = useRouter();
  
  // State
  const [posts, setPosts] = useState<Poem[]>([
    {
      id: 1,
      author: "Mahmoud Darwish",
      authorTitle: "Prince of Resistance",
      content: "على هذه الأرض ما يستحق الحياة: تردد إبريل، رائحة الخبز في الفجر، آراء امرأة في الرجال، كتابات أيسخيلوس، أول الحب، عشب على حجر..",
      translation: "On this earth there is what deserves life: April's hesitation, the smell of bread at dawn, a woman's opinions on men, the writings of Aeschylus, first love, grass on a stone..",
      likes: 12400,
      isLiked: false,
      comments: [
        { id: 1, author: "Al-Khansa", text: "Beautifully captured.", time: "1h ago" }
      ],
      time: "2 hours ago",
      parchmentColor: "#FDF5E6"
    },
    {
      id: 2,
      author: "Al-Mutanabbi",
      authorTitle: "The Great Scribe",
      content: "الخيل والليل والبيداء تعرفني والسيف والرمح والقرطاس والقلمُ",
      translation: "The horse, the night and the desert know me; and the sword, the spear, the paper and the pen.",
      likes: 45000,
      isLiked: true,
      comments: [],
      time: "Yesterday",
      parchmentColor: "#F5E6C4"
    }
  ]);

  const [newPostContent, setNewPostContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [followedScribes, setFollowedScribes] = useState<string[]>(["Antara"]);
  const [showCommentsId, setShowCommentsId] = useState<number | null>(null);

  // Handlers
  const handlePost = () => {
    if (!newPostContent.trim()) return;
    
    const newPoem: Poem = {
      id: Date.now(),
      author: "New Scribe",
      authorTitle: "The Visiting Poet",
      content: newPostContent,
      translation: "Translation will be added by the archives soon...",
      likes: 0,
      isLiked: false,
      comments: [],
      time: "Just now",
      parchmentColor: "#FFFFFF"
    };

    setPosts([newPoem, ...posts]);
    setNewPostContent("");
  };

  const handleLike = (id: number) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 } : p
    ));
  };

  const toggleFollow = (name: string) => {
    setFollowedScribes(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const filteredPosts = posts.filter(p => 
    p.content.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-paper relative">
      {/* Reusable Sidebar */}
      <ScribeSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 max-w-2xl mx-auto px-6 py-12 pb-32">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-ink-wet font-heading uppercase tracking-widest">
              The Diwan
            </h1>
            <p className="text-xs italic text-ink-faded mt-1" style={{ fontFamily: "var(--font-amiri), serif" }}>
              Latest echoes from the scribes.
            </p>
          </div>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scribes or verses..."
              className="bg-paper-aged/40 border-b border-gold/20 py-2 pl-10 pr-4 text-xs font-sans outline-none focus:border-gold transition-all w-full md:w-64"
            />
          </div>
        </header>

        {/* Post Input */}
        <section className="mb-16">
          <div className="bg-paper border-2 border-double border-gold/20 p-8 shadow-xl relative">
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-full bg-paper-aged border border-gold/10 flex items-center justify-center shrink-0">
                <PenLine className="text-gold w-6 h-6" />
              </div>
              <textarea 
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="What verses weigh on your heart today?"
                className="flex-1 bg-transparent border-none outline-none text-xl italic text-ink-wet resize-none h-28 placeholder:text-ink-faded/30"
                style={{ fontFamily: "var(--font-amiri), serif" }}
              />
            </div>
            <div className="flex justify-end mt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePost}
                className="bg-ink-wet text-paper px-10 py-3 text-xs font-bold uppercase tracking-[0.4em] hover:bg-gold hover:text-ink-wet transition-all shadow-lg"
              >
                Publish
              </motion.button>
            </div>
          </div>
        </section>

        {/* Feed */}
        <div className="space-y-20">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative"
              >
                {/* Manuscript Card */}
                <div 
                  className="relative p-12 shadow-2xl border border-gold/10 transition-transform duration-500 hover:rotate-[0.5deg]"
                  style={{ background: post.parchmentColor }}
                >
                  <div className="flex justify-between items-start mb-10">
                    <Link href="/profile" className="flex gap-5 items-center group/poet">
                      <div className="w-12 h-12 rounded-full bg-ink-wet text-paper flex items-center justify-center font-heading text-xl border-2 border-gold/20 group-hover/poet:border-gold transition-colors">
                        {post.author[0]}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-ink-wet font-heading group-hover/poet:text-gold transition-colors">{post.author}</h3>
                        <p className="text-[10px] text-gold-dim uppercase tracking-[0.2em] font-bold">{post.authorTitle}</p>
                      </div>
                    </Link>
                    <button className="text-ink-faded/30 hover:text-ink-wet transition-colors p-2">
                      <MoreVertical size={18} />
                    </button>
                  </div>

                  {/* Poem */}
                  <div className="text-center px-6 mb-12">
                    <p 
                      className="text-2xl md:text-3xl leading-[2.5] text-ink-wet mb-10"
                      style={{ fontFamily: "var(--font-amiri), serif", direction: "rtl" }}
                    >
                      {post.content}
                    </p>
                    <div className="h-px w-24 bg-gold/20 mx-auto mb-10" />
                    <p className="text-sm font-sans italic text-ink-faded leading-relaxed">
                      {post.translation}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gold/10">
                    <div className="flex gap-10">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-3 group transition-all ${post.isLiked ? 'text-red-500' : 'text-ink-faded/50'}`}
                      >
                        <Heart size={18} className={`${post.isLiked ? 'fill-current' : 'group-hover:text-red-500'}`} />
                        <span className="text-[10px] uppercase font-bold tracking-widest">{post.likes}</span>
                      </button>
                      <button 
                        onClick={() => setShowCommentsId(showCommentsId === post.id ? null : post.id)}
                        className="flex items-center gap-3 group text-ink-faded/50 hover:text-gold transition-all"
                      >
                        <MessageSquare size={18} />
                        <span className="text-[10px] uppercase font-bold tracking-widest">{post.comments.length}</span>
                      </button>
                    </div>
                    <button className="text-ink-faded/50 hover:text-ink-wet transition-all">
                      <Share2 size={18} />
                    </button>
                  </div>

                  {/* Comments Section */}
                  <AnimatePresence>
                    {showCommentsId === post.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-8 pt-8 border-t border-gold/10 overflow-hidden"
                      >
                        <div className="space-y-6">
                          {post.comments.map(c => (
                            <div key={c.id} className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-paper-aged border border-gold/10 shrink-0" />
                              <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                  <span className="text-xs font-bold text-ink-wet">{c.author}</span>
                                  <span className="text-[9px] text-ink-faded/50 uppercase">{c.time}</span>
                                </div>
                                <p className="text-xs text-ink-faded italic">{c.text}</p>
                              </div>
                            </div>
                          ))}
                          {/* Comment Input */}
                          <div className="flex gap-4 items-center mt-6">
                            <input 
                              placeholder="Write a recitation..."
                              className="flex-1 bg-paper-aged/30 border-b border-gold/10 py-2 px-3 text-xs outline-none focus:border-gold"
                            />
                            <button className="text-gold p-1">
                              <Send size={16} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Shadow/Torn Effect */}
                <div 
                  className="h-10 w-full opacity-10 -mt-2 relative z-0"
                  style={{
                    background: "rgba(0,0,0,0.2)",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 98% 85%, 95% 95%, 92% 80%, 88% 100%, 85% 85%, 82% 95%, 78% 75%, 75% 100%, 72% 85%, 68% 95%, 65% 80%, 62% 100%, 58% 85%, 55% 95%, 52% 75%, 48% 100%, 45% 85%, 42% 95%, 38% 80%, 35% 100%, 32% 85%, 28% 95%, 25% 75%, 22% 100%, 18% 85%, 15% 95%, 12% 80%, 8% 100%, 5% 85%, 2% 95%, 0% 80%)",
                  }}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 hidden xl:flex flex-col h-screen sticky top-0 p-8 z-20">
        <div className="bg-paper p-8 border border-gold/20 shadow-xl mb-10">
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-gold-dim font-bold mb-6">Trending Scribes</h4>
          <ul className="space-y-8">
            {["Antara", "Al-Khansa", "Imru al-Qais"].map((name, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-paper-aged border border-gold/10" />
                  <span className="text-xs font-bold text-ink-wet">{name}</span>
                </div>
                <button 
                  onClick={() => toggleFollow(name)}
                  className={`p-2 rounded-full transition-all ${followedScribes.includes(name) ? 'bg-gold text-paper' : 'border border-gold/30 text-gold hover:bg-gold/10'}`}
                >
                  {followedScribes.includes(name) ? <Check size={14} /> : <UserPlus size={14} />}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-paper p-8 border border-gold/20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-gold-dim font-bold mb-6">Daily Manuscript</h4>
          <p className="text-base italic text-ink-wet mb-6 leading-[2]" style={{ fontFamily: "var(--font-amiri), serif", direction: "rtl" }}>
            "أَمُرُّ عَلَى الدِّيَارِ دِيَارِ لَيْلَى..."
          </p>
          <span className="text-[10px] uppercase tracking-widest text-gold-dim font-bold">— Majnun Layla</span>
        </div>
      </aside>
    </div>
  );
}
