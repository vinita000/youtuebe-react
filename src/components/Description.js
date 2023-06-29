import React from 'react';

const Description = ({ description }) => {
  const processedDescription = description?.split(" ").map((word, index) => {
    if (word.startsWith("http") || word.startsWith("www")) {
      return (
        <React.Fragment key={index}>
          <a href={word} className="break-all underline text-blue-600 hover:text-blue-800 visited:text-purple-600">{word}</a>
          <br />
        </React.Fragment>
      );
    }
    return word + ' ';
  });

  return (
   
      <h1>{processedDescription}</h1>
   
  );
};

export default Description;
