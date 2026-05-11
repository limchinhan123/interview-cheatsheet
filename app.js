const categories = [
  "All",
  "Opening & Fit",
  "Part 3: Your Edge",
  "Part 1: Habit & Insight",
  "Part 2: Leading Change",
  "Scale & XFN",
  "Strategy & Portfolio",
  "Grab POV",
  "Loop: Stakeholder",
  "Culture & Risks",
  "Case Study",
  "Deep Probes",
  "Curveballs & Technical",
  "Grab Facts",
];

const interviewFlow = [
  16, 8, 17,
  7, 6, 12,
  1, 2,
  3, 5, 4,
  39, 40, 41, 42, 43,
  18, 23, 19, 20, 30,
  31, 32, 37, 33, 34, 35, 36,
  9, 10, 11, 21,
  22, 66, 28, 29,
  13, 14, 15, 24, 25, 26, 27, 67, 68, 69, 70, 71, 72,
  44, 45, 46, 47, 48, 49, 50, 51, 52,
  59, 60, 61, 62, 63, 64, 65,
  53, 54, 55, 56, 57, 58,
];

const interviewRank = new Map(interviewFlow.map((id, index) => [id, index]));

const questions = [
  {
    id: 1,
    category: "Part 1: Habit & Insight",
    difficulty: "High",
    question:
      "Tell us about your favourite example of uncovering a powerful consumer insight hiding in plain sight - one everyone else missed - that led to an unconventional marketing strategy and a meaningful shift in user behaviour or habit.",
    hook: "The hidden insight was cultural, not demographic.",
    answer: `**The Downy Indonesia story - from 10% to 35% share in two years.**

In Indonesia, every conventional analysis showed Downy was losing to generic fabric softeners on price. The obvious answer was a sachet at Rp 500. But when I spent time in the kampung, I noticed something everyone's data had missed: people weren't drying clothes indoors or in private rooms - they were hanging them over fences, on motorbikes, across shared courtyards. **The wash wasn't private. Scent was social currency.** Fragrance wasn't what you felt - it was what your neighbours commented on.

Every other brand was marketing softness. We went after *scent as social identity* - "The fragrance that arrives before you do."

The unconventional move: instead of price-down sachets, we created a **premium micro-sachet that out-scented the competition**, repositioned as the aspirational choice, and drove it through beauty channels and wet markets alongside modern trade. We treated the drying line like a billboard.

Result: 10% -> 35% share in two years, +60% CAGR. Fastest-growing Downy business globally.

**Bridge to Grab:** The equivalent insight hiding in plain sight right now is about Saver Deliveries. Grab's data shows Saver users order 1.8x more than non-Saver. But I don't think that's about saving money. I think it's about *removing guilt* - the friction of feeling like you're being frivolous. Once you reframe Saver as a permission product rather than a cheap option, you open it to a completely different demographic who would never self-identify as budget-conscious. That's why almost a third of Deliveries MTUs are now entering through Saver. The marketing story hasn't caught up to the product reality yet.`,
    tips:
      "Be specific on the cultural insight. Don't lead with the share number - lead with the observation in the kampung. Sulin will remember the scene, not the stat.",
  },
  {
    id: 2,
    category: "Part 1: Habit & Insight",
    difficulty: "High",
    question:
      "Use Ecommerce in Southeast Asia as a thought exercise. Shopee and TikTok Shop appear to have already won. What would be your 2-3 biggest bets to drive traffic and GMV conversion for a new entrant?",
    hook: "Don't build another marketplace. Win the layer beneath.",
    answer: `**Framing first:** The question assumes the battle is on the marketplace surface - assortment, price, UI. That game is over. Shopee has 52% share and TikTok Shop is at 18% and accelerating. A new entrant fighting there spends $2 to acquire every $1 of GMV. The right frame is: **what layer beneath the marketplace is structurally underbuilt, defensible, and compounds?**

Three bets:

**Bet 1 - Become the fulfillment + identity rail for AI agents.**
Every SEA e-commerce transaction in 2027 will start with an AI assistant - not a search bar. ChatGPT, Claude, and Gemini agents will recommend, compare and initiate transactions. The winner is whoever becomes the fulfillment and payment infrastructure those agents call. This means: deep API partnerships with AI platforms, a merchant catalog that's agent-readable (not just SEO-optimized), and a payment rail (think GrabPay) that agents trust. Marketing investment goes into developer relations and merchant onboarding - not consumer ads.

**Bet 2 - Live commerce on owned infrastructure, not rented TikTok inventory.**
Live commerce is now 15-20% of TikTok Shop GMV. The format works. But the economics are brutal for merchants who pay TikTok's creator fees AND platform commission. A new entrant that gives merchants a live-streaming tool integrated with instant fulfillment - on their own storefront - can win the SMB live commerce layer. The marketing hook: *you own your live customers, TikTok rents them to you.* This directly mirrors what I built with TikTok Shop seller GTM - I know both sides of this trade.

**Bet 3 - Grocery as the Trojan horse.**
Shopee and TikTok Shop are weak in perishables, basket-size grocery, and same-day necessity. Grocery = 3-5 orders per week per household. Once you own the grocery habit, you own the home. GrabMart is already growing 1.7x faster than GrabFood and MTUs are growing 2.6x faster. The marketing bet: aggressive MGM tied to subscription (GrabUnlimited mechanic) in grocery, with private-label co-brands with regional grocers like Jaya Grocer and Everrise.

**The through-line:** In every scenario, the moat is first-party data + fulfillment infrastructure + trusted payment rail. Not another feed.`,
    tips:
      "Sulin will probe 'how would you actually execute Bet 1 or 2 with limited resources?' Have a 90-day first-move ready for one of them. Don't over-index on frameworks - she wants bets, not a strategy slide.",
  },
  {
    id: 3,
    category: "Part 2: Leading Change",
    difficulty: "High",
    question:
      "Designing the future of PMM for Grab - what end-state Product Marketing org would you dream of building? What of that endstate is realistically achievable within your first 12 months?",
    hook: "PMM at Grab is an upstream commercial function, not a downstream launch team.",
    answer: `**End-state vision (3-year):**

The PMM org I'd build has three layers that work as a flywheel:

**Layer 1 - Vertical pods** aligned to product surfaces: Mobility, Deliveries (Food/Mart/Express), Financial Services (Pay/Lend/Insure/Stash), Merchant SaaS (Mai + Ads), Driver Tools (Turbo/Coach), Loyalty (GrabUnlimited/VIP/Coins). Each pod owns the habit formation and commercial outcome for their surface - not just the launch brief.

**Layer 2 - Horizontal craft chapters** that all pods draw from: Insights & Research (the upstream intelligence), Lifecycle/CRM (CDP-native, running real-time Scenarios), Storytelling/Content, Pricing & Packaging Strategy, AI/Agentic Workflows (our internal productivity multiplier).

**Layer 3 - Country liaisons**, not country PMMs. One person per major market who localises regional narratives - working dotted-line to country marketing, solid-line to me. Regional scale with local resonance.

**Success metrics I'd own:** product adoption velocity per launch; cross-vertical adoption rate (% of new MTUs onboarded into a 2nd product within 90 days); habit index (% of MTUs at >=4 transactions/month per surface); partner-side adoption - e.g., expanding Mai's 50% merchant adoption benchmark to new AI tools.

**Non-goals:** Brand campaigns (Sulin's brand team), media buying (centralized), country tactical activation.

**What's achievable in 12 months:**

*Q1:* Listening tour. Thirty days riding with drivers, sitting with merchants using Mai, embedded with each PM team. Build the current-state map - where are the gaps, who are the best PMMs, what's blocked. Don't restructure before I understand what's working.

*Q1-Q2:* Stand up the vertical pod structure. Fill 3-4 critical hires - driver-side PMM is almost certainly underbuilt; Merchant SaaS PMM needs more depth given Mai's growth.

*Q2:* Launch CDP Scenarios v2 in partnership with engineering - extend the real-time nudge framework (the GrabUnlimited 15-minute trigger that drove +3% subscriber conversion) to 3 new product surfaces: Mai upsell to lending, GrabMart cross-sell from GrabFood, GrabUnlimited-to-GrabVIP migration.

*Q2-Q3:* Ship regional MGM v2 - extend GrabUnlimited's referral mechanics with a creator-affiliate layer borrowed from TikTok Shop's playbook. This is where my background gives Grab something it doesn't already have.

*Q4:* Publish the first Grab PMM Operating Doctrine - how PMM partners with Product, GrabAds, Brand, Country, and Engineering. The codified playbook.

**One measurable proof point per vertical by month 12.** That's the contract I'd set for myself.`,
    tips:
      "Reference specific Grab products by name - CDP Scenarios, Mai, Turbo, GrabUnlimited. Sulin will notice immediately if you're answering generically. The Operating Doctrine close signals you build infrastructure, not just campaigns.",
  },
  {
    id: 4,
    category: "Part 2: Leading Change",
    difficulty: "Medium",
    question:
      "It's 2026. Tell us about the single most meaningful AI-driven transformation you've personally fought for, installed, or built - and the lessons that now shape how you approach AI in marketing.",
    hook: "The bottleneck moved from production to judgment.",
    answer: `**At TikTok, the problem was a 10x product velocity with flat marketing throughput.**

When TikTok's product team started shipping features weekly - across LIVE, AI Creation, Gaming, local services - our marketing org was still wired for monthly launch cadences. By the time we'd briefed the agency, localized 8 language variants, and got sign-off, the product had shipped two more iterations. We were perpetually behind.

The transformation I fought for was an **AI-assisted launch operations system** - essentially agentic marketing. The workflow: product PRD drops -> AI drafts the launch brief, pulling from existing positioning frameworks -> AI generates first-pass copy variants in target languages -> human marketer reviews, edits, approves -> AI produces all asset variants at scale -> CDP auto-routes to the right segment.

We reduced time-to-first-asset from 3 weeks to 3 days. Asset output per launch increased 8-10x. The team went from being a bottleneck to being the accelerant.

**The unexpected hiccups:**

First - the outputs were initially brand-off. The AI had no brand voice constraint. We had to build a fine-tuning layer with a prompt library trained on Grab-native language (Sulin's team will recognise the "Mystique" equivalent - we built ours from scratch). Until that was done, every output needed heavy human intervention - sometimes more than if we'd written it from scratch.

Second - localisation broke on cultural nuance. Bahasa Indonesia and Vietnamese humour registers don't survive translation, even from a smart model. We had to implement human-in-the-loop gates for any campaign that required cultural resonance, not just functional communication.

Third - measurement didn't keep up. We were producing so many variants that our experiment design infrastructure couldn't handle the volume. We had statistical noise everywhere. Had to invest in measurement ops before we could trust AI-driven content at scale.

**What I carry forward:**

AI is a productivity multiplier on *execution*, not a substitute for strategic judgment. The bottleneck shifts from production to insight, taste, and measurement. You must rebuild measurement infrastructure before you scale content. And - critically - the team structure has to change before the tool stack does. If you bolt AI onto a team still wired for monthly campaigns, you just produce bad content faster.

**Bridge to Grab:** Mai for merchants, Turbo for drivers, Mystique inside marketing - the AI infrastructure is already built. The next layer is agentic PMM. Agents that can read a product PRD, draft a CDP Scenario, generate localized variants, set up measurement, and route stakeholder approvals. The first thing I'd build in my first 12 months is exactly that.`,
    tips:
      "Sulin's team won a 2024 Effie for 'Hacking ChatGPT saved marketing 97% hours.' She has lived this problem. Name the hiccups - that's where you show you've actually done it, not theorised it.",
  },
  {
    id: 5,
    category: "Part 2: Leading Change",
    difficulty: "Medium",
    question:
      "How would you approach building trust and influence with Grab's product teams as a PMM leader - given that product at Grab has historically been in the driver's seat?",
    hook: "Earn the right to be upstream by proving you reduce product risk, not just add polish.",
    answer: `**The mistake most PMM leaders make is announcing their seat at the table. I'd earn it.**

Grab's product org reports to Philipp Kandal, a technical CPO who talks about "AI-First with Heart" and building the Intelligence Layer. Product PMs here are sophisticated - they've shipped at scale. If I walk in saying "PMM should be upstream," I'm just adding noise.

My approach in the first 90 days: I don't ask for influence - I manufacture usefulness.

**Three specific moves:**

One - I embed with each PM team for two weeks each. I'm not there to advise. I'm there to listen to their user research sessions, sit in sprint reviews, and understand what they're already shipping. Then I produce one deliverable they didn't ask for: a crisp external narrative for the feature - who it's for, what problem it solves, why now. Something they can use in stakeholder comms or in their app store listing. I give it away for free. Do that three times and PMs start inviting me to planning, not just launch.

Two - I bring them something they can't get internally: outside-in customer intelligence. At vivo I built an APAC consumer insights team from scratch. At TikTok I was running primary research on creator behaviour in 15+ markets. Grab's product teams have internal data but often lack the cultural texture of *why* users behave a certain way. I run qualitative research - ride-alongs, merchant shadowing, driver focus groups - and feed that back to PMs as insight they can act on. That's the coin I trade.

Three - I make my PMM team's success metric align with product's success metric. Not "campaigns shipped" or "impressions" - product adoption velocity, MAU growth, cross-sell conversion. When we're measured on the same thing, the political question disappears.

**The long game:** When PMs see that a PMM-designed onboarding flow or a CDP-triggered lifecycle sequence moved their DAU number, they pull PMM into roadmap planning. That's the upstream seat - it's not granted, it's earned through outcomes.`,
    tips:
      "This will likely come from a product PM or CPO stakeholder in the loop. Show that you understand the power dynamic without being deferential. The 'give it away for free' framing lands well.",
  },
  {
    id: 6,
    category: "Part 3: Your Edge",
    difficulty: "High",
    question:
      "Tell us about a time your recommendation went directly against a strongly held belief from a very important senior decision maker - yet you successfully shifted their perspective.",
    hook: "Diagnose why they believe it before you challenge what they believe.",
    answer: `**The vivo China HQ campaign override.**

When I was building vivo's APAC marketing infrastructure, China HQ had a strong institutional conviction: a single pan-Asian brand campaign featuring the same ambassador, same visual language, same music - executed identically across all nine markets. The logic was efficiency and brand consistency. The HQ marketing director had run this model successfully in China and had the sales data to defend it.

My conviction was the opposite. I had just spent months building a consumer insights capability across SEA, and what we were finding was that vivo's target demographic - first-time smartphone upgraders aged 18-25 - had completely different cultural identity triggers by market. In Vietnam, status was about family aspiration; in Indonesia, it was community belonging; in the Philippines, it was entertainment and self-expression. A single campaign would be mediocre everywhere.

The thing I had to diagnose first: *why* did HQ hold this view so strongly? It wasn't ignorance. It was risk aversion - a localised campaign strategy meant nine different approval processes, nine different production costs, nine different agency relationships, and nine different metrics that couldn't be consolidated into one report to show the CEO. The belief was downstream of a structural incentive to simplify.

So I didn't argue for localisation on creative grounds. I argued on risk grounds - which is what they were actually optimising for. I proposed a hybrid: a **regional campaign architecture** with one common insight ("camera as identity expression"), one visual grammar, but local talent and local cultural moment. That meant *one* global brief, *one* approval chain, but *local resonance* in execution. I built a cost model showing it was only 15% more expensive than a pure global approach but projected a 20-30% improvement in recall based on prior P&G SEA research.

HQ approved it. The following year vivo ran its first fully localised regional campaign with culture-centric activations - including award-winning films shot on vivo by renowned directors in each market. We grew the business 40% YoY.

**What I learned:** Senior decision makers rarely hold a belief because they haven't seen your slide deck. They hold it because the existing belief is *doing something for them* - simplifying a decision, reducing a risk, protecting a relationship. Identify what the belief is *protecting*, and build an alternative that protects the same thing. That's the shift.`,
    tips:
      "Do not make the senior person the villain. The most compelling version of this story shows you understood their constraint before you proposed your solution. End with the learning - Sulin is evaluating judgment, not just outcome.",
  },
  {
    id: 7,
    category: "Part 3: Your Edge",
    difficulty: "High",
    question:
      "How exactly are you weird or unusual as a CMO? What do you care about more deeply than most CMOs, and what do you consistently excel at that almost every other CMO rarely prioritises?",
    hook: "Three things. Each one structural, not stylistic.",
    answer: `**Three things that make me unusual - each one structural, not stylistic.**

**One: I've run P&Ls, not budgets.**
Most marketing leaders manage cost centres. I've managed P&Ls - Pampers Vietnam at $30M, vivo APAC at $1.5B. That means when I build a marketing strategy, I'm reverse-engineering from the business model, not from brand objectives. I can sit in a CFO conversation and understand exactly where marketing $ compounds into unit economics. Most CMOs can't do that without a finance partner in the room.

**Two: I've worked across three structurally different habit-formation categories.**
P&G - FMCG repeat purchase: habits are built through occasion-based consistency, price-per-use psychology, and retail shelf presence. vivo - consumer hardware: habits are built through aspiration, social proof, and upgrade cycles. TikTok - algorithm-driven social: habits are built through dopamine loops, creator identity, and network density. That triple is unusually relevant for Grab - a superapp that has to form a daily transport habit, a weekly grocery habit, a monthly subscription habit, and a yearly insurance consideration. I've built marketing systems for all three models. Most CMOs have depth in one.

**Three: I learned marketing by selling to distributors before consumers.**
My first real commercial education was Vietnam - P&G in Pampers. To grow market share, I had to convince a network of independent kios owners in Hanoi that Pampers was worth the premium over generic diapers. They had no loyalty - they stocked what moved. I had to understand their economics, their customer, their storage constraints. That's essentially Grab's merchant challenge. I've been doing B2B2C longer than my title has suggested.

**What I consistently excel at that most CMOs don't prioritise:**
Treating the marketing function as a manufacturing system. I obsess over throughput, latency, and yield - how many quality insights enter the top of the funnel, how fast they convert into briefs, how reliably briefs become campaigns, and how efficiently campaigns become measurable outcomes. Most CMOs manage the art. I manage the factory that makes the art possible at scale. That's why the AI/agentic workflow transformation wasn't an experiment for me - it was engineering a faster factory.`,
    tips:
      "This is the question Sulin will remember. Don't be modest - but avoid generic CMO-speak like 'I'm data-driven' or 'I lead with empathy.' The 'manufacturing system' close is memorable and distinct.",
  },
  {
    id: 8,
    category: "Loop: Stakeholder",
    difficulty: "Medium",
    question: "Why Grab? Why now? What are you walking away from and what are you walking toward?",
    hook: "Walk toward the mission. Don't run away from TikTok.",
    answer: `**Walking toward, not away from.**

I've spent 16 years building marketing for products that changed how large numbers of people behaved - how Vietnamese mothers bought diapers, how 600 million people bought their first smartphone, how a billion people discovered live entertainment and commerce on a 6-inch screen.

But Grab is the only company in Southeast Asia where the next 10 years of habit formation compound across someone's *entire day* - how they get to work, how they eat lunch, how they send money to their parents, how they grow their small business, how they invest their savings. That's not a product. That's infrastructure.

And specifically now - Grab just turned its first full-year profit. The Intelligence Layer is being built in real time. Mai is already inside 50% of merchants. Turbo is changing driver income. This is the moment between "proved it works" and "scaled it everywhere." That's the most interesting seat in any company.

What I'm walking away from: a global role at scale that's been enormously fulfilling. What I'm walking toward: a role where I get to define what PMM *is* at one of the most consequential platforms in the region - and where the three commercial muscles I've built over 16 years are all directly relevant at the same time.`,
    tips:
      "Keep this under 90 seconds. Sulin is not looking for a rehearsed speech - she's listening for genuine pull. The 'entire day' framing directly echoes Anthony Tan's investor narrative.",
  },
  {
    id: 9,
    category: "Loop: Stakeholder",
    difficulty: "Medium",
    question:
      "Grab's marketing has been highly localized - Sulin herself has spoken extensively about hyperlocalization as a competitive moat. How do you reconcile your instinct for regional scale with Grab's localization philosophy?",
    hook: "They're not in tension. Regional architecture, local soul.",
    answer: `**I'd reframe the apparent contradiction first.**

Sulin's hyperlocalization thesis - GrabBenches in Vietnam, GrabDriveYourCar in Bangkok, GrabJastip in Indonesia - is not an argument against regional scale. It's an argument against *lazy* regional scale. Against taking a global campaign template and translating it. Against assuming that what works in Singapore works in Hanoi.

I've lived that distinction at vivo. When I built the APAC campaign model, the mistake everyone wanted me to make was efficiency-through-uniformity. What I built instead was **regional architecture with local soul** - one common insight and visual grammar, local talent and cultural moment. Efficiency in the strategy layer. Investment in the cultural layer.

At Grab, the regional PMM role isn't about overriding country teams - it's about identifying the products that are *structurally similar enough* across markets that they benefit from a shared launch playbook. GrabUnlimited. Saver Deliveries. Mai. GrabMart. These don't need a different product-market thesis in Indonesia vs the Philippines - they need a different cultural execution. The PMM org I'd build is the one that creates the strategic frame and then *releases* country marketers to make it resonate locally. Sulin's team has proven that hyperlocalization wins awards and market share. My job is to make sure the PMM scaffolding makes that work cheaper and faster - not more generic.`,
    tips:
      "Reference GrabBenches by name. Sulin tagged her team on that campaign publicly. It signals you did your homework. The 'regional architecture, local soul' phrase is repeatable and quotable.",
  },
  {
    id: 10,
    category: "Loop: Stakeholder",
    difficulty: "Medium",
    question:
      "How would you think about marketing to Grab's merchant and driver partners - this is a two-sided marketplace and most consumer marketers are weak on the supply side.",
    hook: "Acknowledge the gap. Then show you know exactly how to close it.",
    answer: `**I'll be direct: the driver side is a genuine new muscle. Let me tell you exactly how I'd build it.**

On the merchant side, I have transferable depth. At P&G in Vietnam, my unit economics depended on a network of kios owners and distributors. I had to understand *their* P&L - their margin on Pampers vs a local brand, their storage cost, their cashflow cycle - before I could market effectively to consumers through them. That's B2B2C. The mental model maps directly to GrabFood merchant partners.

And at TikTok, a significant part of my scope was TikTok Shop seller GTM - how to onboard, activate, and retain the SMB merchants who are the lifeblood of live commerce. I understand merchant acquisition funnels, merchant health metrics, and the difference between a merchant who grows with the platform vs one who churns.

On the driver side - I haven't run driver marketing at scale. I'll own that gap clearly. What I'd do in the first 30 days is spend real time in the field. Not a structured focus group - actual ride-alongs, sitting in driver waiting bays at 6am, watching how drivers use Turbo and Coach in real sessions. I want to understand what a driver is actually optimising for in a shift before I write a single brief.

What I do bring from adjacent experience: at vivo we built a sales force training and motivation program for 12,000 channel partners in Indonesia who were economically dependent on vivo product sell-through. The economics and psychology of a gig partner aren't that different from a channel partner who's betting their livelihood on your platform's health. The June 2025 Singapore driver incentive rollback - where Grab paused a change after industry association pushback - is a perfect case study in how quickly trust can be fragile on the supply side. The PMM job there is to make the platform's value proposition *legible and honest*, not just attractive.`,
    tips:
      "Do NOT fake depth you don't have. Sulin and any supply-side stakeholder will see through it. Acknowledging the driver-side gap cleanly and showing a credible learning plan is far stronger than pretending.",
  },
  {
    id: 11,
    category: "Loop: Stakeholder",
    difficulty: "Medium",
    question: "What's your view on GrabAds and how PMM should work with the ads business?",
    hook: "GrabAds is the highest-margin growth lever. PMM should be its demand-generation partner.",
    answer: `**GrabAds is structurally the most interesting asset Grab has that most people underestimate.**

At roughly $216M annualized run rate and growing 44-45% YoY, with 220K quarterly active advertisers - this is already a meaningful ads business. And at 1.7% of Deliveries GMV, it has structural room to go to 3-4% as the merchant self-serve platform matures. Amazon Advertising is ~5% of GMV for context. The trajectory is clear.

But I think there's a PMM gap that's limiting GrabAds growth: **most SMB merchants don't understand how to turn GMV data into ad targeting decisions.** They're on the platform, they have sales, they see the self-serve ads UI - but the connection between "I'm running a promotion" and "I should be running a Sponsored Listing to the 18-30 female segment in my area who ordered from me last month" isn't obvious without help.

Mai is actually the bridge here. If Mai becomes the AI business advisor that not only tells a merchant their peak hours and bestselling items, but *recommends the right GrabAds format and budget* based on their margin and growth stage - that's a compounding flywheel. PMM's job is to build that narrative: from merchant onboarding -> Mai adoption -> first self-serve ad -> performance loop.

The way I'd structure PMM's relationship with GrabAds: we are their demand-generation partner for merchant adoption, not a separate team competing for merchant attention. Every PMM-led merchant campaign should include an GrabAds activation pathway. When I ran TikTok Shop seller GTM, the healthiest merchant cohorts were the ones who used the advertising tools within 30 days of activation. The PMM funnel and the ads funnel are the same funnel.`,
    tips:
      "Ken Mandel leads GrabAds. If you're in a loop with him or his team, this framing - PMM as demand-gen partner for GrabAds - establishes you as additive, not competitive. Drop the Amazon Advertising 5% GMV comparison - it signals financial literacy.",
  },
  {
    id: 12,
    category: "Loop: Stakeholder",
    difficulty: "Low",
    question: "Tell me about a time you had to build something from nothing - a team, a capability, or a function.",
    hook: "vivo APAC. 60 people from zero. COVID as the accelerant.",
    answer: `**vivo APAC - building the regional marketing infrastructure from zero during COVID.**

When I joined vivo as Senior Director APAC in November 2019, there was no regional marketing function. There were country-level marketing teams in Indonesia, the Philippines, Thailand, Malaysia, Vietnam, with no regional coherence - no shared insights, no common playbooks, no centre of excellence. And then three months after I arrived, COVID hit.

The obvious instinct was to slow down. I did the opposite. I made the bet that COVID was the best moment to build infrastructure because it forced country teams to operate differently - they couldn't rely on physical activations, they had no events budget, they were suddenly dependent on digital and content. The regional team could be useful immediately if we built the right capabilities.

In 18 months we built: a regional consumer insights capability (primary research, social listening, competitive intelligence); a creative centre of excellence that could produce campaign assets for nine markets at a fraction of agency cost; a digital performance team managing DTC and TikTok Shop; and a media buying centre that negotiated regional rates with tourism boards across SEA. 60 people, built from scratch.

The hardest part wasn't hiring - it was trust. Country marketing VPs had run their markets autonomously for years. The regional team looked like central overhead until we made ourselves undeniably useful: we gave them insights they couldn't produce locally, we carried budget to fund pilots they couldn't afford, and we consistently produced work that won external recognition. By year two, countries were pulling us into their planning, not the other way around.

The business grew 40% YoY despite COVID. We achieved top-two market share in key SEA markets. The team won WARC, SABRE, and Putra Brand awards.`,
    tips:
      "This is a likely stakeholder question in a loop with the team. The 'trust not headcount' angle is important - it previews exactly how Brandon would approach the Grab PMM team build without threatening existing country leads.",
  },
  {
    id: 13,
    category: "Case Study",
    difficulty: "High",
    question:
      "CASE STUDY (Most Likely): GrabUnlimited has ~20% of Deliveries MTUs as subscribers. Grow this to 40% in 18 months without degrading the economics of the program.",
    hook: "Subscribers spend 3x more. The constraint isn't awareness - it's activation and perceived payoff.",
    answer: `**Framing the problem first.**

GrabUnlimited is already responsible for ~1/3 of Deliveries GMV with only ~20% of MTUs subscribed. That means subscribers are spending 3-4x more than non-subscribers. The product works. The question is why 80% of active Deliveries users haven't joined.

I'd spend 10 minutes of a case study on diagnosis before touching solutions.

**Diagnosis (3 hypotheses to test quickly):**

1. *Awareness gap:* Users don't know GrabUnlimited exists or what it actually includes. Likely true for lower-frequency users in markets like Vietnam and Indonesia where Grab brand comms skews toward promotions.

2. *Payoff uncertainty:* Users can't easily calculate whether GrabUnlimited pays off for them. The value prop requires ordering a certain number of times per month to break even - and that math isn't obvious at point-of-decision.

3. *Habit-frequency mismatch:* GrabUnlimited assumes weekly or near-weekly ordering. Users who order 1-2x/month will never see ROI. Growing subscribers without fixing frequency first just drives churn.

**The growth architecture (18 months):**

*Phase 1 - Months 1-3: Remove the math barrier.*
Build a personalized payoff calculator inside the app - "Based on your last 3 months, GrabUnlimited would have saved you $X." This exists as a concept at some subscription platforms. Grab's CDP Scenarios can run this in real time. Trigger it at the moment a user's order total crosses the break-even threshold. Low cost, high intent signal.

Also: 7-day free trial with a clear unlock mechanic. Not a discount - a full trial with everything unlocked. The TikTok equivalent is the creator monetisation "taste" that converts casual creators to active ones. Experienced value converts better than discounted price.

*Phase 2 - Months 3-9: MGM flywheel.*
Referral is the highest-ROI subscriber acquisition channel at subscription businesses globally (Costco, Netflix, Amazon Prime all index on it). Grab's referral mechanics exist but are under-deployed for GrabUnlimited specifically. I'd build a **"Gift a month" mechanic** - subscriber pays nothing extra, friend gets 30 free days, both get a reward if friend converts. This is structurally similar to TikTok Shop's creator affiliate model. Creators (in this case: existing GrabUnlimited subscribers) become acquisition agents with skin in the game.

*Phase 3 - Months 6-12: Frequency first, subscription second.*
Target the 2x/month user cohort - they're close to subscription value but not there yet. Run PMM-designed habit formation campaigns around specific occasions: "Late night office order," "Rainy day," "Feed the kids before 6pm." Raise frequency to 4x/month, then convert to GrabUnlimited while the habit is fresh. CDP Scenario design: trigger GrabUnlimited prompt after the 3rd order in a month.

*Phase 4 - Months 12-18: Vertical expansion of the subscription value.*
GrabUnlimited v2 includes GrabMart discounts, a GrabPay cashback tier, and a driver-priority feature. Each new benefit is a re-acquisition hook for churned subscribers and a conversion hook for fence-sitters. Price the upgraded tier at 20% premium with clear incremental value.

**Economics check:**
CAC per subscriber via MGM ≈ $3-5 reward cost. LTV per subscriber (3x GMV, higher repeat, higher basket) ≈ $40-80 lifetime premium over non-sub. Unit economics are highly favourable. The constraint is execution velocity and CDP capability - both of which I'd resource aggressively in the first 90 days.

**Metrics I'd own:**
- Trial start rate (% of eligible MTUs who start a trial)
- Trial-to-paid conversion rate (benchmark: Netflix at ~70%)
- Subscriber 90-day retention
- MGM referral conversion rate
- Cross-vertical adoption rate (do GrabUnlimited subscribers adopt GrabMart faster?)`,
    tips:
      "This is the most likely case format. The three-hypothesis diagnostic opening signals rigour. The CDP Scenario design shows technical fluency. Having a unit economics check at the end shows CFO-readiness. Time yourself: 2 min diagnosis, 5 min architecture, 2 min metrics. Stop at 9 minutes. Let them probe.",
  },
  {
    id: 14,
    category: "Case Study",
    difficulty: "High",
    question:
      "CASE STUDY (Alternative): Design the PMM go-to-market plan for rolling out Mai (Grab's AI Merchant Assistant) to the next 50% of Grab's merchant base.",
    hook: "Mai has 50% single-store adoption. The next 50% is structurally harder.",
    answer: `**The first question before any GTM: why haven't the next 50% adopted?**

The first 50% are likely: digitally fluent, urban, in Singapore/Malaysia/PH, higher GMV, early adopters. The next 50% are likely: less digitally fluent, lower-GMV, rural, multi-language markets, operating on basic smartphones, running businesses where the owner is also the cook and cashier. These are structurally harder to reach through any in-app UI flow.

**GTM architecture for the next 50%:**

*Channel 1 - Peer activation, not Grab activation.*
The most trusted voice for a hawker operator in Bandung is another hawker in the same market who already uses Mai. I'd identify the 5,000 highest-adopting, highest-GMV Mai users per market - call them Grab Merchant Champions - and build a structured peer referral program with training kit, a monthly digital stipend if their referrals activate, and public recognition (a "Champion" badge in the GrabMerchant app). This is creator/affiliate economics applied to the merchant tier.

*Channel 2 - Offline and in-person training for the lowest-digital cohort.*
In Indonesia and Vietnam, 30-40% of merchants have limited comfort with in-app tutorials. Grab already has field sales teams. I'd build a "Mai onboarding module" that a field rep or Merchant Champion can run in 15 minutes at a food stall. The script: show three Mai features, get the merchant to ask their first question in the chat UI, celebrate the first AI-generated insight. First-session completion is the leading indicator of 30-day retention.

*Channel 3 - Language-native onboarding in Bahasa, Tagalog, Vietnamese, Thai.*
Mai's current UX is likely English-first or Bahasa Malay-first. Proper language localisation - not just translation, but cultural framing of business concepts - is a prerequisite for the next 50%. I'd prioritise Bahasa Indonesia and Vietnamese as the two highest-impact markets.

*Channel 4 - SMS/WhatsApp lifecycle for merchants who rarely open the GrabMerchant app.*
The second half of the merchant base opens the app less frequently. Meet them where they are: a weekly WhatsApp-delivered "Your Mai insight this week" - one metric, one recommendation. Drives re-engagement into the app without requiring the merchant to remember to check.

**Metrics:**
- Mai WAU (weekly active users) among next-50% cohort
- Time-to-first-AI-interaction post-onboarding
- GMV uplift for newly onboarded Mai users vs control (benchmark: 15% uplift already proven in early cohort)
- Merchant Champion referral conversion rate
- 30/60/90 day retention by language market

**The economic case:**
Grab is bearing all Mai token costs. The ROI logic: every 1% of merchants using Mai more actively increases GMV by ~0.15% based on the 15% uplift figure. At $22B GMV, every 1% MAI activation = ~$33M GMV. The PMM investment is 100x positive ROI.`,
    tips:
      "The peer-activation / Merchant Champion mechanic is a creative specific that most candidates won't propose. It signals you understand SMB GTM dynamics - not just digital marketing. Cite the 15% GMV uplift to anchor the economic case.",
  },
  {
    id: 15,
    category: "Case Study",
    difficulty: "Medium",
    question:
      "CASE STUDY (Defensive): Grab is losing ride-hailing share in Vietnam to Xanh SM (electric vehicles, ~45% share vs Grab ~36%). What would your PMM response look like?",
    hook: "You can't out-green a government-backed EV company. Win on trust and ecosystem depth.",
    answer: `**First: diagnose what Xanh SM is actually winning on.**

Xanh SM's advantage is not just EVs. It's three things: (1) Novelty and national pride - it's a Vietnamese brand built on VinFast, Vietnam's first domestic automaker, which carries enormous cultural weight; (2) lower fares from lower operating costs; (3) cleaner, newer vehicles. The "EV" framing is the PR story but the consumer decision is driven by perceived quality and price.

**What Grab should NOT do:**

Don't fight Xanh SM on the EV narrative. Grab is already deploying 30,000+ EVs in Thailand and has EV programs globally - but it won't be as fast or as locally resonant as VinFast in Vietnam. Trying to out-EV a government-linked national champion is a losing battle.

**What Grab's PMM should do:**

*Pillar 1 - Defend on ecosystem depth.*
A Xanh SM user has a ride-hailing app. A GrabCar user has a ride, food delivery, grocery, payments, insurance, and a rewards program all in one. The PMM job is to make the *switching cost* vivid and tangible. Campaign: "Everything in one app" - show a day in the life of a Grab user vs the friction of managing 3-4 separate apps. Loyalty rewards that compound across all verticals are Grab's structural moat. Make GrabRewards the hero.

*Pillar 2 - Supercharge driver retention and earnings narrative.*
If Grab loses drivers to Xanh SM (who can earn on the VinFast platform), supply degrades and ETA goes up - which accelerates consumer churn. Turbo's 23% earnings uplift is the counter-narrative. Make driver earnings publicly visible through a "Grab Driver Earnings Dashboard" - not internal data, public-facing stats. Transparency builds trust in a market where Xanh SM is the challenger brand.

*Pillar 3 - Own the safety and reliability story.*
Xanh SM is new. Its safety record, customer support quality, and payment trust are unproven at scale. Grab has 14 years of safety data, GrabProtect insurance, 20B transactions, and a trust signal that a new entrant cannot replicate. A "14 years of safety" campaign with real ride stats in Vietnam could land well in a market that just went through years of gig-economy growth without regulatory trust.

**Metrics I'd track:**
- Ride-hailing share trend monthly (via third-party trackers)
- Multi-service penetration: % of Vietnam ride users also using GrabFood
- NPS gap vs Xanh SM
- Driver monthly active rate and churn to Xanh SM`,
    tips:
      "You may or may not get this specific case - but Vietnam ride-hailing is a documented Grab vulnerability and any sharp interviewer could probe you on it. Having a structured answer signals you read the competitive landscape.",
  },
  {
    id: 16,
    category: "Opening & Fit",
    difficulty: "High",
    question:
      "Give me your opening answer: tell me about yourself and why this role, in a way that immediately clears the 'CMO-equivalent' bar.",
    hook: "Lead with scope and operating model, not chronology.",
    answer: `**The answer I would give is compact, senior, and non-defensive.**

What excites me about this role is that Grab is not looking for a downstream launch marketer. You're looking for someone who can help shape products upstream, scale regional adoption, and build the PMM operating system for a very complex ecosystem.

That's exactly the kind of work I've been doing, even if the titles have changed by company. At TikTok, I lead consumer product marketing globally across major product surfaces - LIVE, AI Creation, Gaming and Local Services - where the work sits close to product velocity, creator behaviour, merchant economics and revenue outcomes. Before that, at vivo, I built the APAC marketing infrastructure from zero around a $1.5B regional business. And at P&G, I learned the discipline of P&L, habit formation and distributor economics in markets like Vietnam and Indonesia.

So the reason Grab is compelling is not just the brand or the category. It's that the role pulls together the three muscles I've built over 16 years: product-led growth, regional operating scale, and marketplace empathy across consumers, merchants and partners.

The way I'd describe my fit is this: I'm not a pure brand marketer trying to move upstream. I'm a business-building marketer who has always cared about the product behaviour underneath the campaign. That's the work I think Grab needs now - especially as affordability, AI, merchant tools, driver productivity and loyalty become one connected growth system.`,
    tips:
      "Use this when the interviewer starts broad. It plants the three fit pillars early: product, scale, and marketplace empathy. Keep it under 90 seconds.",
  },
  {
    id: 17,
    category: "Opening & Fit",
    difficulty: "High",
    question:
      "Some stakeholders may wonder whether you're CMO-grade enough for a role framed as a CMO-equivalent PMM leader. How do you address that without sounding defensive?",
    hook: "Answer with scope, stakes and outcomes - then move on.",
    answer: `**I wouldn't argue the title. I'd reframe around scope.**

I'd say: I understand the question, because my current title says Product Marketing rather than CMO. But the substance of the work has been closer to business leadership than campaign management.

At TikTok, my scope sits across major global product surfaces where product velocity, monetisation, user behaviour and go-to-market have to move together. At vivo APAC, I was effectively building a regional marketing function against a large commercial P&L - 60 people, multiple markets, and a business growing through both brand and channel execution. Earlier at P&G, I managed businesses where the marketing decision only mattered if it changed repeat purchase, distribution economics and share.

So I don't think of this as a title stretch. I think of it as a scope match. Grab is looking for a leader who can connect product, data, AI, country execution and commercial outcomes. That's the pattern I've built repeatedly.

The one thing I would not pretend is that I've already run every part of Grab's marketplace. The driver side is a new muscle. My answer to that is not theatre - it's field time. I would spend the first month with drivers, merchants, product teams and country teams before declaring an operating model. The confidence I bring is not that I know everything; it's that I know how to build the learning system quickly.`,
    tips:
      "This neutralises the title gap while signalling humility. Do not over-explain or sound wounded by the concern.",
  },
  {
    id: 18,
    category: "Strategy & Portfolio",
    difficulty: "High",
    question:
      "If you joined, which three regional product portfolios would you prioritise first, and why?",
    hook: "Pick the portfolios where Grab has unfair advantage, not the loudest roadmap.",
    answer: `**I'd focus PMM energy where regional scale, product adoption and ecosystem economics compound.**

**First: affordability-led habit products across Deliveries and Mobility.**
Grab's current growth equation is built on making services more affordable without training users to wait for subsidies. Saver Deliveries, Shared Saver, Group Orders, Group Rides, GrabFood for One, GrabUnlimited and Travel Pass all point in the same direction: remove cost friction, increase frequency, then graduate users into deeper ecosystem use. PMM's job is to make the ladder legible: Saver for permission, Standard for reliability, Priority/VIP for confidence.

**Second: merchant operating-system products.**
Mai, GrabAds, finance tools, Tap to Pay, Cloud Printer and Virtual Store Manager are not separate features. They are the beginnings of a business OS for small merchants. That is a very different proposition from "we bring you orders." It becomes: we help you grow demand, manage operations, understand performance, access capital and advertise smarter.

**Third: travel and discovery.**
This is naturally regional. Dine Out Discovery, Travel Pass, airport pickup, QR travel payments, Grab More and tourism-board partnerships can scale across markets because the user need is portable: make local life easier when you're outside your home routine. PMM can build one regional architecture while letting countries localise the moments.

**The enabling layer is partner trust.**
Every one of those portfolios depends on driver and merchant confidence. If partners don't believe the economics are fair, the consumer experience breaks. I would explicitly treat supply health as a PMM metric, not just an operations metric.`,
    tips:
      "This is a strong answer when asked 'what would you prioritise?' It shows portfolio judgment and avoids spreading yourself across every Grab product.",
  },
  {
    id: 19,
    category: "Strategy & Portfolio",
    difficulty: "High",
    question:
      "How would you use Grab's CDP Scenarios capability as a PMM leader, beyond generic lifecycle marketing?",
    hook: "Make CDP a product-adoption system, not a messaging machine.",
    answer: `**The way I'd frame CDP Scenarios is: real-time product marketing at the moment of intent.**

Most lifecycle marketing is still batch-based: define a segment, send a campaign, wait for a result. Grab's CDP Scenarios can be much more powerful because it can connect a live user behaviour to a product intervention while the intent is still warm.

I'd use it in three ways.

**One: activation rescue.**
The documented GrabUnlimited example is the model: someone abandons signup, and within 15 minutes they get a relevant nudge that lifts conversion. I would extend that logic to Mai onboarding, GrabMart second order, GrabPay activation, and GrabUnlimited-to-VIP migration.

**Two: cross-vertical habit formation.**
If a user orders GrabFood three times in a month but never uses GrabMart, that is not a generic cross-sell moment. It is a household-frequency signal. The Scenario should trigger a specific Mart occasion - breakfast staples, rainy-day groceries, kids' snacks - not a broad promotion.

**Three: partner-side monetisation.**
For merchants, CDP should connect Mai insights to GrabAds activation. If Mai detects a merchant has peak demand on Friday nights and margin on two hero SKUs, the next action should be a recommended Sponsored Listing budget, not just a dashboard insight.

**The guardrail:** I would not let CDP become notification spam. Every Scenario needs a KPI tree: trigger, target behaviour, holdout group, revenue or retention impact, and guardrail metrics like opt-outs, complaints or partner trust.`,
    tips:
      "Sulin will notice if you know CDP Scenarios is not just a CRM tool. Say 'trigger -> nudge -> measurement loop' somewhere in the answer.",
  },
  {
    id: 20,
    category: "Strategy & Portfolio",
    difficulty: "Medium",
    question:
      "Grab is building Mai, GrabAds and merchant tools. How would you turn scattered merchant features into a coherent merchant proposition?",
    hook: "From marketplace demand to merchant business OS.",
    answer: `**I would reposition the merchant portfolio from 'tools' to an operating system for growth.**

Today, a merchant can easily experience Grab as a set of separate surfaces: the order platform, Ads, finance tools, Mai, payments, printer hardware, menu setup, dispute workflows. The PMM opportunity is to package these as one business promise: Grab helps you get demand, run operations, understand performance, access capital and grow profitably.

The proposition could be: **"Your business co-pilot, built into every order."**

The architecture:

**Growth:** GrabAds, sponsored listings, audience recommendations and promotions.

**Operations:** Cloud Printer, Tap to Pay, order workflows, AI menu setup, inventory and prep-time recommendations.

**Intelligence:** Mai as the front door - not just chat, but recommendations based on GMV, margin, traffic and customer behaviour.

**Capital:** Lending and financial services surfaced only when the merchant has enough transaction history and a clear use case.

The GTM should segment merchants by maturity. High-GMV digital merchants get self-serve dashboards and Ads optimisation. Low-digital merchants get field onboarding, WhatsApp nudges and peer champions. Multi-store merchants get operating reports and financing hooks.

The metric is not just Mai adoption. It is merchant health: ads activation within 30 days, GMV uplift, retention, margin improvement, dispute reduction, and trust in Grab as a partner rather than just a commission taker.`,
    tips:
      "Use this if a B2B or merchant stakeholder is in the loop. It makes PMM sound like a packaging and adoption function, not a copywriting function.",
  },
  {
    id: 21,
    category: "Loop: Stakeholder",
    difficulty: "High",
    question:
      "How would you rebuild or protect driver trust after a controversial incentive or earnings change?",
    hook: "Treat driver trust as marketplace infrastructure.",
    answer: `**I would start by acknowledging that driver trust is not a comms problem after the fact. It is a product-marketing input before the change ships.**

When a driver incentive change lands badly, the damage is not only the immediate backlash. It is the suspicion that the platform understands the spreadsheet better than the shift.

My approach would have four parts.

**First: diagnose the lived economics.**
Before messaging anything, I would map how the change affects different driver cohorts: full-time vs part-time, peak vs off-peak, airport vs city, car vs bike, high acceptance vs flexible work patterns. Averages are dangerous here.

**Second: pre-test the narrative with drivers, not just ops.**
If a driver cannot explain the new earning logic in one sentence, the product is not ready. The message has to be legible: what changed, why it changed, who benefits, who may lose, and what protections exist.

**Third: publish the guardrails.**
Drivers need to know the platform is watching fairness metrics, not just adoption. That means public or semi-public reporting on earnings per online hour, pickup distance, cancellation compensation, and complaint resolution.

**Fourth: build a rollback protocol.**
If the signal turns negative, pausing a rollout should be treated as responsive governance, not failure. The June 2025 Singapore incentive pause is a useful reminder: with partner economics, speed matters but trust matters more.

**Bridge to my background:** The closest adjacent experience for me is channel-partner economics at P&G and vivo. If your partners feel the platform has changed the rules without understanding their day, you lose distribution quality fast. Grab's driver base is more complex, so I would learn it in the field before I ever try to message it.`,
    tips:
      "This answer is especially useful with ops, marketplace, or driver-side stakeholders. Own that driver marketing is a learning edge, then show a serious operating plan.",
  },
  {
    id: 22,
    category: "Culture & Risks",
    difficulty: "Medium",
    question:
      "How do Grab's 4Hs - Heart, Hunger, Honour and Humility - show up in how you would lead this PMM function?",
    hook: "Don't recite the values. Operationalise them.",
    answer: `**I'd make the 4Hs visible in operating choices, not posters.**

**Heart** means PMM has to understand the people behind the metric. For Grab, that means consumers, merchants and drivers. A growth idea that improves conversion but creates merchant confusion or driver distrust is not a good growth idea.

**Hunger** means the function should be ambitious about business outcomes. PMM should not celebrate launches. It should celebrate adoption velocity, frequency, retention, cross-sell and partner-side activation. I would set one measurable proof point per vertical in the first year.

**Honour** means being transparent about trade-offs. If a pricing or incentive change creates losers, we should say so internally and design mitigations before the market tells us. Honour is also how PMM earns trust with product and country teams: no claiming credit for shared work, no central theatre.

**Humility** means entering with a listening system. I would not restructure the PMM org in week one. I would spend the first month with drivers, merchants, country leads, support, product reviews and data before declaring what needs to change.

The practical version is simple: every PMM brief should include a consumer impact, merchant impact, driver impact, business metric and trust risk. That makes the values part of the work.`,
    tips:
      "This avoids sounding like you memorised culture slogans. The final sentence gives you a concrete operating mechanism.",
  },
  {
    id: 66,
    category: "Culture & Risks",
    difficulty: "High",
    question:
      "How would you adapt your leadership style to Grab's culture - especially given its founder-led, hyperlocal, operationally intense environment?",
    hook: "Show respect for the system before describing how you would change it.",
    answer: `**I would enter Grab with operational humility and strategic conviction.**

Grab is not a clean software company where PMM can sit far away from the ground truth. The product experience depends on drivers, merchants, country teams, regulators, support, weather, traffic, payments and local rituals. That means culture is not just values. It is the operating system.

The first adaptation I would make is to stay close to the field. I would want PMMs spending time with drivers, merchants, support teams and country marketers, not only reading dashboards. In a company like Grab, the dashboard tells you what happened; the field tells you why.

The second is to respect country expertise. I would not come in as a regional leader trying to centralise taste. My job would be to build the regional spine - strategy, positioning, measurement, playbooks - and let country teams own cultural execution.

The third is to be comfortable with high standards and high ambiguity at the same time. Grab is scaling profitability, AI, merchant monetisation, financial services and new markets while still running the daily reliability engine. That requires a PMM function that can be rigorous without becoming slow.

The fourth is to make disagreement useful. In a founder-led, high-conviction culture, influence comes from evidence, judgment and trust - not from making the loudest argument. I would bring clear hypotheses, field evidence, customer texture and a recommendation, then be willing to change my mind quickly when the data or local teams show something different.

So the cultural fit I would want to demonstrate is: grounded, commercially hungry, locally respectful and direct about trade-offs.`,
    tips:
      "Use this if they probe fit beyond capability. It shows you understand Grab's operating culture, not just its strategy.",
  },
  {
    id: 23,
    category: "Strategy & Portfolio",
    difficulty: "Medium",
    question:
      "How do you balance Grab's affordability push with premium products like Priority, GrabExec and GrabVIP without confusing the brand?",
    hook: "Barbell strategy only works if users see a ladder, not a contradiction.",
    answer: `**I would frame this as a ladder, not a split personality.**

Grab's affordability products are not only about cheapness. They are about widening the addressable market and increasing frequency. Saver, Shared Saver, GrabFood for One and Group Rides reduce guilt and friction. They get people into more routines.

The premium side - Priority, GrabExec, high-value rides and GrabVIP - is about certainty. Faster arrival, better reliability, service recognition, and confidence in high-stakes moments.

The PMM job is to make the ladder intuitive:

**Saver:** "I can use Grab more often without feeling wasteful."

**Standard:** "Grab is reliable for my everyday needs."

**Priority:** "When timing matters, I can pay for certainty."

**VIP:** "The ecosystem recognises my value across the day."

That structure prevents brand dilution because the promise is consistent: Grab helps me choose the right level of convenience for the moment. The mistake would be marketing each tier as a separate promo. The better approach is occasion-based: rainy commute, late meeting, family meal, airport transfer, weekly groceries.

The metrics I'd watch are tier migration, frequency lift, retention by tier, subsidy dependence, NPS by occasion, and cannibalisation between Saver and Standard. The goal is not to push everyone premium. It is to give users a ladder they can climb when their context changes.`,
    tips:
      "This is a clean way to discuss the barbell strategy without making affordability sound like margin erosion.",
  },
  {
    id: 24,
    category: "Case Study",
    difficulty: "High",
    question:
      "CASE STUDY: Build the GTM for Stash or an AI Money Coach investing product inside Grab's financial services ecosystem.",
    hook: "Make investing feel native to GrabPay, not imported from a fintech app.",
    answer: `**I would start with trust and adjacency, not investment features.**

For most Grab users, the mental model is not "I need an investing app." It is: I pay, receive, save, borrow, insure, and manage daily money inside Grab. Stash or AI Money Coach only works if it feels like the next safe step in that money relationship.

**Target first cohort:** GrabPay and GrabUnlimited users with stable transaction frequency, repeat wallet usage, and low-to-mid balance accumulation. Not mass-market blast. Trust products should start with the highest-confidence cohorts.

**Positioning:** "Put small idle money to work, with guidance you can understand." Avoid wealth-management language. The user job is confidence, not sophistication.

**Product packaging:**
- Round-up or small recurring contribution from GrabPay activity.
- AI Money Coach that explains in local language, with conservative defaults.
- Goal-based entry points: emergency buffer, travel fund, school fees, future self.
- Clear risk education and easy exit.

**GTM phases:**
1. Closed beta with GrabPay power users and employees to test trust barriers.
2. Market pilots in Singapore/Malaysia where digital financial services trust is stronger.
3. CDP-triggered activation after repeated GrabPay use, not at random.
4. Bundle with GrabUnlimited/VIP as a loyalty upgrade for high-value users.

**Metrics:**
Activation, funded-account rate, recurring contribution rate, 90-day retention, support contacts, complaint rate, risk-comprehension checks, and cross-sell into broader financial services.

**Risk:** The worst outcome is users feeling Grab pushed them into a product they did not understand. Honour matters here. PMM should make the product legible before making it attractive.`,
    tips:
      "This case tests whether you can enter financial services without sounding reckless. Lead with trust, suitability and local language.",
  },
  {
    id: 25,
    category: "Case Study",
    difficulty: "High",
    question:
      "CASE STUDY: Grab acquires foodpanda Taiwan. How would you build the PMM playbook for a market where Grab has little or no brand equity?",
    hook: "This is integration marketing, not a launch campaign.",
    answer: `**The first principle: don't treat Taiwan like a normal country launch. Treat it as a trust transfer.**

If Grab acquires foodpanda Taiwan, users, merchants and couriers already have habits. The PMM challenge is to move those habits into Grab's ecosystem without creating fear: fear of losing favourites, losing income, losing data, losing support, or losing reliability.

**Phase 1 - Protect continuity.**
Message clearly what does not change: merchant access, saved restaurants, delivery reliability, partner payments, support paths. For the first 90 days, reassurance beats excitement.

**Phase 2 - Introduce the Grab advantage.**
Only after continuity is stable do we introduce ecosystem value: subscriptions, payments, loyalty, merchant ads, Mai-style merchant tools, and travel use cases for Taiwanese users moving around Southeast Asia.

**Phase 3 - Segment the migration.**
Consumers need habit continuity and better value. Merchants need demand, operating tools and transparent fees. Delivery partners need earnings clarity and support. Enterprise stakeholders and regulators need evidence of service quality and fair market conduct.

**Phase 4 - Localise the operating model.**
Taiwan is not SEA. Grab brand equity cannot be assumed. I would build a local advisory group of merchants, couriers and food culture voices before making any regional creative claims.

**Metrics:**
User migration rate, merchant retention, courier active rate, order reliability, NPS, complaint rate, support resolution time, and adoption of Grab-native benefits after migration.

**The close:** Success is not "we launched Grab in Taiwan." Success is "foodpanda Taiwan users felt continuity first, then discovered that the Grab ecosystem gives them more."`,
    tips:
      "This is a sharp case because it tests maturity. Avoid triumphalist expansion language; focus on continuity, trust and staged ecosystem migration.",
  },
  {
    id: 26,
    category: "Case Study",
    difficulty: "High",
    question:
      "CASE STUDY: Build an MGM v2 program across the Grab ecosystem, not just a simple referral coupon.",
    hook: "MGM should create loops, not one-off discounts.",
    answer: `**I would start by separating referral from MGM.**

Referral is a mechanic. MGM is a growth system where users, merchants or partners have a reason to bring in the next high-quality participant because the ecosystem becomes more useful for them too.

**The first MGM loop: GrabUnlimited family and friends.**
Subscribers can gift a month. The friend gets full value, not a watered-down trial. The subscriber gets a reward only if the friend converts or completes a meaningful behaviour, such as three orders in 30 days. That protects economics.

**The second loop: merchant-led local growth.**
Mai identifies high-performing merchants and gives them a Merchant Champion referral path. They refer neighbouring merchants to Mai, Ads or finance tools. The reward is not just cash; it can be ad credits, lower learning friction, or public recognition in the merchant app.

**The third loop: travel and discovery.**
Users planning trips can share Travel Pass, Dine Out lists or airport pickup bundles with companions. Group travel is naturally social, so referral does not feel like a coupon.

**The fourth loop: driver trust advocacy.**
This one has to be careful. Do not pay drivers to recruit blindly. Instead, create transparent partner education and ambassador programs around Turbo, Coach, EV ownership or women-driver opportunities where credibility matters.

**Measurement:**
Referral activation, qualified conversion, 90-day retention, incremental GMV, subsidy cost per retained user, fraud rate, and cross-vertical adoption. I would avoid paying for low-quality signups. Grab's advantage is first-party data, so MGM should optimise for retained ecosystem behaviour.`,
    tips:
      "Connect this to TikTok Shop affiliate mechanics if probed. The key phrase: 'referral is a mechanic; MGM is a growth system.'",
  },
  {
    id: 27,
    category: "Case Study",
    difficulty: "High",
    question:
      "CASE STUDY: GrabFood faces a near-parity competitor in Vietnam. How would you defend and grow frequency against ShopeeFood or Line Man-style pressure?",
    hook: "Don't fight only on promo. Fight on occasions, reliability and ecosystem lock-in.",
    answer: `**I would diagnose whether the problem is share, frequency, retention, or occasion ownership.**

If a competitor is near parity, the lazy answer is more discounts. But in food delivery, discounts can buy orders while weakening loyalty. I would look for the occasions where Grab can win structurally.

**Bet 1 - Own dependable daily occasions.**
GrabFood for One, Shared Saver, late-night office meals, rainy-day ordering, family dinner, school-night convenience. Each occasion gets a different value proposition and CDP trigger.

**Bet 2 - Bundle food with mobility and payments.**
Vietnam is not only a food-delivery market. Grab has rides, payments, rewards and potentially travel moments. A user who takes rides and orders food is harder to lose than a user who only compares restaurant coupons.

**Bet 3 - Make merchant quality visible.**
If competitors are price-aggressive, Grab can differentiate on reliability: prep accuracy, delivery time, trusted reviews, merchant consistency, and support resolution. A 5-Star Eats-style guide is useful because it turns quality into a product surface.

**Bet 4 - Protect partner economics.**
If merchants feel squeezed by commissions or dispute handling, they will push demand elsewhere. PMM should package merchant value beyond orders: Mai, Ads, finance, operational tools and transparent support.

**Metrics:**
Order frequency by cohort, multi-service penetration, repeat rate by occasion, promo dependency, merchant retention, delivery reliability, NPS, and competitor switching signals.

**The close:** In a competitive market, PMM should not try to make Grab louder. It should make Grab harder to replace in the user's week.`,
    tips:
      "This is the companion to the Xanh SM defensive case. It shows you can defend Deliveries without defaulting to subsidy warfare.",
  },
  {
    id: 67,
    category: "Strategy & Portfolio",
    difficulty: "High",
    question:
      "Grab seems to be expanding beyond mobility and food into commerce and financial services. What is your view on that strategy, and where should Grab avoid overreaching?",
    hook: "Commerce and finance are not side quests. They are permission expansions.",
    answer: `**I would frame both moves as permission expansion, not diversification for its own sake.**

Grab has earned permission through high-frequency local transactions: rides, meals, groceries, merchant demand, driver earnings and payments. Commerce and financial services are logical extensions only when they make those existing behaviours easier, safer or more valuable.

On commerce, I would not describe the ambition as becoming Shopee or TikTok Shop. That would be the wrong battlefield. Grab's right to win is **local, high-frequency, time-sensitive commerce**: food, grocery, urgent top-ups, Dine-Out, travel discovery, merchant demand generation and fulfilment for local intent.

On financial services, the right to win is not generic fintech. It is contextual finance: payments, merchant cashflow, driver earnings, responsible credit, insurance attached to real risks, and banking relationships where Grab has trust and data.

Where Grab should avoid overreaching:

**One:** horizontal marketplace categories where price, assortment and entertainment feed dynamics dominate.

**Two:** financial products that require trust Grab has not yet earned with that user or partner.

**Three:** growth that creates regulatory, credit, merchant or driver trust risk faster than the organisation can manage.

My POV: the strategy is strong if Grab stays close to its ecosystem advantages. Commerce should deepen local demand and fulfilment. Financial services should monetise trust and transaction data responsibly. The danger is treating either one as an unrelated adjacency instead of a disciplined extension of the superapp.`,
    tips:
      "This is the master answer. Use 'permission expansion' and 'right to win' early, then separate commerce from finance cleanly.",
  },
  {
    id: 68,
    category: "Strategy & Portfolio",
    difficulty: "High",
    question:
      "Should Grab try to become a real e-commerce player in Southeast Asia, or is that a distraction from its core marketplace?",
    hook: "Don't build another marketplace feed. Win local commerce.",
    answer: `**I would be very careful with the word e-commerce.**

If e-commerce means a horizontal marketplace feed competing with Shopee, Lazada and TikTok Shop on assortment, price and entertainment, I would say no. That is not Grab's natural advantage, and it would pull the company into subsidy, seller-acquisition and content dynamics where others already have scale.

But if e-commerce means **local commerce**, I think Grab absolutely has a right to play.

The strongest spaces are:

**Grocery and daily essentials:** high frequency, time-sensitive, recurring household needs.

**Food and Dine-Out discovery:** local intent, restaurant demand and offline-to-online behaviour.

**Urgent fulfilment:** users who need something now, not in three days.

**Traveller commerce:** helping existing Grab users discover and transact with local merchants across markets.

**Merchant growth tools:** Ads, Mai, financing, analytics and CRM that help SMBs grow on the platform.

The Taiwan foodpanda acquisition is interesting because it is not a random e-commerce move. It is an extension of Grab's dense-city delivery operating model, merchant network, AI tooling and traveller-discovery potential.

So my answer is: Grab should not become another marketplace. It should become the most trusted operating layer for local commerce in Asia.`,
    tips:
      "This will land well if they probe Shopee/TikTok Shop. Be crisp: horizontal e-commerce no, local commerce yes.",
  },
  {
    id: 69,
    category: "Strategy & Portfolio",
    difficulty: "High",
    question:
      "What is the strongest PMM narrative for Grab's financial services expansion?",
    hook: "Financial services is trust monetisation, not fintech theatre.",
    answer: `**I would not market Grab Financial Services as generic fintech.**

The stronger narrative is: Grab helps people and small businesses participate more confidently in the digital economy because it already understands their daily transactions.

For consumers, the sequence should be:

**Payments first:** make daily transactions simple and trusted.

**Contextual credit or insurance second:** attach finance to real needs like mobility, delivery, travel, family spending, emergency gaps or purchase timing.

**Deeper banking third:** savings, deposits or investment-style products only when trust is earned.

For merchants and drivers, the narrative is even stronger. Grab sees cashflow, demand, earnings patterns and operational health. That creates a more contextual basis for credit, insurance and financial tools than a generic bank may have.

The PMM risk is overclaiming. Finance is a trust category. Every message has to be simple, transparent and responsible: what it costs, why the user is eligible, what happens if they cannot pay, and how Grab protects them.

The line I would use: **Financial services is not a separate fintech business. It is the monetisation of trust, transaction data and ecosystem participation.**`,
    tips:
      "Use this when they ask about GrabPay, lending, digibanks, insurance, or the path to higher-margin growth.",
  },
  {
    id: 70,
    category: "Case Study",
    difficulty: "High",
    question:
      "CASE STUDY: Build a PMM plan to grow GrabMart and local commerce without turning it into a subsidy-heavy e-commerce marketplace.",
    hook: "Occasions beat assortment. Reliability beats endless choice.",
    answer: `**I would start by defining the commerce lane Grab can win.**

GrabMart should not try to solve every shopping mission. It should win urgent, local, high-frequency and trust-sensitive missions: weekly top-up groceries, forgotten ingredients, baby essentials, office pantry, rainy-day convenience, late-night needs and traveller essentials.

**Phase 1 - Occasion architecture.**
Segment users by need state, not demographics: family pantry, office worker, late-night convenience, traveller, small household, high-frequency food user ready for grocery cross-sell.

**Phase 2 - Merchant and catalog readiness.**
Commerce growth will fail if availability, substitutions, item naming and fulfilment reliability are weak. PMM should work with Merchant, Ops and Product to make catalog quality part of GTM readiness.

**Phase 3 - Lifecycle conversion.**
Use CDP triggers from Food and Mobility: rainy weather, repeated food orders in a neighbourhood, airport arrival, weekend family ordering, users buying convenience meals who might need grocery bundles.

**Phase 4 - Bundle with subscription and loyalty.**
GrabUnlimited should make grocery frequency feel rational. The goal is not cheap orders; it is repeatable household habit.

**Phase 5 - Merchant growth loop.**
Use Mai and GrabAds to help merchants understand what to stock, promote and advertise. The merchant proposition is: more predictable local demand, not just more discounts.

Metrics: order frequency, repeat rate, substitution rate, basket size, availability, fulfilment reliability, promo dependency, merchant retention and contribution margin.

The strategy is to win local commerce moments where Grab's logistics, payments, data and merchant network create an advantage.`,
    tips:
      "Good case answer. Keep repeating: occasion, catalog quality, fulfilment reliability, unit economics.",
  },
  {
    id: 71,
    category: "Case Study",
    difficulty: "High",
    question:
      "CASE STUDY: Design the PMM strategy for growing Grab's financial services revenue responsibly over the next 18 months.",
    hook: "Sequence by permission. Guard trust like a product metric.",
    answer: `**I would build this around permission tiers.**

Financial services cannot be marketed like food delivery. The emotional stakes are higher, regulation is tighter, and bad growth can damage the whole Grab brand.

**Tier 1 - Daily payments.**
Use GrabPay and wallet behaviours around transactions users already trust: rides, food, groceries, Dine-Out and travel. Success metric: payment attach rate and repeat usage.

**Tier 2 - Contextual protection.**
Insurance should attach to real risk moments: trips, delivery partners, merchant operations, device or travel needs. The PMM message should be practical protection, not financial sophistication.

**Tier 3 - Ecosystem credit.**
For merchants and drivers, credit should be framed around cashflow, inventory, equipment, working capital or income stability. Grab has better contextual data here than many lenders, but the messaging must be transparent.

**Tier 4 - Deeper banking.**
Deposits, savings and broader banking relationships should be sequenced after trust and repeated utility are established.

Operating guardrails:
clear pricing, no dark-pattern urgency, eligibility transparency, repayment education, complaint monitoring, credit quality and regulatory review before scale.

Metrics:
revenue, attach rate, activation, repeat usage, delinquency, complaints, NPS, opt-outs, cross-sell quality and retention.

The close: the goal is not to sell more financial products. It is to make financial decisions inside the Grab ecosystem simpler, safer and more useful.`,
    tips:
      "This is the answer if Finance, Legal, or a senior stakeholder probes responsible growth.",
  },
  {
    id: 72,
    category: "Deep Probes",
    difficulty: "High",
    question:
      "If a stakeholder says commerce and finance expansion will distract Grab from reliability in Mobility and Deliveries, how would you respond?",
    hook: "Take the concern seriously. Then define the guardrails.",
    answer: `**I would say the concern is valid if expansion is managed as a collection of new businesses.**

Grab's core advantage comes from reliability in daily use. If commerce or finance distracts from ETAs, fulfilment, support, driver supply, merchant quality or user trust, then the expansion weakens the moat it depends on.

So I would not defend expansion unconditionally. I would define the guardrails.

**First: adjacency discipline.**
Only expand where Grab has a right to win from existing demand, supply, payments, data, trust or fulfilment.

**Second: reliability thresholds.**
No scaled campaign until the product meets readiness metrics: fulfilment reliability, support resolution, merchant readiness, driver/courier supply, payment success and complaint rate.

**Third: trust accounting.**
For financial services especially, growth metrics must sit beside guardrails: delinquency, complaints, opt-outs, regulatory issues and NPS.

**Fourth: ecosystem lift.**
The expansion should strengthen the core. GrabMart should increase subscription value. Merchant finance should improve merchant retention. GrabAds should improve merchant success. Payments should reduce friction across rides and deliveries.

My response would be: expansion is right only if it makes the core more valuable and more defensible. The moment it reduces reliability or trust, PMM should slow it down.`,
    tips:
      "This is a strong senior answer because you don't sound blindly pro-growth. You sound like an operator.",
  },
  {
    id: 28,
    category: "Culture & Risks",
    difficulty: "Medium",
    question:
      "What are the smartest questions you should ask Sulin or the loop at the end of the interview?",
    hook: "Ask questions that make you sound like you're already operating in the role.",
    answer: `**I would ask questions that reveal the shape of the mandate, not questions you could answer from the website.**

**Question 1:** Where do you most want PMM to influence product decisions upstream today, but feel the function is still too downstream?

**Question 2:** Which regional products have enough commonality to scale centrally, but are still under-performing because the operating model is fragmented?

**Question 3:** Where do consumer outcomes and merchant or driver outcomes currently feel most misaligned, and what would better PMM change there?

**Question 4:** How do you want this role to partner with Abhinav and the existing PMM leadership so the transition strengthens the team rather than creates ambiguity?

**Question 5:** If I were successful 12 months from now, what would Product, Country Marketing and GrabAds each say changed because of this role?

**Question 6:** Which CDP Scenario or AI-enabled workflow are you most excited to scale, but don't yet have the PMM operating model to fully exploit?

The meta-signal is important: these questions say, "I understand this is an operating-model role, not just a campaign leadership role."`,
    tips:
      "Pick 2-3 depending on the interviewer. The Abhinav question is useful but should be asked gently and only if the conversation feels safe.",
  },
  {
    id: 29,
    category: "Culture & Risks",
    difficulty: "High",
    question:
      "What are the biggest interview landmines for this role, and how should you avoid them?",
    hook: "The risk is sounding either too brand-led or too consultant-like.",
    answer: `**There are five landmines I would actively avoid.**

**One: sounding like a downstream launch marketer.**
Counter by repeatedly using upstream language: product roadmap, adoption, retention, CDP triggers, cohort behaviour, partner economics.

**Two: sounding consumer-only.**
Grab is a three-sided marketplace. Mention merchants and drivers unprompted in your opening answer and in case studies.

**Three: over-centralising regional PMM.**
Sulin values hyperlocalisation. The right phrase is regional architecture, local soul. PMM should create the scalable frame and release country teams to make it culturally sharp.

**Four: faking driver-side depth.**
Own the gap. Then show the learning plan: ride-alongs, driver waiting bays, support tickets, Turbo/Coach sessions, and driver economics by cohort.

**Five: going too corporate.**
Sulin is strategic but craft-driven. She will respond better to answers with real scenes, cultural texture and human care than to pure frameworks. Use numbers, but don't hide behind them.

**How I'd keep myself honest:** every major answer should include one product signal, one human insight, one business metric and one operating implication. If an answer lacks any of those, it probably sounds too narrow.`,
    tips:
      "This is not necessarily an interview question, but it is a prep card. Read it before the loop to tune your register.",
  },
  {
    id: 30,
    category: "Strategy & Portfolio",
    difficulty: "Medium",
    question:
      "How should Grab use AI in marketing while preserving human authenticity, especially with drivers and merchants as the face of the brand?",
    hook: "AI should scale human truth, not replace it.",
    answer: `**I would separate AI for throughput from AI for trust.**

For throughput, AI can absolutely change the marketing operating model: faster briefs, localisation, asset variants, research synthesis, CDP Scenario drafting, measurement setup and approval routing. That's the production engine.

But for trust, especially with drivers and merchants, the source material has to remain human. Grab's best stories are not abstract brand claims. They are real merchants running better businesses, real drivers improving earnings, real families using the app across daily life.

So the model I would build is:

**Human source, AI scale.**
Drivers, merchants and users provide the lived story. AI helps translate, edit, format, localise and route it. It does not invent the truth.

**Brand guardrails.**
Mystique-style brand voice, local language checks, trust-risk gates and human review for anything involving earnings, safety, financial products or vulnerable users.

**Measurement discipline.**
AI will create more variants than the experiment system can absorb. PMM has to decide what is worth testing, define holdouts, and protect statistical quality.

**Team design.**
The team should not feel AI is a replacement for craft. It should feel AI removes production drag so marketers can spend more time on insight, judgment and product influence.

The line I'd use internally is: AI should help Grab tell more true stories faster. It should not help us manufacture stories that are easier than reality.`,
    tips:
      "This complements the AI transformation answer. It uses Sulin's likely worldview: AI as amplifier for human authenticity.",
  },
  {
    id: 31,
    category: "Grab POV",
    difficulty: "High",
    question:
      "What's your honest POV on Grab's existing marketing work? Which campaign best captures what Grab does well?",
    hook: "Respect the craft, then show judgment.",
    answer: `**The campaign I would pick is GrabBenches / Find Me Here in Vietnam.**

What I love about it is that it doesn't feel like a campaign pasted on top of the business. It starts with a real product friction: in beach and tourist areas, people do not always have usable addresses or precise pickup points. A numbered bench becomes a cultural object, a wayfinding tool, a meeting point, and a brand surface at the same time.

That is very Grab. The best Grab marketing is not just storytelling. It improves the user's experience of the marketplace.

My read is that GrabBenches worked for three reasons.

**One: it was hyperlocal without being small.**
The insight is Vietnam-specific, but the operating lesson scales: use local physical context to remove marketplace friction.

**Two: it made reliability visible.**
Ride-hailing and delivery reliability can feel abstract. A bench with a number makes "find me here" concrete.

**Three: it had product, ops and brand in the same idea.**
It required local insight, physical deployment, app behaviour and brand craft. That's exactly the kind of cross-functional work PMM should make easier.

My POV is that Grab should build more of this muscle: marketing ideas that become product surfaces, data signals, pickup points, merchant tools or lifecycle triggers. The next version might not be benches. It could be merchant storefront signals, driver trust dashboards, travel wayfinding, or AI-assisted ordering. But the principle is the same: the best marketing makes the platform easier to use.`,
    tips:
      "This is probably the safest campaign to praise with Sulin because it is her team's work and it shows you understand hyperlocalization as operational advantage, not just creative flavor.",
  },
  {
    id: 32,
    category: "Grab POV",
    difficulty: "High",
    question:
      "What is your POV on Grab's business right now - where is the real momentum, and where is the hidden risk?",
    hook: "Momentum is profitability plus ecosystem depth. Risk is complexity plus trust.",
    answer: `**My read is that Grab has crossed from proving viability to compounding advantage.**

The first full-year profit, 50M+ MTUs, $22B+ On-Demand GMV, and accelerating Q1 2026 growth matter because they change the strategic posture. Grab is no longer only defending a superapp thesis. It now has operating leverage and permission to build the next layer: AI, loyalty, merchant monetisation, financial services and travel.

The real momentum is in four places.

**One: affordability-led frequency.**
Saver, Shared Saver, GrabFood for One, Group Orders and GrabUnlimited are not random promotions. They are the machinery of habit formation.

**Two: merchant monetisation.**
GrabAds, Mai, merchant finance tools and self-serve ads suggest Grab is becoming a business OS for merchants, not just a demand marketplace.

**Three: AI as operating leverage.**
Mai's merchant adoption, Turbo's driver earnings uplift, Mystique, CDP Scenarios and the Intelligence Layer all point to the same thesis: AI helps Grab scale complexity without scaling headcount linearly.

**Four: ecosystem lock-in.**
Mobility, food, mart, payments, ads, lending, loyalty and travel make the platform harder to replace when they are packaged coherently.

The hidden risk is that complexity can outpace user understanding and partner trust. If consumers see too many products, merchants see too many tools, and drivers see changing economics they cannot interpret, the ecosystem advantage becomes cognitive load.

That is why PMM matters. The job is to make the portfolio legible, adoption-driven and trustworthy across consumers, merchants and drivers.`,
    tips:
      "Use this if asked for your business assessment. It sounds CFO-aware without becoming a spreadsheet monologue.",
  },
  {
    id: 33,
    category: "Grab POV",
    difficulty: "Medium",
    question:
      "Which existing Grab campaign or product-marketing idea would you improve, and how would you do it without insulting the current team?",
    hook: "Build on the idea, don't dunk on it.",
    answer: `**I would choose the AI and human-authenticity territory - not because it is weak, but because it has huge headroom.**

Grab has already shown strong instincts here: the Doodle Feature turns children's drawings into food orders; the ChatGPT productivity work proves AI can collapse production time; and Sulin has talked about using AI to scale drivers as the true face and voice of the brand.

My build would be: **turn AI-authenticated human stories into a repeatable product-marketing engine.**

For example, create a regional system where drivers and merchants can submit short voice notes or phone-shot stories in local languages. AI helps transcribe, translate, edit, subtitle and format them into CRM, social, in-app and merchant education assets. Human reviewers protect truth, tone and claims.

This becomes more than content. It creates:

**A trust asset:** real driver and merchant voices, not generic brand copy.

**A research asset:** repeated story submissions reveal pain points and product opportunities.

**A localization asset:** countries get authentic local voices without rebuilding the whole production chain.

**A PMM asset:** every new product launch can include real partner/user proof faster.

The guardrail is important: AI should not manufacture emotion. It should remove production drag from true stories. That is the line I would protect.`,
    tips:
      "This is a tactful 'improvement' answer. You praise the existing direction, then make it more systematic and PMM-owned.",
  },
  {
    id: 34,
    category: "Grab POV",
    difficulty: "High",
    question:
      "What is your POV on GrabAds as a business, and what existing marketing or product gap do you see?",
    hook: "GrabAds is not an ad product. It is merchant growth infrastructure.",
    answer: `**My POV is that GrabAds is one of Grab's most under-appreciated growth engines.**

The obvious reason is margin. A scaled ads business attached to commerce GMV can become structurally very attractive. But the more interesting reason is strategic: GrabAds can make Grab more valuable to merchants even when delivery commissions are under pressure.

The gap I see is not only advertiser awareness. It is merchant confidence. Many SMB merchants do not naturally know how to translate GMV data into ad decisions. They may understand "I need more orders," but not "which audience, which SKU, which budget, which time window, which promo, which expected payback?"

That is where PMM, Mai and GrabAds should connect.

Mai should become the front door for merchant advertising recommendations. If Mai sees a merchant has a high-margin item, a Friday-night demand spike, or repeat customers in a nearby zone, it can recommend the right GrabAds format and budget in plain language.

The PMM narrative becomes: **"Don't guess your next growth move. Grab can show you."**

The GTM should also separate merchant maturity:

Low-digital merchants need education and first-campaign templates.

Growing merchants need performance benchmarks and ad credits tied to learning.

Advanced merchants need audience strategy, ROAS tools and seasonal planning.

The metric I would care about is not only advertiser count. It is activation to repeat spend: first ad launched, second campaign within 30 days, ROAS confidence, GMV uplift, and merchant retention.`,
    tips:
      "This is distinct from the existing GrabAds card because it asks for POV on the business and current gap. Great for Ken Mandel or merchant-loop stakeholders.",
  },
  {
    id: 35,
    category: "Grab POV",
    difficulty: "Medium",
    question:
      "Which recent Grab product launch or business move do you think needs the clearest PMM narrative?",
    hook: "The products are there. The portfolio story needs sharpening.",
    answer: `**I would choose the merchant AI and business-empowerment portfolio.**

Mai, Virtual Store Manager, Cloud Printer, Tap to Pay, AI menu setup, GrabAds and merchant financing are each useful. But if they are marketed as separate tools, the merchant has to do the work of understanding the bigger promise.

The clearer narrative is: **Grab is becoming the operating system for small business growth in Southeast Asia.**

That matters because many merchants do not wake up wanting AI. They wake up wanting fewer missed orders, clearer cash flow, more customers, less waste, better reviews, and more confidence that the platform is helping them make money.

So I would build the PMM narrative around jobs-to-be-done:

**Get discovered:** GrabAds, promotions, audience targeting.

**Run smoother:** Cloud Printer, order workflows, menu setup, prep-time intelligence.

**Decide smarter:** Mai insights, weekly recommendations, benchmarking.

**Grow stronger:** financing, loyalty, repeat customers, cross-vertical demand.

The product architecture should feel like one business co-pilot, not six feature launches. And the proof should be economic: GMV uplift, repeat advertising, fewer support issues, faster onboarding, stronger merchant retention.

This is also where Grab's national-priority narrative becomes credible: MSME empowerment, digital economy participation, and small-business productivity are not CSR. They are core marketplace growth.`,
    tips:
      "This gives you a strong POV on Grab's current business without criticising the work. It says: good ingredients, clearer packaging needed.",
  },
  {
    id: 36,
    category: "Grab POV",
    difficulty: "Medium",
    question:
      "What do you think Grab's strongest brand moat is today, and how should PMM use it?",
    hook: "Reliability is the brand. The ecosystem is the proof.",
    answer: `**I think Grab's strongest brand moat is reliability across local life.**

A lot of platforms can claim convenience. Grab's stronger claim is that it has been operating inside Southeast Asian daily life for more than a decade: rides, food, groceries, payments, merchant demand, driver earnings, travel and now financial services.

That creates a different kind of brand moat. It is not just awareness. It is memory and trust accumulated across repeated transactions.

PMM should use that moat in three ways.

**First: make reliability product-specific.**
Reliability means different things in different surfaces. In Mobility, it is ETA confidence and safety. In Food, it is order accuracy and arrival. In Mart, it is availability and speed. In Finance, it is clarity and trust. PMM should not use one generic reliability message everywhere.

**Second: connect reliability to ecosystem depth.**
A user who uses Grab for rides, meals, groceries and payments is not just buying convenience. They are relying on one operating layer for the day.

**Third: extend reliability to partners.**
Merchants and drivers need to feel Grab is reliable for their economics too. That means transparent earnings, clear fees, better tools and trustworthy support.

The brand moat becomes most powerful when it is visible in product behaviour: fewer failed pickups, clearer merchant tools, better driver earnings, smarter nudges, and less user confusion.`,
    tips:
      "This is a polished answer for brand stakeholders. It respects Sulin's world while keeping the answer product-led.",
  },
  {
    id: 37,
    category: "Grab POV",
    difficulty: "High",
    question:
      "If Sulin asks 'what did you notice from our work that tells you how Grab thinks?', what should you say?",
    hook: "Name the pattern: small local frictions become scalable platform ideas.",
    answer: `**The pattern I noticed is that Grab is very good at turning local friction into platform behaviour.**

GrabBenches is the cleanest example: a local address problem becomes a physical pickup-point system and a brand idea.

GrabDriveYourCar in Bangkok starts from a very specific local behaviour - people drinking and needing their own cars driven home - and turns it into a service proposition.

GrabJastip in Indonesia recognises informal personal-shopping behaviour and gives it a platform expression.

The Doodle Feature starts from a family moment - kids not knowing what they want to eat, or parents trying to make ordering playful - and turns AI into something emotionally simple.

Stock Un-ception is a different but smart pattern: if global media keeps using generic SEA imagery, seed the visual supply chain with Grab-native reality.

My takeaway is that Grab's best work does not begin with a generic brand message. It begins with a piece of local behaviour that the product or platform can make easier.

That is exactly why this PMM role is exciting to me. The future opportunity is to systematise that instinct across the portfolio: detect friction, build a product or lifecycle response, localise the expression, and measure the habit change.`,
    tips:
      "This is a high-taste answer because it compares several examples and extracts the operating pattern. It will feel more senior than simply saying 'I liked GrabBenches.'",
  },
  {
    id: 38,
    category: "Grab POV",
    difficulty: "Medium",
    question:
      "What business metric or fact about Grab would you bring into conversation to show you understand the company?",
    hook: "Memorise a few facts, but use them to make a point.",
    answer: `**I would not dump numbers. I would use a few numbers to show I understand the growth model.**

The facts I would keep ready:

**50M+ MTUs and $22B+ On-Demand GMV.**
This anchors the platform scale. The role is about small percentage-point improvements at enormous scale.

**First full-year profit in 2025 and accelerating Q1 2026 growth.**
This says Grab has moved from survival/proof to operating leverage.

**GrabUnlimited: over 20% of Deliveries MTUs and roughly a third of Deliveries GMV.**
This shows loyalty is not a side program. It is core marketplace economics.

**Saver users order 1.8x more.**
This supports the affordability-as-frequency thesis.

**GrabAds at around 1.7% of Deliveries GMV with strong advertiser growth.**
This is the merchant monetisation lever.

**Mai around 50% adoption among active single-store merchants with a reported GMV uplift. Turbo with material driver earnings uplift.**
These show AI is already tied to partner economics, not just internal productivity.

The sentence I'd use is: Grab's next PMM challenge is not awareness at the top of the funnel. It is making an increasingly powerful portfolio easier to adopt, easier to understand and more trusted across the three-sided marketplace.`,
    tips:
      "Use 3-4 facts max in conversation. The point is business fluency, not trivia.",
  },
  {
    id: 39,
    category: "Scale & XFN",
    difficulty: "High",
    question:
      "How would you scale a successful campaign regionally across Grab's markets without making it generic?",
    hook: "Scale the architecture, not the execution.",
    answer: `**I would use a regional architecture, local soul model.**

The mistake in regional campaign scaling is assuming the asset is the thing to scale. At Grab, the thing to scale is usually the underlying behaviour, product truth, measurement model and operating playbook. The creative expression should often be local.

My process would be five steps.

**First: isolate the product truth.**
What behaviour are we trying to change? Trial, frequency, cross-sell, subscription, merchant activation, driver adoption? If that is not clear, the campaign cannot scale.

**Second: define the regional spine.**
One common insight, one value proposition, one KPI tree, one measurement design, one product or CDP trigger set, and one menu of approved campaign mechanics.

**Third: classify markets by maturity, not geography.**
Singapore may need premium and reliability; Indonesia may need affordability and community; Vietnam may need hyperlocal wayfinding; Philippines may need family and remittance-adjacent moments. The same product may require different entry points.

**Fourth: give countries a localisation brief, not a finished template.**
The regional team should provide the strategic frame, proof points, guardrails, assets that can be reused, and measurement instrumentation. Country teams should localise the cultural moment, language, talent, channel mix and partnerships.

**Fifth: run a test-and-scale cadence.**
Pilot in 1-2 archetype markets, read the data and field feedback, then scale only the proven mechanics. The playbook should capture what travelled, what had to localise, and what failed.

**Example:** GrabBenches should not be copied as benches everywhere. The scalable idea is turning local wayfinding friction into a pickup-point or discovery product surface. In another market, that might be mall entrances, hawker centres, airport zones or tourist districts.

The sentence I would use internally: **we scale the operating system, not the poster.**`,
    tips:
      "This directly answers the regional-scale question. Make the distinction between campaign asset, campaign mechanic and product behaviour very clear.",
  },
  {
    id: 40,
    category: "Scale & XFN",
    difficulty: "High",
    question:
      "How do you influence cross-functional partners - Product, Country Marketing, Ops, GrabAds, Finance and Engineering - when you don't directly control them?",
    hook: "Influence comes from reducing risk for each function.",
    answer: `**I don't think influence starts with asking for a seat at the table. It starts with becoming useful to the table.**

For each function, PMM has to reduce a different kind of risk.

**For Product:** reduce adoption risk. Bring customer insight, positioning clarity, launch sequencing, onboarding friction analysis and CDP trigger design before the PRD is finished.

**For Country Marketing:** reduce relevance risk. Give them the regional architecture and proof points, but leave space for local culture, partnerships, language and channel judgment.

**For Ops:** reduce execution risk. Make sure the campaign promise matches driver supply, merchant readiness, support capacity and service reliability.

**For GrabAds:** reduce demand-generation risk. PMM should make merchant adoption of Ads easier through Mai, education, templates and lifecycle nudges.

**For Finance:** reduce resource-allocation risk. Tie PMM investment to adoption, retention, LTV, CAC, payback and guardrail metrics.

**For Engineering/Data:** reduce ambiguity. Write sharper trigger logic, measurement requirements, experiment design and instrumentation asks.

My operating mechanism would be a simple PMM launch council for priority regional products: Product, PMM, Country, Ops, Lifecycle, GrabAds, Data and Finance in the same cadence, with one owner for the KPI tree and one decision log.

The posture matters. I would not walk in saying PMM owns the answer. I would walk in saying PMM owns making the answer legible: who the product is for, why it matters now, what behaviour must change, which markets are ready, what risks exist, and how we will know it worked.`,
    tips:
      "This is broader than the existing product-team trust card. Use it when asked about XFN leadership, matrix influence, or getting regional teams aligned.",
  },
  {
    id: 41,
    category: "Scale & XFN",
    difficulty: "High",
    question:
      "What is your long-term vision for Grab's product marketing function if the company wants to grow toward a $10B revenue ambition?",
    hook: "PMM must become the portfolio growth system for the superapp.",
    answer: `**If Grab is serious about a $10B revenue ambition, PMM cannot be a launch support function. It has to become a portfolio growth system.**

The long-term vision is that PMM helps Grab answer three questions across every product surface:

**Where should growth come from?**
Which users, merchants, drivers, markets and occasions have the highest expansion potential?

**What behaviour must change?**
More rides per month, more delivery frequency, subscription attachment, merchant Ads repeat spend, Mai usage, driver tool adoption, GrabPay habit, lending trust, travel discovery.

**What operating model scales that behaviour?**
Product changes, lifecycle triggers, local campaign mechanics, pricing/packaging, partner education, and measurement.

To support a $10B revenue path, I would build PMM around five growth engines.

**One: affordability-to-loyalty.**
Use Saver, Shared Saver, Group products and GrabUnlimited to expand frequency without destroying economics.

**Two: merchant monetisation.**
Scale GrabAds, Mai, merchant tools and financing into a coherent merchant business OS.

**Three: financial services trust.**
Use GrabPay, lending, insurance and Stash-style investing as natural extensions of daily transactions, not disconnected fintech products.

**Four: travel and regional discovery.**
Make Grab the operating layer for Southeast Asian local life, especially for cross-border travellers.

**Five: AI-enabled operating leverage.**
Use Mystique, CDP Scenarios, Mai, Turbo, Coach and agentic PMM workflows to scale adoption work faster than headcount.

The PMM org should own the connective tissue: positioning, adoption strategy, market sequencing, cross-vertical packaging, lifecycle design and KPI architecture. Brand creates trust and salience. Product creates capability. Ops creates reliability. PMM makes the portfolio understandable and adoptable at scale.

If I did this well, the 3-year proof would be visible: higher multi-service penetration, higher revenue per MTU, more merchant ad adoption, stronger partner retention, faster product adoption velocity, and a repeatable playbook for new markets like Taiwan.`,
    tips:
      "This answers the recruiter signal directly. Say '$10B revenue ambition' only if they use that number first; otherwise say 'next phase of revenue scale.'",
  },
  {
    id: 42,
    category: "Scale & XFN",
    difficulty: "Medium",
    question:
      "How would you decide what should be led regionally versus locally in Grab marketing?",
    hook: "Centralise the spine. Localise the soul and last mile.",
    answer: `**I would separate strategy, system and expression.**

**Regional should own the spine:**
Product positioning, customer segmentation, market archetypes, KPI tree, measurement design, CDP/lifecycle logic, launch readiness criteria, reusable assets, guardrails, and the post-launch learning loop.

**Local should own the soul:**
Cultural framing, language, local partnerships, creator/talent choices, channel mix, on-ground activation, local regulatory sensitivity, and country-specific customer nuance.

**Shared ownership sits in the middle:**
Market sequencing, budget trade-offs, product readiness, promo economics, and final launch decision. Those require Product, Country, Ops, Finance and PMM together.

I would use three tests to decide.

**Does the user behaviour travel?**
If yes, regional can build the architecture. If no, local should lead.

**Does the product capability differ by market?**
If operational readiness differs, local Ops and Product need veto power.

**Does the cultural code determine adoption?**
If yes, local teams should shape the expression even when the product thesis is regional.

The goal is not central control. It is speed with relevance. Regional PMM should make country teams faster and sharper, not more generic.`,
    tips:
      "This is a pragmatic answer for country-marketing stakeholders. It avoids the classic regional-vs-local turf trap.",
  },
  {
    id: 43,
    category: "Scale & XFN",
    difficulty: "High",
    question:
      "If you had to create one repeatable regional campaign playbook for Grab, what would be inside it?",
    hook: "A playbook should force decisions, not decorate slides.",
    answer: `**I would build a playbook that turns a product bet into a measurable regional growth motion.**

It would have eight parts.

**1. Product truth.**
What is the product, who is it for, and what behaviour should change?

**2. Market archetype.**
Which markets are launch, scale, defend, or learn markets? What local friction matters most?

**3. Audience and occasion.**
What specific moment are we trying to own: rainy commute, solo meal, family dinner, airport arrival, merchant lunch rush, driver peak-hour earnings?

**4. Value proposition ladder.**
Functional benefit, emotional permission, economic payoff, and ecosystem benefit.

**5. XFN readiness checklist.**
Product readiness, supply readiness, merchant readiness, support readiness, CDP instrumentation, legal/regulatory review, country owner sign-off.

**6. Localisation brief.**
Non-negotiables, flexible elements, proof points, claim guardrails, language guidance, channel options, and examples of strong local adaptation.

**7. Measurement plan.**
Primary behaviour metric, secondary business metric, trust guardrails, holdout design, reporting cadence, and kill/scale thresholds.

**8. Learning loop.**
What travels, what localises, what failed, what becomes a reusable component for the next market.

The playbook should be short enough that teams actually use it. The purpose is not governance for its own sake. It is to make regional launches faster, more measurable, and less dependent on heroic individual coordination.`,
    tips:
      "Good answer if they ask how you operationalise scale. The eight-part structure gives you control without sounding bureaucratic.",
  },
  {
    id: 44,
    category: "Deep Probes",
    difficulty: "High",
    question:
      "If Grab has a huge portfolio and limited PMM bandwidth, what would you say no to?",
    hook: "Senior leaders create focus by killing good ideas.",
    answer: `**I would say no to work that looks visible but does not change adoption, economics or trust.**

The first thing I would cut is launch theatre: campaigns for features that are not ready, not meaningfully differentiated, or not tied to a behaviour metric. PMM should not create noise to compensate for weak product-market fit.

The second thing I would cut is one-off country requests that cannot teach the region anything. I would still support urgent local needs, but the regional PMM team should focus on repeatable patterns: affordability, loyalty, merchant tools, driver productivity, travel and financial services trust.

The third thing I would cut is unmeasured lifecycle messaging. If we cannot define the trigger, target behaviour, holdout and guardrail, it should not enter the CDP queue.

The fourth thing I would cut is generic awareness work for products whose real blocker is friction. If Mai adoption is blocked by first-session confidence, the answer is onboarding and field enablement, not a bigger banner.

My prioritisation filter would be:

**Scale:** Does it touch enough users, merchants or drivers?

**Behaviour:** Does it change a specific action?

**Economics:** Does it improve revenue, retention, LTV, ads spend, partner earnings or cost-to-serve?

**Trust:** Does it strengthen or risk marketplace trust?

**Repeatability:** Can the learning travel to other markets or products?

Saying no is easier when everyone can see the same scoring system. The goal is not to be less helpful; it is to make PMM useful on the work that actually compounds.`,
    tips:
      "This is a senior-leadership probe. It shows you can create focus and are not just an enthusiastic builder.",
  },
  {
    id: 45,
    category: "Deep Probes",
    difficulty: "High",
    question:
      "How would you prove PMM impact in a superapp where attribution is messy and everything influences everything else?",
    hook: "Use incrementality, not vanity attribution.",
    answer: `**I would not try to solve superapp attribution with last-click logic.**

In a platform like Grab, a user may see a CRM nudge, take a ride, order food, use GrabPay, then subscribe to GrabUnlimited later. If PMM only claims the last touch, it will over-credit some work and under-credit the real habit system.

I would build measurement at three levels.

**Level 1: Product-adoption incrementality.**
For every major PMM motion, define a holdout group or market test where possible. Did the launch increase activation, repeat use, subscription, Ads adoption or tool usage versus comparable users who did not receive the intervention?

**Level 2: Cohort behaviour.**
Track whether the acquired or activated cohort behaves better over 30/60/90 days: higher frequency, lower churn, multi-service adoption, lower subsidy dependency, better merchant retention or stronger driver tool usage.

**Level 3: Portfolio economics.**
Connect the behaviour to revenue per MTU, LTV/CAC, ads spend per merchant, contribution margin, partner earnings and support cost.

The CDP Scenarios framework helps because it can tie trigger -> nudge -> behaviour -> holdout. But the mindset is bigger than CDP. PMM should define the behavioural hypothesis before the campaign launches.

I would also be careful about guardrails: opt-outs, complaint rates, merchant disputes, driver sentiment and cannibalisation. In a superapp, growth that damages trust in another part of the marketplace is not real growth.`,
    tips:
      "This is likely from Finance, Product, Analytics, or a very rigorous Sulin follow-up. Use 'incrementality' and 'guardrails.'",
  },
  {
    id: 46,
    category: "Deep Probes",
    difficulty: "High",
    question:
      "A country head says your regional campaign will not work in their market. What do you do?",
    hook: "Don't defend the template. Diagnose what part doesn't travel.",
    answer: `**I would assume they may be right.**

Country teams usually resist regional work for a reason: the consumer code is wrong, the product is not operationally ready, the channel mix is different, the economics don't work, or they have lived through a bad central template before.

My first question would be: which part does not travel?

**Does the product truth fail?**
If the product does not solve the same problem locally, regional should not force it.

**Does the cultural expression fail?**
Then regional keeps the strategy but gives the country more room on language, talent, partnerships and creative.

**Does the operating readiness fail?**
Then PMM should delay or change the launch. Marketing cannot promise what supply, merchants, drivers or support cannot deliver.

**Does the measurement model fail?**
Then we may need a different local success metric or market archetype.

I would propose a small joint test: keep the regional spine, let the country localise the expression, define a clear success metric, and agree in advance what result earns scale or kills the approach.

The posture matters. I would not say "regional knows best." I would say "let's protect the product truth and let the market teach us the expression." That builds trust while still keeping the region from fragmenting into 8 unrelated campaigns.`,
    tips:
      "This goes deeper than regional/local philosophy. It shows how you behave when a powerful country stakeholder challenges you.",
  },
  {
    id: 47,
    category: "Deep Probes",
    difficulty: "High",
    question:
      "You inherit an existing PMM team and leaders who helped build the current model. How do you avoid triggering politics while still changing the function?",
    hook: "Honor the builders before changing the building.",
    answer: `**I would treat the first 60 days as diagnosis and trust-building, not a re-org announcement.**

The current team has institutional knowledge I do not have. They know which product teams trust PMM, which country relationships are fragile, what has already been tried, and where the real blockers sit. If I walk in with a finished org design, I lose the room.

My approach:

**First: map the current system.**
Who owns which product surfaces? Where is PMM upstream versus downstream? Which launches worked? Which ones stalled? What do Product, Country, GrabAds, Ops and Finance think PMM is for?

**Second: identify the hidden high performers.**
The best operators may not have the loudest titles. I would look for people who can work across product, data and country execution.

**Third: preserve what is working publicly.**
If Abhinav or existing leaders have built trust with Product or Country teams, my job is to amplify that, not replace it for ego.

**Fourth: change around operating problems, not personalities.**
For example: "we need clearer decision rights for regional launches" is healthier than "this team is too downstream."

**Fifth: make the new model co-authored.**
The PMM Operating Doctrine should be built with the team and XFN partners. People support the system more when they helped shape it.

The change principle is simple: respect the history, clarify the future, and move only as fast as trust allows.`,
    tips:
      "This is important because the research suggests existing PMM leadership may be inside the team. Signal maturity and non-threatening leadership.",
  },
  {
    id: 48,
    category: "Deep Probes",
    difficulty: "Medium",
    question:
      "How would you use customer support, merchant complaints and driver feedback as upstream PMM inputs?",
    hook: "Support is not a cleanup function. It is an insight engine.",
    answer: `**I would build a formal signal loop from support into PMM and Product.**

In a marketplace, the most valuable insights are often not in survey decks. They are in repeated complaints, confused support tickets, merchant disputes, driver forum patterns, cancellation reasons and refund narratives.

I would create a monthly **Friction Review** with PMM, Product, Support, Ops, Country and Data.

The review would classify signals into four buckets:

**Product friction:** users cannot complete or understand the action.

**Trust friction:** users, merchants or drivers feel the platform is unfair or unclear.

**Economic friction:** fees, incentives, margins or subsidies are creating resistance.

**Communication friction:** the product works, but the value proposition or instructions are not legible.

PMM should own the fourth bucket directly and influence the first three. For example, if merchants complain about driver behaviour affecting prep-time metrics, that is not only support noise. It may require product rules, merchant education and driver communication.

The output should be a ranked backlog: what needs messaging, what needs onboarding, what needs product change, what needs policy clarification, and what needs local market handling.

This is also culturally aligned with Grab. Heart and humility should show up in how quickly the company lets front-line pain reshape product and marketing decisions.`,
    tips:
      "This is a two-level-deeper answer because it connects Cheryl's support-as-insight worldview to PMM operating cadence.",
  },
  {
    id: 49,
    category: "Deep Probes",
    difficulty: "High",
    question:
      "How would you grow without falling back into subsidy-led behaviour that hurts profitability?",
    hook: "Affordability is a product strategy, not a discount strategy.",
    answer: `**I would separate affordability from subsidy.**

Subsidy says: we pay users to behave. Affordability says: we redesign the product, bundle, timing or marketplace mechanics so the user can behave more often with better economics.

For Grab, the stronger path is product-led affordability.

**Shared Saver:** use batching and willingness to wait to lower cost.

**Group Orders and Group Rides:** use network behaviour to increase basket or utilisation.

**GrabFood for One:** right-size the occasion instead of discounting a family-sized meal.

**GrabUnlimited:** convert repeated savings into subscription habit and retention.

**Travel Pass:** bundle multi-service value around a high-intent moment.

PMM's role is to market the behaviour, not just the price. The message should be: use Grab more intelligently for the moment, not "wait until Grab pays you."

The measurement has to include subsidy dependency. A campaign is not successful if it lifts orders but trains users to churn when incentives stop. I would track frequency after promo removal, contribution margin, repeat behaviour, subscription attachment, and cross-vertical use.

The strategic line is: affordability expands the market; indiscriminate subsidy rents demand. Grab needs the first, not the second.`,
    tips:
      "This is essential for a profitability-era Grab. It turns price sensitivity into product architecture rather than coupon logic.",
  },
  {
    id: 50,
    category: "Deep Probes",
    difficulty: "High",
    question:
      "If you had to present Grab's long-term PMM strategy to the board, what would the one-page narrative be?",
    hook: "Board narrative: growth engines, operating leverage, measurable trust.",
    answer: `**The board-level narrative would be: PMM will help convert Grab's product breadth into profitable, trusted, repeatable growth.**

I would organise it around four claims.

**Claim 1: Grab's next growth is adoption depth, not just reach.**
With 50M+ MTUs, the question is how many users become multi-service, high-frequency, loyal and profitable.

**Claim 2: PMM is the function that makes the portfolio legible.**
Grab has Mobility, Deliveries, Mart, Pay, Ads, Lending, Insurance, Stash, Mai, Turbo, Coach, Travel and Loyalty. Without clear packaging, product breadth becomes user confusion.

**Claim 3: The next revenue engines are already visible.**
Affordability-to-loyalty, merchant monetisation, financial services, travel/discovery and AI-enabled partner productivity.

**Claim 4: Growth must be trust-protected.**
Every PMM motion should have trust guardrails for consumers, merchants and drivers: support issues, opt-outs, partner sentiment, complaint rates, earnings clarity and regulatory sensitivity.

The 3-year operating plan:

Build vertical PMM pods, install common KPI trees, scale CDP Scenarios, package merchant OS, build regional campaign playbooks, and create market-expansion templates for Taiwan and future adjacencies.

The board metrics:

Revenue per MTU, multi-service penetration, GrabUnlimited penetration, merchant Ads repeat spend, Mai/Turbo adoption, financial-services activation, product adoption velocity, partner retention and trust guardrails.

The closing line: PMM is not asking for credit for growth. PMM is building the system that makes Grab's growth easier to understand, easier to adopt and harder to copy.`,
    tips:
      "Use this to sound executive. It is less conversational, more board-room crisp.",
  },
  {
    id: 51,
    category: "Deep Probes",
    difficulty: "Medium",
    question:
      "What kind of PMM talent would you hire or develop for this next phase?",
    hook: "Hire translators: product, data, culture and economics.",
    answer: `**I would not hire only classic launch marketers.**

The PMM talent Grab needs has to translate across four worlds: product, data, culture and economics.

**Product fluency:** Can they read a PRD, challenge a user flow, identify adoption friction and work with PMs before launch?

**Data fluency:** Can they define cohorts, understand CDP triggers, read experiment results and avoid vanity metrics?

**Cultural fluency:** Can they understand why the same product needs different emotional entry points in Vietnam, Indonesia, Singapore or Thailand?

**Commercial fluency:** Can they explain how a campaign changes LTV, CAC, frequency, ads spend, merchant retention or driver adoption?

I would also look for people with field curiosity. PMMs who are willing to sit with merchants, ride with drivers, listen to support calls and watch users struggle with the app will outperform people who only polish decks.

The team should have a mix: vertical owners, lifecycle/CDP specialists, insights leads, pricing/packaging thinkers, partner-side PMMs, and AI workflow builders.

My hiring bar would be: can this person make a product easier to adopt and a decision easier to make? If yes, they belong in this PMM org.`,
    tips:
      "Good for team-building loops. It shows you know the talent model must change with the mandate.",
  },
  {
    id: 52,
    category: "Deep Probes",
    difficulty: "High",
    question:
      "What could make your long-term PMM strategy fail at Grab?",
    hook: "Name the failure modes before they name them for you.",
    answer: `**There are five failure modes I would watch carefully.**

**One: PMM becomes a central bottleneck.**
If every country and product team has to wait for regional approval, the function will slow the business. The fix is clear decision rights and reusable playbooks.

**Two: PMM overreaches into Product's job.**
PMM should shape adoption, positioning, customer insight and launch strategy. It should not pretend to be the PM. The partnership only works if Product feels PMM reduces risk.

**Three: country teams feel overwritten.**
Regional architecture without local soul will fail at Grab. Country teams need room to localise and challenge.

**Four: measurement becomes too narrow.**
If PMM optimises only for activation or conversion, it may damage trust, support load, partner economics or long-term retention. Guardrails matter.

**Five: AI creates volume without judgment.**
AI can make the team faster, but it can also flood users with mediocre variants. The bottleneck becomes taste, insight and experiment discipline.

The mitigation is an operating model: common KPI trees, XFN launch councils, country archetypes, holdouts, trust guardrails, and a monthly friction review from support and partner feedback.

The most honest answer is that a PMM transformation fails when it becomes a deck. It succeeds only if product teams invite PMM earlier, country teams feel helped, and the business can see measurable adoption gains.`,
    tips:
      "This is a strong closing-risk card. It makes you sound self-aware, practical, and senior.",
  },
  {
    id: 53,
    category: "Grab Facts",
    difficulty: "Low",
    question: "CHEAT SHEET: The 10 Grab facts to have in your head before the interview.",
    hook: "Use facts as proof of fluency, not as trivia.",
    answer: `**1. Scale**
Grab has crossed 50M+ monthly transacting users and serves users across 8 Southeast Asian markets and 800+ cities.

**2. GMV**
FY2025 On-Demand GMV was about $22.1B, up roughly 21% YoY. Q1 2026 On-Demand GMV was about $6.1B, up 24% YoY.

**3. Revenue**
FY2025 revenue was about $3.37-3.39B, up about 20-21% YoY. Q1 2026 revenue was about $955M, up 24% YoY.

**4. Profitability**
Grab reached its first full-year net profit in 2025. Q1 2026 Adjusted EBITDA was about $154M, up 46% YoY.

**5. Strategic posture**
Grab is now moving from proving the superapp model to compounding operating leverage: affordability, loyalty, AI, merchant monetisation, financial services and travel.

**6. Deliveries**
Deliveries remains a core growth engine. GrabFood, GrabMart and GrabExpress are increasingly tied to ads, subscription, affordability and merchant tools.

**7. Mobility**
Mobility is the cash engine and acquisition habit. Transaction growth has outpaced GMV growth because Grab is pushing affordability and frequency.

**8. Financial Services**
Financial Services is the fastest-growing adjacent business. Revenue grew strongly in 2025/2026, loan book more than doubled, and Grab is pushing toward breakeven.

**9. GrabAds**
GrabAds is a high-margin growth lever. It has roughly a $216M+ annualised run-rate in the research, strong advertiser growth, and ad revenue around 1.7% of Deliveries GMV.

**10. AI**
Grab's AI story is not generic. Mai, Turbo, Coach, Mystique, CDP Scenarios and the Grab Intelligence Layer tie AI to merchant growth, driver earnings, marketing productivity and product adoption.`,
    tips:
      "Before the interview, memorise the direction and approximate numbers. If an interviewer gives newer internal figures, defer to their number immediately.",
  },
  {
    id: 54,
    category: "Grab Facts",
    difficulty: "Low",
    question: "CHEAT SHEET: Key product and growth facts by portfolio.",
    hook: "Map facts to the answer you are giving.",
    answer: `**Affordability / Habit**
- Saver Deliveries: about 25% of Deliveries GMV in the research.
- Saver users order about 1.8x more than non-Saver users.
- Group Orders grew strongly; research cites +74% YoY GMV.
- Shared Saver, GrabFood for One and Group Rides all support affordability-led frequency.

**Subscription / Loyalty**
- GrabUnlimited has over 20% of Deliveries MTUs.
- GrabUnlimited drives roughly one-third of Deliveries GMV.
- Subscribers have materially higher retention and spend than non-subscribers.
- GrabVIP launched for top users as the premium ladder.

**Merchant**
- Mai has around 50% adoption among active single-store merchants in the research.
- Engaged Mai merchants reportedly see about 15% GMV uplift.
- GrabAds has around 220K+ quarterly active advertisers in the research.
- Merchant stack includes Mai, Ads, finance tools, AI menu setup, Cloud Printer, Tap to Pay and Virtual Store Manager.

**Driver**
- Turbo reportedly improves earnings per online hour by about 23%.
- Coach is the driver AI companion.
- GrabMaps voice reporting gets large-scale driver input into map quality.
- Drivers and merchants collectively earned about $15B in 2025 in the research.

**Travel / Discovery**
- Grab is building Travel Pass, Dine Out Discovery, airport pickup, Grab More, QR travel payments and local discovery surfaces.
- This is a natural regional PMM portfolio because travel needs repeat across markets but local execution differs.`,
    tips:
      "Use this card when prepping for portfolio prioritisation, case studies, or the '$10B revenue' question.",
  },
  {
    id: 55,
    category: "Grab Facts",
    difficulty: "Low",
    question: "CHEAT SHEET: People, org and stakeholder facts.",
    hook: "Know the map, but do not name-drop awkwardly.",
    answer: `**Sulin Lau**
Regional Head of Marketing & Brand at Grab across Deliveries, Mobility, Fintech and B2B. Craft-driven, strategic, hyperlocal, and publicly frames this role as CMO-equivalent: product, data, AI, commercial growth, habit formation, network effects and lifetime value.

**Cheryl Goh**
Founder-era Grab CMO / Group VP figure, associated with marketing, loyalty, sustainability and support. Named 2025 WFA Global Marketer of the Year in the research. Important worldview: commercial fluency, data/insights mastery, customer support as upstream signal, and marketing as business driver.

**Philipp Kandal**
Chief Product Officer. Associated with AI-First with Heart, Intelligence Layer and product-led innovation. PMM must earn Product trust by reducing adoption risk.

**Ken Mandel**
Leads GrabAds. GrabAds is a parallel growth engine and PMM should be demand-generation partner, not a budget competitor.

**Abhinav Mehra**
Referenced in research as current PMM leadership / inside the team. Be careful and respectful. Signal that you would amplify existing strengths before changing the model.

**Country Marketing Leads**
Powerful and important. Regional PMM will only work if country teams feel helped, not overwritten.

**The 4Hs**
Heart, Hunger, Honour, Humility. Operationalise them: partner empathy, ambitious outcomes, transparent trade-offs, and evidence-led listening.`,
    tips:
      "This is for mental orientation. In the actual interview, reference people only when it sounds natural and relevant.",
  },
  {
    id: 56,
    category: "Grab Facts",
    difficulty: "Low",
    question: "CHEAT SHEET: Existing Grab campaigns and what they prove.",
    hook: "Each campaign reveals an operating taste.",
    answer: `**GrabBenches / Find Me Here - Vietnam**
What it proves: Grab can turn a hyperlocal wayfinding friction into a product surface, brand idea and reliability signal. Best example to mention to Sulin.

**GrabDriveYourCar - Bangkok**
What it proves: Grab understands local behaviour and can create services around real-life edge cases, not generic app use.

**GrabJastip - Indonesia**
What it proves: Grab can formalise informal local behaviours like personal shopping into platform use cases.

**Doodle Feature**
What it proves: AI can become emotionally simple and family-friendly when anchored in a human moment, not a tech demo.

**100+ Cities Delivery - Philippines / OFW Christmas**
What it proves: Grab can connect mobility/delivery infrastructure to emotional cross-border family needs.

**Stock Un-ception**
What it proves: Grab can influence the visual supply chain and investor/media perception with a clever, low-cost, insight-led intervention.

**Hacking ChatGPT saved marketing 97% hours**
What it proves: Sulin's team has already lived AI productivity. Do not give generic AI answers.

**No change to price. Big change in sales**
What it proves: Grab has strong commercial creativity - ideas that move sales without simply discounting.`,
    tips:
      "If asked for POV on Grab's work, don't list all of these. Pick one, explain the operating pattern, then bridge to how you would scale that muscle.",
  },
  {
    id: 57,
    category: "Grab Facts",
    difficulty: "Low",
    question: "CHEAT SHEET: Competitive and market facts to keep ready.",
    hook: "Use competitor facts to show judgment, not fear.",
    answer: `**SEA Food Delivery**
- Grab has roughly 55% regional share in the research.
- Foodpanda around 16%, Gojek around 11%, ShopeeFood around 9%, Line Man around 8%.
- Country dynamics matter more than regional average.

**Vietnam**
- Food delivery is highly competitive: research cites Grab around 48% and ShopeeFood around 47%.
- Ride-hailing pressure from Xanh SM is real; research cites Xanh SM overtaking Grab in Vietnam ride-hailing share.

**Malaysia**
- Grab is highly dominant in food delivery in the research, over 90%.

**Philippines**
- Grab is strong, but inDrive is a ride-hailing challenger with fast growth.

**Thailand**
- Line Man is a major local force; food delivery is closer to a Grab/Line Man dynamic.

**SEA E-commerce**
- SEA platform e-commerce around $157B GMV in 2025 in the research.
- Shopee around 52% share, TikTok Shop around 18%, Lazada around 14%.
- Content commerce is very large; research cites about $49.7B / 32% of platform GMV.

**How to use this**
Do not say Grab should out-Shopee Shopee. Say Grab should win where it has unfair advantage: local intent, fulfillment, payments, merchant relationships, trust and high-frequency daily-life moments.`,
    tips:
      "This card is useful for the e-commerce thought exercise and defensive market cases.",
  },
  {
    id: 58,
    category: "Grab Facts",
    difficulty: "Low",
    question: "CHEAT SHEET: One-line facts to drop naturally.",
    hook: "Short lines that signal homework.",
    answer: `**Mai**
"Mai's adoption and GMV uplift make it one of the most interesting SMB AI stories in Southeast Asia."

**CDP Scenarios**
"The GrabUnlimited 15-minute abandonment nudge is exactly the kind of real-time product-marketing loop I would want to scale."

**GrabAds**
"GrabAds is not just ad revenue; it is merchant growth infrastructure."

**Saver**
"Saver is not only a cheap option. It removes guilt and increases frequency."

**GrabBenches**
"GrabBenches showed me that Grab's best marketing turns local friction into a platform behaviour."

**Drivers**
"Driver trust is marketplace infrastructure. If supply trust breaks, consumer growth breaks next."

**Regional Scale**
"The job is to scale the architecture, not the execution."

**AI**
"AI should help Grab tell more true stories faster, not manufacture stories that are easier than reality."

**$10B Revenue Ambition**
"PMM has to become the portfolio growth system that makes Grab's product breadth easier to understand, adopt and monetise."

**Culture**
"The 4Hs should show up in briefs and trade-offs, not just values language."`,
    tips:
      "These are verbal ammo. Use sparingly. One good line at the right moment beats five lines forced into one answer.",
  },
  {
    id: 59,
    category: "Curveballs & Technical",
    difficulty: "High",
    question:
      "TECHNICAL: Walk me through how you would design an experiment to test whether a CDP Scenario actually caused incremental GrabUnlimited conversion.",
    hook: "Show experiment discipline, not campaign optimism.",
    answer: `**I would start with the behavioural hypothesis.**

Hypothesis: if a user abandons GrabUnlimited signup, a real-time nudge within 15 minutes increases paid conversion versus a non-real-time or no-nudge experience.

**Test design:**
Randomise eligible abandoners into treatment and holdout. Treatment receives the real-time Scenario. Holdout receives no nudge, or receives the existing batch campaign if that is the business-as-usual baseline.

**Primary metric:**
Paid subscription conversion within a defined window - for example 24 hours, 7 days and 30 days.

**Secondary metrics:**
Trial start rate, first order after subscription, 30-day order frequency, Deliveries GMV, subscription retention, and cross-vertical adoption.

**Guardrails:**
Push opt-outs, complaint rate, unsubscribes, duplicate-message exposure, promo cost, cannibalisation of users who would have converted anyway, and churn after the first billing cycle.

**Segmentation:**
I would read results by cohort: high-frequency Deliveries users, Saver-heavy users, GrabMart users, first-time subscribers, churned subscribers, and market archetype.

**Decision rule:**
Scale only if the conversion lift is incremental, the retained cohort quality is healthy, and the economics work after incentive cost. If conversion rises but 30-day retention or margin falls, the Scenario is not good enough.

The point is not to prove CRM worked. It is to prove we changed a durable behaviour profitably.`,
    tips:
      "This is for analytics/Product interviewers. Use words like randomise, holdout, primary metric, guardrails, cohort quality and incrementality.",
  },
  {
    id: 60,
    category: "Curveballs & Technical",
    difficulty: "High",
    question:
      "TECHNICAL: If a PM asks what data you need before shaping a launch plan, what would you ask for?",
    hook: "Ask for behavioural, economic and operational data.",
    answer: `**I would ask for data in four buckets.**

**User behaviour:**
Who is using the product today, who tried and dropped, what are the activation steps, where is the funnel leakage, what is frequency by cohort, and what adjacent products do those users already use?

**Economics:**
Revenue or GMV per activated user, contribution margin, promo cost, payback period, LTV, churn, subsidy dependency, basket size, and cannibalisation risk.

**Marketplace health:**
Merchant readiness, driver supply impact, fulfilment reliability, cancellation reasons, prep-time issues, support contacts, partner complaints and operational capacity.

**Market context:**
Competitor behaviour, local cultural entry points, regulatory issues, country readiness, channel costs, and whether the product value proposition changes by market.

Then I would ask for one more thing: the product team's own adoption fear. PMs usually know the uncomfortable truth - the flow is confusing, supply is thin, merchants are not trained, or the value prop is too abstract. PMM should surface that early, not discover it after launch.

The output would be a launch-readiness diagnosis: ready to scale, ready to pilot, needs product fix, needs market localisation, or should not launch yet.`,
    tips:
      "This answer makes you sound product-native and commercially grounded. It is a practical alternative to generic 'I need customer insights.'",
  },
  {
    id: 61,
    category: "Curveballs & Technical",
    difficulty: "High",
    question:
      "CURVEBALL: What if Grab's $10B revenue goal requires entering markets or categories where the Grab brand has no trust yet?",
    hook: "Trust transfer before growth extraction.",
    answer: `**I would not assume Grab's SEA trust travels automatically.**

In a new market or category, the brand starts with lower permission. The worst move is to behave like an incumbent before earning incumbent trust.

My playbook would be:

**First: choose the right beachhead.**
Enter through a use case where Grab has operational advantage, not just market attractiveness: delivery integration, travel, merchant tools, payments, or diaspora/cross-border behaviour.

**Second: transfer trust through continuity or partners.**
In Taiwan, for example, a foodpanda acquisition would require continuity first: same restaurants, reliable delivery, clear merchant terms, protected courier earnings and transparent support. Only then introduce the Grab ecosystem.

**Third: build local proof before regional claims.**
Use local merchants, local driver/courier voices, local partnerships and local service reliability data. Do not lead with "we are big in Southeast Asia."

**Fourth: add the ecosystem gradually.**
Payments, loyalty, ads, merchant tools and financial services should appear as earned benefits after the core service is trusted.

**Fifth: measure trust separately from adoption.**
NPS, complaint rate, merchant retention, courier active rate, support resolution, repeat use without promo, and regulatory sentiment.

The principle is: expansion PMM should first protect trust, then migrate habit, then monetise the ecosystem.`,
    tips:
      "Useful if they push the $10B question into geographic expansion. It also bridges to foodpanda Taiwan.",
  },
  {
    id: 62,
    category: "Curveballs & Technical",
    difficulty: "High",
    question:
      "CURVEBALL: Tell me a strategy you would NOT recommend for Grab, even if it looked attractive on paper.",
    hook: "Have a principled no.",
    answer: `**I would not recommend Grab trying to build a horizontal e-commerce marketplace to compete directly with Shopee and TikTok Shop.**

On paper, the GMV pool is enormous. But strategically, it would fight the wrong battle. Shopee owns the marketplace layer. TikTok Shop owns the content-commerce layer. A direct Grab marketplace would require massive assortment, seller subsidies, creator incentives, search behaviour and paid acquisition - all in a market where the leaders already have scale.

Grab's better right to win is the layer beneath and around commerce:

**Immediate local fulfilment**
Groceries, food, urgent needs, perishables and same-day reliability.

**Merchant operating system**
Mai, Ads, payments, financing, menu and inventory tools.

**Payment and identity rail**
GrabPay, rewards, trust and transaction history.

**AI-agent fulfilment layer**
When external assistants recommend or initiate local transactions, Grab can become the trusted rail.

**High-intent moments**
Travel, rides, dining, local discovery and household replenishment.

So my answer would be: do not chase horizontal catalogue depth. Win local intent, fulfilment, merchant productivity and trust. That is a more defensible path and much more consistent with Grab's assets.`,
    tips:
      "This curveball tests whether you can reject a seductive strategy. It pairs well with the e-commerce question.",
  },
  {
    id: 63,
    category: "Curveballs & Technical",
    difficulty: "Medium",
    question:
      "TECHNICAL: How would you think about pricing and packaging for GrabUnlimited or a premium tier?",
    hook: "Price around occasions, payback and tier migration.",
    answer: `**I would start with perceived payback, not the subscription fee.**

For GrabUnlimited, the user question is: will this pay off for someone like me? The product has to make the math visible.

**Step 1: Segment by frequency and category mix.**
High-frequency Deliveries users, Saver-heavy users, GrabMart users, multi-service users, churned subscribers, and premium users have different willingness to pay.

**Step 2: Define the value ladder.**
Base subscription should remove delivery-fee friction and guilt. Premium tier should add certainty and recognition: Priority benefits, GrabMart value, travel perks, GrabPay cashback or VIP treatment.

**Step 3: Show personalised payback.**
"Based on your last 30 days, you would have saved $X." This should appear at the moment of highest intent.

**Step 4: Avoid over-discounting.**
Free trials can work, but the conversion metric must include post-trial retention and margin. A cheap subscription that churns is not success.

**Step 5: Test migration, not just conversion.**
Can Saver users become subscribers? Can subscribers become VIP? Does premium cannibalise standard? Does the tier increase multi-service adoption?

Pricing should be local, but the packaging architecture can be regional: savings, certainty, recognition and ecosystem access.`,
    tips:
      "This is useful if Finance/Product probes pricing. Mention willingness to pay, payback, retention and cannibalisation.",
  },
  {
    id: 64,
    category: "Curveballs & Technical",
    difficulty: "High",
    question:
      "CURVEBALL: If a beloved hyperlocal campaign wins awards but does not move business metrics, what do you do?",
    hook: "Respect craft, but hold the business bar.",
    answer: `**I would separate the creative idea from the operating model.**

An award-winning campaign can still create value: brand salience, employee pride, country-team energy, earned media, partner goodwill. But if it does not move the intended behaviour, PMM has to be honest about that.

My first question would be: was the metric wrong, the execution wrong, or the business expectation wrong?

**If the metric was wrong,** maybe the campaign was designed for trust or salience but judged on short-term conversion.

**If the execution was wrong,** maybe the insight was strong but the product trigger, audience, channel or market timing failed.

**If the business expectation was wrong,** maybe the idea should remain a brand/cultural asset rather than become a regional growth playbook.

Then I would decide:

Scale the mechanic if it changed behaviour.

Scale the learning if the insight was strong but the format was local.

Celebrate but do not scale if it was culturally brilliant but commercially narrow.

The key is not to insult the work. It is to be clear about what kind of value it created. Grab should absolutely keep making culturally sharp work, but PMM's job is to know which ideas are brand assets, which are product surfaces, and which are growth systems.`,
    tips:
      "This is a Sulin-friendly answer because it respects craft while preserving commercial discipline.",
  },
  {
    id: 65,
    category: "Curveballs & Technical",
    difficulty: "High",
    question:
      "TECHNICAL: What would you need to make Grab the fulfillment layer for AI agents?",
    hook: "Agent commerce needs APIs, merchant data quality and trust rails.",
    answer: `**I would treat this as infrastructure GTM, not consumer advertising.**

If AI agents become a front door for commerce, Grab's opportunity is to be the trusted local fulfilment, payment and merchant-intent layer in Southeast Asia.

The requirements are:

**Merchant catalog quality.**
Agents need structured, fresh, machine-readable merchant data: items, availability, location, prep time, pricing, substitutions, ratings and fulfilment constraints.

**API partnerships.**
Deep integrations with AI platforms and assistants so Grab can be called when a user wants food, groceries, local shopping, travel movement or urgent fulfilment.

**Trust and consent.**
Users need clear permissioning around payment, address, substitutions, cancellation and data usage. Agents cannot feel like a black box spending money.

**Fulfilment reliability.**
The agent recommendation is only as good as delivery execution. ETA accuracy, supply coverage, merchant readiness and support resolution become product-marketing proof points.

**Merchant onboarding.**
Mai can help merchants make their catalog agent-readable and recommend what to promote or stock.

**Measurement.**
Track agent-originated transactions, conversion, basket size, cancellation, repeat use, merchant satisfaction and support issues.

PMM's role would be to package the proposition for three audiences: AI platforms, merchants and users. The user message is convenience. The merchant message is new demand. The platform message is reliable local execution in a complex region.`,
    tips:
      "This is the most technical strategic card. It sounds futuristic but grounded in data quality, APIs, consent, fulfilment and measurement.",
  },
];

