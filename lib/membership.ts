/**
 * Single source of truth for "is the current visitor a Wingmates member?"
 *
 * MVP: always resolves false, so the locked/gated state is what renders and
 * is reviewable — no auth wired yet. This is intentionally the ONLY place
 * that decides membership; every gated section in the sites directory calls
 * this (indirectly, via a prop passed down from the page) rather than
 * re-implementing the check.
 *
 * Swap the body for a real Supabase/NextAuth session check when Wingmates
 * auth is wired to this surface — the call sites do not need to change.
 */
export async function getIsWingmatesMember(): Promise<boolean> {
  return false;
}
