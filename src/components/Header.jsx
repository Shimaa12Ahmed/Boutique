import { AppShell,Group,Anchor,Image,ActionIcon} from "@mantine/core";
import logo from '../assets/logo.png';
import { Link,useNavigate } from "react-router-dom";
import { BsCart2, BsMoon } from "react-icons/bs";

const Header = () => {
const navigate = useNavigate();  
    return (
<>

  <AppShell.Header bg='brand.0'>
    <Group justify="space-between" px={15}>
    <Image src={logo} w={65} h={65} />
    <Group gap={10}>
    <Anchor component={Link} to="/" c="brand.7" fw={700} underline="hover" >
    Home 
    </Anchor>
    <Anchor component={Link} to="/products" c="brand.7" fw={700} underline="hover" >
   Products
    </Anchor>
    <Anchor component={Link} to="/about" c="brand.7" fw={700} underline="hover" >
    About 
    </Anchor>
    </Group>
    <Group gap={10}>
  <ActionIcon variant="subtle" aria-label="Cart" onClick={()=>navigate('/cart')}>
      <BsCart2 style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
    <ActionIcon variant="subtle" aria-label="Theme">
      <BsMoon style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
    </Group>
    </Group>
  </AppShell.Header>

    </>
  )
}

export default Header