'use client';

import { useState } from 'react';
import Image from 'next/image';

type PersonalityType = 'bold-adventurer' | 'social-butterfly' | 'health-nut' | 'indulgent-treat';

type QuizState = 'intro' | 'quiz' | 'results';

interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    emoji: string;
    personality: PersonalityType;
  }[];
}

interface PersonalityResult {
  type: PersonalityType;
  name: string;
  coffee: string;
  tea: string;
  tagline: string;
  image: string;
}

const quizData: Question[] = [
  {
    id: 1,
    question: "It's Saturday morning. What's your ideal start to the day?",
    answers: [
      { text: "Hit the trail for a sunrise hike", emoji: "🥾", personality: 'bold-adventurer' },
      { text: "Brunch with friends at the new spot everyone's talking about", emoji: "🥐", personality: 'social-butterfly' },
      { text: "Yoga class followed by a green smoothie", emoji: "🧘", personality: 'health-nut' },
      { text: "Sleep in, then treat yourself to pancakes and Netflix", emoji: "🥞", personality: 'indulgent-treat' }
    ]
  },
  {
    id: 2,
    question: "Your friend asks you to try a new coffee shop. What catches your eye first?",
    answers: [
      { text: "The single-origin Ethiopian pour-over on the specialty menu", emoji: "☕", personality: 'bold-adventurer' },
      { text: "The cozy corner booth perfect for catching up", emoji: "💬", personality: 'social-butterfly' },
      { text: "Oat milk and organic options clearly labeled", emoji: "🌱", personality: 'health-nut' },
      { text: "The dessert case with fresh-baked pastries", emoji: "🍰", personality: 'indulgent-treat' }
    ]
  },
  {
    id: 3,
    question: "How do you feel about trying new things?",
    answers: [
      { text: "Always up for an adventure - the weirder, the better!", emoji: "🚀", personality: 'bold-adventurer' },
      { text: "Love it when friends recommend something they've tried", emoji: "👥", personality: 'social-butterfly' },
      { text: "Open to it if it aligns with my values and goals", emoji: "🎯", personality: 'health-nut' },
      { text: "I'll try it if it sounds delicious and indulgent", emoji: "😋", personality: 'indulgent-treat' }
    ]
  },
  {
    id: 4,
    question: "What's your coffee shop vibe?",
    answers: [
      { text: "Quick grab-and-go so I can get to my next adventure", emoji: "⚡", personality: 'bold-adventurer' },
      { text: "Settle in with friends and stay for hours", emoji: "⏰", personality: 'social-butterfly' },
      { text: "Focused productivity session with my laptop", emoji: "💻", personality: 'health-nut' },
      { text: "Slow morning with a good book and no rush", emoji: "📚", personality: 'indulgent-treat' }
    ]
  },
  {
    id: 5,
    question: "Pick your perfect afternoon:",
    answers: [
      { text: "Rock climbing or trying that new bike trail", emoji: "🧗", personality: 'bold-adventurer' },
      { text: "Coffee date catching up on all the latest news", emoji: "☕", personality: 'social-butterfly' },
      { text: "Meal prep for the week ahead", emoji: "🥗", personality: 'health-nut' },
      { text: "Binge-watching your favorite show with snacks", emoji: "🍿", personality: 'indulgent-treat' }
    ]
  },
  {
    id: 6,
    question: "What's most important in your coffee?",
    answers: [
      { text: "Bold, intense flavor that wakes me up", emoji: "💥", personality: 'bold-adventurer' },
      { text: "Something I can share and talk about with others", emoji: "🗣️", personality: 'social-butterfly' },
      { text: "Clean ingredients and functional benefits", emoji: "✨", personality: 'health-nut' },
      { text: "Rich, sweet, and absolutely delicious", emoji: "🍫", personality: 'indulgent-treat' }
    ]
  },
  {
    id: 7,
    question: "How do you approach your daily routine?",
    answers: [
      { text: "Routine? I'm all about spontaneity and mixing it up", emoji: "🎲", personality: 'bold-adventurer' },
      { text: "Flexible, but I make time for the people I care about", emoji: "❤️", personality: 'social-butterfly' },
      { text: "Structured and intentional - every choice matters", emoji: "📋", personality: 'health-nut' },
      { text: "Go with the flow and treat myself along the way", emoji: "🌊", personality: 'indulgent-treat' }
    ]
  }
];

