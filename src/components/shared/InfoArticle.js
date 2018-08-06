import React from 'react';

export default function InfoArticle({
  iconclassName = null,
  header = null,
  text = null,
}) {
  return(
    <article className="info-article module">
      { iconclassName && <i className={iconclassName} /> }
      { header && 
        <header className="heading">
          {header}
        </header>
      }
      { text &&
        <p className="text">
          {text}
        </p>
      }
    </article>
  );
}