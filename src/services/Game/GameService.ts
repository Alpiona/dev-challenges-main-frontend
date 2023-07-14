import client from "@/client/api";
import {
  BuyGameData,
  BuyGameParams,
  CreateGameData,
  CreateGameParams,
  GetGamesListData,
  GetGamesListParams,
  GetGenresData,
  GetOneGameData,
  GetOneGameParams,
} from "./GameType";

const createGame = (data: CreateGameParams, token?: string) =>
  client.post<CreateGameData>("/api/games", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

const getGamesList = async (data: GetGamesListParams, token?: string) =>
  client.get<GetGamesListData>("/api/games", {
    params: data,
    headers: { Authorization: `Bearer ${token}` },
  });

const getOneGame = async (
  { platformUrlPath }: GetOneGameParams,
  token?: string
) =>
  client.get<GetOneGameData>(`/api/games/${platformUrlPath}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

const getGenres = async () => client.get<GetGenresData>(`/api/games/genres`);

const buyGame = async (data: BuyGameParams, token?: string) =>
  client.post<BuyGameData>(`/api/games/get-game`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const GameService = {
  createGame,
  getGamesList,
  getOneGame,
  getGenres,
  buyGame,
};
