import {
  Users,
  Home,
  School,
  Settings,
  FolderKanban,
  Book,
  CircleHelp,
  User2,
  ChevronUp,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const AppSidebar = () => {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pengelolaan Data</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="home">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Home />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem key="siswa">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <FolderKanban />
                    <span>Kelola Data Siswa</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuButton>
                      <a href="#">
                        <span>Daftar Siswa</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuButton>
                      <a href="#">
                        <span>Tambah Siswa</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuButton>
                      <a href="#">
                        <span>Export Data</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuItem key="kelas">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <School />
                    <span>Pengaturan Kelas</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem key="guru">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Users />
                    <span>Kelola Data Guru</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuButton>
                      <a href="#">
                        <span>Daftar Siswa</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuButton>
                      <a href="#">
                        <span>Tambah Siswa</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuButton>
                      <a href="#">
                        <span>Jadwal Pengajaran</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuItem key="kelola">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Book />
                    <span>Laporan</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuButton>
                      <a href="#">
                        <span>Laporan Siswa</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuButton>
                      <a href="#">
                        <span>Riwayat Aktivitas</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuItem key="pengaturan">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings />
                    <span>Pengaturan</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem key="kelas">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <CircleHelp />
                    <span>Bantuan</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Admin
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
