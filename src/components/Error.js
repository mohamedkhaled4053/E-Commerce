import React from 'react';
const Error = ({page}) => {
  return (
    <div className={`section section-center text-center ${page && 'page'}`}>
      <h2>there was an error...</h2>
    </div>
  );
};

export default Error;
