
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = 'Ankrit Maity | Java Backend Developer',
  description = 'Personal portfolio of Ankrit Maity, Java Backend Developer with experience in Spring Boot, REST APIs, & MySQL.',
  keywords = 'Ankrit Maity, Java Developer, Backend Developer, Spring Boot, MySQL, Portfolio'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ankrit Maity" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      <link rel="canonical" href="https://ankrit-maity.vercel.app" />
    </Helmet>
  );
};

export default SEO;
