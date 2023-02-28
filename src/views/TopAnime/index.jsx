import GridLayout from "../../layouts/GridLayout";
import Card from "../../components/Card";
import { animeFetch, queryState, pageState } from "../../store";
import { useRecoilState, useRecoilValue } from "recoil";
import { Fragment, useEffect } from "react";
import { TfiControlForward, TfiControlBackward } from "react-icons/tfi";
import { useSearchParams } from "react-router-dom";
const TopAnime = () => {
  const anime = useRecoilValue(animeFetch);
  const [query, setQuery] = useRecoilState(queryState);
  useEffect(() => {
    setQuery("top/anime");
  });
  const [searchParams, setSearchParams] = useSearchParams();
  let currentPage = searchParams.get("page");

  if (currentPage === null) {
    currentPage = 1;
  }
  const moveTo = (direction) => {
    if (direction === "prev") {
      setSearchParams({ page: parseInt(currentPage) - 1 });
    } else if (direction === "next") {
      setSearchParams({ page: parseInt(currentPage) + 1 });
    }
  };
  return (
    <Fragment>
      <div className="flex flex-row gap-x-5 pt-5">
        <TfiControlBackward
          disabled={currentPage == 1 ? true : false}
          onClick={() => moveTo("prev")}
          size={30}
        />
        <TfiControlForward onClick={() => moveTo("next")} size={30} />
      </div>
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
    </Fragment>
  );
};

export default TopAnime;
