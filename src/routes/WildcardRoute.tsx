import React from 'react';
import { useParams } from 'react-router-dom';

const WildcardRoute = () =>
{
  const param = useParams()["*"]?.split("/") ?? [];

  console.log(param);

  return (<div>parameter {param}</div>);
};

export default WildcardRoute;