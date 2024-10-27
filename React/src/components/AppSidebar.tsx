import {
  Users,
  Home,
  School,
  Settings,
  FolderKanban,
  Book,
  CircleHelp,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./ui/sidebar";

const AppSidebar = () => {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
    </Sidebar>
  );
};

export default AppSidebar;
