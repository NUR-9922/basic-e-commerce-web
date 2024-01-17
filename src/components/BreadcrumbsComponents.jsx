import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link from your routing library

const BreadcrumbsComponent = () => {
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter((x) => x)
  console.log(pathNames);
  return (
    <div className='flex text-base gap-2 text-[#929292] '>
      <Link className='text-primary hover:tracking-widest duration-700' to={'/'} >
        Home
      </Link>
      /
      {pathNames.map((name, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathNames.length - 1;
        console.log(isLast);
          return isLast ? (
          <p key={index}>/  {name}</p>
        ) : (
          <Link className='text-primary hover:tracking-widest duration-700' key={index} to={routeTo}>
            {name}
          </Link>
        );
      })}
    </div >
  );
};

export default BreadcrumbsComponent;
