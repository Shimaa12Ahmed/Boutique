import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { pageTransition, pageVariants } from './styles/animations';
import { Suspense, lazy } from 'react';
import LoadingPage from './pages/common/LoadingPage';
import ManageProducts from './components/Tables/ManageProducts';

const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const NotFound = lazy(() => import('./pages/common/NotFoundPage'));
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const AddProduct = lazy(() => import('./pages/Admin/AddProduct'));
const UpdateProduct = lazy(() => import('./pages/Admin/UpdateProduct'));

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingPage />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

          <Route
            path="/login"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Login />
              </motion.div>
            }
          />

          <Route
            path="/register"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Register />
              </motion.div>
            }
          />

          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/admin/updateProduct" element={<UpdateProduct />} />
          <Route path="/admin" element={<ManageProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
