'use client';
import React from 'react';
import Image from 'next/image';
import data from "@/lib/constblog.json"
import { SearchQuery_data } from '@/Redux-store/Redux-action';
import { useSelector } from 'react-redux';

interface Blog {
  title: string;
  image: string;
  url: string;
  intro: string;
}

const Blogpagebody: React.FC = () => {
  const Search_query = useSelector(SearchQuery_data);
  const isSearching = Search_query.trim() !== '';
  let filteredData: Blog[] = data;

  if (isSearching) {
    filteredData = data.filter((blog: Blog) =>
      blog.title.toLowerCase().includes(Search_query.toLowerCase()),
    );
  }
  return (
    <div className="pt-6 mt-20 md:mt-12 pb-24 fadeIn p-4 md:p-24 flex flex-wrap justify-center gap-5">
      {filteredData.length === 0 ? (
        <p className="text-white text-center">No relevant posts found.</p>
      ) : (
        filteredData.map((blog: Blog) => (
          <div
            key={blog.title}
            className="max-w-sm rounded-lg shadow-lg border bg-white hover:bg-slate-200 border-[#401f788e] flex flex-col"
          >
            <Image
              width={382}
              height={300}
              className="rounded-t-lg"
              src={blog.image}
              alt={blog.title}
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <a href={blog.url}>
                <h5 className=" font-bold text-[18px] mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </a>
              <p className=" text-[16px] text-gray-400 mb-3 font-normal ">
                {blog.intro.slice(0, 199) + '...'}
              </p>
              <a
                href={blog.url}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogpagebody;
