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
        path: '/control/create/products/',
        component: UploadProduct,
        title: 'Upload Product',
        isProtected: true,
    },
    {
        path: '/control/products/:id',
        component: ControlOneProducts,
        title: 'Control Product',
        isProtected: true,
    },
    {
        path: '/control/products',
        component: ControlAllProducts,
        title: 'Control Products',
        isProtected: true,
    },
    {
        path: '/dashboard/cart',
        component: UserCart,
        title: 'Cart',
        isProtected: true,
    },
    {
        path: '/dashboard/delete-account',
        component: DeleteAccount,
        title: 'Delete Account',
        isProtected: true,
    },
    {
        path: '/dashboard/change-password',
        component: ChangePassword,
        title: 'Change Password',
        isProtected: true,
    },
    {
        path: '/dashboard/settings',
        component: UserSettings,
        title: 'Settings',
        isProtected: true,
    },
    {
        path: '/dashboard',
        component: DashboardComponent,
        title: 'Travel Ticket Shop',
        isProtected: true,
    },
    {
        path: '/account-activation/:token',
        component: ActiveAccount,
        title: 'Activate Your Account',
        forAuth: true
    },
    {
        path: '/reset-password/:token',
        component: ResetPass,
        title: 'Reset Password',
        forAuth: true
    },
    {
        path: '/forgot-password',
        component: ForgotPass,
        title: 'Forgot Password',
        forAuth: true
    },
    {
        path: '/register',
        component: RegisterForm,
        title: 'Register',
        forAuth: true
    },
    {
        path: '/login',
        component: LoginForm,
        title: 'Login',
        forAuth: true
    },
    {
        path: '/product/:id',
        component: ViewOneProduct,
        title: 'Travel Ticket Shop',
    },
    {
        path: '/',
        component: IndexPageComponent,
        title: 'Travel Ticket Shop',
        isIndex: true,
    },
    {
        path: '*',
        component: NotFound,
        title: 'Travel Ticket Shop',
    }
]

export default routes