import { UserInfo } from "./UserInfo";
import { ProgressDisplay } from "./ProgressDisplay";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarList } from "./SidebarList";
import { useSidebar } from "@/store/useSidebar";
import { useSubjects } from "@/store/useSubjects";

export const SidebarContent = () => {
  const { isOpenSidebar } = useSidebar();
  const { subjects, selectSubject } = useSubjects()
  return (
    <>
      <SidebarHeader />
      {isOpenSidebar && (
        <>
          <UserInfo image="https://bit.ly/sage-adebayo" name="Ali Gulmaliyev" />
          <ProgressDisplay completed="86" progress={20} time="12m" />
          <SidebarList subjects={subjects} selectSubject={selectSubject} />
        </>
      )}
    </>
  );
};
