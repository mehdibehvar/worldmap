import React, { useReducer, useEffect } from "react";
import Info from "./info/info";
import Summary from "./summary/summary";
import WordMap from "./wordmap";
import Loading from "../loading/loading";
import wiki, { intro } from "wikipedia";
import Article from "./Article";
const initialState = {
  selectedcountry: "ایران",
  summary: "",
  info: "",
  loading: true,
  error: false,
  article:""
};
function reducer(state, action) {
  switch (action.type) {
    case "Get-Page-Success":
      return {
        ...state,
        summary: action.payload.summary,
        info: action.payload.info,
        loading: false,
        article:action.payload.article
      };
    case "Change-Country":
      return { ...state, selectedcountry: action.payload.name };
    case "Fire-Error":
      return { ...state, error: true };
    case "Loading":
      return { ...state, loading: true };
    default:
      break;
  }
}

export default function WikiPedia() {
  const [{ selectedcountry, summary, info, loading, error,article }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "Loading" });
      try {
        wiki.setLang("fa");
        const page = await wiki.page(selectedcountry);
        const [summary, info,intro] = await Promise.all([
          page.summary({ redirect: false }),
          page.infobox({ redirect: false }),
          page.intro({redirect: false})
        ]);
        dispatch({
          type: "Get-Page-Success",
          payload: {
            summary: summary,
            info: info,
            article:intro
          },
        });
      } catch (error) {
        dispatch({
          type: "Fire-Error",
        });
      }
    }
    fetchData();
  }, [selectedcountry]);

  function changeCountry(name) {
    dispatch({
      type: "Change-Country",
      payload: {
        name: name,
      },
    });
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-md-9">
          <WordMap changeCountry={changeCountry} />
        </div>
        <div className="col-12 col-md-3">
          {info ? (
            <Info
              loading={loading}
              flag={summary.originalimage.source}
              info={info}
            />
          ) : (
            <h5 className="info-errror">"there is no info"</h5>
          )}
        </div>
      </div>
      {!error ? (
        <div className="row mt-2 mb-3">
          <div className="mx-2">
            <h3 className="mb-0">خلاصه:</h3>
            {loading ? <Loading /> : <Summary content={summary.extract} />}
            <Article article={article}/>
          </div>
        </div>
      ) : (
        <h3 className="article-errror">"An error occurred in your page"</h3>
      )}
    </div>
  );
}
