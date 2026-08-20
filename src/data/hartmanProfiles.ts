import { ColorTraitProfile, BlendArchetype, ColorCode } from '../types/personality';

export const COLOR_PROFILES: Record<ColorCode, ColorTraitProfile> = {
  R: {
    code: 'R',
    name: 'RED',
    motive: 'Power',
    tagline: 'The Driven Visionary & Decisive Catalyst',
    colorHex: '#ef4444',
    bgLight: 'bg-red-50',
    borderClass: 'border-red-500',
    textClass: 'text-red-600',
    badgeBg: 'bg-red-600 text-white',
    description: 'Motivated by Power — the innate drive to move things forward, conquer obstacles, and produce measurable, tangible results.',
    deepEssay: `In Dr. Taylor Hartman's seminal clinical framework, Reds are the natural producers and leaders of the world. Their Core Driving Motive is Power: not the authoritarian desire to dominate others for ego's sake, but the innate psychological imperative to exert control over their environment, eliminate stagnation, and drive toward tangible results.

From early childhood, Reds display an unmistakable instinct for autonomy and direction. When presented with a complex problem, they bypass emotional hand-wringing and instinctively identify the shortest path between 'where we are' and 'where we must be.' They view obstacles not as stopping points, but as tactical challenges waiting to be overcome.

However, the very gifts that make Reds formidable—decisiveness, clarity, and bold vision—cast a significant psychological shadow. Under stress or when operating from an immature character state, a Red's drive for efficiency can become insensitive, abrasive, and domineering. They may perceive other people's emotional processing or need for consensus as sluggishness or weakness, leaving a trail of bruised feelings in their wake.

A mature Red discovers that true, enduring power does not steamroll people—it empowers and enlists them. When Reds pair their relentless execution with genuine active listening, emotional humility, and patience, they transform from mere taskmasters into truly inspiring, world-changing leaders.`,
    innateNeeds: [
      'To look good academically, professionally, or competitively',
      'To be right and have their logic respected',
      'To produce measurable, indisputable results',
      'Autonomy and freedom from micromanagement'
    ],
    deepestWants: [
      'To hide personal insecurities and vulnerabilities',
      'Direct, bottom-line communication without fluff',
      'Continuous upward leadership and new conquests',
      'Competent peers who match their pace and deliver on commitments'
    ],
    naturalStrengths: [
      'Decisive & Action-Oriented',
      'Visionary Strategic Thinker',
      'Highly Confident & Assertive',
      'Unstoppable Drive & Tenacity',
      'Thrives Under Pressure & Crisis',
      'Logical & Pragmatic Problem Solver',
      'Accountable & Responsible'
    ],
    shadowLimitations: [
      'Impatient with Deliberate or Emotional Paces',
      'Blunt, Harsh, or Tactless in Delivery',
      'Arrogant or Difficult to Admit Fault',
      'Controlling & Reluctant to Yield Autonomy',
      'Workaholic Tendency; Ignores Burnout in Self & Others',
      'Argumentative when Challenged'
    ],
    inHealthTraits: [
      'Inspires others to reach peak potential',
      'Protective and championing of their team',
      'Practices active listening before issuing directives',
      'Balances bottom-line execution with human care',
      'Open to being corrected by superior logic or evidence'
    ],
    underStressTraits: [
      'Authoritarian: "My way or the highway"',
      'Dismissive of others’ emotional experiences',
      'Heightened irritability and micro-managing',
      'Steamrolls consensus to force a quick decision',
      'Blames external incompetence for setbacks'
    ],
    thrivesWith: 'Clear measurable goals, total operational ownership, high-stakes challenges, and direct, competent peers.',
    stifledBy: 'Micromanagement, sluggish consensus loops, emotional ambiguity, indecisive leadership, and excuses.',
    growthFrontier: 'Learn to value people as deeply as the finish line; practice pausing, asking for input, and validating feelings before prescribing strategic fixes.',
    communicationStyle: {
      overview: 'Direct, succinct, bottom-line focused, logical, and brisk.',
      preferredTone: 'Crisp, confident, factual, and respectful of their time and intelligence.',
      keyDos: [
        'State the bottom line and desired conclusion in the first 30 seconds.',
        'Support your proposals with hard data, logical ROI, and clear options.',
        'Stand your ground respectfully; Reds respect competence and courage.',
        'Praise their tangible accomplishments and competence publicly.'
      ],
      keyDonts: [
        'Do NOT bring emotional melodrama, vague hints, or indirect passive aggression.',
        'Do NOT tell them HOW to do their job; define the "what" and allow them autonomy on the "how".',
        'Do NOT take their blunt tone personally—it is rarely intended as malice.',
        'Do NOT embarrass them or challenge their competence in front of their peers.'
      ],
      magicPhrases: [
        '"Here is the bottom line..."',
        '"What is the most efficient path forward?"',
        '"I respect your decision on this; here are three viable options."',
        '"You delivered outstanding results on this project."'
      ],
      triggerPhrases: [
        '"We need to talk about my feelings before we discuss the plan."',
        '"You can\'t do that because the procedure says so."',
        '"Let’s form a committee to deliberate indefinitely."',
        '"Why are you always so mean and demanding?"'
      ]
    },
    workplaceRole: {
      leadershipStyle: 'Commanding, visionary, strategic, and high-accountability.',
      teamRole: 'The Engine of Execution — drives deadlines, eliminates roadblocks, and forces decisions.',
      idealEnvironment: 'Fast-paced, meritocratic, clear metrics, and high autonomy.',
      blindSpots: ['Alienating team members through perceived lack of empathy', 'Underestimating time required for quality craft']
    },
    romanticDynamic: {
      inLove: 'Deeply devoted problem-solver; shows love through provision, protection, and clearing life’s hurdles.',
      needsFromPartner: 'Unconditional respect, intellectual sparring, loyalty, and direct honesty without emotional manipulation.',
      warningSigns: 'Treating the home and partner like a subordinate or another corporate project to be optimized.'
    },
    childhoodRoots: 'Often took charge in early playground dynamics, organized neighborhood games, or rebelled strongly against arbitrary adult rules that made no logical sense.',
    moralEvolution: 'From "Might makes right" (manipulative power) to "Servant Leadership" (power deployed in defense and uplift of others).'
  },

  B: {
    code: 'B',
    name: 'BLUE',
    motive: 'Intimacy',
    tagline: 'The Soulful Guardian & Principled Architect of Connection',
    colorHex: '#2563eb',
    bgLight: 'bg-blue-50',
    borderClass: 'border-blue-500',
    textClass: 'text-blue-600',
    badgeBg: 'bg-blue-600 text-white',
    description: 'Motivated by Intimacy — the deep, unshakeable drive for authentic emotional connection, moral excellence, and doing things the right way.',
    deepEssay: `Blues represent the emotional and moral backbone of human civilization. Their Core Driving Motive is Intimacy: the deep desire to be genuinely understood, to establish profound relational bonds, and to uphold moral integrity and conscientious quality in everything they touch.

A Blue does not merely experience life; they feel it in rich, layered complexity. They possess an innate moral compass and an uncompromising standard of excellence. When a Blue commits to a person, an organization, or a principle, their loyalty is absolute. They are the friends who remember every anniversary, the craftsmen who refuse to cut a single corner, and the caregivers who sacrifice selflessly for the wellbeing of others.

Yet this same profound sensitivity makes Blues particularly vulnerable to inner turmoil. A Blue’s greatest strength—their pursuit of perfection and emotional truth—can mutate into severe self-criticism, chronic anxiety, guilt, and lingering resentment. Because their expectations for reciprocity and moral fidelity are so high, Blues are easily wounded when others fail to meet their unspoken standards. They may replay painful interactions for years, keeping a silent, heavy ledger of emotional debts.

A healthy Blue learns the transformative power of grace and forgiveness—both for others and, crucially, for themselves. When Blues realize that 'good enough' is often a victory and that love does not require perfection, their natural warmth, loyalty, and insight blossom into an enduring source of healing and inspiration for all around them.`,
    innateNeeds: [
      'To feel truly understood, validated, and emotionally cherished',
      'To be appreciated sincerely for their silent sacrifices and hard work',
      'Moral integrity, truth, and transparency in relationships',
      'Order, predictability, and high standards of quality'
    ],
    deepestWants: [
      'To be loved unconditionally without having to perform or earn it',
      'To feel completely safe from betrayal, deceit, or abandonment',
      'To bring order to moral or relational chaos',
      'Thoughtful, meaningful reciprocity from those they pour into'
    ],
    naturalStrengths: [
      'Deeply Loyal, Devoted, & Sincere',
      'Conscientious Craftsman; Relentless Quality Standards',
      'Profound Empathy & Emotional Intelligence',
      'Highly Principled with Strong Moral Compass',
      'Detail-Oriented, Thorough, & Dependable',
      'Sacrificial Caregiver & Protector',
      'Uncanny Intuition for Others’ Hidden Needs'
    ],
    shadowLimitations: [
      'Overly Sensitive & Prone to Taking Things Personally',
      'Perfectionistic & Crippled by Unrealistic Standards',
      'Prone to Guilt, Worry, & Rumination',
      'Harbors Silent Resentments & Keeps Score',
      'Demanding, Controlling, or Smothering via Moral Superiority',
      'Suspicious or Slow to Trust Again after Hurt'
    ],
    inHealthTraits: [
      'Gives love freely without keeping transactional score',
      'Embraces imperfection in self and others with gentle grace',
      'Communicates hurt directly and forgives wholeheartedly',
      'Creates warm, beautifully structured, and safe environments',
      'Channels deep insight to uplift and mentor others'
    ],
    underStressTraits: [
      'Martyr complex: "Look at everything I suffer for you"',
      'Withdrawing into cold, silent judgment and brooding',
      'Hypersensitive to perceived criticism or minor slights',
      'Paralyzed by fear of making a mistake or disappointing someone',
      'Micromanaging others to enforce "the right way"'
    ],
    thrivesWith: 'Deep relational trust, genuine appreciation, ethical leadership, structured predictability, and space to do thorough, quality work.',
    stifledBy: 'Superficiality, broken promises, disloyalty, chaotic disorder, and being treated like a replaceable cog.',
    growthFrontier: 'Practice radical self-forgiveness; release the exhausting burden of perfectionism, communicate desires without hinting, and let go of past grievances.',
    communicationStyle: {
      overview: 'Thoughtful, warm, relationally attuned, thorough, and principled.',
      preferredTone: 'Sincere, gentle, respectful, emotionally authentic, and attentive.',
      keyDos: [
        'Acknowledge and validate their emotional experience before discussing logic.',
        'Show genuine, specific gratitude for their contributions and thoughtfulness.',
        'Follow through scrupulously on every commitment you make to them.',
        'Give them time to process their thoughts and express their feelings fully.'
      ],
      keyDonts: [
        'Do NOT dismiss their feelings as "illogical," "overreacting," or "too sensitive."',
        'Do NOT rush them through deep conversations or cut them off impatiently.',
        'Do NOT break promises or treat deadlines and agreements flippantly.',
        'Do NOT offer cheap, superficial, or insincere flattery.'
      ],
      magicPhrases: [
        '"I want to understand how you are feeling about this."',
        '"Thank you so much for the care and detail you put into this."',
        '"I hear you, and your feelings are completely valid."',
        '"You can count on me; I give you my word."'
      ],
      triggerPhrases: [
        '"You\'re making a mountain out of a molehill."',
        '"Just get over it; it happened three weeks ago."',
        '"Nobody asked you to do all that work anyway."',
        '"It\'s good enough—stop obsessing over useless details."'
      ]
    },
    workplaceRole: {
      leadershipStyle: 'Ethical, servant-oriented, meticulous, and deeply invested in team well-being.',
      teamRole: 'The Conscience & Standard-Bearer — safeguards quality, builds culture, and ensures integrity.',
      idealEnvironment: 'Stable, values-driven, collaborative, where excellence is rewarded over frantic speed.',
      blindSpots: ['Resisting necessary changes due to loyalty to past methods', 'Burnout from refusing to delegate']
    },
    romanticDynamic: {
      inLove: 'All-in, deeply romantic, profoundly attentive; craves deep spiritual and emotional soul-merging.',
      needsFromPartner: 'Consistent emotional validation, visible loyalty, shared values, and verbal tenderness.',
      warningSigns: 'Withdrawing into silent martyrdom while silently keeping score of unanswered sacrifices.'
    },
    childhoodRoots: 'Often felt intensely responsible for family harmony at a young age, sought adult approval through good behavior and high grades, and felt deeply stung by harsh discipline.',
    moralEvolution: 'From self-righteous perfectionism and conditional affection to unconditional agape love and empathetic grace.'
  },

  W: {
    code: 'W',
    name: 'WHITE',
    motive: 'Peace',
    tagline: 'The Serene Diplomat & Clarity Anchor',
    colorHex: '#64748b',
    bgLight: 'bg-slate-50',
    borderClass: 'border-slate-500',
    textClass: 'text-slate-600',
    badgeBg: 'bg-slate-600 text-white',
    description: 'Motivated by Peace — the profound yearning for inner calm, autonomy, equanimity, and freedom from external conflict and artificial pressure.',
    deepEssay: `Whites are the quiet peacemakers and steady anchors of the human family. Their Core Driving Motive is Peace: not merely the absence of outward noise, but an internal state of serene contentment, autonomy, and harmony with themselves and the world around them.

A White possesses an extraordinary, rare gift: the capacity for pure, non-judgmental acceptance. They are slow to anger, virtually immune to petty drama, and comfortable in their own skin. Because they possess no internal need to dominate, compete with, or change others, people of all personality types instinctively feel safe and unpressured in a White's presence. They are exceptional listeners and unbiased mediators who can see all sides of an argument without emotional distortion.

However, a White's profound desire for peace can easily degenerate into its shadow: passive avoidance, stubborn inertia, and emotional disengagement. To avoid confrontation, an unhealthy White will agree outwardly while secretly disengaging inwardly. They may retreat into a fortress of silence, put off crucial life decisions, and suppress their own authentic voice and desires until their relationships drift into stagnation. Their quiet stubbornness can be more formidable and frustrating than a Red's loudest roar.

When Whites step into their healthy character maturity, they discover that true peace is not passive surrender or conflict-avoidance—it is an active, courageous stance. By speaking their truth, setting clear personal boundaries, and stepping into intentional action, Whites bring enduring harmony and wisdom that stabilizes everything around them.`,
    innateNeeds: [
      'Peace of mind and freedom from artificial conflict or drama',
      'To feel accepted and unpressured to conform or perform',
      'Personal autonomy, space, and a quiet retreat to recharge',
      'Clarity, simplicity, and a steady, sustainable pace'
    ],
    deepestWants: [
      'To avoid confrontation, aggressive demands, and emotional hostility',
      'To be left alone when they need solitude without being interrogated',
      'To maintain their own quiet dignity and self-respect',
      'Low-maintenance, gentle relationships with no hidden agendas'
    ],
    naturalStrengths: [
      'Calm, Patient, & Remarkably Even-Tempered',
      'Deeply Tolerant, Kind, & Non-Judgmental',
      'Objective, Balanced, & Unbiased Perspective',
      'Exceptional Diplomat & Conflict De-escalator',
      'Low-Maintenance, Contented, & Adaptable',
      'Quiet Inner Strength & Resilient Independence',
      'Safe, Reassuring, & Empathetic Listener'
    ],
    shadowLimitations: [
      'Indecisive & Reluctant to Take the Lead',
      'Passive-Aggressive or Quietly Stubborn (The "Silent Wall")',
      'Avoidant of Difficult Conversations & Procrastinates',
      'Appears Emotionally Detached, Indifferent, or Apathetic',
      'Suppresses Authentic Opinions to Keep Surface Harmony',
      'Lacks Forward Initiative or Ambition when Unchallenged'
    ],
    inHealthTraits: [
      'Courageously voices authentic thoughts and desires',
      'Acts decisively while maintaining a soothing, gentle presence',
      'Mediates bitter disputes with flawless neutrality and wisdom',
      'Sets healthy personal boundaries without withdrawing',
      'Channels steady perseverance into meaningful life goals'
    ],
    underStressTraits: [
      'Total shutdown: stonewalling and refusing to engage',
      'Passive resistance: saying "yes" with no intention of doing it',
      'Escapism: retreating into television, gaming, or endless sleeping',
      'Complete emotional numbness or detachment from loved ones',
      'Stubborn refusal to budge under external pressure'
    ],
    thrivesWith: 'Calm, respectful environments, autonomy to work at their own steady pace, gentle encouragement, and minimal political drama.',
    stifledBy: 'Hostile confrontation, micro-management, frantic urgency, noisy chaos, and demands for immediate emotional reactions.',
    growthFrontier: 'Speak up early and boldly; recognize that silence often fuels misunderstanding, and that engaging in constructive conflict is the only true pathway to lasting peace.',
    communicationStyle: {
      overview: 'Gentle, calm, concise, unpretentious, and reflective.',
      preferredTone: 'Soft-spoken, respectful, non-demanding, and patient.',
      keyDos: [
        'Approach them gently in a private, quiet, non-threatening setting.',
        'Ask open-ended questions and provide ample time for them to formulate answers.',
        'Present suggestions as invitations rather than forceful mandates.',
        'Acknowledge their quiet contributions and respect their need for downtime.'
      ],
      keyDonts: [
        'Do NOT corner, interrogate, or back them into an emotional corner.',
        'Do NOT scream, raise your voice, or use aggressive physical postures.',
        'Do NOT mistake their quiet listening for automatic agreement.',
        'Do NOT rush them for an instant verdict on complex, heavy topics.'
      ],
      magicPhrases: [
        '"Take whatever time you need to think about this, and let me know."',
        '"I really value your honest, calm perspective on this."',
        '"What do YOU truly want to happen here?"',
        '"No pressure at all; let’s find a peaceful solution together."'
      ],
      triggerPhrases: [
        '"Why don’t you care about anything?!"',
        '"You have to decide RIGHT THIS SECOND or else!"',
        '"Stop being so lazy and get moving!"',
        '"Tell me what you’re thinking right now—say something!"'
      ]
    },
    workplaceRole: {
      leadershipStyle: 'Consensual, steady, low-ego, empowering, and highly supportive.',
      teamRole: 'The Great Stabilizer — dampens team volatility, bridges factions, and provides calm objectivity.',
      idealEnvironment: 'Unhurried, autonomous, harmonious, and devoid of cutthroat office politics.',
      blindSpots: ['Avoiding performance reviews or disciplining underperforming staff', 'Under-communicating achievements']
    },
    romanticDynamic: {
      inLove: 'Deeply faithful, gentle, easy to live with; shows love through steady presence and zero demands.',
      needsFromPartner: 'Gentleness, patience, a calm home atmosphere, and no guilt trips.',
      warningSigns: 'Withdrawing completely into private hobbies while the partner feels profoundly lonely.'
    },
    childhoodRoots: 'Often kept a low profile in noisy or turbulent homes, found solace in reading or private play, and learned that staying quiet was the safest strategy to avoid adult anger.',
    moralEvolution: 'From passive appeasement and self-erasure to principled diplomacy and courageous peacemaking.'
  },

  Y: {
    code: 'Y',
    name: 'YELLOW',
    motive: 'Fun',
    tagline: 'The Radiant Catalyst & Joyful Enthusiast',
    colorHex: '#eab308',
    bgLight: 'bg-amber-50',
    borderClass: 'border-amber-500',
    textClass: 'text-amber-600',
    badgeBg: 'bg-amber-500 text-slate-950 font-bold',
    description: 'Motivated by Fun — the vibrant, irrepressible drive to experience life fully in the present moment, spread joy, and ignite enthusiasm in the human spirit.',
    deepEssay: `Yellows are the radiant sunshine and joyful spark of the human experience. Their Core Driving Motive is Fun: the innate psychological need to live in the vibrant present, to enjoy life’s richness, to forge spontaneous connections, and to banish gloom and stagnation wherever they go.

A Yellow possesses an enviable gift of psychological resilience and infectious optimism. They wake up expecting the day to be an adventure. They carry zero emotional baggage, forgive slights with astonishing speed, and can walk into a room of complete strangers and turn it into a celebration within minutes. Their charismatic, creative energy makes them magnetic storytellers, inspiring motivators, and delightful companions.

However, the Yellow’s dedication to the present moment produces an equally potent shadow. Under stress, boredom, or character immaturity, a Yellow’s quest for fun can devolve into chronic irresponsibility, superficial avoidance of emotional depth, impulsiveness, and poor follow-through. When things become tedious, difficult, or solemn, an ungrounded Yellow may abandon projects, break commitments, or crack inappropriate jokes rather than sit with someone in their grief or pain.

A mature, disciplined Yellow is one of the most powerful forces for good in the world. When they anchor their boundless enthusiasm with follow-through, active empathy, and the discipline to honor commitments, Yellows do not just entertain humanity—they inspire people to hope, love, and celebrate the magnificent gift of life.`,
    innateNeeds: [
      'To be noticed, included, and socially validated with enthusiasm',
      'Freedom to be spontaneous, playful, and express creativity',
      'Positive, upbeat environments with high emotional energy',
      'Variety, novelty, and relief from repetitive, tedious routines'
    ],
    deepestWants: [
      'To be liked and adored by everyone they encounter',
      'To avoid heavy, depressing, tedious, or rigid obligations',
      'To live without excessive rules or micromanagement',
      'Constant stimulation, laughter, and exciting new experiences'
    ],
    naturalStrengths: [
      'Infectiously Optimistic, Joyful, & Upbeat',
      'Charismatic, Highly Persuasive, & Sociable',
      'Spontaneous, Playful, & Imaginatively Creative',
      'Quick to Forgive; Carries Zero Grudges or Bitterness',
      'Magnetic Motivator & Exceptional Morale Booster',
      'Remarkably Resilient; Bounces Back Instantly',
      'Inclusive, Warm, & Welcoming to All'
    ],
    shadowLimitations: [
      'Disorganized & Struggles with Detail or Follow-Through',
      'Impulsive, Distractible, & Short Attention Span',
      'Avoids Emotional Depth or Serious Conversations with Jokes',
      'Prone to Exaggeration or Flakiness on Commitments',
      'Can be Self-Centered, Needing Constant Spotlight & Attention',
      'Frequently Interrupts Others in Excitement'
    ],
    inHealthTraits: [
      'Follows through reliably on promises made to others',
      'Listens deeply and holds compassionate space for others’ pain',
      'Channels creative brilliance into focused, productive completion',
      'Uses humor to heal and uplift, never to mock or escape reality',
      'Shares the spotlight generously and celebrates others’ triumphs'
    ],
    underStressTraits: [
      'Scattered, hyperactive, or completely ungrounded',
      'Blatant denial of serious problems or financial realities',
      'Escapes obligations through partying, spending, or disappearing',
      'Defensive, flippant, or weaponizing sarcasm',
      'Interrupting frantically and dominating all airspace'
    ],
    thrivesWith: 'Variety, flexible workflows, social collaboration, enthusiastic recognition, and room for creative spontaneity.',
    stifledBy: 'Monotony, rigid micromanagement, joyless isolation, harsh cynicism, and endless tedious paperwork.',
    growthFrontier: 'Cultivate self-discipline and follow-through; learn that honoring commitments and sitting with heavy emotions is where genuine depth and respect are born.',
    communicationStyle: {
      overview: 'Lively, expressive, fast, animated, playful, and storytelling-driven.',
      preferredTone: 'Upbeat, enthusiastic, humorous, warm, and engaging.',
      keyDos: [
        'Keep the interaction dynamic, friendly, positive, and engaging.',
        'Praise them enthusiastically and highlight their creative ideas.',
        'Put key administrative details and action items in writing afterward.',
        'Allow them time to share stories, laugh, and express excitement.'
      ],
      keyDonts: [
        'Do NOT start conversations with heavy criticism, scolding, or cynicism.',
        'Do NOT trap them in hours of monotonous, dry procedural data.',
        'Do NOT publicly embarrass them or crush their enthusiasm with scorn.',
        'Do NOT assume their playful banter means they lack intelligence.'
      ],
      magicPhrases: [
        '"This sounds like an exciting adventure—let’s do it!"',
        '"You brought such fantastic energy and creativity to this!"',
        '"Let’s brainstorm some wildly creative ideas."',
        '"Let’s make sure we celebrate when we hit this milestone!"'
      ],
      triggerPhrases: [
        '"Stop acting like a clown and be serious for once."',
        '"Here is a 40-page compliance manual you must memorize today."',
        '"Why can\'t you ever finish what you started?"',
        '"Nobody cares about your stories—stick to the dry facts."'
      ]
    },
    workplaceRole: {
      leadershipStyle: 'Inspirational, visionary, charismatic, approachable, and high-energy.',
      teamRole: 'The Spark & Chief Morale Officer — sparks creativity, sells the vision, and keeps spirits soaring.',
      idealEnvironment: 'Dynamic, collaborative, creative, and socially connected.',
      blindSpots: ['Over-promising and under-delivering', 'Neglecting administrative follow-through and budgets']
    },
    romanticDynamic: {
      inLove: 'Spontaneous, thrilling, playful, deeply affectionate; makes everyday life feel like a date.',
      needsFromPartner: 'Admiration, shared adventures, freedom, and enthusiastic validation.',
      warningSigns: 'Dodging serious relationship discussions or seeking outside validation when home feels routine.'
    },
    childhoodRoots: 'Was the natural class clown or family entertainer, loved having an audience, made friends effortlessly, and hated time-outs or isolation above all else.',
    moralEvolution: 'From superficial self-gratification and novelty-chasing to dedicated joy-giving, disciplined service, and emotional depth.'
  }
};

