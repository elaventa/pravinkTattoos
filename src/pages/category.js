import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Masonry from "react-masonry-css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import "../styles/index.scss";

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query GalleryImages {
      allSanityTattooCategory(sort: {_createdAt: ASC}) {
        nodes { _id title }
      }
      allSanityGalleryImage(sort: {_createdAt: DESC}) {
        nodes {
          id
          image { asset { gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED) } }
          categories { _id title }
        }
      }
    }
  `);

  const categories = data.allSanityTattooCategory.nodes;
  const images = data.allSanityGalleryImage.nodes;

  const [activeTab, setActiveTab] = useState(categories[0]?._id || null);

  const filteredImages = images.filter(img =>
    img.categories?.some(cat => cat._id === activeTab)
  );

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    800: 2,
    500: 1
  };

  return (
    <>
      <Navbar />
      <section className="categoryGallery">
        {/* Page Title */}
        <h1 className="pageTitle">Our Tattoo Gallery</h1>

        {/* Tabs */}
        <div className="tabsWrapper">
          <div className="tabs">
            {categories.map(cat => (
              <button
                key={cat._id}
                className={`tabBtn ${activeTab === cat._id ? "active" : ""}`}
                onClick={() => setActiveTab(cat._id)}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredImages.map((imgItem, idx) => {
            const img = getImage(imgItem.image.asset);
            return (
              <div className="galleryCard" key={imgItem.id + idx}>
                <GatsbyImage image={img} alt={`Tattoo ${idx}`} className="tattooImg" />
              </div>
            );
          })}
        </Masonry>
      </section>
      <Footer />
    </>
  );
};

export default GalleryPage;
