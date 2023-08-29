import { useState, useEffect } from "react";

import { Footer } from "../../components/Footer";
import { NavbarLanding } from "../../components/NavbarLanding";
import { Day } from "./Day";
import { Motivation } from "./Motivation";
import { Other } from "./Other";
export const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function fetchQuotes() {
      try {
        const res = await fetch("http://localhost:6600/allquotes");
        const data = await res.json();
        setQuotes(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuotes();
  }, []);
  return (
    <>
      <NavbarLanding />

      <Day quotes={quotes} />
      <Motivation quotes={quotes} />
      <Other quotes={quotes} />
      <Footer />
    </>
  );
};
