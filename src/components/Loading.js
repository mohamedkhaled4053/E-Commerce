import React from 'react';

const Loading = ({ page }) => {
  return (
    <div className={`section section-center ${page && 'page-100'}`}>
      <div className="loading"></div>
    </div>
  );
};

export default Loading;
