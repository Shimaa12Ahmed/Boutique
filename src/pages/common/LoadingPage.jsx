import {Flex, Loader} from '@mantine/core';
const LoadingPage=()=>{
  return (  
  <>
  <Flex align='center' justify='center'h="100vh">
    <Loader color="rgba(125, 70, 46, 1)" size="xl" type="bars"  m={5}/>
      <Loader color="rgb(179, 132, 112)" size="sm" type="dots" />
      
  </Flex>
    
  </>
  );
}
export default LoadingPage;