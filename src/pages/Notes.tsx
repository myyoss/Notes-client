import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";
import axios from "axios";

export default function Notes() {
  const [notes, setNotes]: any = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data }: any = await axios.get(
        "https://notes-server-uwt7.onrender.com/api/notes/getNote"
      );
      console.log(data.allNotes);
      setNotes(data.allNotes);
      setLoading(false);
    })();
  }, []);

  async function handleDelete(id: any) {
    const { data } = await axios.post(
      "https://notes-server-uwt7.onrender.com/api/notes/deleteNote",
      { id }
    );
    console.log("id" + id);
    console.log("data", data.allNotes);
    setNotes(data.allNotes);
  }

  const braekpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      {loading && (
        <div className="loading">
          <div className="loader">{loading}</div>
          <h3>Loading</h3>
        </div>
      )}
      <Masonry
        breakpointCols={braekpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note: any, i: any) => (
          <div key={i}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

// USING GRID INSTEAD MASONARY:
{
  /* <Grid container spacing={3}>
{notes.map((note: any) => (
  <Grid key={note.id} item xs={12} sm={6} lg={4}>
    <NoteCard note={note} handleDelete={handleDelete} />
  </Grid>
))}
</Grid> */
}
