import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function RideList() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "rides"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setRides(results);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", textAlign: "center" }}>
      <h2>Available Rides</h2>
      {rides.length === 0 && <p>No rides yet 🚲</p>}
      {rides.map((ride) => (
        <div
          key={ride.id}
          style={{
            border: "1px solid #ddd",
            margin: "10px",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{ride.start} ➡ {ride.end}</h3>
          <p><b>Time:</b> {ride.time}</p>
          <p><b>Driver:</b> {ride.driver}</p>
        </div>
      ))}
    </div>
  );
}
