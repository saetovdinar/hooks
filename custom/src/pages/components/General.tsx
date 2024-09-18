import React from 'react';
import ErrorReq from './ErrorReq';
import LoadingReq from './LoadingReq';
import SuccessReq from './SuccessReq';


export default function General() {
  


  return (
    <>
      <ErrorReq></ErrorReq>
      <LoadingReq></LoadingReq>
      <SuccessReq></SuccessReq>
    </>
  );
}