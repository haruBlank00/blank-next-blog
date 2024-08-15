import { BlankBreadCrumbs } from "@/components/ui/blank-breadcrumbs";
import { DashboardSidebar } from "./components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col md:flex-row min-h-screen">
    <DashboardSidebar />

    <main className="pt-4 flex-1 dark:bg-neutral-800">
      <div className="container flex flex-col">
        <BlankBreadCrumbs />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </main>
  </div>
}
