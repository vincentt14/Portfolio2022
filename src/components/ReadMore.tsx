import React, { useState } from "react";

interface IReadMore {
  children: any;
}

const ReadMore: React.FC<IReadMore> = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="font-medium font-mono text-base text-slate-500">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="text-secondary cursor-pointer hover:text-primary">{isReadMore ? "...read more" : " show less"}</span>
    </p>
  );
};

export default ReadMore;
