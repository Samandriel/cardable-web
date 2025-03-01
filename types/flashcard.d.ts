declare global {
  interface Flashcard {
    id: number;
    front: {
      content: string | object;
      image: string;
      contentType: "PlainText" | "Block";
    };
    back: {
      content: string | object;
      image: string;
      contentType: "PlainText" | "Block";
    };
    deckId: number;
    createdAt: string;
    updatedAt: string;
  }

  interface FlashcardDeck {
    id: number;
    name: string;
    description: string;
    image: string;
    subjectId: number;
    topicIds: number[];
    languagePrimary: string;
    languageSecondary: string;
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
