import React, { useState } from 'react';
import { HARTMAN_ARTICLES } from '../data/hartmanArticles';
import { LiteratureArticle } from '../types/personality';
import { getBookmarkedArticles, toggleArticleBookmark } from '../utils/storage';
import { 
  BookOpen, 
  Clock, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  Quote, 
  CheckCircle2, 
  ArrowLeft, 
  Printer, 
  Search,
  BookMarked
} from 'lucide-react';

interface LiteratureLibraryProps {
  onOpenCommunicationPlaybook?: () => void;
  onNavigateLegal?: () => void;
}

export const LiteratureLibrary: React.FC<LiteratureLibraryProps> = ({ onNavigateLegal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<LiteratureArticle | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(getBookmarkedArticles());
  const [filterBookmarkedOnly, setFilterBookmarkedOnly] = useState(false);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Foundation', label: 'Core Motive Foundation' },
    { id: 'Communication & Conflict', label: 'Communication & Conflict' },
    { id: 'Relationship Dynamics', label: 'Relationships & Marriage' },
    { id: 'Leadership & Teams', label: 'Leadership & Teams' },
    { id: 'Character & Maturation', label: 'Character & Maturation' },
    { id: 'Parenting', label: 'Parenting & Childhood' },
  ];

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    toggleArticleBookmark(id);
    setBookmarkedIds(getBookmarkedArticles());
  };

  const filteredArticles = HARTMAN_ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.keyTakeaways.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesBookmark = !filterBookmarkedOnly || bookmarkedIds.includes(art.id);
    return matchesCat && matchesSearch && matchesBookmark;
  });

  if (readingArticle) {
    const isBookmarked = bookmarkedIds.includes(readingArticle.id);

    return (
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
        {/* Article Top Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-5 pb-3 border-b border-slate-200 print:hidden">
          <button
            onClick={() => setReadingArticle(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Library</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggleBookmark(readingArticle.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition shadow-2xs"
            >
              {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5 text-blue-600" /> : <Bookmark className="w-3.5 h-3.5 text-slate-400" />}
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print Article</span>
            </button>
          </div>
        </div>

        {/* Article Reader Container */}
        <article className="bg-white rounded-lg border border-slate-200 shadow-xs p-6 sm:p-10 space-y-6">
          {/* Header */}
          <div className="space-y-2 pb-5 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                {readingArticle.category}
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readingArticle.readTime}
              </span>
            </div>

            <h1 className="font-editorial text-2xl sm:text-4xl font-normal text-slate-900 leading-tight">
              {readingArticle.title}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
              {readingArticle.subtitle}
            </p>

            <div className="pt-1 text-[11px] text-slate-500 italic font-mono">
              {readingArticle.authorNote}
            </div>
          </div>

          {/* Key Takeaways Card */}
          <div className="p-4 border-l-2 border-blue-500 bg-blue-50/40 rounded-r space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Executive Summary & Key Takeaways</span>
            </h3>
            <ul className="space-y-1.5">
              {readingArticle.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formatted Article Body Sections */}
          <div className="space-y-6 text-slate-800 leading-relaxed">
            {readingArticle.sections.map((sec, idx) => (
              <section key={idx} className="space-y-2">
                <h2 className="text-sm sm:text-base font-bold text-slate-900 pt-3 border-t border-slate-100 first:border-t-0">
                  {sec.heading}
                </h2>
                <div className="text-xs sm:text-sm leading-relaxed text-slate-700 whitespace-pre-line space-y-2.5">
                  {sec.content.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {sec.quote && (
                  <div className="my-3 p-3 border-l-2 border-slate-900 bg-slate-50 rounded-r text-xs italic font-serif text-slate-800">
                    {sec.quote}
                  </div>
                )}

                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="space-y-1 my-2">
                    {sec.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Practical Exercises */}
          {readingArticle.practicalExercises && readingArticle.practicalExercises.length > 0 && (
            <div className="p-5 rounded-lg bg-slate-900 text-white space-y-3 border border-slate-800">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-400">
                <Quote className="w-3.5 h-3.5" />
                <span>Hartman Clinical Protocol & Exercises</span>
              </div>
              <ul className="space-y-2">
                {readingArticle.practicalExercises.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-200">
                    <span className="w-4 h-4 rounded bg-white/20 text-blue-300 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold font-mono">
                      {sIdx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Citations */}
          {readingArticle.hartmanCitations && (
            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 space-y-1 font-mono">
              <span className="font-bold uppercase tracking-wider text-slate-500">Literature Citations:</span>
              <ul className="list-disc pl-4 space-y-0.5">
                {readingArticle.hartmanCitations.map((cite, cIdx) => (
                  <li key={cIdx}>{cite}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-slate-800 text-[10px] font-bold uppercase tracking-widest mb-2 border border-slate-200">
          <BookOpen className="w-3 h-3 text-blue-600" />
          <span>Foundational Hartman Literature</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
          Psychological Articles & Knowledge Library
        </h1>
        <p className="font-grotesk mt-1.5 text-xs sm:text-sm text-slate-600">
          Clinical essays and frameworks synthesized from the published research of Dr. Taylor Hartman, Ph.D.
        </p>
      </div>

      {/* Attribution & Disclaimer Banner */}
      <div className="mb-6 p-4 rounded-lg bg-slate-100/90 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-grotesk">
        <div className="text-slate-600 space-y-0.5">
          <p className="font-medium text-slate-800">
            Scholarly Attribution & Fair Use Notice
          </p>
          <p className="text-[11px] text-slate-500">
            Synthesized for educational and comparative research purposes. All core motive theories remain the intellectual property of Dr. Taylor Hartman.
          </p>
        </div>
        <button
          onClick={onNavigateLegal}
          className="text-purple-700 hover:text-purple-900 font-bold whitespace-nowrap text-xs cursor-pointer"
        >
          View Full Legal Notice →
        </button>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-4 mb-6 space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          {/* Search bar */}
          <div className="relative flex-1 w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by motive, keyword, or tactic..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded border border-slate-200 bg-slate-50 focus:bg-white focus:ring-1 focus:ring-slate-900 outline-none"
            />
          </div>

          {/* Bookmark filter toggle */}
          <button
            onClick={() => setFilterBookmarkedOnly(!filterBookmarkedOnly)}
            className={`px-3 py-2 rounded text-xs font-semibold transition flex items-center gap-1.5 shrink-0 ${
              filterBookmarkedOnly
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Bookmarked ({bookmarkedIds.length})</span>
          </button>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArticles.map((art) => {
            const isBookmarked = bookmarkedIds.includes(art.id);

            return (
              <div
                key={art.id}
                onClick={() => setReadingArticle(art)}
                className="bg-white rounded-lg border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-sm transition cursor-pointer p-5 flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      {art.category}
                    </span>
                    <button
                      onClick={(e) => handleToggleBookmark(art.id, e)}
                      className="p-1 text-slate-400 hover:text-blue-600 transition"
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-3.5 h-3.5 text-blue-600" />
                      ) : (
                        <Bookmark className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {art.subtitle}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Core Takeaway:</span>
                    <p className="text-xs text-slate-700 line-clamp-2">
                      {art.keyTakeaways[0]}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                  <span className="font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    Read Article →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
          <BookOpen className="w-6 h-6 text-slate-300 mx-auto mb-2" />
          <h4 className="font-bold text-slate-800 text-xs">No articles match your filter</h4>
          <p className="text-xs text-slate-500 mt-0.5">Try selecting a different category or clearing search terms.</p>
        </div>
      )}
    </div>
  );
};
