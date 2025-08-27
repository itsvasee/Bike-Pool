import React, { useState } from "react";
import { db, auth } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CreateRide() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "rides"), {
        driver: auth.currentUser.email,  // who created it
        start,
        end,
        time,
        createdAt: new Date()
      });
      alert("Ride created successfully ✅");
      setStart("");
      setEnd("");
      setTime("");
    } catch (err) {
      alert("Error adding ride: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", textAlign: "center" }}>
      <h2>Create a Ride</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Start Location"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
          style={{ margin: "10px", padding: "8px", width: "90%" }}
        />
        <input
          type="text"
          placeholder="End Location"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
          style={{ margin: "10px", padding: "8px", width: "90%" }}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={{ margin: "10px", padding: "8px", width: "90%" }}
        />
        <button type="submit" style={{ padding: "10px 20px", margin: "10px" }}>
          Create Ride
        </button>
      </form>
    </div>
  );
}
