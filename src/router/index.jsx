import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const TopAnime = lazy(() => import("../views/TopAnime"));
const Home = lazy(() => import("../views/Home"));
const ThisSeason = lazy(() => import("../views/ThisSeason"));
const AnimeDetail = lazy(() => import("../views/AnimeDetail"));
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top-anime">
        <Route index element={<TopAnime />} />
        <Route path=":id" element={<AnimeDetail />} />
      </Route>
      <Route path="/this-season">
        <Route index element={<ThisSeason />} />
        <Route path=":id" element={<AnimeDetail />} />
      </Route>
    </Routes>
  );
};

export default Router;
