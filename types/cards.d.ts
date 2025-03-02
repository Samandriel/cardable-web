declare global {
  type CardContent = {
    type: "PlainText" | "Block";
    value: string;
  };
  type ContentDifficultyLevel = "easy" | "medium" | "hard" | null;

  interface Tag {
    id: string;
    name: string;
  }

  interface subject {
    id: string;
    name: string;
    description?: string;
  }

  interface Topic {
    id: string;
    name: string;
    description?: string;
  }

  interface SubjectTopic {
    subjectId: string;
    topicId: string;
  }

  // === Flashcard ===
  interface FlashcardDeckTags {
    flashcardDeckId: string;
    tagId: string;
  }

  interface FlashcardDeckSubject {
    flashcardDeckId: string;
    SubjectId: string;
  }

  interface FlashcardDeckTopic {
    flashcardDeckId: string;
    topicId: string;
  }

  interface FlashcardDeck {
    id: string;
    name: string;
    description?: string;
    image?: string;
    difficulty?: ContentDifficultyLevel;
    languageFront: string;
    languageBack: string;
    flashcardIds: string[];
    isPublic: boolean;
    userId: string;
    createdAt: string;
    updatedAt: string;
  }

  interface Flashcard {
    id: string;
    hint?: string;
    image?: string;
    difficulty?: ContentDifficultyLevel;
    front: {
      content: CardContent;
      language?: string; // language code
    };
    back: {
      content: CardContent;
      language?: string;
    };
    flashcardDeckId: string;
    createdAt: string;
    updatedAt: string;
  }

  // === NoteCard ===
  interface NoteCardStackTags {
    noteCardStackId: string;
    tagId: string;
  }

  interface NoteCardStackSubject {
    noteCardStackId: string;
    SubjectId: string;
  }

  interface NoteCardStackTopic {
    noteCardStackId: string;
    topicId: string;
  }
  interface NoteCardStack {
    id: string;
    name: string;
    language: string;
    description?: string;
    image?: string;
    difficulty?: ContentDifficultyLevel;
    flashcardIds: string[];
    userId: string;
    createdAt: string;
    updatedAt: string;
  }

  interface NoteCard {
    id: string;
    language?: string;
    image?: string;
    content: CardContent;
    noteCardStackId: string;
    createdAt: string;
    updatedAt: string;
  }

  // === Statistics ===
  interface FlashcardStatistic {
    userId: string;
    flashcardId: string;
    flashcardDeckId: string;
    attempts: number; // Total times reviewed
    correctAttempts: number; // Correct responses
    incorrectAttempts: number; // Incorrect responses
    lastReviewed: string; // ISO Date of last review
    nextReview: string; // ISO Date of next scheduled review (for spaced repetition)
    easeFactor: number; // Used for spaced repetition (default: 2.5)
    interval: number; // Days until the next review
    repetitions: number; // How many times reviewed correctly in a row
    // responseTime?: number;  // Time taken to answer (in ms)
    // confidenceLevel?: "high" | "medium" | "low";  // User self-rated confidence
    // lastAnswerWasCorrect?: boolean;  // Tracks the last answer's correctness
    // streak?: number;  // Consecutive correct answers
    // firstSeenAt?: string;  // ISO Date (when user first saw the card)
    // difficultyOverride?: "easy" | "medium" | "hard" | null;  // Manual difficulty adjustment
    // studySessionId?: string;  // Links flashcard to a study session
    // accuracyRate?: number;  // Calculated field (correctAttempts / attempts)
    createdAt: string;
    updatedAt: string;
  }

  interface NoteCardStatistic {
    userId: string;
    noteCardId: string;
    noteCardStackId: string;
    attempts: number; // (Active Recall)
    correctAttempts: number; // (Active Recall)
    incorrectAttempts: number; // (Active Recall)
    lastReviewed: string; // (Spaced Repetition)
    nextReview: string; // (Spaced Repetition)
    easeFactor: number; // (Spaced Repetition)
    interval: number; // (Spaced Repetition)
    repetitions: number; // (Spaced Repetition)
    lastAnswerWasCorrect?: boolean; // (Active Recall) Tracks the last answer's correctness
    responseTime?: number; // (Active Recall) Time taken to answer (in ms)
    accuracyRate?: number; // (Active Recall & Gamification) Calculated field (correctAttempts / attempts)
    streak?: number; // (Gamification) Consecutive correct answers
    difficultyOverride?: ContentDifficultyLevel; // (Spaced Repetition & Confidence-Based Learning) Manual difficulty adjustment
    confidenceLevel?: "high" | "medium" | "low"; // (Confidence-Based Learning) User self-rated confidence
    createdAt: string;
    updatedAt: string;
  }
}
export {};
