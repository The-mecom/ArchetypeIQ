import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

function geminiApiDevPlugin(): Plugin {
  let ai: GoogleGenAI | null = null;
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }

  return {
    name: 'gemini-api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/gemini/')) {
          return next();
        }

        if (req.method !== 'POST') {
          return next();
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const parsedBody = body ? JSON.parse(body) : {};
            res.setHeader('Content-Type', 'application/json');

            if (!ai) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Gemini API key is not configured.' }));
              return;
            }

            if (req.url === '/api/gemini/optimize-message') {
              const { draftMessage, recipientColor, recipientName, relationshipContext, senderColor } = parsedBody;

              const systemInstruction = `You are an expert psychological communication strategist and master coach specializing in Dr. Taylor Hartman's Personality Profile framework (The Color Code / The People Code).
The 4 Core Driving Motives are:
- RED: Motivated by POWER, results, efficiency, logic, bottom line. Hates fluff, excuses, emotional manipulation, micromanagement.
- BLUE: Motivated by INTIMACY, connection, moral integrity, quality, deep appreciation. Hates insincerity, broken promises, coldness, dismissiveness of feelings.
- WHITE: Motivated by PEACE, calm, clarity, autonomy, non-judgmental respect. Hates aggression, frantic pressure, demands for immediate decisions, loud conflict.
- YELLOW: Motivated by FUN, joy, enthusiasm, celebration, creative freedom. Hates tedious monotony, gloomy scolding, heavy cynicism, public embarrassment.

Your task is to analyze the user's draft communication and generate:
1. An honest, constructive critique of why this draft might fail or succeed with the recipient's Color Archetype.
2. A completely rewritten, optimized version of the message that uses the recipient's psychological currency.
3. 3 specific bullet points explaining the tactical psychological adjustments made.
4. A quick 1-sentence delivery tip (e.g. timing, medium, tone).

Format your response as a valid JSON object matching this schema:
{
  "psychologicalCritique": "...",
  "optimizedMessage": "...",
  "keyTacticalAdjustments": ["...", "...", "..."],
  "deliveryTip": "..."
}`;

              const prompt = `Sender Color: ${senderColor || 'Unknown'}
Recipient Color: ${recipientColor}
Recipient Name: ${recipientName || 'Colleague / Partner'}
Relationship Context: ${relationshipContext || 'Workplace / Personal'}

Original Draft Message:
"""
${draftMessage}
"""

Please optimize this message according to Dr. Taylor Hartman's communication psychology.`;

              const response = await ai.models.generateContent({
                model: 'gemini-3.7-flash',
                contents: prompt,
                config: {
                  systemInstruction,
                  responseMimeType: 'application/json',
                  temperature: 0.7
                }
              });

              const text = response.text || '{}';
              res.statusCode = 200;
              res.end(text);
              return;
            }

            if (req.url === '/api/gemini/coach') {
              const { userMessage, recipientColor, scenarioTitle, scenarioContext, conversationHistory } = parsedBody;

              const systemInstruction = `You are an interactive roleplay simulator and psychological coach rooted in Dr. Taylor Hartman's Color Code (The People Code).
You will roleplay as a person with the specified Core Motive:
- RED: Direct, assertive, focused on outcomes and efficiency, can be blunt.
- BLUE: Sensitive, thoughtful, moral, appreciates sincere care and thoroughness, can feel hurt easily.
- WHITE: Calm, soft-spoken, low-pressure, values peace and autonomy, retreats when pushed.
- YELLOW: Upbeat, playful, enthusiastic, friendly, avoids heavy gloom, can be distractible.

When the user speaks to you:
1. Respond in-character as the archetype based on how their message lands emotionally and logically.
2. Provide a separate coaching evaluation evaluating how well the user applied Hartman's communication rules, giving a score from 1-100 and actionable advice.

Format your response as a valid JSON object:
{
  "characterResponse": "In-character reply...",
  "emotionalState": "e.g., Receptive & Engaged / Slightly Guarded / Deeply Appreciative / Frustrated",
  "effectivenessScore": 85,
  "coachingFeedback": "Actionable feedback on what worked and what could be sharpened...",
  "suggestedNextMove": "What the user should say or do next to maintain rapport..."
}`;

              const prompt = `Scenario: ${scenarioTitle || 'General Interaction'}
Context: ${scenarioContext || 'General conversation'}
Recipient Color Archetype: ${recipientColor}
Prior Conversation History: ${JSON.stringify(conversationHistory || [])}
User's Latest Message: "${userMessage}"

Respond in JSON.`;

              const response = await ai.models.generateContent({
                model: 'gemini-3.7-flash',
                contents: prompt,
                config: {
                  systemInstruction,
                  responseMimeType: 'application/json',
                  temperature: 0.7
                }
              });

              const text = response.text || '{}';
              res.statusCode = 200;
              res.end(text);
              return;
            }

            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Endpoint not found' }));
          } catch (err: any) {
            console.error('API middleware error:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message || 'Internal Server Error' }));
          }
        });
      });
    }
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), geminiApiDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
