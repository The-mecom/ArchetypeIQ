export type PersonaType = 'Parent' | 'Child' | 'Partner' | 'Colleague' | 'Boss' | 'Student';

export const SIMULATOR_PRESETS = [
  // RED (Power)
  {
    id: 'red-parent',
    recipientColor: 'R' as const,
    persona: 'Parent' as PersonaType,
    title: 'Setting Boundaries with a Controlling Red Parent',
    recipientName: 'Robert (Father)',
    context: 'Your father is insisting you spend the holidays exactly how he planned, ignoring your own family constraints. You need to hold your boundary without triggering a power struggle.',
    initialBotMessage: 'I already booked the dinner for 5 PM on the 24th. You need to be there on time. No excuses this year.'
  },
  {
    id: 'red-child',
    recipientColor: 'R' as const,
    persona: 'Child' as PersonaType,
    title: 'Managing a Rebellious Red Child',
    recipientName: 'Leo (14 yrs old)',
    context: 'Your teenage son wants to make his own rules about curfew and is challenging your authority directly.',
    initialBotMessage: 'I am not coming home at 10. Everyone else stays out until midnight. I am old enough to decide for myself.'
  },
  {
    id: 'red-partner',
    recipientColor: 'R' as const,
    persona: 'Partner' as PersonaType,
    title: 'Navigating a Major Decision with a Dominant Red Partner',
    recipientName: 'Alex',
    context: 'Alex wants to buy a new car today because he found a "great deal," but you want to review the budget first.',
    initialBotMessage: 'The deal expires today. I ran the numbers in my head, it makes sense. I am going to sign the papers at noon.'
  },
  {
    id: 'red-colleague',
    recipientColor: 'R' as const,
    persona: 'Colleague' as PersonaType,
    title: 'Defending Your Project from a Competitive Red Colleague',
    recipientName: 'Sarah (Senior Manager)',
    context: 'Sarah is trying to take over a presentation you prepared because she thinks she can pitch it better to the executives.',
    initialBotMessage: 'Your slide deck is too soft. I will take the lead on presenting this to the board tomorrow so we actually get the funding.'
  },
  {
    id: 'red-boss',
    recipientColor: 'R' as const,
    persona: 'Boss' as PersonaType,
    title: 'Pushing Back on an Impossible Deadline from a Red Boss',
    recipientName: 'David (VP of Product)',
    context: 'David wants to pull a software release forward by 3 weeks. You need to tell him it is mathematically impossible without breaking quality.',
    initialBotMessage: 'I reviewed the release timeline. Two weeks is too slow. We need this in customer hands by next Friday. Make it happen.'
  },
  {
    id: 'red-student',
    recipientColor: 'R' as const,
    persona: 'Student' as PersonaType,
    title: 'Handling a Challenging Red Student',
    recipientName: 'Jason',
    context: 'Jason is arguing aggressively about a B grade he received, demanding an A because he "did all the work." ',
    initialBotMessage: 'This grade is unacceptable. I did exactly what the rubric asked. You need to change this to an A right now.'
  },

  // BLUE (Intimacy)
  {
    id: 'blue-parent',
    recipientColor: 'B' as const,
    persona: 'Parent' as PersonaType,
    title: 'Addressing Guilt from a Sensitive Blue Parent',
    recipientName: 'Martha (Mother)',
    context: 'Your mother is deeply hurt that you did not call her on Sunday, feeling like you don\'t care about her anymore.',
    initialBotMessage: 'I waited by the phone all day Sunday. I guess you are just too busy with your new life to remember your mother.'
  },
  {
    id: 'blue-child',
    recipientColor: 'B' as const,
    persona: 'Child' as PersonaType,
    title: 'Validating a Highly Sensitive Blue Child',
    recipientName: 'Mia (10 yrs old)',
    context: 'Mia is crying because her friends went to the park without her. She feels completely unlovable and betrayed.',
    initialBotMessage: 'Nobody likes me! They all hate me and I am never going to have any real friends ever again!'
  },
  {
    id: 'blue-partner',
    recipientColor: 'B' as const,
    persona: 'Partner' as PersonaType,
    title: 'Resolving Unmet Expectations with a Blue Partner',
    recipientName: 'Claire',
    context: 'Claire spent hours cooking an anniversary dinner, but you came home late. She is deeply hurt and feeling unappreciated.',
    initialBotMessage: 'I guess work was more important than our dinner tonight. You don\'t need to say anything; I already put the food away.'
  },
  {
    id: 'blue-colleague',
    recipientColor: 'B' as const,
    persona: 'Colleague' as PersonaType,
    title: 'Giving Feedback to a Loyal but Sensitive Blue Colleague',
    recipientName: 'James (Developer)',
    context: 'You gave James some mild constructive feedback on his code, and now he is devastated and thinks he is failing the team.',
    initialBotMessage: 'I am so sorry I messed up the codebase. I feel terrible. I just want to do a good job for everyone and I completely failed.'
  },
  {
    id: 'blue-boss',
    recipientColor: 'B' as const,
    persona: 'Boss' as PersonaType,
    title: 'Reconnecting with a Relationship-Focused Blue Boss',
    recipientName: 'Elena (Director)',
    context: 'Elena is hurt that you didn\'t come to her for help when you were struggling with a project, feeling like you don\'t trust her.',
    initialBotMessage: 'I found out from the team you\'ve been working weekends. Why didn\'t you come to me? I thought we had the kind of relationship where you could trust me.'
  },
  {
    id: 'blue-student',
    recipientColor: 'B' as const,
    persona: 'Student' as PersonaType,
    title: 'Supporting an Anxious Blue Student',
    recipientName: 'Emma',
    context: 'Emma is overwhelmed by an assignment and is in your office in tears, terrified of disappointing you and her parents.',
    initialBotMessage: 'I am trying so hard, but I just can\'t get this essay right. I don\'t want to let you down, I\'m so sorry!'
  },

  // WHITE (Peace)
  {
    id: 'white-parent',
    recipientColor: 'W' as const,
    persona: 'Parent' as PersonaType,
    title: 'Encouraging Action from an Avoidant White Parent',
    recipientName: 'Arthur (Father)',
    context: 'Your father has been ignoring a clear medical issue because he doesn\'t want to deal with the stress of going to the doctor.',
    initialBotMessage: 'It is just a little cough, it will go away. Stop making a fuss about it, I don\'t want to spend all day in a clinic.'
  },
  {
    id: 'white-child',
    recipientColor: 'W' as const,
    persona: 'Child' as PersonaType,
    title: 'Engaging a Withdrawn White Child',
    recipientName: 'Sam (12 yrs old)',
    context: 'Sam refuses to participate in family activities, preferring to hide in his room and play video games to avoid interaction.',
    initialBotMessage: 'Do I have to go? I\'d rather just stay here. I won\'t bother anyone, I\'ll just be quiet in my room.'
  },
  {
    id: 'white-partner',
    recipientColor: 'W' as const,
    persona: 'Partner' as PersonaType,
    title: 'Addressing Passive-Aggression in a White Partner',
    recipientName: 'Jordan',
    context: 'Jordan has been giving you the silent treatment over a simmering issue, responding only with sighs and "I\'m fine."',
    initialBotMessage: '...I said I am fine. It doesn\'t matter anyway. Just do whatever you want.'
  },
  {
    id: 'white-colleague',
    recipientColor: 'W' as const,
    persona: 'Colleague' as PersonaType,
    title: 'Getting Decision Alignment from an Avoidant White Colleague',
    recipientName: 'Marcus (Senior Architect)',
    context: 'Marcus has avoided choosing between two database architecture proposals for three weeks to avoid making a "wrong" choice.',
    initialBotMessage: 'Both database designs have some pros and cons. We don\'t necessarily need to rush into one right now; let\'s just see how things develop.'
  },
  {
    id: 'white-boss',
    recipientColor: 'W' as const,
    persona: 'Boss' as PersonaType,
    title: 'Extracting Direction from a Hands-Off White Boss',
    recipientName: 'Greg (Department Head)',
    context: 'Greg refuses to give you a clear answer on project priorities, leaving your team stuck in limbo.',
    initialBotMessage: 'I think you guys should just use your best judgment. I don\'t want to dictate how you do your jobs. Let\'s touch base next month.'
  },
  {
    id: 'white-student',
    recipientColor: 'W' as const,
    persona: 'Student' as PersonaType,
    title: 'Reaching a Disengaged White Student',
    recipientName: 'Noah',
    context: 'Noah is quietly failing. He doesn\'t cause trouble, but he has missed three assignments and won\'t ask for help.',
    initialBotMessage: 'Oh, the assignments? Yeah, I\'ll get them done eventually. It\'s fine. Sorry.'
  },

  // YELLOW (Fun)
  {
    id: 'yellow-parent',
    recipientColor: 'Y' as const,
    persona: 'Parent' as PersonaType,
    title: 'Handling an Irresponsible but Fun Yellow Parent',
    recipientName: 'Susan (Mother)',
    context: 'Your mother forgot to pay a shared utility bill because she got distracted planning a neighborhood block party.',
    initialBotMessage: 'Oh no, the bill! I totally forgot, sweetie! But wait until you hear about the margarita machine I rented for the party!'
  },
  {
    id: 'yellow-child',
    recipientColor: 'Y' as const,
    persona: 'Child' as PersonaType,
    title: 'Creating Follow-Through with a Distracted Yellow Child',
    recipientName: 'Lily (8 yrs old)',
    context: 'Lily started pulling out all her toys to build a fort, but abandoned it halfway to paint, leaving a massive mess.',
    initialBotMessage: 'The fort was getting boring! I want to paint a picture of a unicorn now! Look at these glitter colors!'
  },
  {
    id: 'yellow-partner',
    recipientColor: 'Y' as const,
    persona: 'Partner' as PersonaType,
    title: 'Grounding a Spontaneous Yellow Partner',
    recipientName: 'Casey',
    context: 'Casey just booked a surprise weekend getaway without checking your work schedule or the joint budget.',
    initialBotMessage: 'Guess what?! I just booked us flights to Miami for tomorrow! We are going to have the best time ever, don\'t even worry about the cost!'
  },
  {
    id: 'yellow-colleague',
    recipientColor: 'Y' as const,
    persona: 'Colleague' as PersonaType,
    title: 'Holding a Creative Yellow Teammate Accountable to Budgets',
    recipientName: 'Chloe (Lead Designer)',
    context: 'Chloe came up with a brilliant marketing campaign, but it is 40% over budget. You need to reign her in without crushing her spirit.',
    initialBotMessage: 'Did you see the campaign concept video?! It is going to be HUGE! Everyone is going to talk about this for months!'
  },
  {
    id: 'yellow-boss',
    recipientColor: 'Y' as const,
    persona: 'Boss' as PersonaType,
    title: 'Managing the Chaos of a Visionary Yellow Boss',
    recipientName: 'Richard (CEO)',
    context: 'Richard wants to completely pivot the company\'s Q3 strategy based on a podcast he listened to on his drive to work.',
    initialBotMessage: 'I just heard the most amazing podcast! We need to drop the current roadmap and pivot to AI-driven crypto. It is the future! Let\'s go!'
  },
  {
    id: 'yellow-student',
    recipientColor: 'Y' as const,
    persona: 'Student' as PersonaType,
    title: 'Focusing a Disruptive but Smart Yellow Student',
    recipientName: 'Tyler',
    context: 'Tyler is the class clown. He is very bright but constantly distracts other students with jokes instead of working.',
    initialBotMessage: 'Why do we have to do this worksheet? It\'s so boring! Hey guys, watch me balance this textbook on my chin!'
  }
];
