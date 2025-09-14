import React from "react";
import Title from "./Title";
import { getLatestBlogs } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import dayjs from "dayjs";

const LatestBlog = async () => {
  const blogs = (await getLatestBlogs()) || []; // ensure blogs is always an array

  return (
    <div className="mb-10 lg:mb-20">
      <Title>Latest Blog</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {blogs.map((blog: any) => (
          <div
            key={blog?._id}
            className="rounded-lg overflow-hidden flex flex-col h-full" // added flex & h-full
          >
            {blog?.mainImage && (
              <Link href={`/blog/${blog?.slug?.current}`}>
                <Image
                  src={urlFor(blog?.mainImage).url()}
                  alt="blogImage"
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover" // fixed height
                />
              </Link>
            )}
            <div className="bg-shop_light_bg p-5 flex-1 flex flex-col justify-between">
              <div className="text-xs flex items-center gap-5 mb-3">
                <div className="flex items-center relative group cursor-pointer">
                  {blog?.blogcategories?.map((item: any, index: number) => (
                    <p
                      key={index}
                      className="font-semibold text-shop_dark_green tracking-wider"
                    >
                      {item?.title}
                    </p>
                  ))}
                  <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hover:cursor-pointer hoverEffect" />
                </div>
                <p className="flex items-center gap-1 text-lightColor relative group hover:cursor-pointer hover:text-shop_dark_green hoverEffect">
                  <Calendar size={15} />{" "}
                  {blog?.publishedAt
                    ? dayjs(blog.publishedAt).format("MMMM D, YYYY")
                    : ""}
                  <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hoverEffect" />
                </p>
              </div>
              <Link
                href={`/blog/${blog?.slug?.current}`}
                className="text-base font-semibold tracking-wide mt-auto line-clamp-2 hover:text-shop_dark_green hoverEffect"
              >
                {blog?.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
