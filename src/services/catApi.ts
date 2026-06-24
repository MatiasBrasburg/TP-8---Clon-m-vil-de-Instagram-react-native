import axios from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Post {
  id: string;
  imageUrl: string;
  username: string;
  avatar: string;
  location: string;
  likes: number;
  caption: string;
  comments: number;
}

const usernames = [
  '@gato_lover_01', '@gato_lover_02', '@gato_lover_03',
  '@gato_lover_04', '@gato_lover_05', '@gato_lover_06',
  '@gato_lover_07', '@gato_lover_08', '@gato_lover_09',
  '@gato_lover_10', '@gato_lover_11', '@gato_lover_12',
];

const locations = [
  'Buenos Aires, Argentina', 'Santiago, Chile', 'Lima, Perú',
  'Ciudad de México', 'Madrid, España', 'Bogotá, Colombia',
  'São Paulo, Brasil', 'Montevideo, Uruguay', 'La Paz, Bolivia',
  'Quito, Ecuador', 'Asunción, Paraguay', 'Caracas, Venezuela',
];

const captions = [
  '¡Miren este hermoso gatito! 🐱',
  'Un día soleado con mi mascota ☀️',
  'La vida es mejor con gatos ❤️',
  'Nuevo amigo en casa 🏠',
  'Momento de siesta 😴',
  'Jugando todo el día 🧶',
  'Mi compañero fiel 🐈',
  'Explorando el mundo 🌍',
  'Amor de cuatro patas 🐾',
  'Foto grupal de la familia 🐱🐱',
  'Aventuras gatunas 🎯',
  'Cazando mariposas 🦋',
];

export async function fetchPosts(limit: number = 12): Promise<Post[]> {
  const response = await axios.get<CatImage[]>(`${CAT_API_URL}?limit=${limit}`);
  return response.data.map((cat, index) => ({
    id: cat.id,
    imageUrl: cat.url,
    username: usernames[index % usernames.length],
    avatar: `https://placedog.net/${200 + index}/200`,
    location: locations[index % locations.length],
    likes: Math.floor(Math.random() * 5000) + 100,
    caption: captions[index % captions.length],
    comments: Math.floor(Math.random() * 100) + 5,
  }));
}