const STORAGE_KEY = "grab-interview-bank-state-v1";
const difficultyDots = { High: "●●●", Medium: "●●○", Low: "●○○" };

const productCheatSheet = [
  {
    title: "Mobility",
    products: "GrabCar, GrabTaxi, GrabBike where available, airport rides, Priority, Exec/VIP tiers, Saver and Group formats.",
    pov: "Mobility is the trust anchor. Reliability, ETA accuracy, driver supply, safety and affordability matter more than ride-hailing as a category label.",
  },
  {
    title: "Deliveries",
    products: "GrabFood, GrabMart, GrabExpress and Dine-Out.",
    pov: "Deliveries is the habit engine. The strategic question is how Grab grows frequency without over-subsidising: Saver, subscriptions, grocery occasions, group meals and lifecycle triggers.",
  },
  {
    title: "Merchant Platform",
    products: "GrabMerchant app, Mai AI Merchant Assistant, GrabAds, payments, financing, analytics and operating tools.",
    pov: "This is where Grab can become a merchant operating system, not just a demand channel. Mai + Ads + financing is a strong PMM story.",
  },
  {
    title: "GrabAds",
    products: "Self-serve merchant advertising, sponsored listings and retail-media-style monetisation.",
    pov: "Likely one of the highest-margin growth levers inside Deliveries. PMM should help merchants understand when and how to spend, ideally through Mai recommendations.",
  },
  {
    title: "Financial Services",
    products: "GrabPay, lending, insurance and savings or investment-style products depending on market.",
    pov: "The issue is permission. Users may trust Grab for daily transactions, but financial trust needs careful sequencing and simple use cases.",
  },
  {
    title: "Loyalty / Subscription",
    products: "GrabUnlimited, GrabRewards, GrabVIP and Coins depending on market.",
    pov: "This is the cross-vertical glue. The goal is not just discounts; it is making multi-service usage feel rational, rewarding and habitual.",
  },
  {
    title: "Driver / Partner Tools",
    products: "Turbo, Coach, incentives, driver app, earnings tools, safety and support.",
    pov: "Driver-side PMM is trust marketing. Do not overpromise. Explain changes clearly, show earnings logic and listen before launching.",
  },
  {
    title: "AI Layer",
    products: "Mai for merchants, Turbo and Coach for drivers, Mystique/CDP-style marketing automation internally.",
    pov: "Grab's AI story is operating leverage, not only content productivity. It should improve merchant growth, driver earnings, lifecycle precision and PMM throughput.",
  },
];

