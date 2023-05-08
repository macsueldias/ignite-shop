import { ContainerSidebar } from './styles'

interface SideBarProps {
  fn: (status: boolean) => void
}

export const SideBar = ({ fn }: SideBarProps) => {
  return (
    <ContainerSidebar>
      Sidebar<button onClick={() => fn(false)}>x</button>
    </ContainerSidebar>
  )
}
