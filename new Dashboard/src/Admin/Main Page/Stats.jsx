/* eslint-disable react/prop-types */

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { RefreshContext } from "../../App";

// icons

import { FaDonate } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { RiChatQuoteLine } from "react-icons/ri";

export const Stats = (props) => {
  const [books, setBooks] = useState([]);
  const { orders, sum } = useContext(RefreshContext);

  // get total of donors
  useEffect(() => {
    axios
      .get("http://localhost:6600/allproducts")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.refresh]);

  // get total orgs
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6600/showwriters")
      .then((response) => {
        setWriters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.refresh]);

  // total donation
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6600/allquotes")
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.refresh]);

  return (
    <div className="stats stats-vertical xl:stats-horizontal md:stats-horizontal bg-white shadow-lg ">
      <div className="stat">
        <div className="stat-title  text-[#529b03] font-bold">Total Books</div>
        <div className="stat-value text-[#529b03]">{books.length}</div>
        <div className="stat-figure text-[#529b03]">
          <ImBooks className="text-[40px]" />
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure text-[#529b03]">
          <BsPerson className="text-[40px]" />
        </div>
        <div className="stat-title text-[#529b03] font-bold">Total Writers</div>
        <div className="stat-value text-[#529b03]">{writers.length}</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-[#529b03]">
          <BsPerson className="text-[40px]" />
        </div>
        <div className="stat-title text-[#529b03] font-bold">Total Payment</div>
        <div className="stat-value text-[#529b03]">${sum}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-[#529b03] ">
          <FaDonate className="text-[40px] " />
        </div>
        <div className="stat-title text-[#529b03] font-bold">
          {" "}
          Total Orders{" "}
        </div>
        <div className="stat-value text-[#529b03]">{orders.length}</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-[#529b03]">
          <RiChatQuoteLine className="text-[40px] text-[#529b03]" />
        </div>
        <div className="stat-title  text-[#529b03] font-bold">
          Total Quotes{" "}
        </div>
        <div className="stat-value text-[#529b03]">{quotes.length}</div>
      </div>
    </div>
  );
};
