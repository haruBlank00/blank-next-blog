import { DashboardSidebar } from "./components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col md:flex-row h-screen min-h-screen">
    <DashboardSidebar />

    <main>
      {children}
    </main>
  </div>
}
