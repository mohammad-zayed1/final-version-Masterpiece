import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import axios from "axios";
import Swal from "sweetalert2";

function TableOfContact({ refresh, setRefresh }) {
  const [contact, setContact] = useState([]);

  // get all quotes
  useEffect(() => {
    axios
      .get("http://localhost:6600/getmessages")
      .then((response) => {
        setContact(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    Swal.fire({
      title: `Are you sure to delete this Message ?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` Message was Deleted Successfully`, "", "success");

        axios
          .put("http://localhost:6600/readmessages/" + id)
          .then((response) => {
            console.log(response.data);
            setRefresh(!refresh);
          })

          .catch((error) => console.log(error.message));
      } else Swal.fire("Cancel", "", "error");
    });
  };

  const tableRows = contact.map((message) => {
    return (
      <tr key={message._id} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {message.email}
        </th>
        <td className="px-4 py-3">{message.subject}</td>
        <td className="px-4 py-3">{message.message}</td>

        <td className="px-4 py-3 flex items-center justify-start">
          <div className="bg-white  rounded divide-y divide-gray-100 shadow ">
            <div className="tooltip tooltip-error text-white" data-tip="Delete">
              <button
                onClick={() => handleDelete(message._id)}
                className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
              >
                <AiOutlineDelete className="text-red-500 text-[18px]" />
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <section className="w-full  mt-5 ">
      <div className="">
        {/* Start coding here */}
        <h1 className="text-[30px] font-bold py-3">Contact Messages</h1>
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 table-zebra ">
              <thead className="text-xs text-white uppercase bg-[#529b03]">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Email{" "}
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Subject
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Message
                  </th>

                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <tr>
                    <td className="p-3 text-lg">There are no Messages</td>
                  </tr>
                ) : (
                  tableRows
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableOfContact;
