import { ColorCode } from '../types/personality';

export interface DirectionalStrategy {
  senderColor: ColorCode;
  receiverColor: ColorCode;
  coreRule: string;
  senderMindsetShift: string;
  dos: string[];
  donts: string[];
  wordSwaps: { avoid: string; useInstead: string; reason: string }[];
  contextScripts: {
    contextName: string;
    description: string;
    script: string;
    keyTactic: string;
  }[];
}

export const DIRECTIONAL_COMMUNICATION_STRATEGIES: Record<string, DirectionalStrategy> = {
  'R-to-B': {
    senderColor: 'R',
    receiverColor: 'B',
    coreRule: 'Soften your delivery, validate feelings first, and emphasize quality and mutual care before issuing directives.',
    senderMindsetShift: 'Realize that to a Blue, efficiency without emotional care feels like an aggressive personal assault. Spending 2 minutes on empathy will save 2 weeks of resistance.',
    dos: [
      'Begin by thanking them for their specific, meticulous contributions.',
      'Acknowledge the emotional impact of the situation before jumping into logical fixes.',
      'Speak in a calm, warm, and respectful tone rather than barking commands.',
      'Show that you care about their personal well-being, not just their output.'
    ],
    donts: [
      'Do NOT say "It’s not personal, it’s just business"—to a Blue, EVERYTHING is personal.',
      'Do NOT cut them off when they are explaining their thoughts or feelings.',
      'Do NOT demand instant decisions on sensitive relational topics.',
      'Do NOT brush off their quality concerns as "unnecessary perfectionism."'
    ],
    wordSwaps: [
      { avoid: '"Just get it done by 3 PM."', useInstead: '"I deeply appreciate your care on this. Could we target 3 PM so the team stays on track?"', reason: 'Acknowledges effort and relational context instead of pure command.' },
      { avoid: '"Stop overthinking and being so emotional."', useInstead: '"I hear how deeply you care about getting this right. Let’s look at the core priorities together."', reason: 'Validates their high standards rather than mocking their sensitivity.' }
    ],
    contextScripts: [
      {
        contextName: 'Giving Critical Feedback',
        description: 'Addressing an error or performance issue without crushing their spirit.',
        script: '"Sarah, I want to first thank you for the immense heart and diligence you pour into our team. I noticed a discrepancy in yesterday\'s client deck that I want to address with you privately. I know how deeply you value excellence, and I want to make sure your hard work shines. How can we adjust this section together?"',
        keyTactic: 'Praise character and commitment first, deliver the critique privately, and frame the correction as protecting their standard of excellence.'
      },
      {
        contextName: 'Resolving a Heated Conflict',
        description: 'De-escalating emotional tension when Blue feels wounded.',
        script: '"I realize my tone earlier was sharp and abrupt, and I am truly sorry for how that landed. Your feelings matter to me, and my intention was never to make you feel unappreciated. Can we sit down so I can understand where your heart is at?"',
        keyTactic: 'Take direct ownership of your harsh delivery and invite them to express their feelings without defending your logic.'
      }
    ]
  },

  'R-to-W': {
    senderColor: 'R',
    receiverColor: 'W',
    coreRule: 'Lower the pressure, slow your pace, ask open questions, and grant autonomous processing time.',
    senderMindsetShift: 'Understand that a White will not fight back with loud volume; they fight back with immovable silence and passive resistance. Pressure destroys cooperation.',
    dos: [
      'Approach them with a quiet, calm, non-confrontational posture.',
      'Frame requests as collaborative invitations: "I would love your input when you have a moment."',
      'Give them written bullet points and allow them time to think before demanding an answer.',
      'Affirm their steady, calming influence and respect their need for downtime.'
    ],
    donts: [
      'Do NOT corner them or demand an instantaneous answer on the spot.',
      'Do NOT raise your voice, bang the table, or use aggressive body language.',
      'Do NOT assume that their silence means they agree with your proposal.',
      'Do NOT micro-manage their daily process; give them the objective and step back.'
    ],
    wordSwaps: [
      { avoid: '"I need your decision right now!"', useInstead: '"Take some time to look this over and let me know your thoughts by tomorrow."', reason: 'Removes fight-or-flight panic and respects processing cadence.' },
      { avoid: '"Why are you just sitting there saying nothing?"', useInstead: '"I really value your calm perspective—what do you think is the most balanced way forward?"', reason: 'Invites wisdom without accusatory interrogation.' }
    ],
    contextScripts: [
      {
        contextName: 'Requesting High-Priority Action',
        description: 'Getting a White moving without triggering passive resistance.',
        script: '"Hey Jordan, hope your morning is going well. We have a key project coming up where your balanced approach would be invaluable. Here are the 3 main objectives. Take a look when you have a chance, and let me know how you’d like to tackle your part."',
        keyTactic: 'Frame the task with low pressure, highlight their value, and grant autonomy on the workflow.'
      }
    ]
  },

  'R-to-Y': {
    senderColor: 'R',
    receiverColor: 'Y',
    coreRule: 'Keep the interaction upbeat, highlight the exciting vision, praise publicly, and put administrative details in writing.',
    senderMindsetShift: 'Recognize that Yellows are powered by enthusiasm and joy. If you suck the fun out of a project, a Yellow’s productivity plummets.',
    dos: [
      'Start conversations with warmth, enthusiasm, and a positive comment.',
      'Highlight how the goal will be fun, rewarding, and socially impactful.',
      'Publicly praise their creativity, charisma, and team spirit.',
      'Send a short, bulleted follow-up text/email summarizing deliverables and deadlines.'
    ],
    donts: [
      'Do NOT start meetings with scolding, heavy sighs, or severe procedural reprimands.',
      'Do NOT bury them in 50 pages of dry compliance rules without a visual summary.',
      'Do NOT publicly embarrass or demean them when they make a logistical mistake.',
      'Do NOT micromanage every minute of their day; focus on milestones.'
    ],
    wordSwaps: [
      { avoid: '"Here is a mountain of tedious data you must enter."', useInstead: '"Let\'s knock out these key numbers so we can celebrate closing the deal!"', reason: 'Ties the tedious task to an exciting upcoming celebration.' }
    ],
    contextScripts: [
      {
        contextName: 'Addressing Missed Deadlines',
        description: 'Re-aligning accountability without crushing morale.',
        script: '"Sam, you did a brilliant job pitching the client yesterday—your energy was electric! We missed the follow-up paperwork cutoff this morning, which risks stalling the celebration. Let’s get that submitted in the next hour so we can officially pop the champagne. I know you can knock it out fast!"',
        keyTactic: 'Affirm their strength first, state the specific fix concisely, and tie completion to a rewarding positive payoff.'
      }
    ]
  },

  'B-to-R': {
    senderColor: 'B',
    receiverColor: 'R',
    coreRule: 'Be direct, lead with the bottom line, support points with logic, and avoid long emotional preambles.',
    senderMindsetShift: 'Understand that a Red’s brevity and bluntness are not signs of disrespect; it is their natural efficiency. They appreciate directness and respect people who stand their ground.',
    dos: [
      'Deliver the headline and desired outcome in the first sentence.',
      'Present 2–3 clear, logical options with practical pros and cons.',
      'Speak with confidence and conviction; maintain strong eye contact.',
      'Acknowledge their leadership and focus on tangible ROI.'
    ],
    donts: [
      'Do NOT begin with a 10-minute backstory of your feelings before stating the problem.',
      'Do NOT drop passive-aggressive hints, sigh heavily, or expect them to guess your grievance.',
      'Do NOT take their crisp, business-like tone as a personal insult or lack of love.',
      'Do NOT argue about minor subjective details when the big goal is accomplished.'
    ],
    wordSwaps: [
      { avoid: '"I feel like you never care about how hard this has been for me..."', useInstead: '"Here is the bottom line: our current workflow is causing significant delays and burnout. I have two specific solutions to optimize it."', reason: 'Translates emotional distress into an actionable strategic proposal.' }
    ],
    contextScripts: [
      {
        contextName: 'Addressing Feeling Disrespected',
        description: 'Confronting a Red about their harsh tone in a way they will respect.',
        script: '"Alex, I want to talk directly about our meeting earlier. When you interrupted me in front of the team, it undermined our project authority and damaged our collaboration. I respect your drive for results, but I require direct mutual respect in our communication. Moving forward, if you have concerns with my data, address them with me directly before the meeting."',
        keyTactic: 'State the grievance firmly, connect it to practical business consequences, and set a clear boundary without emotional pleading.'
      }
    ]
  },

  'B-to-W': {
    senderColor: 'B',
    receiverColor: 'W',
    coreRule: 'Be gentle, keep emotional intensity moderate, avoid guilt trips, and give them breathing room to respond.',
    senderMindsetShift: 'Understand that intense emotional demands or weeping interrogations overwhelm a White, triggering instant shutdown. Soft gentleness draws them out.',
    dos: [
      'Approach them with warmth and a calm, non-demanding presence.',
      'Ask clear, gentle questions: "How do you feel about this idea?"',
      'Affirm your love and acceptance of them exactly as they are.',
      'Give them time to reflect without interpreting silence as rejection.'
    ],
    donts: [
      'Do NOT use emotional guilt: "Look at how much I suffer for you while you do nothing!"',
      'Do NOT force them into intense, multi-hour emotional marathons.',
      'Do NOT assume their quietness means they are harboring secret resentment.',
      'Do NOT hover anxiously waiting for an immediate verbal reaction.'
    ],
    wordSwaps: [
      { avoid: '"You never open up to me—it feels like you don’t care at all!"', useInstead: '"I love hearing your thoughts and spending quiet time with you. Whenever you’re ready, I’d love to know what’s on your mind."', reason: 'Replaces accusatory guilt with loving invitation.' }
    ],
    contextScripts: [
      {
        contextName: 'Deepening Emotional Closeness',
        description: 'Inviting a White partner to share feelings without pressure.',
        script: '"I’ve been so grateful for the peaceful atmosphere in our home lately. I want to make sure I’m creating a safe space for you too. There’s zero pressure to answer now, but is there anything you’ve been thinking or feeling that you’d like to share with me sometime this weekend?"',
        keyTactic: 'Lead with gratitude, explicitly remove urgency, and invite gentle connection.'
      }
    ]
  },

  'B-to-Y': {
    senderColor: 'B',
    receiverColor: 'Y',
    coreRule: 'Keep conversations light, appreciate their humor, don’t take playful teasing personally, and focus on positive connection.',
    senderMindsetShift: 'Remember that Yellows express love and care through shared joy and laughter, not heavy emotional analysis. Loosen your expectations of solemn seriousness.',
    dos: [
      'Laugh at their jokes and participate in their spontaneous ideas.',
      'Praise their positive spirit and tell them how much joy they bring to your life.',
      'Keep heavy discussions focused on one issue at a time with a quick resolution.',
      'Acknowledge that their humor is an attempt to connect, not disrespect.'
    ],
    donts: [
      'Do NOT constantly criticize their organizational habits or minor forgetfulness.',
      'Do NOT turn every small issue into a deep moral lecture or crisis.',
      'Do NOT expect them to sit through hours of somber, gloomy analysis.',
      'Do NOT hold historical grudges after they have apologized and moved on.'
    ],
    wordSwaps: [
      { avoid: '"Why must you turn every serious moment into a foolish joke?"', useInstead: '"I love your humor, and right now I really need two minutes of your sincere heart on this."', reason: 'Affirms their gift while clearly requesting a brief moment of depth.' }
    ],
    contextScripts: [
      {
        contextName: 'Requesting Reliable Help with Responsibilities',
        description: 'Getting a Yellow to follow through without nagging.',
        script: '"Jordan, you bring so much incredible energy to our house! To keep things running smoothly so we can do that weekend road trip, I really need your help finishing these two tasks by Friday noon. If we get them done, we can take off early without any stress. Deal?"',
        keyTactic: 'Affirm their spirit, limit the request to 1–2 specific items, and link completion to an exciting shared reward.'
      }
    ]
  },

  'W-to-R': {
    senderColor: 'W',
    receiverColor: 'R',
    coreRule: 'Speak up clearly, state your position without apologizing, offer concise solutions, and don’t cower.',
    senderMindsetShift: 'Realize that Reds respect people who have a backbone and state their truth clearly. They will not be offended by your directness; in fact, they will respect you more.',
    dos: [
      'State your boundary or decision directly without hesitation or beating around the bush.',
      'Focus on the practical, logical merits of your position.',
      'Keep your tone steady, calm, and grounded.',
      'Stand firm if they push back initially—it is often just a test of your conviction.'
    ],
    donts: [
      'Do NOT retreat into silent stonewalling or agree outwardly while resenting inwardly.',
      'Do NOT start your sentences with excessive apologies: "I’m sorry, but maybe..."',
      'Do NOT assume that their intense volume or bluntness means they hate you.',
      'Do NOT wait until you are boiling with suppressed rage to finally speak up.'
    ],
    wordSwaps: [
      { avoid: '"Whatever you want is fine with me, I guess..." (then secretly resenting it)', useInstead: '"I have reviewed the plan. I support parts A and B, but I cannot agree to part C. Here is my alternative proposal."', reason: 'Provides constructive, firm guidance instead of passive surrender.' }
    ],
    contextScripts: [
      {
        contextName: 'Setting a Firm Boundary',
        description: 'Halting an aggressive Red demand calmly and decisively.',
        script: '"Alex, I hear your urgency on this project. However, adding these three extra tasks right now will compromise system stability. I will not rush this phase. We can either launch the core version on Friday or delay the full release to next Tuesday. You choose which target we hit."',
        keyTactic: 'Stay completely unflappable, frame the boundary around logical constraints, and give them the choice between two realistic options.'
      }
    ]
  },

  'W-to-B': {
    senderColor: 'W',
    receiverColor: 'B',
    coreRule: 'Offer verbal reassurance, initiate connection proactively, validate their feelings, and don’t withdraw.',
    senderMindsetShift: 'Understand that a Blue interprets your silent withdrawal as emotional abandonment. A few words of genuine warmth will prevent immense anxiety on their part.',
    dos: [
      'Offer unprompted words of affection and appreciation for their devotion.',
      'Look them in the eye and give them your full attention when they speak.',
      'Acknowledge when you need recharge time so they don’t think they did something wrong.',
      'Affirm that you are committed to the relationship and value their heart.'
    ],
    donts: [
      'Do NOT disappear for hours without a quick reassuring text or explanation.',
      'Do NOT dismiss their emotional concerns with cold logic or a shrug.',
      'Do NOT let misunderstandings sit for weeks in hopes that they will simply evaporate.',
      'Do NOT treat their desire for closeness as an invasive attack on your independence.'
    ],
    wordSwaps: [
      { avoid: '"Just leave me alone, you’re suffocating me."', useInstead: '"I love you and everything is fine between us. My social battery is just drained, and I need 45 minutes of quiet recharge. Let’s hang out right after dinner."', reason: 'Assures relational safety while clearly protecting personal space.' }
    ],
    contextScripts: [
      {
        contextName: 'Soothing a Worried Partner / Colleague',
        description: 'Reassuring a Blue when they sense emotional distance.',
        script: '"Sarah, I noticed you seemed worried that I’ve been quiet today. I want to reassure you that you did nothing wrong and I am so grateful for you. I was just processing a heavy work challenge in my head. Thank you for always caring so deeply about me."',
        keyTactic: 'Take proactive initiative to dispel their unspoken fear of relational rupture and express gratitude for their care.'
      }
    ]
  },

  'W-to-Y': {
    senderColor: 'W',
    receiverColor: 'Y',
    coreRule: 'Engage with positive energy, laugh with them, give specific positive feedback, and establish gentle boundaries.',
    senderMindsetShift: 'Recognize that Yellows thrive on interactive energy. Occasionally stepping into their playful world makes them feel adored and connected.',
    dos: [
      'Show genuine amusement and enthusiasm for their creative stories.',
      'Join in on occasional spontaneous outings to build shared memories.',
      'Gently remind them of commitments in a friendly, non-nagging tone.',
      'Praise their ability to make life vibrant and fun.'
    ],
    donts: [
      'Do NOT act like an indifferent, bored spectator to their excitement.',
      'Do NOT use cold sarcasm to deflate their enthusiastic ideas.',
      'Do NOT let them walk over your personal boundaries to avoid a scene.',
      'Do NOT assume they will remember details without a gentle visual reminder.'
    ],
    wordSwaps: [
      { avoid: '"Do whatever you want, I don’t really care."', useInstead: '"That sounds like a blast! Count me in for the first half, and then I’ll head home for some quiet reading."', reason: 'Participates positively while setting an unpressured personal boundary.' }
    ],
    contextScripts: [
      {
        contextName: 'Managing Social Energy',
        description: 'Negotiating weekend plans with a high-energy Yellow.',
        script: '"Sam, that party on Saturday sounds super fun and I know you\'ll be the life of the room! How about we go together for two hours to celebrate, and then I’ll take an Uber home while you stay and dance with friends? That way you get your party and I get my recharge."',
        keyTactic: 'Support their fun fully while crafting a win-win boundary that honors your need for rest.'
      }
    ]
  },

  'Y-to-R': {
    senderColor: 'Y',
    receiverColor: 'R',
    coreRule: 'Be concise, follow through on your word, respect their schedule, and show the tangible results of your work.',
    senderMindsetShift: 'Realize that Reds judge love, respect, and competence through reliability and results. Proving you can deliver earns their deep admiration and loyalty.',
    dos: [
      'Show up on time and prepared for meetings with key takeaways.',
      'Pitch your creative ideas in terms of measurable ROI and bottom-line wins.',
      'Honor every single promise you make; if delayed, communicate immediately.',
      'Inject your charisma into driving forward team objectives.'
    ],
    donts: [
      'Do NOT make excuses or blame external circumstances when a deadline is missed.',
      'Do NOT monopolize meetings with lengthy, unrelated personal stories.',
      'Do NOT promise the moon if you know you cannot execute the follow-through.',
      'Do NOT treat serious business commitments as casual suggestions.'
    ],
    wordSwaps: [
      { avoid: '"Oops! I completely forgot to do that, but don’t worry, it’s all good!"', useInstead: '"I missed the 10 AM deadline. That’s on me. I am finishing it right now and will have it in your inbox by 11:30 AM."', reason: 'Takes immediate ownership without making flippant excuses.' }
    ],
    contextScripts: [
      {
        contextName: 'Pitching a Bold Creative Initiative',
        description: 'Getting a skeptical Red executive or partner on board with a new idea.',
        script: '"Alex, I have an exciting concept that can increase our client engagement by 35% this quarter. Here is the 1-page executive summary with the estimated budget, timeline, and ROI. I’ve already vetted the preliminary risks. Take a look at the numbers, and let’s decide if we want to run a 2-week pilot."',
        keyTactic: 'Deliver energy backed by concise hard metrics, proven feasibility, and a low-risk pilot option.'
      }
    ]
  },

  'Y-to-B': {
    senderColor: 'Y',
    receiverColor: 'B',
    coreRule: 'Slow down, listen with sincere attention, honor commitments faithfully, and validate their feelings without joking.',
    senderMindsetShift: 'Understand that when a Blue is sharing deep hurt or serious thoughts, cracking a joke makes them feel completely invalidated and ridiculed. Meet them in the depth.',
    dos: [
      'Give them uninterrupted, sincere eye contact during serious talks.',
      'Follow through meticulously on small promises—for Blue, small details matter.',
      'Express heartfelt, specific gratitude for the sacrifices they make for you.',
      'Reassure them of your loyalty, devotion, and appreciation often.'
    ],
    donts: [
      'Do NOT make sarcastic jokes when they are crying or expressing vulnerability.',
      'Do NOT cancel plans last minute to chase a more exciting novelty.',
      'Do NOT dismiss their thoughtful gestures as "overkill" or "unnecessary."',
      'Do NOT tease them in public about things they are privately sensitive about.'
    ],
    wordSwaps: [
      { avoid: '"Lighten up! You take everything way too seriously!"', useInstead: '"I can see how much this matters to you. I’m listening with my whole heart—tell me what you need."', reason: 'Validates their moral and emotional depth instead of dismissing it.' }
    ],
    contextScripts: [
      {
        contextName: 'Making a Sincere Apology',
        description: 'Healing hurt feelings with a Blue who feels let down.',
        script: '"Sarah, I am so sorry for forgetting our dinner date on Tuesday. I know how carefully you planned that evening, and my carelessness hurt you deeply. You are the most important person in my life, and I am putting our dates locked in my calendar with alarms so this never happens again. Will you forgive me and let me make it up to you this weekend?"',
        keyTactic: 'Acknowledge the specific hurt, validate their care, provide concrete systemic prevention, and sincerely ask for forgiveness.'
      }
    ]
  },

  'Y-to-W': {
    senderColor: 'Y',
    receiverColor: 'W',
    coreRule: 'Invite without demanding, respect their quiet sanctuary, keep drama low, and appreciate their steady presence.',
    senderMindsetShift: 'Understand that Whites enjoy your positive energy, but they require peace and silence to recharge. Never force them to perform or match your hyperactivity.',
    dos: [
      'Invite them to fun activities as an open door with zero pressure or guilt.',
      'Create a calm, relaxed environment at home where they can unwind.',
      'Appreciate their steady listening ear and ask for their calm advice.',
      'Celebrate their gentle presence without demanding they be loud.'
    ],
    donts: [
      'Do NOT guilt-trip them when they choose a quiet night at home over a noisy party.',
      'Do NOT bring chaotic, high-conflict drama into their peaceful sanctuary.',
      'Do NOT mock them for being quiet or call them "boring."',
      'Do NOT overwhelm them with 10 demands all at the same instant.'
    ],
    wordSwaps: [
      { avoid: '"Why are you always such a homebody? Come on, don’t be lame!"', useInstead: '"I’m heading out to the festival with friends, but I’d love you to come if you’re up for it. If not, enjoy your cozy night and I’ll bring you back some dessert!"', reason: 'Extends a loving invitation with complete freedom and thoughtfulness.' }
    ],
    contextScripts: [
      {
        contextName: 'Collaborating on Household or Life Goals',
        description: 'Getting a White moving on shared plans in a pleasant, low-stress way.',
        script: '"Jordan, I was thinking about our summer vacation! I found three really cool, chill cabin rentals near the lake. Whenever you’re relaxing later, take a peek at the links and let me know which one looks most peaceful to you."',
        keyTactic: 'Frame the goal around their desire for peace and comfort, and provide easy, pre-selected choices.'
      }
    ]
  }
};

