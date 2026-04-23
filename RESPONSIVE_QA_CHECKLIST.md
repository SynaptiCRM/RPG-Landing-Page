# Responsive QA Checklist

## Viewport Matrix
- `320x568` (small phones)
- `360x800` (Android baseline)
- `390x844` (modern iPhone baseline)
- `768x1024` (tablet portrait)
- `1024x768` (tablet landscape / small laptop)
- `1366x768` (common laptop)
- `1920x1080` (desktop)

## Mandatory Checks
- No horizontal scroll on page root and in every section.
- Header navigation is fully usable on mobile (`<768px`).
- Anchor navigation scrolls to the correct section.
- Primary CTA buttons remain visible and easy to tap.
- Form fields keep readable labels, input values, and validation messages.
- Footer contacts and email wrap correctly at `320px`.

## Section-by-Section Validation
- `Hero`: heading readability, CTA width, stat cards wrapping.
- `SkillTree`: card heights, badges readability, button tap targets.
- `QuestLog`: timeline marker alignment, card content wrapping.
- `Achievements`: rarity labels readability, card consistency.
- `GuildRegistration`: form spacing, select usability, submit button.
- `Footer`: contact cards, icon spacing, long text wrapping.

## Accessibility and Motion
- Tap targets are at least ~44px high for primary controls.
- Keyboard focus remains visible for links, buttons, and form fields.
- With `prefers-reduced-motion`, animations are reduced and UI remains clear.

## Done Criteria
- Mobile, tablet, and desktop layouts are visually stable.
- All sections are readable and interactive without clipping.
- User can complete the full flow from navigation to form submission on mobile.
