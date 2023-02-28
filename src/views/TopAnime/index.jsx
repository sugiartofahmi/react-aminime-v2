import ContentLayout from "../../layouts/ContentLayout";
import GridLayout from "../../layouts/GridLayout";
import Card from "../../components/Card";
import { animeFetch, queryState } from "../../store";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
const TopAnime = () => {
  const anime = useRecoilValue(animeFetch);
  const [query, setQuery] = useRecoilState(queryState);
  useEffect(() => {
    setQuery("top/anime");
  });

  return (
    <GridLayout>
      {anime.data.map((el, i) => (
        <Card
          key={i}
          title={el.title}
          image={el.images.webp.image_url}
          episode={el.episodes}
          type={el.type}
          aired={el.aired.string}
          score={el.score}
        />
      ))}
    </GridLayout>
  );
};

export default TopAnime;
