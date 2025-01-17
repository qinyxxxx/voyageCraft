import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, Typography, Pagination, Stack, Grid2 } from "@mui/material";
import Header from "./Header";
import "../css/Posts.css";

const examplePosts = [
  {
    id: 1,
    title: "Discover Hidden Beaches",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
    update_time: "2025-01-15 10:35:21",
    username: "Alice",
  },
  {
    id: 2,
    title: "Top 10 Mountain Hikes",
    content: "Nunc sit amet ante a diam placerat commodo...",
    update_time: "2025-01-14 09:12:47",
    username: "Bob",
  },
  {
    id: 3,
    title: "City Food Tour",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et...",
    update_time: "2025-01-13 15:05:10",
    username: "Charlie",
  },
  {
    id: 4,
    title: "Museum Guide",
    content: "Etiam in consequat erat. Morbi in felis elit...",
    update_time: "2025-01-12 08:22:34",
    username: "Diana",
  },
  {
    id: 5,
    title: "Road Trip Essentials",
    content: "Curabitur semper risus eget libero semper sollicitudin...",
    update_time: "2025-01-11 19:45:12",
    username: "Evan",
  },
  {
    id: 6,
    title: "Local Food Markets",
    content: "Phasellus hendrerit est nec diam bibendum pulvinar...",
    update_time: "2025-01-10 17:03:56",
    username: "Fiona",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const pageSize = 6;

  useEffect(() => {
    setPosts(examplePosts);
  }, []);

  const pageCount = Math.ceil(posts.length / pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Header />
      <Stack spacing={2} sx={{ maxWidth: 1500, margin: "0 auto", padding: "20px" }}>
        <Grid2 container spacing={2} justifyContent="center">
          {displayedPosts.map((post) => (
            <Grid2
              item="true"
              xs={12}
              sm={6}
              md={4}
              key={post.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                variant="outlined"
                style={{
                  width: 400,
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardHeader
                  title={post.title}
                  subheader={`By ${post.username} | Updated on ${post.update_time}`}
                />
                <CardContent>
                  <Typography variant="body1" className="truncate">{post.content}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Pagination */}
        {posts.length > 0 && (
          <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        )}
      </Stack>
    </div>
  );
};

export default Posts;