import React from "react";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCard";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Heading />
      <TouristInfoCard cards={cards} />
      <Bookings />
      <Restaurant />
      <Footer 
        arrayOfProp={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
