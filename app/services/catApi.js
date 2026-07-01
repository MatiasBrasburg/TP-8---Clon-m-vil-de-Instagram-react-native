import axios from 'axios';
import mockComments from '../data/mockComments';
import mockUsers from '../data/mockUsers';

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

const captions = [
  'Domingo de siesta, luz natural y cero preocupaciones.',
  'Modo explorador activado.',
  'Retrato felino con actitud de portada.',
  'Un poco de ternura para cortar el scroll.',
  'La vida se ve mejor desde la ventana.',
];

const fallbackImages = Array.from({ length: 12 }, (_, index) => ({
  id: `fallback-${index + 1}`,
  url: `https://placecats.com/${700 + index}/${700 + index}`,
}));

function buildPost(cat, index) {
  const user = mockUsers[index % mockUsers.length];

  return {
    id: cat.id ?? `cat-${index}`,
    imageUrl: cat.url,
    username: user.username,
    avatar: user.avatar,
    location: user.location,
    likes: 180 + index * 37,
    caption: captions[index % captions.length],
    comments: buildComments(cat.id ?? index),
  };
}

function buildComments(postId) {
  const comments = [];

  mockComments.forEach((comment, commentIndex) => {
    comments.push({
      ...comment,
      id: `${postId}-${commentIndex}`,
    });
  });

  return comments;
}

export async function fetchCatPosts(limit = 12) {
  try {
    const response = await axios.get(CAT_API_URL, {
      params: {
        limit,
        has_breeds: 0,
      },
    });

    const posts = [];

    response.data.forEach((cat, index) => {
      posts.push(buildPost(cat, index));
    });

    return posts;
  } catch (error) {
    const posts = [];

    fallbackImages.slice(0, limit).forEach((cat, index) => {
      posts.push(buildPost(cat, index));
    });

    return posts;
  }
}
