import React from "react";

interface Props {
  className?: string;
}

export const Loading: React.FC<Props> = ({ className }) => {
  return <div className={className}>Loading...</div>;
};
