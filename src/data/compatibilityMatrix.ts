import { CompatibilityPairing, ColorCode } from '../types/personality';

export const COMPATIBILITY_MATRIX: Record<string, CompatibilityPairing> = {
  'R-R': {
    pairKey: 'R-R',
    color1: 'R',
    color2: 'R',
    scoreTitle: 'The Ambitious Dynamo: High Velocity & Combustible Will',
    compatibilityLevel: 'Combustible Passion',
    synergyOverview: 'Two power-driven individuals create an unstoppable force of nature. When aligned on the same vision, you accomplish in months what takes others decades. However, without designated domains of sovereignty, ordinary household or strategic decisions can trigger fierce power struggles.',
    strengths: 'Unrivaled productivity, mutual respect for competence, decisive problem solving, high ambition, zero passive-aggressive games, and rapid goal execution.',
    challenges: 'Neither partner naturally backs down or yields. Heated arguments can quickly escalate into full-scale warfare. Vulnerability and emotional tenderness can be neglected as sign of weakness.',
    communicationProtocol: [
      'Establish clear, mutually agreed-upon "Domains of Absolute Sovereignty" (e.g., Partner A has final say on finances, Partner B has final say on home architecture).',
      'Institute a 24-hour cooling-off rule when arguments hit emotional stalemate before returning to negotiate logically.',
      'Consciously practice yielding on trivial matters; recognize that letting your partner win the small battle is strategic wisdom, not a loss.',
      'Schedule dedicated date nights where talk of business, goals, and logistics is strictly off-limits.'
    ],
    conflictResolutionGuide: 'Stick purely to objective facts and metrics. Avoid sarcastic one-upmanship. Focus on the overarching shared mission rather than winning the individual skirmish.',
    goldenRule: 'Divide territories clearly and treat mutual respect as sacred ground.'
  },

  'R-B': {
    pairKey: 'R-B',
    color1: 'R',
    color2: 'B',
    scoreTitle: 'The Power Couple with Heart: Dynamic Complementarity',
    compatibilityLevel: 'Dynamic Complementary',
    synergyOverview: 'One of the most common and profoundly impactful pairings in human relationships. Red provides decisive direction, external security, and momentum; Blue provides emotional depth, moral conscience, and uncompromising loyalty. Together, you form a complete holistic unit.',
    strengths: 'Red pushes Blue out of over-analysis into decisive action; Blue helps Red slow down, develop empathy, and cherish what truly matters. An exceptionally high-capacity partnership.',
    challenges: 'Red’s natural bluntness and fast pace can feel like a devastating emotional assault to sensitive Blue. Blue’s perfectionist standards, score-keeping, and need for lengthy emotional processing can make Red impatient and irritable.',
    communicationProtocol: [
      'Red: Soften your vocal tone and validate Blue’s feelings BEFORE proposing strategic solutions. A 60-second investment in empathy prevents a 3-day cold war.',
      'Blue: State your practical needs directly and concisely instead of hinting, sighing, or expecting Red to read your mind.',
      'Red: Never mock Blue’s emotions or call them "irrational." Blue’s feelings are their legitimate psychological reality.',
      'Blue: Acknowledge Red’s tireless problem-solving and provision as their authentic expression of love.'
    ],
    conflictResolutionGuide: 'Red must lead with remorse for relational hurt; Blue must present the core issue succinctly without bringing up grievances from five years ago.',
    goldenRule: 'Red leads with gentle validation; Blue communicates with direct clarity.'
  },

  'R-W': {
    pairKey: 'R-W',
    color1: 'R',
    color2: 'W',
    scoreTitle: 'The Executive & The Anchor: Natural Harmony & Stabilizing Balance',
    compatibilityLevel: 'High Natural Synergy',
    synergyOverview: 'A naturally tranquil, complementary match. White’s serene patience soothes Red’s intense restlessness, while Red’s decisive initiative provides direction and forward motion that White appreciates. There is minimal ego competition.',
    strengths: 'Low-friction collaboration; White is happy to let Red steer the logistical ship, and Red deeply values White’s low-drama, accepting sanctuary.',
    challenges: 'Red can easily steamroll White’s quiet desires, assuming silence equals enthusiastic agreement. White, when pressured, will retreat into immovable passive resistance and silent resentment.',
    communicationProtocol: [
      'Red: Slow down, lower the pressure, and explicitly invite White’s input: "What do YOU genuinely want to do here? Take your time."',
      'White: Speak up early and decisively; remember that your silence will always be interpreted by a Red as complete consent.',
      'Red: Respect White’s vital need for unhurried downtime and quiet sanctuary without branding it as laziness.',
      'White: Commit to specific deadlines for personal decisions to keep mutual forward momentum.'
    ],
    conflictResolutionGuide: 'Red must remove all urgency and intimidation; White must agree to state their bottom line rather than stonewalling.',
    goldenRule: 'Red lowers the pressure; White raises their voice.'
  },

  'R-Y': {
    pairKey: 'R-Y',
    color1: 'R',
    color2: 'Y',
    scoreTitle: 'The Action-Packed Pioneers: High Energy & Bold Adventures',
    compatibilityLevel: 'High Natural Synergy',
    synergyOverview: 'A high-octane, vibrant partnership full of charisma, momentum, and shared excitement. Both are fast-moving, social, and future-oriented. Red brings the execution engine and discipline, while Yellow brings lightness, creativity, and infectious joy.',
    strengths: 'Endless energy, quick recovery from minor disputes, adventurous lifestyle, charismatic public presence, and bold risk tolerance.',
    challenges: 'Red’s demand for discipline and structure can clash with Yellow’s need for spontaneous freedom. Red may view Yellow as flaky or frivolous; Yellow may view Red as controlling and dictatorial.',
    communicationProtocol: [
      'Red: Lighten up, embrace play, and celebrate Yellow’s creative brilliance before pointing out administrative flaws.',
      'Yellow: Follow through faithfully on non-negotiable commitments to prove reliability and earn Red’s deep respect.',
      'Red: Praise Yellow enthusiastically in public; positive validation makes a Yellow move mountains for you.',
      'Yellow: Put key agreements and deadlines in writing to prevent misunderstandings.'
    ],
    conflictResolutionGuide: 'Keep arguments short, focused, and forward-looking. Avoid heavy, protracted scolding. Finish with an embrace and a shared fun activity.',
    goldenRule: 'Red provides the anchor; Yellow brings the joy.'
  },

  'B-B': {
    pairKey: 'B-B',
    color1: 'B',
    color2: 'B',
    scoreTitle: 'The Soulmate Sanctuary: Profound Intimacy & Sacred Devotion',
    compatibilityLevel: 'High Natural Synergy',
    synergyOverview: 'A relationship of unmatched emotional depth, moral integrity, and mutual devotion. You understand each other’s unspoken longings, cherish deep conversations, and invest tirelessly in the health of the partnership.',
    strengths: 'Profound mutual empathy, shared high moral standards, absolute loyalty, exquisite thoughtfulness, and a deeply romantic bond.',
    challenges: 'Two sensitive, perfectionistic souls can easily enter a destructive downward spiral of shared worry, mutual score-keeping, and lingering resentment. If both get hurt simultaneously, no one holds the light.',
    communicationProtocol: [
      'Establish a strict household rule against "kitchen sinking" (bringing up past forgiven offenses during current discussions).',
      'Take turns being the strong pillar: agree that when one partner is spiraling into anxiety or hurt, the other will intentionally step up into grace.',
      'Deliberately schedule lighthearted, playful date nights to prevent the relationship from drowning in heavy emotional seriousness.',
      'Practice rapid verbal forgiveness: apologize openly and accept apologies with immediate grace.'
    ],
    conflictResolutionGuide: 'Lead with mutual vulnerability and explicit reassurance of unconditional love before dissecting the procedural issues.',
    goldenRule: 'Forgive early, forgive out loud, and refuse to keep emotional score.'
  },

  'B-W': {
    pairKey: 'B-W',
    color1: 'B',
    color2: 'W',
    scoreTitle: 'The Gentle Sanctuary: Tender Care & Peaceful Equanimity',
    compatibilityLevel: 'Gentle & Steady',
    synergyOverview: 'A tender, exceptionally low-conflict partnership. Both colors value human kindness, harmony, and mutual respect. White’s calm serenity grounds Blue’s anxious perfectionism, while Blue’s warmth brings richness and emotional care to White’s world.',
    strengths: 'Deep psychological safety, gentle mutual respect, minimal shouting or drama, and a peaceful, restorative home environment.',
    challenges: 'Blue craves intense emotional engagement and verbal reassurance that conflict-averse White may struggle to provide. White’s emotional detachment can leave Blue feeling lonely, while Blue’s intense demands for depth can make White retreat into silence.',
    communicationProtocol: [
      'Blue: Give White ample physical and emotional space; understand that their quiet demeanor is not coldness or lack of love.',
      'White: Lean in emotionally and offer unprompted verbal affection and reassurance to soothe Blue’s sensitive heart.',
      'Blue: Ask gentle, specific questions rather than launching intense emotional interrogations.',
      'Both: Commit to raising small irritations early before they congeal into silent, invisible walls.'
    ],
    conflictResolutionGuide: 'Keep discussions calm and private. Blue moderates emotional intensity; White promises not to walk away or stonewall.',
    goldenRule: 'Blue offers gentle patience; White offers affectionate presence.'
  },

  'B-Y': {
    pairKey: 'B-Y',
    color1: 'B',
    color2: 'Y',
    scoreTitle: 'The Heart & The Sunshine: Deep Devotion Meets Radiant Joy',
    compatibilityLevel: 'Dynamic Complementary',
    synergyOverview: 'A magnetic pairing of opposites. Yellow brings laughter, spontaneity, and buoyant optimism that pulls Blue out of heavy rumination. Blue brings the steadfast loyalty, moral depth, and emotional sanctuary that Yellow secretly hungers for.',
    strengths: 'Yellow keeps life fun, lighthearted, and adventurous; Blue ensures the home has deep values, beautiful craftsmanship, and enduring roots.',
    challenges: 'Blue can view Yellow as superficial, self-centered, or irresponsible with commitments. Yellow can view Blue as a moody, critical buzzkill who sucks the joy out of life.',
    communicationProtocol: [
      'Yellow: Follow through faithfully on your promises; for a Blue, reliability IS the primary language of love.',
      'Blue: Loosen the reins and do not take Yellow’s playful teasing or harmless distractions as personal insults.',
      'Yellow: Offer regular, sincere emotional check-ins without making a joke when the conversation turns serious.',
      'Blue: Praise Yellow’s infectious optimism and thank them for bringing lightness into your world.'
    ],
    conflictResolutionGuide: 'Yellow must acknowledge Blue’s hurt without mocking; Blue must keep the discussion brief and offer a clear path to resolution.',
    goldenRule: 'Yellow brings reliability to their joy; Blue brings grace to their standards.'
  },

  'W-W': {
    pairKey: 'W-W',
    color1: 'W',
    color2: 'W',
    scoreTitle: 'The Serene Oasis: Undisturbed Tranquility & Low Pressure',
    compatibilityLevel: 'Gentle & Steady',
    synergyOverview: 'An extraordinary sanctuary of peace, mutual acceptance, and total freedom from drama. Neither partner pressures, demands, or micromanages the other. The home is an unhurried haven from a frantic, stressful world.',
    strengths: 'Virtually zero shouting or toxic fighting, effortless comfort with silence, mutual respect for autonomy, and unconditional acceptance.',
    challenges: 'With two conflict-avoidant, low-initiative partners, critical life decisions can stall indefinitely. Without proactive effort, the relationship can drift into a comfortable but passionless roommate dynamic.',
    communicationProtocol: [
      'Establish a rotating "Executive of the Month" who has the responsibility to initiate social dates, household repairs, and financial planning.',
      'Agree on a structured framework to voice disagreements calmly rather than swallowing grievances to maintain false peace.',
      'Schedule regular shared adventures and travel to inject fresh novelty and vitality into your comfortable routine.',
      'Practice expressing affirmative appreciation out loud instead of assuming the other person just knows.'
    ],
    conflictResolutionGuide: 'Do not let uncomfortable topics linger for months. Set a specific date to talk, keep the conversation brief and kind, and decide together.',
    goldenRule: 'Do not confuse comfortable silence with genuine intimacy; initiate courageously.'
  },

  'W-Y': {
    pairKey: 'W-Y',
    color1: 'W',
    color2: 'Y',
    scoreTitle: 'The Breezy Duo: Effortless Levity & Zero Drama',
    compatibilityLevel: 'High Natural Synergy',
    synergyOverview: 'An easygoing, fun-loving, low-stress partnership. Yellow brings excitement, vibrant social circles, and creative sparks; White provides a calm, safe, non-demanding anchor where Yellow can truly relax without fear of judgment.',
    strengths: 'Very low relational friction, high adaptability, plenty of laughter, mutual tolerance, and a relaxed, joyful lifestyle.',
    challenges: 'Neither partner is naturally inclined toward rigorous discipline, detailed budgeting, or heavy administrative follow-through. Practical responsibilities can slide until an emergency forces action.',
    communicationProtocol: [
      'Create shared automated systems for bills, chores, and schedules to compensate for natural aversion to administrative drudgery.',
      'White: Participate with enthusiasm in Yellow’s spontaneous adventures rather than reflexively retreating to the couch.',
      'Yellow: Respect White’s need for quiet solitude after large social outings and do not force them into constant socializing.',
      'Both: Check in intentionally on long-term life and career goals to prevent aimless drifting.'
    ],
    conflictResolutionGuide: 'Keep disagreements light, gentle, and pragmatic. Neither partner handles aggressive heavy drama well.',
    goldenRule: 'White provides the steady shore; Yellow provides the vibrant waves.'
  },

  'Y-Y': {
    pairKey: 'Y-Y',
    color1: 'Y',
    color2: 'Y',
    scoreTitle: 'The Non-Stop Celebration: Spontaneous Joy & Playful Fireworks',
    compatibilityLevel: 'Combustible Passion',
    synergyOverview: 'Life together is an exhilarating, spontaneous carnival. You are best friends, eternal playmates, and partners in crime. Grudges are nonexistent, laughter is constant, and everyday life is approached with childlike wonder.',
    strengths: 'Incredible infectious energy, zero emotional baggage, deep mutual forgiveness, vibrant social life, and endless romantic fun.',
    challenges: 'Severe lack of operational grounding. Finances, chores, long-term investments, and difficult adult conversations can be chronically neglected. Both may compete sub-consciously for the social spotlight.',
    communicationProtocol: [
      'Hire outside professionals (accountants, organizers) or automate routine adult responsibilities to eliminate friction.',
      'Establish a mandatory weekly 30-minute "Logistics & State of Life" check-in with zero distractions.',
      'Practice taking turns sharing the spotlight in social gatherings; enthusiastically hype each other up.',
      'Make space for serious emotional conversations when needed without immediately deflecting with humor.'
    ],
    conflictResolutionGuide: 'Address issues in the moment quickly, forgive generously, and immediately pivot into a positive shared experience.',
    goldenRule: 'Anchor your joyful celebration in daily operational discipline.'
  }
};

export function getCompatibility(c1: ColorCode, c2: ColorCode): CompatibilityPairing {
  const sortedKey = [c1, c2].sort().join('-');
  return COMPATIBILITY_MATRIX[sortedKey] || COMPATIBILITY_MATRIX['R-B'];
}
