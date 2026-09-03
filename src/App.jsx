import Login from './pages/Auth/Login'
import {Route,Routes, useLocation} from 'react-router-dom';
import Register from './pages/Auth/Register';
import { AnimatePresence, motion } from "motion/react";
import { pageTransition,pageVariants } from './styles/animations';
import {MainLayout} from './layouts/MainLayout'
function App() {
  const location=useLocation();
  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}/>
      <Route path='/home' element={<MainLayout/>}/>
    </Routes>
 
<AnimatePresence mode='wait'>
<Routes location={location}>
  <Route path='/login'element={
  <motion.div
    key={location.pathname}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
  >
    <Login />
  </motion.div>
} />
  <Route path='/register'element={
  <motion.div
    key={location.pathname}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
  >
    <Register/>
  </motion.div>
}/> 
</Routes>
</AnimatePresence>    
 
    
    </>
  )
}

export default App
