export type Game = {
  id: string;
  genres: Genre[];
  title: string;
  description: string;
  projectUrl?: string;
  coverImage: string;
  coverImageUrl: string;
  platformUrlPath: string;
  tagline?: string;
  price: number;
  status: string;
  authorUsername?: string;
  images: Array<{ url: string }>;
  builds: Build[];
  createdAt: string;
  updatedAt: string;
  hasBought: boolean;
};

export type Build = {
  url: string;
  version: string;
  operatingSystem: string;
  size: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type CreateGameParams = {
  genresIds: number[];
  title: string;
  description: string;
  price: number;
  projectUrl?: string;
  tagline?: string;
  status: string;
  coverImage: string;
  images: string[];
  builds: string[];
};

export type CreateGameData = Game;

export type GetGamesListParams = {
  hasBought?: boolean;
  maxPrice?: string;
  onSale?: boolean;
  createdAt?: string;
  genre?: string;
  operatingSystem?: string;
};

export type GetGamesListData = Game[];

export type GetOneGameParams = {
  platformUrlPath: string;
};

export type GetOneGameData = Game;

export type GetGenresParams = void;

export type GetGenresData = Genre[];

export type BuyGameParams = { gameId: string };

export type BuyGameData = void;
