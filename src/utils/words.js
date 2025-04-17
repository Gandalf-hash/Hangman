const ENGLISH_WORDS = [
  "their",
  "would",
  "about",
  "there",
  "think",
  "which",
  "people",
  "could",
  "other",
  "these",
  "first",
  "thing",
  "those",
  "woman",
  "child",
  "world",
  "school",
  "family",
  "friend",
  "health",
  "change",
];

const QUESTIONS = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "What is 5 + 5?", answer: "10" },
  { question: "What is the color of the sky?", answer: "blue" },
  { question: "What is the opposite of hot?", answer: "cold" },
  { question: "What is 2 * 3?", answer: "6" },
];

function randomWord() {
  return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

function randomQuestion() {
  const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
  return QUESTIONS[randomIndex];
}

export { randomWord, randomQuestion };