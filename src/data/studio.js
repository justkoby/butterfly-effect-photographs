// Shared approved rates, transcribed from the individual, couple and family rate cards.
export const STUDIO = {
  name: 'Butterfly Effect Photographs',
  location: 'Adenta Housing Down, Accra, Ghana',
  whatsapp: '233558399101',
  bookingUrl: 'https://butterflyn21t.setmore.com/butterfly',
};
export const SESSION_TYPES = ['Individual', 'Couple', 'Family'];
export const PACKAGES = [
  { id: 'pkg-1', session: 'Individual', name: 'Package I', price: 400, photos: 6, outfits: 1, badge: null },
  { id: 'pkg-2', session: 'Individual', name: 'Package II', price: 600, photos: 9, outfits: 2, badge: 'Most Popular' },
  { id: 'pkg-3', session: 'Individual', name: 'Package III', price: 800, photos: 12, outfits: 3, badge: null },
];
export const COUPLE_PACKAGES = [
  { id: 'couple-1', session: 'Couple', name: 'Couple I', price: 700, photos: 6, outfits: 2 },
  { id: 'couple-2', session: 'Couple', name: 'Couple II', price: 900, photos: 9, outfits: 2 },
  { id: 'couple-3', session: 'Couple', name: 'Couple III', price: 1100, photos: 12, outfits: 3 },
];
export const FAMILY_PACKAGES = [
  { id: 'family-3', session: 'Family', name: 'Family of Three', price: 800, photos: 6, minOutfits: 1, outfits: 2, peopleMin: 3, peopleMax: 3 },
  { id: 'family-4', session: 'Family', name: 'Family of Four', price: 1000, photos: 10, minOutfits: 1, outfits: 2, peopleMin: 4, peopleMax: 4 },
  { id: 'family-5-6', session: 'Family', name: 'Family of Five / Six', price: 1200, photos: 6, minOutfits: 1, outfits: 3, peopleMin: 5, peopleMax: 6 },
];
export const ALL_PACKAGES = [...PACKAGES, ...COUPLE_PACKAGES, ...FAMILY_PACKAGES];
export const SHOOT_TYPES = ['Birthday', 'Portrait', 'Headshots', 'Couple', 'Family', 'Wedding', 'Studio rental', 'Other'];
export const formatPrice = price => `GH₵${price.toLocaleString('en-GH')}`;
export const outfitLabel = pkg => pkg.session === 'Family'
  ? `${pkg.minOutfits}–${pkg.outfits} outfits`
  : pkg.session === 'Couple' ? `Max. ${pkg.outfits} outfits` : `${pkg.outfits} outfit${pkg.outfits > 1 ? 's' : ''}`;
export const packagesForSession = session => ALL_PACKAGES.filter(pkg => pkg.session === session);
export function getPackage(id) { return ALL_PACKAGES.find(pkg => pkg.id === id); }
export function sessionForBrief(brief) {
  if (brief.type === 'Couple' || brief.type === 'Family') return brief.type;
  return brief.session || 'Individual';
}
export function suggestedPackage(brief) {
  if (['Wedding', 'Studio rental', 'Other'].includes(brief.type)) return null;
  const session = sessionForBrief(brief);
  const outfits = Number(brief.outfits);
  if (session === 'Family') return FAMILY_PACKAGES.find(pkg => Number(brief.people) >= pkg.peopleMin && Number(brief.people) <= pkg.peopleMax && outfits >= pkg.minOutfits && outfits <= pkg.outfits) || null;
  if (session === 'Couple') return COUPLE_PACKAGES.find(pkg => pkg.photos === Number(brief.photos || 6) && outfits >= 1 && outfits <= pkg.outfits) || null;
  return PACKAGES.find(pkg => pkg.outfits === outfits) || null;
}
export function buildSummary(brief, packageId, messages = []) {
  const pkg = getPackage(packageId);
  const session = sessionForBrief(brief);
  return [
    `Hello ${STUDIO.name}, I would like to enquire about a shoot.`,
    `Session: ${session}`,
    `Shoot: ${brief.type}`,
    ...(session === 'Family' ? [`Family size: ${Number(brief.people) > 6 ? '7 or more' : brief.people} people`] : []),
    `Preferred date: ${brief.date || 'To be discussed'} (please confirm availability)`,
    `Creative direction: ${brief.style || 'I would like your advice'}`,
    `Requested outfits: ${brief.outfits}`,
    ...(session === 'Couple' ? [`Requested retouched photos: ${brief.photos || 6}`] : []),
    pkg ? `Package preference: ${pkg.name} — ${formatPrice(pkg.price)}, ${pkg.photos} retouched photos, ${outfitLabel(pkg)}` : 'Pricing: Please provide a tailored quote.',
    ...messages.filter(m => m.role === 'user').slice(-4).map(m => `My request: ${m.text}`),
    'Please confirm the final scope, date and any deposit requirements. This is an enquiry, not a confirmed booking.',
  ].join('\n');
}
export function guidedReply(brief) {
  if (brief.type === 'Studio rental') return 'Tell the studio your preferred date, number of hours and equipment needs. Rental availability and the final quote need to be confirmed with the team.';
  const pkg = suggestedPackage(brief);
  if (!pkg) return 'Your selected details need a tailored quote. Check the session category, number of people, photos and outfits in your brief, or send your requirements to the studio for advice.';
  return `${pkg.name} fits the details selected in your brief. For a ${brief.type.toLowerCase()} shoot, bring outfits you feel comfortable in and discuss the mood with your photographer. Add your ideas below, then send your brief to the studio for confirmation.`;
}
