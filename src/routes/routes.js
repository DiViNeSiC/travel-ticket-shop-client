import RegisterForm from "../components/register/registerForm"
import ActiveAccount from "../components/register/activateAccount"
import LoginForm from '../components/login/loginForm'
import ForgotPass from '../components/login/forgotPass'
import ResetPass from '../components/login/resetPass'
import DashboardComponent from '../components/home/dashboard'
import IndexPageComponent from '../components/home/index'
import ViewOneProduct from '../components/viewProduct/view'
import UserCart from '../components/cartView/cart'
import UserSettings from '../components/userSettings/settings'
import ChangePassword from '../components/userSettings/changePassword'
import DeleteAccount from '../components/userSettings/deleteAccount'
import ControlAllProducts from '../components/controlProduct/viewAll'
import ControlOneProducts from '../components/controlProduct/viewOne'
import UploadProduct from '../components/controlProduct/uploadProduct'
import NotFound from '../components/notFound/notFound'

const routes = [
    {
        path: '/register',
        component: RegisterForm,
        title: 'Register',
        forAuth: true
    },
    {
        path: '/account-activation/:token',
        component: ActiveAccount,
        title: 'Activate Your Account',
        forAuth: true
    },
    {
        path: '/login',
        component: LoginForm,
        title: 'Login',
        forAuth: true
    },
    {
        path: '/forgot-password',
        component: ForgotPass,
        title: 'Forgot Password',
        forAuth: true
    },
    {
        path: '/reset-password/:token',
        component: ResetPass,
        title: 'Reset Password',
        forAuth: true
    },
    {
        path: '/dashboard/delete-account',
        component: DeleteAccount,
        title: 'Delete Account',
        protected: true,
    },
    {
        path: '/dashboard/change-password',
        component: ChangePassword,
        title: 'Change Password',
        protected: true,
    },
    {
        path: '/dashboard/settings',
        component: UserSettings,
        title: 'Settings',
        protected: true,
    },
    {
        path: '/dashboard/cart',
        component: UserCart,
        title: 'Cart',
        protected: true,
    },
    {
        path: '/dashboard',
        component: DashboardComponent,
        title: 'Travel Ticket Shop',
        protected: true,
    },
    {
        path: '/product/:id',
        component: ViewOneProduct,
        title: 'Travel Ticket Shop',
    },
    {
        path: '/control/create/products/',
        component: UploadProduct,
        title: 'Upload Product',
        protected: true,
    },
    {
        path: '/control/products/:id',
        component: ControlOneProducts,
        title: 'Control Product',
        protected: true,
    },
    {
        path: '/control/products',
        component: ControlAllProducts,
        title: 'Control Products',
        protected: true,
    },
    {
        path: '/',
        component: IndexPageComponent,
        title: 'Travel Ticket Shop',
        isIndex: true,
        exact: true
    },
    {
        path: '*',
        component: NotFound,
        title: 'Travel Ticket Shop',
        isIndex: true,
        exact: true
    }
]

export default routes