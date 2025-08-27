import React from "react";
import Auth from "./Auth";
import CreateRide from "./CreateRide";
import RideList from "./RideList";

function App() {
  return (
    <div>
      <Auth />
      <CreateRide />
      <RideList />
    </div>
  );
}

export default App;
