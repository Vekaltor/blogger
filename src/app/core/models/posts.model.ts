export interface Comment {
  id: number;
  idPost: number;
  idAuthor: number;
  name: string;
  surname: string;
  description: string;
  createdAt: string;
  likes: number;
}

export interface Post {
  id: number;
  title: string;
  author: string;
  idAuthor: number;
  description: string;
  html: string;
  image: string;
  createdAt: string;
  modified: string[];
  tags: string[];
  likes: number;
  comments: Comment[];
}
