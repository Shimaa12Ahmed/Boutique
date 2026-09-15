import { useDisclosure } from '@mantine/hooks';
import { AppShell} from '@mantine/core';
import { Link, Outlet } from 'react-router-dom';

import Header from '../components/Header';
const MainLayout=()=>{
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <Header/>

      <AppShell.Navbar py="md" px={4} >
          

      </AppShell.Navbar>

      <AppShell.Main>
        
<Outlet/>
   
       
      </AppShell.Main>
    </AppShell>
  );
}
export default MainLayout;