export const VIDEO_SRC_LANDSCAPE = '/videos/explainer-landscape.mp4';
export const VIDEO_SRC_PORTRAIT = '/videos/explainer-portrait.mp4';

export const CATEGORIES = [
  'Application & Eligibility',
  'Credit Limit & Line Suspensions',
  'Making your Payment',
  'Managing Your Account',
  'Afforda',
  'Money Trouble, Life Events & Extra Help',
  'Credit Reporting, Account Details & Protecting your Personal Information',
  'Issues & Complaints',
];

// TODO: placeholder copy — swap in the real Drafty support answer for each question before this goes live.
const TBD = 'Answer copy needed — replace with the real Drafty support text for this question.';

export const FAQS = [
  { id: 1, cat: 'Application & Eligibility', pop: true, video: 'How your Drafty line of credit works — explained in a minute', q: 'What is a line of credit?', a: 'A line of credit gives you a borrowing limit you can use again and again (up to your credit limit). For example, if your limit is £1,000 and you borrow £200, you only pay interest on £200. With Drafty, you can draw money online or in the app and we’ll send the cash in under 90 seconds*.' },
  { id: 2, cat: 'Application & Eligibility', q: 'Can I apply for a line of credit?', a: `You can apply for a line of credit if you:

- Have a valid UK Debit card
- Have an active UK bank account
- Live in the UK
- Are over the age of 18
- In regular employment – full or part time
- Have a net monthly (after tax) income of at least £1,250

We check your finances, eligibility, and credit history before reaching a decision. We also run affordability checks to set a credit limit that’s right for you.` },
  { id: 3, cat: 'Application & Eligibility', pop: true, q: 'How much can I borrow?', a: `You can apply for a credit limit between £50 and £3,000.

We can’t guarantee that you can borrow the amount you applied for. We’ll check your details and might offer you a lower credit limit based on our assessment of your ability to repay.` },
  { id: 4, cat: 'Application & Eligibility', q: 'Will my application be approved?', a: 'We can’t confirm approval until we review your application. We use the most up to date information about you to make sure your credit line is affordable for you.' },
  { id: 5, cat: 'Application & Eligibility', q: 'Why was I declined?', a: 'If your loan isn’t approved, it just means you don’t meet our lending rules for now. Things can change, so you’re welcome to try again in the future and we’ll look at your new application with care.' },
  { id: 6, cat: 'Application & Eligibility', q: 'When will I get my money?', a: 'We send most Drafty transfers to your bank in under 90 seconds. It may take longer due to your bank’s processes. Check with them first, and if you still need help, please contact us online/ via chat, or by logging on to your account through our app or website.' },
  { id: 7, cat: 'Application & Eligibility', video: 'Watch: soft search vs. full credit check', q: 'Do you run a credit check, and will that impact my credit score?', a: `When you apply, we run a soft search on your credit file. Only you can see this, and it won’t affect your credit score.

If you go ahead and take out a line of credit, the search will show on your credit file. Other lenders can see that we searched, but not the result. The credit check is just one of the things we look at when we review your application.` },
  { id: 8, cat: 'Application & Eligibility', q: 'What is the minimum amount I can drawdown from my credit limit?', a: 'For Drafty flex, we give a minimum credit limit of £200. Your first draw can be as little as £50. After that each draw must be £100 or more (up to your credit limit).' },

  { id: 9, cat: 'Credit Limit & Line Suspensions', q: 'How do I increase my line of credit?', a: TBD },
  { id: 10, cat: 'Credit Limit & Line Suspensions', q: "How do I know how much of my credit limit I've used?", a: TBD },
  { id: 11, cat: 'Credit Limit & Line Suspensions', q: 'Why has my line of credit been suspended?', a: TBD },

  { id: 12, cat: 'Making your Payment', q: 'How do you calculate the monthly minimum payment amount?', a: TBD },
  { id: 13, cat: 'Making your Payment', q: 'How do I make payments?', a: TBD },
  { id: 14, cat: 'Making your Payment', q: 'Can I pay with Google Pay and Apple Pay?', a: TBD },
  { id: 15, cat: 'Making your Payment', q: 'Changing how and when I pay', a: TBD },
  { id: 16, cat: 'Making your Payment', pop: true, q: 'What happens if I pay late?', a: TBD },

  { id: 17, cat: 'Managing Your Account', q: 'How to Log in to your Drafty Account:', a: TBD },

  { id: 18, cat: 'Afforda', q: 'What is Afforda?', a: TBD },
  { id: 19, cat: 'Afforda', q: 'Will I still have access to The Drafty Club?', a: TBD },
  { id: 20, cat: 'Afforda', q: 'How can I access my offers and discounts?', a: TBD },
  { id: 21, cat: 'Afforda', q: 'How can I check that I received my reward?', a: TBD },
  { id: 22, cat: 'Afforda', q: 'Can I redeem a reward more than once?', a: TBD },
  { id: 23, cat: 'Afforda', q: "If I haven't received my reward, what should I do?", a: TBD },

  { id: 24, cat: 'Money Trouble, Life Events & Extra Help', q: 'Trouble repaying', a: TBD },
  { id: 25, cat: 'Money Trouble, Life Events & Extra Help', q: 'Additional needs & Life Events', a: TBD },

  { id: 26, cat: 'Credit Reporting, Account Details & Protecting your Personal Information', q: 'How we work with Credit Reference Agencies', a: TBD },
  { id: 27, cat: 'Credit Reporting, Account Details & Protecting your Personal Information', q: 'The data we have about you & your options', a: TBD },
  { id: 28, cat: 'Credit Reporting, Account Details & Protecting your Personal Information', q: 'Avoiding Scams', a: TBD },
  { id: 29, cat: 'Credit Reporting, Account Details & Protecting your Personal Information', q: 'Making account changes', a: TBD },

  { id: 30, cat: 'Issues & Complaints', q: "When you think something isn't right", a: TBD },
  { id: 31, cat: 'Issues & Complaints', q: 'How many complaints have been reported to the FCA in the last reporting period', a: TBD },
];
