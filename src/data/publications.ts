// Typed access to the master publications catalogue (publications.json).
// Edit publications.json, not this file. Regenerate the CSV/BibTeX downloads with `npm run catalogue`.
import data from './publications.json';

export type AltVersion = { label: string; doi: string; url: string; title: string };
export type Publication = {
  id: string;
  category: 'A' | 'B' | 'C' | 'D' | 'E';
  type: string;
  title: string;
  authors: string[];
  role: string;
  year: number;
  date: string;
  venue: string;
  publisher: string;
  volume: string;
  issue: string;
  article_number: string;
  pages: string;
  doi: string;
  doi_url: string;
  official_url: string;
  pmid: string;
  pmcid: string;
  oa_url: string;
  license: string;
  status: string;
  featured: boolean;
  scholar_url: string;
  scholar_search_url: string;
  researchgate_url: string;
  summary: string;
  topics: string[];
  alt_versions: AltVersion[];
  flags: string[];
};

export const catalogue = data;
export const publications = data.publications as Publication[];
export const categories = data.categories as Record<string, string>;
export const underReview = data.under_review;
export const profiles = data.profiles;

export const typeLabels: Record<string, string> = {
  A: 'Full-length article',
  B: 'Short research article',
  C: 'Working paper',
  D: 'Conference output',
  E: 'Preprint / under review',
};

/** "Volume(Issue), article" style details for a citation. */
export function details(p: Publication) {
  const vi = p.volume ? `${p.volume}${p.issue ? `(${p.issue})` : ''}` : '';
  return [vi, p.article_number].filter(Boolean).join(', ');
}

/** Short author form for citations: "Muruhukye J". */
export function shortName(full: string) {
  const parts = full.replace(/\s+/g, ' ').trim().split(' ');
  if (parts.length < 2) return full;
  const last = parts[parts.length - 1];
  const initials = parts.slice(0, -1).map((s) => s[0]).join('');
  return `${last} ${initials}`;
}

/** Vancouver-style citation string. */
export function citation(p: Publication) {
  const a = p.authors.map(shortName);
  const authors = a.length > 6 ? `${a.slice(0, 6).join(', ')}, et al.` : a.join(', ');
  const d = details(p);
  const id = p.doi ? ` doi:${p.doi}` : ` Available from: ${p.official_url}`;
  return `${authors}. ${p.title}. ${p.venue}. ${p.year}${d ? `;${d}` : ''}.${id}`;
}
