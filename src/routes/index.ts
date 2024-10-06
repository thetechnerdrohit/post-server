import { Router } from "express";
import PostRouter from "./post.route";

const router = Router();

interface IRoute {
  path: string;
  router: Router;
}

const routes: IRoute[] = [
  {
    path: "/post",
    router: PostRouter,
  },
  {
    path: "/user",
    router: PostRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.router);
});

export default router;

