# Interview Cheatsheet

An interactive interview-prep question bank for senior role preparation. It turns deep company research, role requirements, case-study prompts, and personal career stories into a structured practice tool with categories, expandable answers, coaching tips, progress tracking, and a product/business cheat sheet.

This repository uses **Grab as the demo company and role example**. The content is tailored to a Senior Regional Director, Product Marketing interview at Grab, but the app structure is reusable for any company, function, or seniority level.

Live demo:

- Question bank: https://interview-bank-chi.vercel.app
- Product cheat sheet: https://interview-bank-chi.vercel.app/?view=products

## What This Includes

- 72 interview questions organized by interview flow and topic
- Expandable model answers and coaching tips
- Practice progress tracking with reset
- Section filtering by category
- Search within the question list
- A separate product cheat-sheet view
- Mobile-optimized layout
- Static deployment through Vercel

## Demo Content

The current demo is built around Grab and includes:

- Opening and fit questions
- Product marketing leadership questions
- Regional campaign scaling questions
- Cross-functional influence questions
- Long-term strategy and revenue-growth questions
- Commerce and financial-services expansion questions
- Grab product and business cheat sheet
- Case studies on GrabUnlimited, Mai, Vietnam competition, Taiwan expansion, GrabMart/local commerce, and financial services
- Curveball and technical interview prompts

Again: **Grab is used here as a demonstration dataset.** To reuse this for another role, replace the company, role, questions, answers, and product facts.

## How To Reuse This For Another Role

### 1. Define the target role

Start with a clear role brief:

- Company
- Role title
- Hiring manager or interview loop
- Business unit
- Level or scope
- Known interview format
- Required competencies
- Likely case-study areas

Example:

```text
Company: Grab
Role: Senior Regional Director, Product Marketing
Interview loop: Hiring manager, stakeholder loop, case study
Competencies: PMM leadership, regional scale, product strategy, AI, marketplace economics
```

### 2. Gather research

Collect source material from:

- Job description
- Company annual reports and earnings releases
- Investor presentations
- Product pages
- Press releases
- Leadership interviews
- Competitor research
- Your own resume and career stories
- Prior interview notes

Recommended workflow: use deep research mode across multiple research agents/models, then reconcile the outputs into one source of truth. I recommend running parallel research with **Gemini, Manus, GPT, and Claude** because each tends to surface different angles, sources, and blind spots. Use the combined research to populate:

- Company facts and business model
- Product map and strategic priorities
- Competitor landscape
- Interviewer and stakeholder context
- Likely case studies
- Culture and leadership signals
- Your strongest matching career stories

For a high-stakes role, validate recent facts before adding them. Revenue, product names, leadership, acquisitions, and strategic priorities can change quickly.

### 3. Create the question categories

Edit the `categories` array in `app.js`.

Recommended category pattern:

```js
const categories = [
  "All",
  "Opening & Fit",
  "Your Edge",
  "Product & Market Insight",
  "Leadership & XFN",
  "Company POV",
  "Strategy",
  "Culture & Risks",
  "Case Study",
  "Curveballs & Technical",
  "Facts / Appendix",
];
```

Keep the categories close to the actual interview flow. The goal is not just storage; it should help someone rehearse naturally.

### 4. Replace the questions

Each question in `app.js` follows this structure:

```js
{
  id: 1,
  category: "Opening & Fit",
  difficulty: "High",
  question: "Tell me about yourself and why this role.",
  hook: "Lead with scope, not chronology.",
  answer: `**Model answer headline.**

Full answer goes here.

Use bold lines for structure and concise paragraphs for speaking practice.`,
  tips: "Coaching note for delivery, emphasis, or likely follow-up."
}
```

Use this structure for every new card:

- `question`: what the interviewer asks
- `hook`: the one-line angle to remember
- `answer`: the model answer
- `tips`: coaching note for delivery

### 5. Reorder the interview flow

The app uses `interviewFlow` in `app.js` to make the default order feel like a real interview.

Recommended flow:

1. Opening / fit
2. Career edge
3. Product or market insight
4. Leadership / cross-functional influence
5. Company strategy POV
6. Culture / risks
7. Case studies
8. Technical or curveball probes
9. Facts appendix

Update `interviewFlow` whenever you add or remove questions.

### 6. Update the product cheat sheet

The product cheat sheet is driven by:

- `productCheatSheet`
- `businessFacts`
- `strategicDeepDives`

For another company, replace these with:

- Product lines
- Business model
- Growth engines
- Key metrics
- Competitors
- Strategic tensions
- Interview-ready POVs

Make sure to label demo facts clearly if you publish the project. Do not imply a company endorses the content.

### 7. Run locally

This is a static app. No framework is required.

```bash
npm run build
python3 -m http.server 4177
```

Then open:

```text
http://127.0.0.1:4177/
```

If you are deploying with Vercel, the build command copies static files into `dist`.

## Deploy

This repo is configured for Vercel:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

Deploy with:

```bash
npx vercel deploy --prod --yes
```

## File Structure

```text
.
├── index.html       # Static page shell
├── styles.css       # App styling and responsive layout
├── app.js           # Questions, product cheat sheet, rendering, state
├── package.json     # Build script
├── vercel.json      # Vercel static output config
└── README.md        # Project and reuse guide
```

## Notes For Reuse

- Keep company facts sourced and current.
- Avoid adding too many generic questions; tailor to the actual role.
- Write answers in a voice the candidate can actually say out loud.
- Use case studies for business-critical topics, not trivia.
- Separate factual cheat sheets from answer cards.
- Make the first 10 questions feel like a real interview opening.

## Disclaimer

This is an independent interview-preparation tool. Grab is used as a demo company and is not affiliated with, sponsoring, or endorsing this project.
