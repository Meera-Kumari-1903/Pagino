// Classic Books Images
import classic1 from '../Images/classic1.jpeg';
import classic2 from '../Images/classic2.jpeg';
import classic3 from '../Images/classic3.jpeg';
import classic4 from '../Images/classic4.jpeg';
import classic5 from '../Images/classic5.jpeg';

// Self-help Books Images
import selfhelp1 from '../Images/selfhelp1.jpeg';
import selfhelp2 from '../Images/selfhelp2.jpeg';
import selfhelp3 from '../Images/selfhelp3.jpeg';
import selfhelp4 from '../Images/selfhelp4.jpeg';
import selfhelp5 from '../Images/selfhelp5.jpeg';

// Fantasy Books Images
import fantasy1 from '../Images/fantasy1.jpeg';
import fantasy2 from '../Images/fantasy2.jpeg';
import fantasy3 from '../Images/fantasy3.jpeg';
import fantasy4 from '../Images/fantasy4.jpeg';
import fantasy5 from '../Images/fantasy5.jpeg';

// Fiction Books Images
import fiction1 from '../Images/fiction1.jpeg';
import fiction2 from '../Images/fiction2.jpeg';
import fiction3 from '../Images/fiction3.jpeg';
import fiction4 from '../Images/fiction4.jpeg';
import fiction5 from '../Images/fiction5.jpeg';

// Mystery Books Images
import mystery1 from '../Images/mystery1.jpeg';
import mystery2 from '../Images/mystery2.jpeg';
import mystery3 from '../Images/mystery3.jpeg';
import mystery4 from '../Images/mystery4.jpeg';
import mystery5 from '../Images/mystery5.jpeg';



const books = [
  // Classic
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic",
    description: "A story about the Jazz Age in the United States.",
    image: classic1,
    reviews: [],
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Classic",
    description: "A romantic novel that critiques the British landed gentry.",
    image: classic2,
    reviews: [],
  },
  {
    id: 3,
    title: "Moby Dick",
    author: "Herman Melville",
    category: "Classic",
    description: "The narrative of Captain Ahab’s obsession with a white whale.",
    image: classic3,
    reviews: [],
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    category: "Classic",
    description: "A dystopian novel about totalitarianism.",
    image: classic4,
    reviews: [],
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Classic",
    description: "A novel on racial injustice in the Deep South.",
    image: classic5,
    reviews: [],
  },

  // Self-help
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-help",
    description: "Build good habits and break bad ones.",
    image: selfhelp1,
    reviews: [],
  },
  {
    id: 7,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "Self-help",
    description: "A guide to spiritual enlightenment.",
    image: selfhelp2,
    reviews: [],
  },
  {
    id: 8,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Self-help",
    description: "A philosophy of success and personal achievement.",
    image: selfhelp3,
    reviews: [],
  },
  {
    id: 9,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "Self-help",
    description: "A counterintuitive approach to living a good life.",
    image: selfhelp4,
    reviews: [],
  },
  {
    id: 10,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    category: "Self-help",
    description: "Time-tested advice on building relationships.",
    image: selfhelp5,
    reviews: [],
  },

  // Fantasy
  {
    id: 11,
    title: "Harry Potter",
    author: "J.K. Rowling",
    category: "Fantasy",
    description: "The adventures of a young wizard.",
    image: fantasy1,
    reviews: [],
  },
  {
    id: 12,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "Bilbo Baggins goes on an unexpected journey.",
    image: fantasy2,
    reviews: [],
  },
  {
    id: 13,
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    category: "Fantasy",
    description: "Noble families vie for control of the Iron Throne.",
    image: fantasy3,
    reviews: [],
  },
  {
    id: 14,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    description: "The story of Kvothe, a magically gifted young man.",
    image: fantasy4,
    reviews: [],
  },
  {
    id: 15,
    title: "Mistborn",
    author: "Brandon Sanderson",
    category: "Fantasy",
    description: "A rebellion in a world ruled by an immortal tyrant.",
    image: fantasy5,
    reviews: [],
  },

  // Fiction
  {
    id: 16,
    title: "Normal People",
    author: "Sally Rooney",
    category: "Fiction",
    description: "An intense relationship between two young adults.",
    image: fiction1,
    reviews: [],
  },
  {
    id: 17,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fiction",
    description: "A library of lives you could have lived.",
    image: fiction2,
    reviews: [],
  },
  {
    id: 18,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    category: "Fiction",
    description: "A girl grows up alone in the wild marshes.",
    image: fiction3,
    reviews: [],
  },
  {
    id: 19,
    title: "Circe",
    author: "Madeline Miller",
    category: "Fiction",
    description: "The story of the goddess Circe in a new light.",
    image: fiction4,
    reviews: [],
  },
  {
    id: 20,
    title: "The Great Alone",
    author: "Kristin Hannah",
    category: "Fiction",
    description: "A family seeks a new start in remote Alaska.",
    image: fiction5,
    reviews: [],
  },

  // Mystery
  {
    id: 21,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "Mystery",
    description: "A journalist and a hacker investigate a missing girl case.",
    image: mystery1,
    reviews: [],
  },
  {
    id: 22,
    title: "Gone Girl",
    author: "Gillian Flynn",
    category: "Mystery",
    description: "A husband tries to uncover the truth behind his wife's disappearance.",
    image: mystery2,
    reviews: [],
  },
  {
    id: 23,
    title: "Big Little Lies",
    author: "Liane Moriarty",
    category: "Mystery",
    description: "A look into the lives of mothers and secrets in a small town.",
    image: mystery3,
    reviews: [],
  },
  {
    id: 24,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Mystery",
    description: "A psychotherapist tries to uncover the reason behind his patient's silence.",
    image: mystery4,
    reviews: [],
  },
  {
    id: 25,
    title: "Before I Go to Sleep",
    author: "S.J. Watson",
    category: "Mystery",
    description: "A woman with amnesia tries to piece together her memories.",
    image: mystery5,
    reviews: [],
  },

  
];

export default books;
