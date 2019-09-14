// Dependencies
import React from "react";

const iconSearch = ({ width, height, color }) => {
  return (
    <svg
      width={width ? width : "22px"}
      height={height ? height : "22px"}
      viewBox="0 0 22 22"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M17.6002654,8.78162143 C17.6002654,13.631285 13.6598189,17.5632429 8.80026167,17.5632429 C3.94038198,17.5632429 -1.77635684e-14,13.631285 -1.77635684e-14,8.78162143 C-1.77635684e-14,3.93215094 3.94038198,3.55271368e-15 8.80026167,3.55271368e-15 C13.6598189,3.55271368e-15 17.6002654,3.93215094 17.6002654,8.78162143 Z M8.80026167,15.3677249 C12.4396257,15.3677249 15.4001516,12.4136406 15.4001516,8.78187884 C15.4001516,5.14979532 12.4396257,2.19545362 8.80026167,2.19545362 C5.16057522,2.19545362 2.20004929,5.14979532 2.20004929,8.78187884 C2.20004929,12.4136406 5.16057522,15.3677249 8.80026167,15.3677249 Z"
          id="Combined-Shape"
          fill={color ? color : "#3E3E40"}
        ></path>
        <path
          d="M21.3552102,18.2526 L15.9717089,12.8798294 C15.1693812,14.1245654 14.1078866,15.1835853 12.860287,15.9839796 L18.2445622,21.3567502 C19.104024,22.2144166 20.4974896,22.2144166 21.3552102,21.3567502 C22.2149299,20.5008212 22.2149299,19.110009 21.3552102,18.2526 Z"
          id="path"
          fill={color ? color : "#3E3E40"}
        ></path>
      </g>
    </svg>
  );
};

export default iconSearch;