export const BLEND_ARCHETYPES: Record<string, BlendArchetype> = {
  'R-B': {
    primary: 'R',
    secondary: 'B',
    title: 'The Visionary Architect',
    epithet: 'Driven Power with Principled Conscience',
    tagline: 'Produces high-impact results with uncompromising standards of excellence.',
    summary: 'A powerhouse combination of Red drive and Blue conscience. You don’t just want to win; you want to win with integrity and unmatched quality. You set the bar impossibly high for yourself and everyone around you.',
    strengths: ['Unstoppable execution backed by rigorous quality standards', 'Exceptional strategic vision with deep moral grounding', 'Commanding leadership that protects and champions its team'],
    tensions: ['Can be doubly hard on self and others through combined impatience (Red) and perfectionism (Blue)', 'Risk of immense burnout by refusing to delegate or accept "good enough"'],
    growthAdvice: 'Practice softening your delivery and accepting that 85% completion from a growing teammate is better than burning yourself out doing everything perfectly.'
  },
  'R-W': {
    primary: 'R',
    secondary: 'W',
    title: 'The Pragmatic Commander',
    epithet: 'Decisive Power with Calm Strategic Poise',
    tagline: 'Leads with bold authority while picking battles with master diplomacy.',
    summary: 'A balanced, formidable blend. You possess the natural drive and vision of a Red, but tempered by the calm, unflappable patience of a White. You rarely lose your temper in public, choosing instead to execute with cool, surgical precision.',
    strengths: ['Decisive leadership without tyrannical volatility', 'Incredible composure under intense crisis', 'Pragmatic ability to negotiate win-win outcomes'],
    tensions: ['Can alternate between aggressive demands (Red) and stubborn passive resistance (White)', 'May keep strategies hidden, leaving others guessing'],
    growthAdvice: 'Be more transparent with your team about your strategic thinking and invite collaborative feedback early rather than deciding in isolation.'
  },
  'R-Y': {
    primary: 'R',
    secondary: 'Y',
    title: 'The Charismatic Dynamo',
    epithet: 'High-Octane Power with Magnetic Spark',
    tagline: 'A bold, persuasive pioneer who makes high achievement thrilling and infectious.',
    summary: 'Pure forward momentum. You combine the aggressive goal-crushing capability of Red with the charm, enthusiasm, and magnetism of Yellow. You are a natural entrepreneur, visionary salesperson, or movement builder.',
    strengths: ['Electrifying public presence and persuasive power', 'High risk tolerance and bold innovative spirit', 'Turns difficult challenges into exciting group quests'],
    tensions: ['Can steamroll details, administrative follow-through, and quieter personalities', 'Prone to starting 20 exciting fires without putting systems in place to tend them'],
    growthAdvice: 'Partner with strong Blue and White operators to manage execution details while you focus on vision, inspiration, and strategic deal-making.'
  },

  'B-R': {
    primary: 'B',
    secondary: 'R',
    title: 'The Crusading Reformer',
    epithet: 'Soulful Intimacy with Action-Oriented Tenacity',
    tagline: 'Fights passionately for ethical excellence, human justice, and tangible impact.',
    summary: 'You feel the moral and emotional pulse of humanity (Blue) and possess the guts and drive to take decisive action (Red). You don’t just care; you mobilize resources, build institutions, and fight fiercely for your convictions.',
    strengths: ['Fierce advocate for people, quality, and justice', 'Combines profound empathy with executive discipline', 'Uncompromising defender of family and organizational values'],
    tensions: ['Can become self-righteous, critical, or authoritarian when standards are breached', 'Vulnerable to intense internal moral anguish when goals fail'],
    growthAdvice: 'Remember that others do not share your exact moral blueprints. Give people room to stumble without declaring a moral crisis.'
  },
  'B-W': {
    primary: 'B',
    secondary: 'W',
    title: 'The Empathetic Guardian',
    epithet: 'Deep Intimacy with Serene Gentleness',
    tagline: 'A safe, deeply trustworthy sanctuary of compassion and quiet wisdom.',
    summary: 'The ultimate safe haven. You blend Blue devotion and relational depth with White non-judgmental acceptance and peace. People naturally open their souls to you because you listen without judging and care without demanding.',
    strengths: ['Profound emotional intelligence and healing presence', 'Gentle, supportive loyalty that endures across decades', 'Exquisite mediator who understands both heart and equanimity'],
    tensions: ['Can suffer from chronic self-erasure and difficulty expressing own anger', 'May internalize immense stress and grief to protect others from conflict'],
    growthAdvice: 'Your voice matters as much as the peace of the room. Practice expressing your genuine desires and grievances before they turn into silent sorrow.'
  },
  'B-Y': {
    primary: 'B',
    secondary: 'Y',
    title: 'The Heartfelt Connector',
    epithet: 'Devoted Intimacy with Joyful Playfulness',
    tagline: 'Brings warmth, emotional depth, and infectious delight to every relationship.',
    summary: 'A delightful blend of depth and lightness. You possess the deep loyalty, thoughtfulness, and sincerity of Blue, brightened by the playful, charismatic, and hopeful energy of Yellow. You make meaningful connection feel effortless and fun.',
    strengths: ['Warm, magnetic hospitality and community builder', 'Helps others open up emotionally through playful humor', 'Deeply loyal friend who also knows how to celebrate life'],
    tensions: ['Can struggle with internal swings between serious emotional worry and escapist fun', 'Prone to people-pleasing and exhaustion from trying to make everyone happy'],
    growthAdvice: 'Establish firm personal boundaries. You do not need to be the therapist and the entertainer for everyone in your circle.'
  },

  'W-R': {
    primary: 'W',
    secondary: 'R',
    title: 'The Steadfast Anchor',
    epithet: 'Inner Peace with Latent Executive Will',
    tagline: 'A calm, unruffled stabilizer who steps up with surprising firmness when required.',
    summary: 'You prefer a peaceful, low-drama existence (White), but when push comes to shove or fundamental boundaries are threatened, you can tap into a formidable Red resolve that surprises everyone.',
    strengths: ['Low-ego leadership that provides steady clarity in turbulence', 'Resilient, patient persistence toward long-term goals', 'Diplomatic strength that cannot be easily pushed around'],
    tensions: ['Can let issues linger too long in the name of peace before unleashing delayed firmness', 'Can exhibit profound passive resistance when pressured'],
    growthAdvice: 'Do not wait for a crisis to deploy your Red courage. Assert your boundaries and guidance early and calmly.'
  },
  'W-B': {
    primary: 'W',
    secondary: 'B',
    title: 'The Thoughtful Peacemaker',
    epithet: 'Tranquil Peace with Deep Conscientious Care',
    tagline: 'Cultivates harmony through quiet empathy, thoughtful observation, and kindness.',
    summary: 'A gentle, observant, and deeply caring soul. You value peace and harmony above all, but your peace is enriched by a sensitive Blue conscience that genuinely cares about doing what is right and honoring relationships.',
    strengths: ['Exceptional listener and wise, balanced counselor', 'Gentle integrity with zero desire to manipulate or control', 'Creates calm, aesthetically pleasing, and safe environments'],
    tensions: ['Deep vulnerability to guilt and anxiety that is suffered in complete silence', 'Prone to severe procrastination when faced with conflict-heavy decisions'],
    growthAdvice: 'Remember that healthy confrontation is an act of care. Speaking up preserves relationships better than silent accommodation.'
  },
  'W-Y': {
    primary: 'W',
    secondary: 'Y',
    title: 'The Easygoing Free-Spirit',
    epithet: 'Serene Peace with Playful Lightness',
    tagline: 'Moves through life with effortless grace, cheerfulness, and zero unnecessary drama.',
    summary: 'The definition of low-maintenance happiness. You combine White contentment and tranquility with Yellow playfulness and cheer. You don’t sweat the small stuff, rarely get offended, and are a breath of fresh air to be around.',
    strengths: ['Completely free of pretension, ego, and drama', 'Adaptable, fun-loving, and easy to live and work with', 'Brings soothing levity to tense or overly serious rooms'],
    tensions: ['Can severely lack urgency, structure, and ambitious drive', 'May avoid all serious responsibilities or financial planning until forced'],
    growthAdvice: 'Introduce light routines, calendar systems, and clear personal goals to ensure your easygoing nature does not derail your future potential.'
  },

  'Y-R': {
    primary: 'Y',
    secondary: 'R',
    title: 'The Trailblazing Dynamo',
    epithet: 'Boundless Fun with Assertive Execution',
    tagline: 'Turns wild, imaginative ideas into bold, tangible reality with relentless energy.',
    summary: 'A fast-moving, magnetic visionary. You have the infectious joy and charisma of Yellow, but with a sharp Red engine that actually wants to execute, win, and make things happen. You dream big and move fast.',
    strengths: ['Unstoppable entrepreneurial drive and pitch ability', 'Charismatic leadership that rallies teams behind daring goals', 'Resilient optimism that overcomes setbacks without skipping a beat'],
    tensions: ['Can be impatient with slow or detail-oriented thinkers', 'Prone to jumping from one massive vision to the next without stabilizing operations'],
    growthAdvice: 'Learn the art of the follow-through. Build trusted partnerships with Blue and White implementers who can anchor your brilliant initiatives.'
  },
  'Y-B': {
    primary: 'Y',
    secondary: 'B',
    title: 'The Inspiring Storyteller',
    epithet: 'Playful Joy with Emotional Depth',
    tagline: 'Uplifts spirits with humor while touching the heart with genuine vulnerability.',
    summary: 'You are the life of the party who also possesses a deeply tender, loyal heart. You use humor, storytelling, and warmth to make people feel seen, valued, and hopeful. Your joy is not superficial—it comes from a place of deep human empathy.',
    strengths: ['Magnetic emotional rapport and expressive artistry', 'Generous, loyal, and enthusiastic champion of others', 'Transforms heavy atmospheres into places of hope and healing'],
    tensions: ['Can feel exhausted by the pressure to always appear happy and "on"', 'Struggles when fun ideas meet bureaucratic discipline and criticism'],
    growthAdvice: 'Give yourself permission to be quiet, sad, or serious without feeling like you are letting down your audience.'
  },
  'Y-W': {
    primary: 'Y',
    secondary: 'W',
    title: 'The Cheerful Optimist',
    epithet: 'Effervescent Fun with Gentle Acceptance',
    tagline: 'Spreads sunshine, laughter, and acceptance with zero friction or demand.',
    summary: 'Gentle sunshine. You love to laugh, play, and make friends, but you do so without being domineering or demanding the spotlight. You are universally loved because you bring joy without bringing chaos or drama.',
    strengths: ['Effortless social warmth and soothing cheerfulness', 'Zero malice, zero grudges, and pure positive intent', 'Exceptionally forgiving and tolerant of everyone’s quirks'],
    tensions: ['May struggle with deep discipline, boundary-setting, or standing up to bullies', 'Can easily drift through life without pursuing high-leverage challenges'],
    growthAdvice: 'Anchor your delightful spirit in disciplined habits. Setting hard goals will give your natural joy a lasting platform to impact the world.'
  }
};
