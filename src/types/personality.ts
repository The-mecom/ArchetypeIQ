export type ColorCode = 'R' | 'B' | 'W' | 'Y';

export type CoreMotive = 'Power' | 'Intimacy' | 'Peace' | 'Fun';

export interface QuestionOption {
  text: string;
  color: ColorCode;
  trait: string;
}

export interface Question {
  id: number;
  text: string;
  category: 'workplace' | 'relationships' | 'stress' | 'decision-making' | 'motivation' | 'communication' | 'conflict';
  options: {
    R: string;
    B: string;
    W: string;
    Y: string;
  };
}

export interface ColorTraitProfile {
  code: ColorCode;
  name: string;
  motive: CoreMotive;
  tagline: string;
  colorHex: string;
  bgLight: string;
  borderClass: string;
  textClass: string;
  badgeBg: string;
  description: string;
  deepEssay: string;
  innateNeeds: string[];
  deepestWants: string[];
  naturalStrengths: string[];
  shadowLimitations: string[];
  inHealthTraits: string[];
  underStressTraits: string[];
  thrivesWith: string;
  stifledBy: string;
  growthFrontier: string;
  communicationStyle: {
    overview: string;
    preferredTone: string;
    keyDos: string[];
    keyDonts: string[];
    magicPhrases: string[];
    triggerPhrases: string[];
  };
  workplaceRole: {
    leadershipStyle: string;
    teamRole: string;
    idealEnvironment: string;
    blindSpots: string[];
  };
  romanticDynamic: {
    inLove: string;
    needsFromPartner: string;
    warningSigns: string;
  };
  childhoodRoots: string;
  moralEvolution: string;
}

export interface BlendArchetype {
  primary: ColorCode;
  secondary: ColorCode;
  title: string;
  epithet: string;
  tagline: string;
  summary: string;
  strengths: string[];
  tensions: string[];
  growthAdvice: string;
}

export interface CompatibilityPairing {
  pairKey: string;
  color1: ColorCode;
  color2: ColorCode;
  scoreTitle: string;
  compatibilityLevel: 'High Natural Synergy' | 'Dynamic Complementary' | 'High Growth / High Friction' | 'Gentle & Steady' | 'Combustible Passion';
  synergyOverview: string;
  strengths: string;
  challenges: string;
  communicationProtocol: string[];
  conflictResolutionGuide: string;
  goldenRule: string;
}

export interface LiteratureArticle {
  id: string;
  title: string;
  subtitle: string;
  category: 'Foundation' | 'Communication & Conflict' | 'Relationship Dynamics' | 'Leadership & Teams' | 'Character & Maturation' | 'Parenting';
  readTime: string;
  authorNote: string;
  academicContext: string;
  summary: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    content: string;
    quote?: string;
    bulletPoints?: string[];
  }[];
  hartmanCitations: string[];
  practicalExercises: string[];
}

export interface SavedPersonProfile {
  id: string;
  name: string;
  relation: 'Self' | 'Partner' | 'Manager' | 'Colleague' | 'Friend' | 'Family Member' | 'Child';
  primaryColor: ColorCode;
  secondaryColor: ColorCode;
  scores: Record<ColorCode, number>;
  notes?: string;
  dateAdded: string;
}

export interface CommunicationStrategyPayload {
  senderColor: ColorCode;
  receiverColor: ColorCode;
  context: 'feedback' | 'conflict' | 'favor' | 'negotiation' | 'brainstorm' | 'apology' | 'emotional_connection';
  customGoal?: string;
}
