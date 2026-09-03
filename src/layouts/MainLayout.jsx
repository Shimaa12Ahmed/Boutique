import { useDisclosure } from '@mantine/hooks';
import { AppShell,Group,Burger,ThemeIcon,Anchor} from '@mantine/core';
import { Link } from 'react-router-dom';
import logo from'../assets/logo.png'
import { Image } from '@mantine/core';
export function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header bg="cream.0">
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" c="brand.7"/>
          <Group justify="space-between" style={{ flex: 1 }}>
           <ThemeIcon variant="white" radius="lg" size="xl">
<Image 
src={logo} 

    />
     
    </ThemeIcon>
            <Group ml="xl" gap={5} visibleFrom="sm" >
              <Anchor component={Link} to="/home" c="brand.7" fw={700} underline="hover">
                Home
              </Anchor>
               <Anchor component={Link} to="/register" c="brand.7" fw={700} underline="hover">
                Sign up
              </Anchor>
               <Anchor component={Link} to="/login" c="brand.7" fw={700} underline="hover">
                              Sign In
                            </Anchor>
                             <Anchor component={Link} to="/register" c="brand.7" fw={700} underline="hover">
                Sign up
              </Anchor>

            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4} >
           <Anchor component={Link} to="/home" c="brand.7" fw={700} underline="hover">
                Home
              </Anchor>
               <Anchor component={Link} to="/register" c="brand.7" fw={700} underline="hover">
                Sign up
              </Anchor>
               <Anchor component={Link} to="/login" c="brand.7" fw={700} underline="hover">
                              Sign In
                            </Anchor>
                             <Anchor component={Link} to="/register" c="brand.7" fw={700} underline="hover">
                Sign up
              </Anchor>

      </AppShell.Navbar>

      <AppShell.Main>
        
       


   
       
      </AppShell.Main>
    </AppShell>
  );
}