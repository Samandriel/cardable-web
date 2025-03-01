declare global {
  interface Flashcard {
    id: number;
    term: string;
    pronunciation: string;
    definition: string;
    image: string;
    examples: string[];
    deckId: number;
    createdAt: string;
    updatedAt: string;
  }

  interface FlashcardDeck {
    id: number;
    name: string;
    description: string;
    image: string;
    languageFront: string;
    languageBack: string;
    flashcards: Flashcard[];
    userId: number;
    createdAt: string;
    updatedAt: string;
  }

  interface FlashcardSubject {
    id: number;
    name: string;
    topics: FlashcardTopic[];
  }

  interface FlashcardTopic {
    id: number;
    name: string;
  }
}

export {};
