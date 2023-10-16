import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
const DashboardLayout = async ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return(
    <div className="h-full relative">
      
        <Sidebar />

        <main className="h-full md:ml-72">
            {/* <Navbar /> */}
            {children}
        </main>
    </div>
    )
  }

export default DashboardLayout;