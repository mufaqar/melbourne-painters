import { Service } from "@/types";
import DOMPurify from "isomorphic-dompurify";
import React from "react";
import WPHTMLContent from "../UI/WPHTMLContent";

export default function Grid({
  grid,
}: {
  grid: {
    heading: string;
    content: string;
  }[];
}) {
  if (!grid) {
    return null;
  }
  return (
    <section className="grid text-grid-a-inline-block -mt-4 my-4 px-4 max-w-site-full xl:grid-cols-2 gap-2 mx-auto">
      {grid.map((blog) => (
        <div key={Math.random()}>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.heading),
            }}
            className="text-brand-blue text-xl font-isidorasans_regular md:text-2xl lg:text-2xl font-medium md:mb-2"
          />

          <WPHTMLContent html={blog.content} />
        </div>
      ))}
    </section>
  );
}
