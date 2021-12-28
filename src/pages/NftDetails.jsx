import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from "../components/util/Loader.jsx";
// import {  useSearchParams } from "react-router-dom";

export function NftDetails() {

  return (
    <div className='nft-details-page'>
        <div className='nft-details-main'>
            <Loader />;
        </div>
    </div>
  );
}
