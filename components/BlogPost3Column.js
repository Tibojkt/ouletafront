import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";
import { DateTime } from "luxon";
import Link from "next/link";

const BlogPost3Column = () => {
  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/blogs?sort=date%3Adesc&populate=*`
      );
      setBlogs(response.data);
      // console.log(response.data);
    };
    getBlogs();
  }, []);

  return (
    <>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Offres d'emploi</span>
            <h2>Découvrez nos offres d'emploi</h2>
          </div>

          {blogs && (
            <div className="row justify-content-center">
              {blogs.data.map((blog) => (
                <div className="single-blog-card" key={blog.id}>
                  <div className="blog-content rounded">
                    <p className="metier">{blog.attributes.metier}</p>
                    <h3>{blog.attributes.title}</h3>
                    <ReactMarkdown>
                      {blog.attributes.longDescription}
                    </ReactMarkdown>

                    <div className="entry-meta d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                      <div>
                        <div className="d-flex align-items-center">
                          <i className="ri-calendar-line"></i>
                          <p>
                            Mise en ligne de l'annonce:{" "}
                            {DateTime.fromISO(blog.attributes.date)
                              .setLocale("fr")
                              .toLocaleString(DateTime.DATE_FULL)}
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="ri-edit-line"></i>
                          <p>Formation: {blog.attributes.formation}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="ri-pages-line"></i>
                          <p>Type de contrat: {blog.attributes.contrat}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="ri-user-line"></i>
                          <p>Expérience: {blog.attributes.experience}</p>
                        </div>
                      </div>
                      <div className="candidature-btn">
                        <Link href="/emploi/candidature">
                          <a className="default-btn">Postulez</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPost3Column;
