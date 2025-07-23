export const quizCategories = [
  { id: '9', name: 'General Knowledge' },
  { id: '10', name: 'Entertainment: Books' },
  { id: '11', name: 'Entertainment: Film' },
  { id: '12', name: 'Entertainment: Music' },
  { id: '17', name: 'Science & Nature' },
  { id: '18', name: 'Science: Computers' },
  { id: '21', name: 'Sports' },
  { id: '22', name: 'Geography' },
  { id: '23', name: 'History' },
];

export const dummyQuestions = {
  'General Knowledge-easy': [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific"
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
  ],
  'General Knowledge-medium': [
    {
      question: "What is the longest river in the world?",
      options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
      answer: "Nile River"
    },
    {
      question: "Which country is famous for the Great Barrier Reef?",
      options: ["Brazil", "Australia", "Mexico", "Thailand"],
      answer: "Australia"
    },
    {
      question: "What is the highest mountain in Africa?",
      options: ["Mount Everest", "Mount Kilimanjaro", "Mount Fuji", "Mount Blanc"],
      answer: "Mount Kilimanjaro"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
      answer: "Vatican City"
    },
  ],
  'General Knowledge-hard': [
    {
      question: "What is the only letter in the alphabet that does not appear in the name of any US state?",
      options: ["Z", "Q", "X", "J"],
      answer: "Q"
    },
    {
      question: "Which of Shakespeare's plays is the longest?",
      options: ["Hamlet", "Romeo and Juliet", "Macbeth", "Othello"],
      answer: "Hamlet"
    },
    {
      question: "What is the name of the deepest point in the Earth's oceans?",
      options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Kermadec Trench"],
      answer: "Mariana Trench"
    },
    {
      question: "Which element has the chemical symbol 'W'?",
      options: ["Water", "Tungsten", "Wolfram", "Zinc"],
      answer: "Tungsten"
    },
    {
      question: "What is the capital city of Canada?",
      options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      answer: "Ottawa"
    },
  ],
  'Entertainment: Books-easy': [
    {
      question: "Which famous book is sub-titled 'The Modern Prometheus'?",
      options: ["Frankenstein", "The Legend of Sleepy Hollow", "The Strange Case of Dr. Jekyll and Mr. Hyde", "Dracula"],
      answer: "Frankenstein"
    },
    {
      question: "Which famous spy novelist wrote the children's story 'Chitty-Chitty-Bang-Bang'?",
      options: ["Joseph Conrad", "Ian Fleming", "John Buchan", "Graham Greene"],
      answer: "Ian Fleming"
    },
    {
      question: "What's Harry Potter's dad's name?",
      options: ["Joey Potter", "James Potter", "Frank Potter", "Hairy Potter Sr."],
      answer: "James Potter"
    },
    {
      question: "What is the name of Sherlock Holmes's brother?",
      options: ["Mycroft Holmes", "John Watson", "Moriarty", "Lestrade"],
      answer: "Mycroft Holmes"
    },
    {
      question: "Who wrote 'The Hitchhiker's Guide to the Galaxy'?",
      options: ["Terry Pratchett", "Douglas Adams", "Neil Gaiman", "J.R.R. Tolkien"],
      answer: "Douglas Adams"
    },
  ],
  'Entertainment: Books-medium': [
    {
      question: "In 'The Lord of the Rings', what is the name of Gandalf's sword?",
      options: ["Sting", "Glamdring", "Orcrist", "Andúril"],
      answer: "Glamdring"
    },
    {
      question: "Which author created the character 'Hannibal Lecter'?",
      options: ["Stephen King", "Dean Koontz", "Thomas Harris", "James Patterson"],
      answer: "Thomas Harris"
    },
    {
      question: "What is the title of the first book in the 'A Song of Ice and Fire' series?",
      options: ["A Feast for Crows", "A Storm of Swords", "A Game of Thrones", "A Dance with Dragons"],
      answer: "A Game of Thrones"
    },
    {
      question: "Which classic novel begins with the line 'Call me Ishmael'?",
      options: ["Moby Dick", "Great Expectations", "Pride and Prejudice", "War and Peace"],
      answer: "Moby Dick"
    },
    {
      question: "Who wrote '1984'?",
      options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Kurt Vonnegut"],
      answer: "George Orwell"
    },
  ],
  'Entertainment: Books-hard': [
    {
      question: "Which literary movement is associated with authors like Jack Kerouac and Allen Ginsberg?",
      options: ["Modernism", "Postmodernism", "Beat Generation", "Lost Generation"],
      answer: "Beat Generation"
    },
    {
      question: "What is the name of the fictional town in Gabriel Garcia Marquez's 'One Hundred Years of Solitude'?",
      options: ["Comala", "Macondo", "Santa María", "Yoknapatawpha"],
      answer: "Macondo"
    },
    {
      question: "Who wrote the philosophical novel 'Sophie's World'?",
      options: ["Umberto Eco", "Milan Kundera", "Jostein Gaarder", "Albert Camus"],
      answer: "Jostein Gaarder"
    },
    {
      question: "Which ancient Greek epic poem tells the story of Odysseus's journey home?",
      options: ["The Iliad", "The Odyssey", "The Aeneid", "Works and Days"],
      answer: "The Odyssey"
    },
    {
      question: "In what year was 'To Kill a Mockingbird' published?",
      options: ["1950", "1960", "1970", "1980"],
      answer: "1960"
    },
  ],
  'Entertainment: Film-easy': [
    {
      question: "Which movie features a character named 'Forrest Gump'?",
      options: ["Titanic", "The Shawshank Redemption", "Forrest Gump", "Pulp Fiction"],
      answer: "Forrest Gump"
    },
    {
      question: "Who directed the film 'Jurassic Park'?",
      options: ["James Cameron", "George Lucas", "Steven Spielberg", "Alfred Hitchcock"],
      answer: "Steven Spielberg"
    },
    {
      question: "What is the name of the main character in 'The Matrix'?",
      options: ["Morpheus", "Trinity", "Neo", "Agent Smith"],
      answer: "Neo"
    },
    {
      question: "Which animated film features a lion cub named Simba?",
      options: ["Aladdin", "The Little Mermaid", "The Lion King", "Frozen"],
      answer: "The Lion King"
    },
    {
      question: "Who played the role of Iron Man in the Marvel Cinematic Universe?",
      options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
      answer: "Robert Downey Jr."
    },
  ],
  'Entertainment: Film-medium': [
    {
      question: "Which film won the Academy Award for Best Picture in 2020?",
      options: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
      answer: "Parasite"
    },
    {
      question: "Who composed the iconic score for the 'Star Wars' saga?",
      options: ["Hans Zimmer", "Ennio Morricone", "John Williams", "Michael Giacchino"],
      answer: "John Williams"
    },
    {
      question: "In 'The Silence of the Lambs', what is Hannibal Lecter's profession?",
      options: ["Surgeon", "Psychiatrist", "Chef", "Lawyer"],
      answer: "Psychiatrist"
    },
    {
      question: "Which actor famously played James Bond in seven films?",
      options: ["Roger Moore", "Sean Connery", "Pierce Brosnan", "Daniel Craig"],
      answer: "Sean Connery"
    },
    {
      question: "What is the highest-grossing animated film of all time?",
      options: ["Frozen II", "Toy Story 4", "The Lion King (2019)", "Frozen"],
      answer: "The Lion King (2019)"
    },
  ],
  'Entertainment: Film-hard': [
    {
      question: "Which director is known for his signature long takes and surrealist themes, including films like 'Stalker' and 'Solaris'?",
      options: ["Ingmar Bergman", "Andrei Tarkovsky", "Akira Kurosawa", "Federico Fellini"],
      answer: "Andrei Tarkovsky"
    },
    {
      question: "What is the name of the ship in 'Alien'?",
      options: ["Nostromo", "Sulaco", "Prometheus", "Discovery One"],
      answer: "Nostromo"
    },
    {
      question: "Which film noir classic features the line 'Here's looking at you, kid'?",
      options: ["The Maltese Falcon", "Double Indemnity", "Casablanca", "Sunset Boulevard"],
      answer: "Casablanca"
    },
    {
      question: "Who won the Best Director Oscar for 'Nomadland'?",
      options: ["Emerald Fennell", "David Fincher", "Chloé Zhao", "Lee Isaac Chung"],
      answer: "Chloé Zhao"
    },
    {
      question: "Which actor has the most Academy Award nominations for acting?",
      options: ["Jack Nicholson", "Katharine Hepburn", "Meryl Streep", "Daniel Day-Lewis"],
      answer: "Meryl Streep"
    },
  ],
  'Entertainment: Music-easy': [
    {
      question: "Who is known as the 'King of Pop'?",
      options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
      answer: "Michael Jackson"
    },
    {
      question: "Which band sang 'Bohemian Rhapsody'?",
      options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
      answer: "Queen"
    },
    {
      question: "What instrument does Ed Sheeran primarily play?",
      options: ["Piano", "Drums", "Guitar", "Violin"],
      answer: "Guitar"
    },
    {
      question: "Which singer is famous for the hit song 'Hello'?",
      options: ["Beyoncé", "Rihanna", "Adele", "Taylor Swift"],
      answer: "Adele"
    },
    {
      question: "What is the name of Taylor Swift's first re-recorded album?",
      options: ["Fearless (Taylor's Version)", "Red (Taylor's Version)", "1989 (Taylor's Version)", "Speak Now (Taylor's Version)"],
      answer: "Fearless (Taylor's Version)"
    },
  ],
  'Entertainment: Music-medium': [
    {
      question: "Which legendary guitarist was known for his innovative use of feedback and the wah-wah pedal?",
      options: ["Eric Clapton", "Jimmy Page", "Jimi Hendrix", "Jeff Beck"],
      answer: "Jimi Hendrix"
    },
    {
      question: "What year did The Beatles officially break up?",
      options: ["1968", "1970", "1972", "1974"],
      answer: "1970"
    },
    {
      question: "Which classical composer wrote 'Für Elise'?",
      options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Frédéric Chopin"],
      answer: "Ludwig van Beethoven"
    },
    {
      question: "What is the stage name of Stefani Germanotta?",
      options: ["Madonna", "Lady Gaga", "Katy Perry", "Sia"],
      answer: "Lady Gaga"
    },
    {
      question: "Which album by Pink Floyd features a prism refracting light on its cover?",
      options: ["The Wall", "Wish You Were Here", "Animals", "The Dark Side of the Moon"],
      answer: "The Dark Side of the Moon"
    },
  ],
  'Entertainment: Music-hard': [
    {
      question: "Which jazz musician was known as 'Bird'?",
      options: ["Miles Davis", "John Coltrane", "Charlie Parker", "Louis Armstrong"],
      answer: "Charlie Parker"
    },
    {
      question: "What is the term for a musical composition for a solo instrument, often a piano, designed to showcase technical skill?",
      options: ["Sonata", "Concerto", "Etude", "Symphony"],
      answer: "Etude"
    },
    {
      question: "Which artist released the album 'Lemonade'?",
      options: ["Rihanna", "Adele", "Beyoncé", "SZA"],
      answer: "Beyoncé"
    },
    {
      question: "Which band is credited with pioneering the genre of 'grunge' music?",
      options: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"],
      answer: "Nirvana"
    },
    {
      question: "What is a 'leitmotif' in music?",
      options: ["A type of percussion instrument", "A recurring musical theme associated with a character, place, or idea", "A fast tempo", "A vocal improvisation technique"],
      answer: "A recurring musical theme associated with a character, place, or idea"
    },
  ],
  'Science & Nature-easy': [
    {
      question: "What is the process by which plants make their own food?",
      options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
      answer: "Photosynthesis"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Skin", "Liver"],
      answer: "Skin"
    },
    {
      question: "What force pulls objects towards the center of the Earth?",
      options: ["Magnetism", "Friction", "Gravity", "Tension"],
      answer: "Gravity"
    },
    {
      question: "Which animal lays the largest eggs?",
      options: ["Chicken", "Eagle", "Ostrich", "Penguin"],
      answer: "Ostrich"
    },
  ],
  'Science & Nature-medium': [
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      answer: "Diamond"
    },
    {
      question: "What is the name of the galaxy our solar system is in?",
      options: ["Andromeda", "Triangulum", "Whirlpool", "Milky Way"],
      answer: "Milky Way"
    },
    {
      question: "Which type of rock is formed from cooled and solidified magma or lava?",
      options: ["Sedimentary", "Metamorphic", "Igneous", "Basalt"],
      answer: "Igneous"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Fe", "Cu"],
      answer: "Au"
    },
    {
      question: "What is the process by which water vapor turns into liquid water?",
      options: ["Evaporation", "Condensation", "Precipitation", "Sublimation"],
      answer: "Condensation"
    },
  ],
  'Science & Nature-hard': [
    {
      question: "Which subatomic particle carries a negative electric charge?",
      options: ["Proton", "Neutron", "Electron", "Photon"],
      answer: "Electron"
    },
    {
      question: "What is the name of the theory that describes the universe as expanding from an extremely hot, dense state?",
      options: ["Steady State Theory", "Big Bang Theory", "Oscillating Universe Theory", "Multiverse Theory"],
      answer: "Big Bang Theory"
    },
    {
      question: "What is the largest known prime number (as of late 2023)?",
      options: ["2^82,589,933 - 1", "2^77,232,917 - 1", "2^74,207,281 - 1", "2^57,885,161 - 1"],
      answer: "2^82,589,933 - 1" // This is the current largest known Mersenne prime. It might change.
    },
    {
      question: "Which of the following is a noble gas?",
      options: ["Oxygen", "Nitrogen", "Argon", "Chlorine"],
      answer: "Argon"
    },
    {
      question: "What is the name of the process by which a star converts hydrogen into helium in its core?",
      options: ["Nuclear Fission", "Radioactive Decay", "Nuclear Fusion", "Combustion"],
      answer: "Nuclear Fusion"
    },
  ],
  'Science: Computers-easy': [
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Core Processing Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which of these is an input device?",
      options: ["Monitor", "Printer", "Keyboard", "Speaker"],
      answer: "Keyboard"
    },
    {
      question: "What is RAM short for?",
      options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Read Only Memory"],
      answer: "Random Access Memory"
    },
    {
      question: "What is the 'brain' of the computer?",
      options: ["Monitor", "CPU", "Hard Drive", "RAM"],
      answer: "CPU"
    },
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      answer: "Hyper Text Markup Language"
    },
  ],
  'Science: Computers-medium': [
    {
      question: "What is the primary function of an operating system?",
      options: ["To browse the internet", "To manage computer hardware and software resources", "To create documents", "To play games"],
      answer: "To manage computer hardware and software resources"
    },
    {
      question: "Which programming language is often used for artificial intelligence and machine learning?",
      options: ["Java", "C++", "Python", "JavaScript"],
      answer: "Python"
    },
    {
      question: "What does 'HTTP' stand for in web addresses?",
      options: ["HyperText Transfer Protocol", "High-Tech Transfer Program", "Home Tool Transfer Protocol", "Hyperlink Text Transfer Program"],
      answer: "HyperText Transfer Protocol"
    },
    {
      question: "What is a 'firewall' in computer security?",
      options: ["A type of virus", "A network security system that monitors and controls incoming and outgoing network traffic", "A program for deleting files", "A hardware component for faster processing"],
      answer: "A network security system that monitors and controls incoming and outgoing network traffic"
    },
    {
      question: "What is the process of converting a high-level programming language into machine code?",
      options: ["Debugging", "Compiling", "Executing", "Interpreting"],
      answer: "Compiling"
    },
  ],
  'Science: Computers-hard': [
    {
      question: "Which sorting algorithm has a worst-case time complexity of O(n log n)?",
      options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
      answer: "Merge Sort"
    },
    {
      question: "What is the purpose of a 'hash function' in computer science?",
      options: ["To encrypt data", "To compress files", "To map data of arbitrary size to data of a fixed size", "To create graphical interfaces"],
      answer: "To map data of arbitrary size to data of a fixed size"
    },
    {
      question: "In object-oriented programming, what is 'polymorphism'?",
      options: ["The ability of an object to take on many forms", "The process of hiding implementation details", "The creation of new classes from existing ones", "The binding of data and methods into a single unit"],
      answer: "The ability of an object to take on many forms"
    },
    {
      question: "What is the 'halting problem' in theoretical computer science?",
      options: ["A problem with computer shutdown", "The problem of determining, from a description of an arbitrary computer program and an arbitrary input, whether the program will finish running or continue to run forever", "A problem with network connectivity", "A problem with data storage capacity"],
      answer: "The problem of determining, from a description of an arbitrary computer program and an arbitrary input, whether the program will finish running or continue to run forever"
    },
    {
      question: "Which data structure uses LIFO (Last In, First Out) principle?",
      options: ["Queue", "Linked List", "Stack", "Tree"],
      answer: "Stack"
    },
  ],
  'Sports-easy': [
    {
      question: "How many players are on a soccer team?",
      options: ["9", "10", "11", "12"],
      answer: "11"
    },
    {
      question: "Which sport uses a shuttlecock?",
      options: ["Tennis", "Badminton", "Volleyball", "Squash"],
      answer: "Badminton"
    },
    {
      question: "What is the color of the five Olympic rings?",
      options: ["Red, Blue, Green, Yellow, Black", "Red, Blue, Green, Yellow, Orange", "Red, Blue, Green, Yellow, Purple", "Red, Blue, Green, Yellow, White"],
      answer: "Red, Blue, Green, Yellow, Black"
    },
    {
      question: "In which sport would you find a 'pitcher'?",
      options: ["Basketball", "Baseball", "Cricket", "Soccer"],
      answer: "Baseball"
    },
    {
      question: "Which country is famous for inventing the sport of Judo?",
      options: ["China", "Korea", "Japan", "Thailand"],
      answer: "Japan"
    },
  ],
  'Sports-medium': [
    {
      question: "How many points is a touchdown worth in American Football?",
      options: ["3", "6", "7", "1"],
      answer: "6"
    },
    {
      question: "Which country has won the most FIFA World Cups?",
      options: ["Germany", "Italy", "Brazil", "Argentina"],
      answer: "Brazil"
    },
    {
      question: "In tennis, what is it called when the score is 40-40?",
      options: ["Advantage", "Set point", "Game point", "Deuce"],
      answer: "Deuce"
    },
    {
      question: "Which famous boxer was known as 'The Greatest'?",
      options: ["Mike Tyson", "Muhammad Ali", "George Foreman", "Joe Frazier"],
      answer: "Muhammad Ali"
    },
    {
      question: "What is the maximum number of clubs allowed in a golf bag during a round?",
      options: ["10", "12", "14", "16"],
      answer: "14"
    },
  ],
  'Sports-hard': [
    {
      question: "Which city hosted the 2000 Summer Olympics?",
      options: ["Athens", "Sydney", "Beijing", "London"],
      answer: "Sydney"
    },
    {
      question: "In which year did the first modern Olympic Games take place?",
      options: ["1892", "1896", "1900", "1904"],
      answer: "1896"
    },
    {
      question: "Who is the only tennis player to have won all four Grand Slams and an Olympic gold medal in singles (Golden Slam)?",
      options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Steffi Graf"],
      answer: "Steffi Graf"
    },
    {
      question: "Which Formula 1 driver has won the most World Championships?",
      options: ["Juan Manuel Fangio", "Lewis Hamilton", "Michael Schumacher", "Ayrton Senna"],
      answer: "Michael Schumacher"
    },
    {
      question: "What is the traditional distance of a marathon in miles and yards?",
      options: ["26 miles 385 yards", "26 miles 285 yards", "26 miles 485 yards", "26 miles 185 yards"],
      answer: "26 miles 385 yards"
    },
  ],
  'Geography-easy': [
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      answer: "Tokyo"
    },
    {
      question: "Which continent is the Sahara Desert located on?",
      options: ["Asia", "Africa", "South America", "Australia"],
      answer: "Africa"
    },
    {
      question: "What is the largest island in the world?",
      options: ["Madagascar", "Borneo", "Greenland", "New Guinea"],
      answer: "Greenland"
    },
    {
      question: "Which ocean is the largest and deepest?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "What is the longest mountain range in the world?",
      options: ["Himalayas", "Andes", "Rockies", "Alps"],
      answer: "Andes"
    },
  ],
  'Geography-medium': [
    {
      question: "Which river flows through London?",
      options: ["Seine", "Thames", "Danube", "Rhine"],
      answer: "Thames"
    },
    {
      question: "What is the name of the narrow strip of land connecting North and South America?",
      options: ["Suez Canal", "Panama Isthmus", "Bering Strait", "Gibraltar Strait"],
      answer: "Panama Isthmus"
    },
    {
      question: "Which desert is the largest hot desert in the world?",
      options: ["Gobi Desert", "Kalahari Desert", "Arabian Desert", "Sahara Desert"],
      answer: "Sahara Desert"
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra"
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "South Korea", "Japan", "Vietnam"],
      answer: "Japan"
    },
  ],
  'Geography-hard': [
    {
      question: "What is the only country in the world that borders exactly two other countries and is also a landlocked country?",
      options: ["Mongolia", "Nepal", "Bhutan", "Liechtenstein"],
      answer: "Liechtenstein"
    },
    {
      question: "Which of the following is the highest active volcano in Europe?",
      options: ["Mount Vesuvius", "Mount Etna", "Stromboli", "Mount Fuji"],
      answer: "Mount Etna"
    },
    {
      question: "What is the name of the strait that separates Europe from Africa?",
      options: ["Bosphorus Strait", "Strait of Hormuz", "Strait of Gibraltar", "Dover Strait"],
      answer: "Strait of Gibraltar"
    },
    {
      question: "Which city is located on two continents?",
      options: ["Cairo", "Istanbul", "Moscow", "Rome"],
      answer: "Istanbul"
    },
    {
      question: "What is the name of the largest freshwater lake by volume in the world?",
      options: ["Lake Superior", "Lake Victoria", "Lake Baikal", "Great Slave Lake"],
      answer: "Lake Baikal"
    },
  ],
  'History-easy': [
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
      answer: "George Washington"
    },
    {
      question: "In which year did World War II end?",
      options: ["1939", "1942", "1945", "1950"],
      answer: "1945"
    },
    {
      question: "Which ancient civilization built the pyramids?",
      options: ["Roman", "Greek", "Egyptian", "Mayan"],
      answer: "Egyptian"
    },
    {
      question: "Who discovered America in 1492?",
      options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Marco Polo"],
      answer: "Christopher Columbus"
    },
    {
      question: "What was the name of the ship that sank in 1912?",
      options: ["Lusitania", "Britannic", "Titanic", "Queen Mary"],
      answer: "Titanic"
    },
  ],
  'History-medium': [
    {
      question: "Who was the Roman emperor who made Christianity the state religion?",
      options: ["Augustus", "Nero", "Constantine the Great", "Diocletian"],
      answer: "Constantine the Great"
    },
    {
      question: "The 'Cold War' was primarily a geopolitical tension between which two superpowers?",
      options: ["USA and China", "USA and Soviet Union", "UK and Germany", "France and Russia"],
      answer: "USA and Soviet Union"
    },
    {
      question: "What was the primary cause of the Opium Wars in China?",
      options: ["Territorial disputes", "Trade imbalances and the opium trade", "Religious conflicts", "Dynastic succession"],
      answer: "Trade imbalances and the opium trade"
    },
    {
      question: "Who wrote 'The Prince'?",
      options: ["Niccolò Machiavelli", "Thomas More", "Erasmus", "John Locke"],
      answer: "Niccolò Machiavelli"
    },
    {
      question: "The Magna Carta was signed in what year?",
      options: ["1066", "1215", "1492", "1776"],
      answer: "1215"
    },
  ],
  'History-hard': [
    {
      question: "Which ancient battle saw the Spartan 300 fight against the Persian army?",
      options: ["Battle of Marathon", "Battle of Thermopylae", "Battle of Salamis", "Battle of Plataea"],
      answer: "Battle of Thermopylae"
    },
    {
      question: "Who was the last pharaoh of ancient Egypt?",
      options: ["Hatshepsut", "Nefertiti", "Cleopatra VII", "Tutankhamun"],
      answer: "Cleopatra VII"
    },
    {
      question: "The 'Reign of Terror' was a period during which revolution?",
      options: ["American Revolution", "Russian Revolution", "French Revolution", "Glorious Revolution"],
      answer: "French Revolution"
    },
    {
      question: "What was the name of the treaty that officially ended World War I?",
      options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Trianon", "Treaty of Brest-Litovsk"],
      answer: "Treaty of Versailles"
    },
    {
      question: "Who led the Protestant Reformation?",
      options: ["John Calvin", "Henry VIII", "Martin Luther", "Ulrich Zwingli"],
      answer: "Martin Luther"
    },
  ],
};
