import React from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Scale, 
  AlertCircle, 
  Award, 
  ExternalLink,
  ChevronRight,
  FileText,
  CheckCircle2
} from 'lucide-react';
import { AppTab } from './Navbar';

interface LegalDisclaimerProps {
  onNavigateTab: (tab: AppTab) => void;
}

export const LegalDisclaimer: React.FC<LegalDisclaimerProps> = ({ onNavigateTab }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-grotesk text-slate-800">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-widest border border-slate-200">
          <Scale className="w-3.5 h-3.5 text-purple-700" />
          <span>Legal, Trademark & Intellectual Property Disclaimers</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
          Copyright & Attribution Notice
        </h1>
        <p className="text-sm text-slate-600">
          Effective Date: Permanent • Educational, Research & Fair Use Doctrine Statement
        </p>
      </div>

      {/* Primary Highlight Alert Box */}
      <div className="p-6 rounded-xl bg-purple-50/70 border border-purple-200 space-y-3">
        <div className="flex items-center gap-2 text-purple-900 font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-purple-700 shrink-0" />
          <span>Independent Educational Software & Attribution Statement</span>
        </div>
        <p className="text-xs sm:text-sm text-purple-950 leading-relaxed">
          <strong>Archetype.iq</strong> is an independent software application developed strictly for 
          <strong> educational, research, analytical, and interpersonal development purposes</strong>. 
          This application is not owned by, officially endorsed by, affiliated with, or sponsored by 
          <strong> Dr. Taylor Hartman, Ph.D.</strong>, <strong>Hartman Communications Inc.</strong>, or the official <em>Color Code</em> entity.
        </p>
      </div>

      {/* Sections Grid */}
      <div className="space-y-6">
        {/* Section 1: Academic & Theoretical Attribution */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600 shrink-0" />
            <h2 className="font-editorial text-2xl text-slate-900 font-normal">
              1. Scholarly Attribution & Theoretical Foundations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The psychological concepts, core motive framework, and descriptive typologies referenced within Archetype.iq 
            (including Red/Power, Blue/Intimacy, White/Peace, Yellow/Fun) are based on the published scientific, clinical, and literary 
            scholarship of <strong>Dr. Taylor Hartman, Ph.D.</strong>, including the landmark publications:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200/80">
            <li className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <span><em>The Color Code: A New Way to See Yourself, Your Relationships, and Life</em> (Scribner / Simon & Schuster, 1987)</span>
            </li>
            <li className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <span><em>The People Code: It’s All About Your Innate Motive</em> (Simon & Schuster, 2007)</span>
            </li>
            <li className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <span><em>Character Matters: How to Help Our Children Develop Good Character</em> (HarperCollins, 2000)</span>
            </li>
            <li className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <span><em>Color Your Relationships</em> (Simon & Schuster, 1998)</span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            All original citations, intellectual frameworks, and psychological theory remain the exclusive intellectual property of Dr. Taylor Hartman and their respective copyright holders.
          </p>
        </section>

        {/* Section 2: Fair Use & Transformative Work Doctrine */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-emerald-600 shrink-0" />
            <h2 className="font-editorial text-2xl text-slate-900 font-normal">
              2. Fair Use & Transformative Nature Statement
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Under <strong>Section 107 of the United States Copyright Act of 1976</strong> (17 U.S.C. § 107) and international intellectual property conventions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Transformative Analysis
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Archetype.iq provides original software algorithms, synthesized communication matrices, AI-assisted language transformers, and interactive roleplay simulations that significantly transform underlying psychological theory into active behavioral tools.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Non-Commercial / Informational Scope
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                The software is built for informational, personal growth, and team communication enhancement, fostering public understanding and deeper engagement with motivational psychology.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Trademarks & Distinct Brand Identity */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <h2 className="font-editorial text-2xl text-slate-900 font-normal">
              3. Trademark Disclaimers & Brand Clarity
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            "The Color Code", "The People Code", and associated marks are trademarks or registered trademarks of Dr. Taylor Hartman and Hartman Communications Inc. Any reference to these terms within this software is nominative fair use to describe the historical and psychological origins of the core motive model.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong>Archetype.iq</strong> is a distinct software brand. Users seeking official certifications, clinical administration, or authorized corporate licensing from Dr. Hartman are encouraged to visit the official Color Code organization.
          </p>
        </section>

        {/* Section 4: Clinical & Medical Disclaimer */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600 shrink-0" />
            <h2 className="font-editorial text-2xl text-slate-900 font-normal">
              4. Psychological & Professional Guidance Disclaimer
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The assessment results, dossiers, and AI-generated coaching scripts generated by Archetype.iq are intended solely for personal self-reflection, interpersonal communication training, and team collaboration.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            They do <strong>not</strong> constitute medical, psychiatric, or clinical psychological diagnosis, treatment, or formal psychometric evaluation. For clinical psychological assessment or mental health concerns, consult a licensed healthcare professional.
          </p>
        </section>

        {/* Section 5: Take-Down & Inquiries */}
        <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-xl border border-slate-800 space-y-3">
          <h3 className="font-editorial text-xl font-normal text-white">
            Questions, Rights Inquiries & Attributions
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            If you are a copyright or trademark holder and have questions regarding attribution, licensing, or content in this application, please feel free to submit inquiries. We are committed to maintaining the highest standards of intellectual property respect and scholarly integrity.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateTab('home')}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition shadow-xs flex items-center gap-1.5"
            >
              <span>Return to Overview</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigateTab('literature')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-purple-200 hover:text-white bg-white/10 hover:bg-white/20 transition border border-white/10 flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>View Referenced Literature</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