const personalityResults: PersonalityResult[] = [
  {
    type: 'bold-adventurer',
    name: 'Bold Espresso Explorer',
    coffee: 'Double Shot Espresso',
    tea: 'Bold Black Tea',
    tagline: 'You live life at full intensity. Your beverage should too.',
    image: '/bold-adventurer.jpg'
  },
  {
    type: 'social-butterfly',
    name: 'Social Latte Lover',
    coffee: 'Signature Vanilla Latte',
    tea: 'Honey Chamomile Tea',
    tagline: 'Great beverages taste better when shared with great company.',
    image: '/social-butterfly.jpg'
  },
  {
    type: 'health-nut',
    name: 'Mindful Matcha Enthusiast',
    coffee: 'Oat Milk Matcha Latte',
    tea: 'Organic Green Tea',
    tagline: 'Every sip is intentional. Every choice matters.',
    image: '/health-nut.jpg'
  },
  {
    type: 'indulgent-treat',
    name: 'Decadent Mocha Maven',
    coffee: 'Triple Chocolate Mocha',
    tea: 'Vanilla Chai Latte',
    tagline: 'Life is short. Drink something delicious.',
    image: '/indulgent-treat.jpg'
  }
];

export default function CoffeePersonalityQuiz() {
  const [quizState, setQuizState] = useState<QuizState>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [result, setResult] = useState<PersonalityResult | null>(null);

  const startQuiz = () => {
    setQuizState('quiz');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const selectAnswer = (personality: PersonalityType) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts: Record<PersonalityType, number> = {
        'bold-adventurer': 0,
        'social-butterfly': 0,
        'health-nut': 0,
        'indulgent-treat': 0
      };

      newAnswers.forEach(answer => {
        counts[answer]++;
      });

      const winningPersonality = Object.entries(counts).reduce((a, b) =>
        a[1] > b[1] ? a : b
      )[0] as PersonalityType;

      const personalityResult = personalityResults.find(p => p.type === winningPersonality);
      setResult(personalityResult || personalityResults[0]);
      setQuizState('results');
    }
  };

  const resetQuiz = () => {
    setQuizState('intro');
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] flex items-center justify-center p-4" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="w-full max-w-2xl">

        {/* Intro Screen */}
        {quizState === 'intro' && (
          <div className="bg-[#fff8f0] rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-4 tracking-tight">
              Discover Your Beverage Personality
            </h1>
            <p className="text-[#6D4C41] text-lg md:text-xl mb-8 leading-relaxed">
              Are you a Bold Espresso Explorer or a Decadent Mocha Maven?
              Take our quiz to find your perfect coffee AND tea matches at Basecamp Coffee.
            </p>
            <button
              onClick={startQuiz}
              className="bg-gradient-to-r from-[#D84315] to-[#FF6F00] text-white font-bold text-xl px-10 py-4 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              Start Quiz
            </button>
          </div>
        )}

        {/* Quiz Screen */}
        {quizState === 'quiz' && (
          <div className="bg-[#fff8f0] rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#8D6E63] font-semibold text-sm tracking-wider">
                  Question {currentQuestion + 1} of {quizData.length}
                </span>
                <div className="flex gap-1">
                  {quizData.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-8 rounded-full ${
                        index <= currentQuestion ? 'bg-[#FF6F00]' : 'bg-[#D7CCC8]'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#5D4037] leading-tight">
                {quizData[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-3">
              {quizData[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(answer.personality)}
                  className="w-full bg-white hover:bg-gradient-to-r hover:from-[#FFE0B2] hover:to-[#FFCCBC] text-[#5D4037] font-semibold text-left p-5 rounded-2xl transition-all duration-200 hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  <span className="text-2xl mr-3">{answer.emoji}</span>
                  <span className="text-lg">{answer.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Screen */}
        {quizState === 'results' && result && (
          <div className="bg-[#fff8f0] rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-2">
                You're a {result.name}!
              </h2>
              <p className="text-[#6D4C41] text-xl md:text-2xl italic">
                "{result.tagline}"
              </p>
            </div>

            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={result.image}
                alt={result.name}
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="bg-white rounded-2xl p-6 mb-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#5D4037] mb-6 text-center">
                Your Perfect Matches
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] rounded-xl">
                  <div className="text-4xl mb-2">☕</div>
                  <p className="text-sm text-[#6D4C41] font-semibold mb-1">Coffee</p>
                  <p className="text-xl font-bold text-[#5D4037]">
                    {result.coffee}
                  </p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl">
                  <div className="text-4xl mb-2">🍵</div>
                  <p className="text-sm text-[#6D4C41] font-semibold mb-1">Tea</p>
                  <p className="text-xl font-bold text-[#5D4037]">
                    {result.tea}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={resetQuiz}
                className="flex-1 bg-gradient-to-r from-[#D84315] to-[#FF6F00] text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                Take Quiz Again
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'My Beverage Personality',
                      text: `I'm a ${result.name}! My perfect match: ${result.coffee} ☕ or ${result.tea} 🍵. Find your beverage personality at Basecamp Coffee.`,
                    });
                  }
                }}
                className="flex-1 bg-white text-[#5D4037] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#FFE0B2] transition-colors duration-200 shadow-lg"
              >
                Share Results
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
