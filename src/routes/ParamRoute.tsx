import React from 'react';
import { useParams } from 'react-router-dom';

const ParamRoute = () =>
{
  const { param } = useParams();
  
  return (<div>parameter {param}</div>);
};

export default ParamRoute;