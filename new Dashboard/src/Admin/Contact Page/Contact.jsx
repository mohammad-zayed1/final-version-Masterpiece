import { useContext } from "react";
import { RefreshContext } from "../../App";
import TableOfContact from "./TableOfContact";
function Contact() {
  const { refresh, setRefresh } = useContext(RefreshContext);

  return (
    <div>
      <main className="p-4 px-8  md:ml-64 h-auto pt-20 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
          <TableOfContact setRefresh={setRefresh} refresh={refresh} />
        </div>
      </main>
    </div>
  );
}

export default Contact;