const businessFacts = [
  "Q1 2026 revenue: $955M, up 24% YoY.",
  "Q1 2026 On-Demand GMV: $6.1B, up 24% YoY.",
  "Deliveries Q1 2026 revenue: $510M; GMV: $3.9B.",
  "Mobility Q1 2026 revenue: $337M; GMV: $2.2B.",
  "Financial Services Q1 2026 revenue: $107M, up 43% YoY.",
  "Financial Services loan disbursals reached $1.1B in Q1 2026, up 67% YoY.",
  "Gross loan portfolio reached $1.438B in Q1 2026, up 130% YoY.",
  "Customer deposits across GXS Bank and GXBank were $1.63B at the end of Q1 2026.",
  "Taiwan foodpanda deal: $600M cash acquisition; foodpanda Taiwan generated about $1.8B GMV in 2025.",
  "Grab expects Taiwan to add at least $60M incremental Adjusted EBITDA in 2028, subject to closing and integration.",
  "Grab crossed first full-year net profit in 2025 and over 50M MTUs.",
  "Taiwan foodpanda acquisition is Grab's first planned expansion outside Southeast Asia, expected to close in H2 2026 subject to approval.",
];

const strategicDeepDives = [
  {
    title: "Commerce / E-Commerce Expansion",
    thesis:
      "Grab should not try to become another Shopee or TikTok Shop. Its right to win is local, high-frequency, time-sensitive commerce where fulfilment, trust, payments and merchant tools matter.",
    plays: [
      "GrabMart and grocery as a weekly habit wedge.",
      "Food + grocery + Dine-Out as local discovery, not just delivery.",
      "Taiwan foodpanda as a proof point for expanding the delivery and grocery operating model beyond Southeast Asia.",
      "GrabAds as the merchant demand-generation layer.",
      "Mai and merchant tools as the operating system for SMB growth.",
      "Traveller discovery: helping international Grab users find and transact with local merchants.",
    ],
    avoid: [
      "Do not build a horizontal marketplace feed to compete head-on with Shopee or TikTok Shop.",
      "Do not overextend into slow, warehouse-heavy categories where Grab has no fulfilment advantage.",
      "Do not let commerce become pure subsidy-driven GMV; merchant profitability and reliability must travel with growth.",
    ],
    pmm:
      "PMM should package commerce around occasions: weekly groceries, urgent top-ups, office meals, family dinners, travel discovery and merchant growth. The message is not 'buy anything on Grab'; it is 'Grab solves local needs faster and more reliably.'",
    line:
      "Grab's e-commerce opportunity is not another marketplace. It is owning local commerce moments where immediacy, trust and fulfilment are the product.",
  },
  {
    title: "Financial Services Expansion",
    thesis:
      "Financial services is the monetisation of trust, transaction data and ecosystem participation. It should grow from behaviours Grab already owns, not from disconnected fintech ambition.",
    plays: [
      "Consumer payments through GrabPay as the daily transaction rail.",
      "Merchant and driver credit where Grab has proprietary cashflow and earnings data.",
      "Consumer lending where use cases are simple, contextual and responsible.",
      "Insurance attached to mobility, delivery, travel, merchant operations or driver protection.",
      "Digital banking through GXS Bank in Singapore and GXBank in Malaysia.",
      "Savings and deposits as trust deepens, not as the first story.",
    ],
    avoid: [
      "Do not market financial services like generic fintech products.",
      "Do not push lending in ways that could damage trust with users, merchants or drivers.",
      "Do not assume trust in rides and food automatically transfers to savings, credit or insurance.",
    ],
    pmm:
      "PMM should sequence by permission: payments first, then contextual credit or insurance, then deeper banking relationships. Every message must make the use case simple, transparent and responsible.",
    line:
      "The question is not whether Grab can sell financial products. The question is where Grab has earned enough permission to make the next financial decision easier and safer.",
  },
];

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const params = new URLSearchParams(window.location.search);
    const urlView = params.get("view") === "products" || window.location.hash === "#products" ? "products" : null;
    return {
      activeCategory: saved.activeCategory || "All",
      expandedId: saved.expandedId || null,
      practiced: saved.practiced || {},
      showTip: saved.showTip || {},
      query: "",
      view: urlView || "questions",
    };
  } catch {
    return {
      activeCategory: "All",
      expandedId: null,
      practiced: {},
      showTip: {},
      query: "",
      view: "questions",
    };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setState(patch) {
  state = { ...state, ...patch };
  saveState();
  render();
}

function setView(view) {
  const nextUrl = view === "products" ? `${window.location.pathname}?view=products` : window.location.pathname;
  history.replaceState(null, "", nextUrl);
  setState({ view });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatAnswer(text) {
  return text
    .split("\n")
    .map((line) => {
      if (line.trim() === "") {
        return '<div style="height:8px"></div>';
      }

      const escaped = escapeHtml(line);
      const withStrong = escaped.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      const isFullBoldLine = line.startsWith("**") && line.endsWith("**");
      const isItalicLine = line.startsWith("*") && line.endsWith("*") && !line.startsWith("**");

      if (isFullBoldLine) {
        return `<p class="heading">${escaped.replace(/\*\*/g, "")}</p>`;
      }

      if (isItalicLine) {
        return `<p><em>${escaped.replace(/\*/g, "")}</em></p>`;
      }

      return `<p>${withStrong}</p>`;
    })
    .join("");
}

function getFilteredQuestions() {
  const categoryFiltered =
    state.activeCategory === "All"
      ? questions
      : questions.filter((question) => question.category === state.activeCategory);

  const query = state.query.trim().toLowerCase();
  if (!query) return sortForInterviewFlow(categoryFiltered);

  return sortForInterviewFlow(
    categoryFiltered.filter((question) => {
      return [question.question, question.answer, question.hook, question.category]
        .join(" ")
        .toLowerCase()
        .includes(query);
    }),
  );
}

function sortForInterviewFlow(items) {
  return [...items].sort((a, b) => {
    const aRank = interviewRank.has(a.id) ? interviewRank.get(a.id) : Number.MAX_SAFE_INTEGER;
    const bRank = interviewRank.has(b.id) ? interviewRank.get(b.id) : Number.MAX_SAFE_INTEGER;
    if (aRank !== bRank) return aRank - bRank;
    return a.id - b.id;
  });
}

function categoryLabel(category) {
  if (category === "All") return `All (${questions.length})`;
  if (category === "Grab Facts") return "Appendix: Grab Facts";
  return category;
}

function compactCategory(category) {
  return category
    .replace("Part 1: ", "")
    .replace("Part 2: ", "")
    .replace("Part 3: ", "");
}

function render() {
  const app = document.querySelector("#app");
  const practicedCount = Object.values(state.practiced).filter(Boolean).length;
  const filtered = getFilteredQuestions();

  app.innerHTML = `
    <div class="app">
      <header class="header">
        <div class="header-row">
          <div class="header-title-block">
            <div class="eyebrow">GRAB - SR. REGIONAL DIRECTOR, PRODUCT MARKETING</div>
            <div class="title">Interview Cheatsheet</div>
            <div class="subtitle">Hiring manager: Sulin Lau · Loop + Case Study</div>
          </div>
          <div class="counter">
            <div class="counter-number ${practicedCount === questions.length ? "complete" : ""}">
              ${practicedCount}/${questions.length}
            </div>
            <div class="counter-label">Practiced</div>
            <button class="reset-button" type="button" data-action="reset-progress">Reset</button>
          </div>
        </div>
        <div class="nav-row">
          <button class="page-tab questions-tab ${state.view === "questions" ? "active" : ""}" type="button" data-view="questions">
            Questions
          </button>
          ${
            state.view === "questions"
              ? `<label class="category-select-wrap section-select-wrap" for="category-select">
                  <span>Section</span>
                  <select id="category-select" class="category-select" aria-label="Choose question section">
                    ${categories
                      .map(
                        (category) => `
                          <option value="${escapeHtml(category)}" ${state.activeCategory === category ? "selected" : ""}>
                            ${escapeHtml(categoryLabel(category))}
                          </option>
                        `,
                      )
                      .join("")}
                  </select>
                </label>`
              : ""
          }
          <button class="page-tab product-tab ${state.view === "products" ? "active" : ""}" type="button" data-view="products">
            Product Cheat Sheet
          </button>
        </div>
        <div class="desktop-category-fallback">
          ${state.view === "questions" ? categories
                  .map(
                    (category) => `
                      <button class="category-button ${state.activeCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}">
                        ${escapeHtml(categoryLabel(category))}
                      </button>
                    `,
                  )
                  .join("") : ""}
        </div>
      </header>

      ${
        state.view === "products"
          ? renderProductCheatSheet()
          : `
            <section class="list">
              <div class="search-strip">
                <div class="list-context">
                  <div class="list-section">${escapeHtml(categoryLabel(state.activeCategory))}</div>
                  <div class="result-count">${filtered.length} question${filtered.length === 1 ? "" : "s"} shown</div>
                </div>
                <input
                  class="search-input list-search"
                  type="search"
                  placeholder="Search"
                  value="${escapeHtml(state.query)}"
                  aria-label="Search questions"
                />
              </div>
              ${
                filtered.length
                  ? filtered.map((question, index) => renderQuestion(question, index)).join("")
                  : '<div class="empty">No matching questions.</div>'
              }
            </section>
          `
      }

      <footer class="footer">
        PREP BRIEF: GRAB SR. REGIONAL DIRECTOR PMM - BRANDON LIM - MAY 2026 · ${questions.length} QUESTIONS · CLICK TO EXPAND · MARK DONE TO TRACK PROGRESS
      </footer>
    </div>
  `;

  bindEvents();
  if (state.view === "products") {
    requestAnimationFrame(() => window.scrollTo({ top: 0 }));
  }
}

function renderQuestion(question, index) {
  const isOpen = state.expandedId === question.id;
  const isDone = Boolean(state.practiced[question.id]);
  const tipOpen = Boolean(state.showTip[question.id]);
  const difficultyClass = question.difficulty.toLowerCase();

  return `
    <article class="card ${isOpen ? "open" : ""} ${isDone ? "done" : ""}" data-id="${question.id}">
      <div class="card-header">
        <div class="number">${isDone ? "✓" : String(index + 1).padStart(2, "0")}</div>
        <div class="main-content">
          <div class="meta">
            <span class="chip">${escapeHtml(compactCategory(question.category))}</span>
            <span class="difficulty ${difficultyClass}">${difficultyDots[question.difficulty]} ${escapeHtml(question.difficulty)}</span>
          </div>
          <div class="question">${escapeHtml(question.question)}</div>
          ${isOpen ? `<div class="hook">${escapeHtml(question.hook)}</div>` : ""}
        </div>
        <div class="actions">
          <svg class="chevron" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <button class="action-button ${isDone ? "done" : ""}" data-action="practice" data-id="${question.id}">
            ${isDone ? "DONE ✓" : "MARK DONE"}
          </button>
        </div>
      </div>
      ${
        isOpen
          ? `
            <div class="answer-panel">
              <div class="section-label">Answer</div>
              <div class="answer">${formatAnswer(question.answer)}</div>
              <div class="tip-wrap">
                <button class="action-button" data-action="tip" data-id="${question.id}">
                  ${tipOpen ? "▲ HIDE COACHING TIP" : "▼ COACHING TIP"}
                </button>
                ${tipOpen ? `<div class="tip">${escapeHtml(question.tips)}</div>` : ""}
              </div>
            </div>
          `
          : ""
      }
    </article>
  `;
}

function renderProductCheatSheet() {
  return `
    <section class="cheat-page">
      <div class="cheat-hero">
        <div class="section-label">Product Cheat Sheet</div>
        <h1>Grab Product Map</h1>
        <p>
          Use this as the fast mental model before product, business, or case-study questions:
          Grab is a local commerce and mobility operating system where demand, supply, payments,
          ads, loyalty and AI reinforce each other.
        </p>
      </div>

      <div class="product-grid">
        ${productCheatSheet
          .map(
            (item) => `
              <article class="product-card">
                <h2>${escapeHtml(item.title)}</h2>
                <div class="product-label">Products</div>
                <p>${escapeHtml(item.products)}</p>
                <div class="product-label">Interview POV</div>
                <p>${escapeHtml(item.pov)}</p>
              </article>
            `,
          )
          .join("")}
      </div>

      <div class="deep-dive-grid">
        ${strategicDeepDives
          .map(
            (item) => `
              <article class="deep-dive-card">
                <h2>${escapeHtml(item.title)}</h2>
                <div class="product-label">Strategic Thesis</div>
                <p>${escapeHtml(item.thesis)}</p>
                <div class="product-label">Where To Play</div>
                <ul>
                  ${item.plays.map((play) => `<li>${escapeHtml(play)}</li>`).join("")}
                </ul>
                <div class="product-label">Where Not To Play</div>
                <ul>
                  ${item.avoid.map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}
                </ul>
                <div class="product-label">PMM Implication</div>
                <p>${escapeHtml(item.pmm)}</p>
                <div class="talk-track">${escapeHtml(item.line)}</div>
              </article>
            `,
          )
          .join("")}
      </div>

      <section class="fact-panel">
        <div class="section-label">Current Business Context</div>
        <div class="fact-list">
          ${businessFacts.map((fact) => `<div class="fact-row">${escapeHtml(fact)}</div>`).join("")}
        </div>
      </section>

      <section class="one-liner">
        <div class="section-label">One-Liner</div>
        <p>
          Grab is not just a superapp. It is a local commerce and mobility operating system:
          consumer demand, merchant growth, driver supply, payments, ads, loyalty and AI all
          reinforcing each other.
        </p>
      </section>

      <section class="source-panel">
        <div class="section-label">Sources</div>
        <a href="https://www.grab.com/sg/press/others/grab-reports-first-quarter-2026-results/" target="_blank" rel="noreferrer">Q1 2026 results</a>
        <a href="https://www.sec.gov/Archives/edgar/data/1855612/000185561226000011/a2025q4-earningspressrelea.htm" target="_blank" rel="noreferrer">FY2025 results</a>
        <a href="https://investors.grab.com/news-and-events/news-details/2026/Grab-Files-Annual-Report-on-Form-20-F-for-Fiscal-Year-2025-2026-YUkSbu7gu9/default.aspx" target="_blank" rel="noreferrer">2025 annual report filing</a>
      </section>
    </section>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      setView(button.dataset.view);
    });
  });

  const categorySelect = document.querySelector(".category-select");
  if (categorySelect) {
    categorySelect.addEventListener("change", (event) => {
      setState({ activeCategory: event.target.value, expandedId: null });
    });
  }

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      setState({ activeCategory: button.dataset.category, expandedId: null });
    });
  });

  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value;
      saveState();
      render();
      const input = document.querySelector(".search-input");
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = Number(card.dataset.id);
      setState({ expandedId: state.expandedId === id ? null : id });
    });
  });

  document.querySelectorAll("[data-action='practice']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const id = button.dataset.id;
      setState({ practiced: { ...state.practiced, [id]: !state.practiced[id] } });
    });
  });

  document.querySelectorAll("[data-action='tip']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const id = button.dataset.id;
      setState({ showTip: { ...state.showTip, [id]: !state.showTip[id] } });
    });
  });

  const resetButton = document.querySelector("[data-action='reset-progress']");
  if (resetButton) {
    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const confirmed = window.confirm(
        "Reset all practice progress and return to All questions?",
      );
      if (!confirmed) return;

      setState({
        activeCategory: "All",
        expandedId: null,
        practiced: {},
        showTip: {},
        query: "",
      });
    });
  }
}

window.addEventListener("hashchange", () => {
  const view = window.location.hash === "#products" ? "products" : "questions";
  if (state.view !== view) setState({ view });
});

window.addEventListener("popstate", () => {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view") === "products" || window.location.hash === "#products" ? "products" : "questions";
  if (state.view !== view) setState({ view });
});

render();
