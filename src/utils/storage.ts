import { ColorCode, SavedPersonProfile } from '../types/personality';

const PROFILES_KEY = 'hartman_saved_profiles';
const LATEST_RESULT_KEY = 'hartman_latest_result';
const BOOKMARKS_KEY = 'hartman_bookmarked_articles';

export interface TestResultData {
  primaryColor: ColorCode;
  secondaryColor: ColorCode;
  scores: Record<ColorCode, number>;
  percentages: Record<ColorCode, number>;
  totalQuestions: number;
  completedAt: string;
  testMode: 'full' | 'quick';
}

const DEFAULT_PERSONAS: SavedPersonProfile[] = [
  {
    id: 'persona-1',
    name: 'Alex (Example)',
    relation: 'Manager',
    primaryColor: 'R',
    secondaryColor: 'B',
    scores: { R: 24, B: 11, W: 4, Y: 6 },
    notes: 'Executive Director; focused on results, deadlines, and high quality standards.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'persona-2',
    name: 'Sarah (Example)',
    relation: 'Partner',
    primaryColor: 'B',
    secondaryColor: 'W',
    scores: { R: 5, B: 25, W: 10, Y: 5 },
    notes: 'Devoted, thoughtful, values emotional closeness, and hates aggressive arguments.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'persona-3',
    name: 'Jordan (Example)',
    relation: 'Colleague',
    primaryColor: 'W',
    secondaryColor: 'Y',
    scores: { R: 4, B: 8, W: 22, Y: 11 },
    notes: 'Senior Engineer; calm, low drama, prefers written briefs and steady pacing.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'persona-4',
    name: 'Sam (Example)',
    relation: 'Friend',
    primaryColor: 'Y',
    secondaryColor: 'R',
    scores: { R: 10, B: 6, W: 5, Y: 24 },
    notes: 'Marketing Lead; energetic, creative, social organizer, highly enthusiastic.',
    dateAdded: new Date().toISOString()
  }
];

export function getSavedProfiles(): SavedPersonProfile[] {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    if (!raw) {
      localStorage.setItem(PROFILES_KEY, JSON.stringify(DEFAULT_PERSONAS));
      return DEFAULT_PERSONAS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load profiles:', e);
    return DEFAULT_PERSONAS;
  }
}

export function saveProfile(profile: Omit<SavedPersonProfile, 'id' | 'dateAdded'>): SavedPersonProfile {
  const profiles = getSavedProfiles();
  const newProfile: SavedPersonProfile = {
    ...profile,
    id: `profile-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    dateAdded: new Date().toISOString()
  };
  const updated = [newProfile, ...profiles];
  localStorage.setItem(PROFILES_KEY, JSON.stringify(updated));
  return newProfile;
}

export function updateProfile(id: string, updates: Partial<SavedPersonProfile>): void {
  const profiles = getSavedProfiles();
  const updated = profiles.map(p => p.id === id ? { ...p, ...updates } : p);
  localStorage.setItem(PROFILES_KEY, JSON.stringify(updated));
}

export function deleteProfile(id: string): void {
  const profiles = getSavedProfiles();
  const updated = profiles.filter(p => p.id !== id);
  localStorage.setItem(PROFILES_KEY, JSON.stringify(updated));
}

export function getLatestResult(): TestResultData | null {
  try {
    const raw = localStorage.getItem(LATEST_RESULT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveLatestResult(result: TestResultData): void {
  try {
    localStorage.setItem(LATEST_RESULT_KEY, JSON.stringify(result));
  } catch (e) {
    console.error('Failed to save latest result', e);
  }
}

export function getBookmarkedArticles(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : ['core-motive-theory', 'hartman-communication-protocol'];
  } catch {
    return ['core-motive-theory'];
  }
}

export function toggleArticleBookmark(articleId: string): boolean {
  const current = getBookmarkedArticles();
  let updated: string[];
  let isBookmarked = false;
  if (current.includes(articleId)) {
    updated = current.filter(id => id !== articleId);
  } else {
    updated = [...current, articleId];
    isBookmarked = true;
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  return isBookmarked;
}
