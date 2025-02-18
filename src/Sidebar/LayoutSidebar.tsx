import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import React from "react";


import Header from "@/components/ui/Header";



export function LayoutSidebar({children,}: {children?: React.ReactNode;}) {


  return (
    <SidebarProvider 
      style={{
        "--sidebar-width": "14rem",
        "--sidebar-width-mobile": "10rem",
        "--sidebar-width-icon":"4rem"
      } as any}
      >
        <AppSidebar  />
          <SidebarInset>
          
            <Header/>
              <main>   
                {children}
              </main>
          </SidebarInset>
    </SidebarProvider>
  )
}
 