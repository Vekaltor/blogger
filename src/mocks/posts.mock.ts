export const posts = [
  {
    id: 1,
    title: 'Przepis na pyszne ciasto czekoladowe',
    author: 'Anna Kowalska',
    idAuthor: 101,
    description:
      'Próbowałeś kiedyś przyrządzić idealne ciasto czekoladowe? To przepis, który musisz wypróbować! Ciasto jest wilgotne, czekoladowe i po prostu pyszne.',
    html: `
     <p>Składniki:</p>
     <ul>
       <li>200g mąki</li>
       <li>150g cukru</li>
       <li>50g kakao</li>
       <li>1 łyżeczka proszku do pieczenia</li>
       <li>150ml mleka</li>
       <li>100g masła</li>
       <li>2 jajka</li>
     </ul>
     <p>Przygotowanie:</p>
     <ol>
       <li>Wymieszaj mąkę, cukier, kakao i proszek do pieczenia w misce.</li>
       <li>Rozpuść masło, dodaj mleko i jajka, wymieszaj.</li>
       <li>Połącz zawartości obu misek, mieszaj delikatnie do uzyskania jednolitego ciasta.</li>
       <li>Wlej ciasto do formy i piecz w piekarniku nagrzanym do 180 stopni przez 30-35 minut.</li>
     </ol>
     <p>Smacznego!</p>
   `,
    image: 'ścieżka/do/zdjęcia.jpg',
    createdAt: '2023-01-15T12:30:00',
    modified: ['2023-01-16T10:15:00', '2023-01-18T08:45:00'],
    tags: ['cooking', 'dessert'],
    likes: 25,
    comments: [
      {
        id: 1,
        idPost: 1,
        idAuthor: 201,
        name: 'Jan',
        surname: 'Nowak',
        description: 'Bardzo smaczne ciasto! Dziękuję za przepis.',
        createdAt: '2023-01-15T14:05:00',
        likes: 7,
      },
      {
        id: 2,
        idPost: 1,
        idAuthor: 202,
        name: 'Maria',
        surname: 'Kowalska',
        description:
          'Dodałam trochę więcej kakao i jest rewelacyjne! Dzięki za inspirację.',
        createdAt: '2023-01-16T09:30:00',
        likes: 12,
      },
    ],
  },
  {
    id: 2,
    title: 'Domowe Burgery na Grillu',
    author: 'Piotr Nowak',
    idAuthor: 102,
    description:
      'Spróbuj tego przepisu na domowe burgery na grillu. Sałata, pomidor, ketchup, mięso i bułka - wszystko, czego potrzebujesz do idealnego burgera!',
    html: `
     <p>Składniki:</p>
     <ul>
       <li>500g mięsa mielonego (najlepiej wołowego)</li>
       <li>4 bułki do hamburgerów</li>
       <li>1 pomidor</li>
       <li>Świeża sałata</li>
       <li>Ketchup, musztarda, majonez</li>
       <li>Sól, pieprz, przyprawy do mięsa</li>
     </ul>
     <p>Przygotowanie:</p>
     <ol>
       <li>Formuj kotlety mięsne i przypraw je według uznania.</li>
       <li>Grilluj kotlety na rozgrzanym grillu przez około 4-5 minut z każdej strony.</li>
       <li>Podgrzej bułki na grillu.</li>
       <li>Ułóż burgera: spód bułki, sałata, kotlet, plastry pomidora, ketchup, musztarda, majonez, górna część bułki.</li>
     </ol>
     <p>Smacznego!</p>
   `,
    image: 'ścieżka/do/zdjęcia2.jpg',
    createdAt: '2023-02-10T15:45:00',
    modified: ['2023-02-12T09:20:00', '2023-02-15T12:35:00'],
    tags: ['cooking', 'grill'],
    likes: 15,
    comments: [
      {
        id: 1,
        idPost: 2,
        idAuthor: 201,
        name: 'Jan',
        surname: 'Nowak',
        description: 'Najlepsze burgery, jakie kiedykolwiek jadłem!',
        createdAt: '2023-02-10T17:00:00',
        likes: 5,
      },
      {
        id: 2,
        idPost: 2,
        idAuthor: 203,
        name: 'Karolina',
        surname: 'Kowalczyk',
        description: 'Dodaj trochę pikantnego sosu, jeszcze lepiej smakuje!',
        createdAt: '2023-02-11T10:30:00',
        likes: 8,
      },
    ],
  },
  // Dodaj tutaj kolejne posty
  {
    id: 3,
    title: 'Najlepsze danie wegetariańskie',
    author: 'Marta Wiśniewska',
    idAuthor: 103,
    description:
      'Spróbuj tego przepisu na smaczne danie wegetariańskie. Idealne dla miłośników warzyw i zdrowego stylu życia.',
    html: `
     <!-- Zawartość HTML dla dania wegetariańskiego -->
   `,
    image: 'ścieżka/do/zdjęcia3.jpg',
    createdAt: '2023-03-05T09:30:00',
    modified: ['2023-03-06T11:45:00'],
    tags: ['cooking', 'vegetarian'],
    likes: 30,
    comments: [
      // Komentarze dla dania wegetariańskiego
    ],
  },
  {
    id: 4,
    title: 'Szybki deser truskawkowy',
    author: 'Adam Czarnecki',
    idAuthor: 104,
    description:
      'Przygotuj pyszny deser truskawkowy w kilka minut! Idealny na letnie dni.',
    html: `
     <!-- Zawartość HTML dla deseru truskawkowego -->
   `,
    image: 'ścieżka/do/zdjęcia4.jpg',
    createdAt: '2023-04-18T18:15:00',
    modified: [],
    tags: ['cooking', 'dessert'],
    likes: 18,
    comments: [
      // Komentarze dla deseru truskawkowego
    ],
  },
  {
    id: 5,
    title: 'Porady dla początkujących programistów',
    author: 'Tomasz Nowak',
    idAuthor: 105,
    description:
      'Jeśli jesteś początkującym programistą, te porady pomogą Ci w rozwoju i zdobywaniu umiejętności.',
    html: `
     <!-- Zawartość HTML dla porad programistycznych -->
   `,
    image: 'ścieżka/do/zdjęcia5.jpg',
    createdAt: '2023-05-22T14:00:00',
    modified: [],
    tags: ['programming'],
    likes: 12,
    comments: [
      // Komentarze dla porad programistycznych
    ],
  },
];