export function getDirectionalStrategy(sender: ColorCode, receiver: ColorCode): DirectionalStrategy {
  const key = `${sender}-to-${receiver}`;
  if (DIRECTIONAL_COMMUNICATION_STRATEGIES[key]) {
    return DIRECTIONAL_COMMUNICATION_STRATEGIES[key];
  }

  // Same-color strategy fallback
  const sameColorRules: Record<ColorCode, DirectionalStrategy> = {
    R: {
      senderColor: 'R',
      receiverColor: 'R',
      coreRule: 'Respect their competence, divide authority clearly, stick to facts, and practice strategic yielding.',
      senderMindsetShift: 'Recognize that you are looking into a mirror. Two captains cannot hold the wheel at the same second without crashing the ship.',
      dos: ['State facts and bottom lines directly.', 'Establish clear territorial boundaries.', 'Acknowledge their strong execution.'],
      donts: ['Do NOT engage in petty dominance battles.', 'Do NOT challenge their authority in front of peers.'],
      wordSwaps: [{ avoid: '"You need to listen to my orders."', useInstead: '"Here is the data. You own this department—what is your strategic call?"', reason: 'Respects their executive autonomy.' }],
      contextScripts: [{ contextName: 'Strategic Alignment', description: 'Aligning with a peer Red without power struggles.', script: '"Alex, we share the same high target on this revenue goal. Let’s divide the battle lines: you own market execution, I own product operations. We sync weekly on metrics."', keyTactic: 'Divide sovereignty and align on a shared big win.' }]
    },
    B: {
      senderColor: 'B',
      receiverColor: 'B',
      coreRule: 'Forgive early, banish score-keeping, schedule intentional levity, and take turns being the emotional pillar.',
      senderMindsetShift: 'When both partners sink into anxiety or hurt simultaneously, no one holds the life raft. Practice lifting each other out of rumination.',
      dos: ['Express deep verbal gratitude.', 'Forgive immediately out loud.', 'Schedule fun and play.'],
      donts: ['Do NOT keep secret score of historical sacrifices.', 'Do NOT spiral into shared depression or mutual guilt.'],
      wordSwaps: [{ avoid: '"Remember when you did this three months ago?"', useInstead: '"I love you and I forgive that completely. Let’s focus on how we connect today."', reason: 'Eliminates toxic score-keeping.' }],
      contextScripts: [{ contextName: 'Breaking an Anxiety Spiral', description: 'Stopping mutual worry between two Blues.', script: '"I love our deep heart, but we are both overthinking this right now. Let’s step away, grab a coffee, put on music, and remember that our relationship is completely safe."', keyTactic: 'Offer verbal reassurance of relational safety and inject restorative levity.' }]
    },
    W: {
      senderColor: 'W',
      receiverColor: 'W',
      coreRule: 'Take turns initiating decisions, raise uncomfortable issues kindly and early, and schedule shared adventures.',
      senderMindsetShift: 'Do not mistake silence for harmony. A relationship that never faces conflict eventually drifts into numbness.',
      dos: ['Speak up gently about personal preferences.', 'Take turns being the decision-maker.', 'Plan regular dates.'],
      donts: ['Do NOT say "Whatever you want" every single day.', 'Do NOT swallow grievances until you disconnect completely.'],
      wordSwaps: [{ avoid: '"I don’t mind, you pick..."', useInstead: '"I would really love Italian tonight. Let’s go there!"', reason: 'Practices proactive leadership and voice.' }],
      contextScripts: [{ contextName: 'Initiating Forward Motion', description: 'Preventing stagnation between two Whites.', script: '"I love how peaceful our home is, and I want to make sure we keep moving toward our dream trip. I’ll book the flights this evening—does that work for you?"', keyTactic: 'Initiate action with gentle kindness.' }]
    },
    Y: {
      senderColor: 'Y',
      receiverColor: 'Y',
      coreRule: 'Automate logistical responsibilities, take turns sharing the spotlight, and make room for deep check-ins.',
      senderMindsetShift: 'A party without a foundation eventually burns down the house. Anchor your fun in simple, daily operational discipline.',
      dos: ['Celebrate each other’s brilliance.', 'Automate bills and chores.', 'Schedule weekly 15-minute adult check-ins.'],
      donts: ['Do NOT compete for attention in social circles.', 'Do NOT run away from difficult adult conversations.'],
      wordSwaps: [{ avoid: '"Let’s ignore this bill and go party!"', useInstead: '"Let’s pay this bill online in 60 seconds right now, and THEN go celebrate!"', reason: 'Handles responsibility first so celebration is unburdened.' }],
      contextScripts: [{ contextName: 'Holding a Rapid Logistics Sync', description: 'Getting adult chores done fast between two Yellows.', script: '"Let’s put on a high-energy playlist, knock out these household chores in a 20-minute speed sprint, and then head out for tacos!"', keyTactic: 'Gamify responsibilities with music and speed.' }]
    }
  };

  return sameColorRules[sender] || sameColorRules['R'];
}
