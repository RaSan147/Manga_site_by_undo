import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import Header from "../../components/header/Header";
import Loading from "../../components/loading/Loading";
import { apiBase } from "../../hooks/useApi";
import { MangaInfo } from "../../types";
import cm from "../../utils/classMerger";
import classes from "./search.module.scss";
import SearchResults from "./SearchResults/SearchResults";
import Helmet from "react-helmet";

type Props = {};

export default function Search(props: Props) {
  const ctx = useContext(AppContext);
  const [query] = ctx.searchQuery ?? ["sup"];
  const shown = !!query;
  const ref = useRef(null);

  const { isLoading, error, data } = useQuery<{
    hits: {
      title: string;
      description: string;
      info: MangaInfo;
      vendor: MangaInfo["vendor"];
    }[];
  }>(
    ["query", query],
    () =>
      fetch(`${apiBase}/search/${encodeURIComponent(query)}`).then(res =>
        res.json(),
      ),
    {
      enabled: !!query,
    },
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!ref.current) return;
      if (query) {
        clearAllBodyScrollLocks();
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }, 0);
    return () => clearTimeout(timeout);
  }, [query, ref]);

  const content = (() => {
    if (isLoading)
      return (
        <>
          <div className={classes.loading}>
            <Header level={2}>One moment...</Header>
            <div>
              <Loading />
            </div>
          </div>
        </>
      );
    else if (error)
      return (
        <>
          <div className={classes.loading}>
            <Header level={2}>Something went wrong while searching</Header>
            <div>{(error as any)?.message}</div>
            <p>Please try again in a few minutes</p>
          </div>
        </>
      );
    else if (data?.hits?.length) {
      return <SearchResults data={data.hits} query={query} />;
    } else {
      return (
        <>
          <div className={classes.loading}>
            <Header level={2}>No results for "{query}"</Header>
          </div>
        </>
      );
    }
  })();

  useEffect(() => {}, []);

  return (
    <>
      {shown && (
        <Helmet>
          <title>{query.slice(0, 50)} | Search results on Atsumaru</title>
        </Helmet>
      )}
      <div ref={ref} className={cm(classes.search, shown && classes.shown)}>
        <div className={classes.inner}>{content}</div>
      </div>
    </>
  );
}
