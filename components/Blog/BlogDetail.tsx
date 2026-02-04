import React from 'react';
import SideBar from './SideBar';

const ReadBlog = () => {
  return (
    <div className="items-left">
      <p>Blog Detail Page</p>
    </div>
  );
};

export default function BlogDetail() {
  return (
    <div className="wrapper m-auto">
      <div className="grid grid-cols-1 md:grid-cols-[78%_20%] gap-[2%]">
        <ReadBlog />
        <SideBar />
      </div>
    </div>
  );
}
