import ClientSidebar from "../components/ClientSidebar";
import ClientNavbar from "../components/ClientNavbar";
import "../pages/client/Client.css";

function ClientLayout({ children }) {
  return (
    <div className="client-layout">

      <ClientSidebar />

      <div className="client-main">

        <ClientNavbar />

        <main className="client-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default ClientLayout;