import { ConfigProps } from './types/config';

const config: ConfigProps = {
  // REQUIRED
  appName: 'Fly100',
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription: 'Fly100 | The Art of Paragliding: Mastery, Flow & Freedom',
  // REQUIRED (no https://, not trailing slash at the end, just the naked domain)
  domainName: 'fly100.co',
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: '',
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every route, just remove this below
    onlyShowOnRoutes: ['/'],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === 'development'
            ? process.env.DEV_PRICE_ID_STARTER
            : process.env.PROD_PRICE_ID_STARTER,
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: 'Wingmates',
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: 'The online community for budding XC pilots',
        // The price you want to display, the one user will be charged on Stripe.
        price: 1495,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        // priceAnchor: 199,
        features: [
          {
            name: 'Unlimited support',
          },
          { name: 'Courses & Workshops' },
          { name: 'Community forum' },
          { name: 'Weekly events' },
          { name: 'Member-Led Meetups' },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === 'development'
            ? process.env.DEV_PRICE_ID_ADVANCED
            : process.env.PROD_PRICE_ID_ADVANCED,
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: 'Birdmen Academy',
        description: 'Cape Town based mentorship and coaching',
        price: 8995,
        // priceAnchor: 299,
        features: [
          { name: 'Wingmates (everything in community included)' },
          {
            name: 'On site and in flight coaching with Barry & Grant',
          },
          { name: 'Unlimited guiding*' },
          { name: 'Flight planning & post flight analysis' },
          { name: 'Personalised Coaching' },
          { name: 'Weather Calls' },
          { name: 'Community Whatsapp Group' },
          { name: 'XC Clinics & Fly-ins (Western Cape Area)' },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: 'bucket-name',
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: 'https://cdn-id.cloudfront.net/',
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: 'mg',
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: 'marc@mg.shipfa.st',
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: 'marc.louvion@gmail.com',
  },
  colors: {
    main: '#38bdf8', // This is the primary color from our dark theme
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: '/signin',
    // REQUIRED — the path you want to redirect users after successful login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: '/dashboard',
  },
} as ConfigProps;

export default config;
