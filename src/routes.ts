import { Request, Response } from 'express';
import { app } from './services/app.service';
import { getPoemsList } from "./controllers/get-poems-list";
import { getAuthorList } from "./controllers/get-authors-list/get-authors-list";
import { getPoemsItem } from "./controllers/get-poems-item";
import { getRandomPoemsList } from "./controllers/get-authors-list/get-random-poems-list";

export function initRoutesPoems(): void {

  /** получить все стихи */
  app.post('/poems', (req: Request, res: Response) => {
    getPoemsList(req, res);
  });

  /** получить всех авторов */
  app.post('/authors', (req: Request, res: Response) => {
    getAuthorList(req, res);
  });

  /** получить конкретное стихотворение */
  app.get('/poem/:url', (req: Request, res: Response) => {
    getPoemsItem(req, res);
  });

  /** получить конкретное стихотворение */
  app.get('/random-poems/:length', (req: Request, res: Response) => {
    getRandomPoemsList(req, res);
  });
}
