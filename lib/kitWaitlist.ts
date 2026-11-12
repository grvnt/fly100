/** The Fly100 waitlist is a Kit (ConvertKit) form: the same one behind the
 * waitlist page at fly100.co/fly100 and the button on flowghost.app, so
 * everyone lands on one list.
 *
 * Do NOT post to it directly. Kit holds ("quarantines") any sign-up that
 * arrives without its anti-spam token and makes the person pass a "prove you
 * are human" page first. Instead we render a plain form carrying the markers
 * Kit's own script looks for, then load that script, which does the anti-spam
 * check invisibly, submits, and swaps in the success message. This is Kit's
 * supported "HTML embed" arrangement with our own styling.
 * (Copied from ~/repos/flowghost/src/lib/waitlist.ts.) */
const KIT_FORM_ID = '10098364';
const KIT_FORM_UID = 'b7904fde1f';
export const KIT_SCRIPT_URL = 'https://f.convertkit.com/ckjs/ck.5.js';

/** The hosted waitlist page, for when the on-page form does not work. */
export const WAITLIST_URL = '/fly100';

const KIT_OPTIONS = {
  settings: {
    after_subscribe: {
      action: 'message',
      success_message: "You're on the list! Your free guide is on its way to your inbox.",
      redirect_url: '',
    },
    recaptcha: { enabled: true },
    return_visitor: { action: 'show', custom_content: '' },
    analytics: { google: null as string | null, fathom: null as string | null, facebook: null as string | null, segment: null as string | null, pinterest: null as string | null, sparkloop: null as string | null, googletagmanager: null as string | null },
  },
};

const escapeAttr = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** The form as an HTML string, because Kit's script rewrites parts of it
 * (errors, the success message) and React must not fight it over those nodes. */
export function waitlistFormHtml(): string {
  return `
<form action="https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions" method="post" class="formkit-form"
  data-sv-form="${KIT_FORM_ID}" data-uid="${KIT_FORM_UID}" data-format="inline" data-version="5"
  data-options="${escapeAttr(JSON.stringify(KIT_OPTIONS))}">
  <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
  <div data-element="fields" class="formkit-fields">
    <label class="fg-waitlist-label" for="fg-waitlist-email">Your email, to join the Fly100 waitlist</label>
    <input id="fg-waitlist-email" class="formkit-input" type="email" name="email_address" aria-label="Email"
      autocomplete="email" required>
    <button data-element="submit" class="formkit-submit" type="submit"><span>Join the waitlist</span></button>
  </div>
</form>`;
}
