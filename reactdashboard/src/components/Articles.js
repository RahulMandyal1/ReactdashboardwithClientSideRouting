import React from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles.json";
export default function Articles() {
  return (
    <div className="container">
      {articles.map((article, index) => {
        return (
          <article key={index} className="article">
            <h2 className="article-heading">
              <Link to={"singlearticle/" + article.slug}>{article.title}</Link>
            </h2>
            <p>{article.author}</p>
          </article>
        );
      })}
    </div>
  );
}
