import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { Field } from "./ui/field"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="m-2 px-9">
        <Button className="text-lg bg-red-300 hover:bg-red-400 my-2">Random</Button>
        <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <h1>user: 123456</h1>
      </SidebarFooter>
    </Sidebar>
  )
}