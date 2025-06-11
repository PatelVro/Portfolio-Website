import React, { useState, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ScrollProgressBar from "../../components/scrollprogressbar";
import { blogPosts } from "../../content/blogData";
import "./style.css";

export const Blog = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);
  const postRefs = useRef({});

  const toggleExpand = (id) => {
    const isExpanding = expandedPostId !== id;
    setExpandedPostId(isExpanding ? id : null);

    if (isExpanding) {
      // Scroll to the top of the card after a short delay to allow for rendering
      setTimeout(() => {
        postRefs.current[id].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <>
      <ScrollProgressBar />
      <HelmetProvider>
        <Container className="Blog-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Blog | Hill Patel</title>
            <meta
              name="description"
              content="Read technical blogs and project journeys by Hill Patel"
            />
          </Helmet>

          <Row className="mb-5 mt-3 pt-md-3 align-items-center">
            <Col>
              <h1 className="display-4 mb-4 text-accent">Blog</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>

          <Row>
            {blogPosts.map((post) => (
              <Col lg="12" key={post.id} className="mb-4">
                <Card
                  ref={(el) => (postRefs.current[post.id] = el)}
                  className={`blog-card ${
                    expandedPostId === post.id ? "expanded" : ""
                  }`}
                >
                  <Card.Body>
                    <Card.Title className="text-accent">{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Card.Subtitle>
                    <Card.Text
                      className="blog-text"
                      aria-expanded={expandedPostId === post.id}
                    >
                      {expandedPostId === post.id ? (
                        <div
                          style={{ whiteSpace: "pre-line" }}
                          dangerouslySetInnerHTML={{
                            __html: post.content.replace(/\n/g, "<br />"),
                          }}
                        />
                      ) : (
                        post.summary
                      )}
                    </Card.Text>
                    <Button
                      variant="outline-info"
                      onClick={() => toggleExpand(post.id)}
                      className="read-more-btn"
                      aria-controls={`post-content-${post.id}`}
                    >
                      {expandedPostId === post.id ? "Show Less" : "Read More"}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </HelmetProvider>
    </>
  );
};

export default Blog;