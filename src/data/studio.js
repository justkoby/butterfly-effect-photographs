// Shared by the website and server. Keep approved studio facts here.
export const STUDIO = {
  name: 'Butterfly Effect Photographs',
  location: 'Adenta Housing Down, Accra, Ghana',
  whatsapp: '233558399101', // Existing website contact; confirm before launch.
  bookingUrl: 'https://butterflyn21t.setmore.com/butterfly',
};
export const PACKAGES = [
  { id: 'pkg-1', name: 'Package I', price: 400, photos: 6, outfits: 1, badge: null },
  { id: 'pkg-2', name: 'Package II', price: 600, photos: 9, outfits: 2, badge: 'Most Popular' },
  { id: 'pkg-3', name: 'Package III', price: 800, photos: 12, outfits: 3, badge: null },
];
export const SHOOT_TYPES = ['Birthday', 'Portrait', 'Headshots', 'Couple', 'Wedding', 'Studio rental', 'Other'];
export const formatPrice = price => `GH₵${price}`;
export function getPackage(id) { return PACKAGES.find(pkg => pkg.id === id); }
export function suggestedPackage(brief) {
  if (['Wedding', 'Studio rental', 'Other'].includes(brief.type)) return null;
  return PACKAGES.find(pkg => pkg.outfits === Number(brief.outfits)) || null;
}
export function buildSummary(brief, packageId, messages = []) {
  const pkg = getPackage(packageId);
  return [
    `Hello ${STUDIO.name}, I would like to enquire about a shoot.`,
    `Shoot: ${brief.type}`,
    `Preferred date: ${brief.date || 'To be discussed'} (please confirm availability)`,
    `Creative direction: ${brief.style || 'I would like your advice'}`,
    `Outfits: ${brief.outfits}`,
    pkg ? `Package preference: ${pkg.name} — ${formatPrice(pkg.price)}, ${pkg.photos} retouched photos, ${pkg.outfits} outfit(s)` : 'Pricing: Please provide a tailored quote.',
    ...messages.filter(m => m.role === 'user').slice(-4).map(m => `My request: ${m.text}`),
    'Please confirm the final scope, date and any deposit requirements. This is an enquiry, not a confirmed booking.',
  ].join('\n');
}
export function guidedReply(brief) {
  if (brief.type === 'Studio rental') return 'Tell the studio your preferred date, number of hours and equipment needs. Rental availability and the final quote need to be confirmed with the team.';
  if (['Wedding', 'Other'].includes(brief.type)) return 'This needs a tailored quote. Share the location, timing and coverage you have in mind with the studio. Your enquiry below will carry those details through.';
  const pkg = suggestedPackage(brief);
  return `For ${brief.outfits} outfit(s), ${pkg?.name || 'a tailored session'} is a starting point. For a ${brief.type.toLowerCase()} shoot, bring outfit options you feel comfortable in and discuss the mood with your photographer. Add your ideas below, then send your brief to the studio for confirmation.`;
}
