import RegisterForm from "../Components/Register/RegisterFormComponent"
import ActiveAccount from "../Components/Register/ActiveAccComponent"
import LoginForm from '../Components/Login/LoginFormComponent'
import ForgotPass from '../Components/Login/ForgotPassComponent'
import ResetPass from '../Components/Login/ResetPassComponent'
import DashboardComponent from '../Components/Home/DashboardComponent'
import IndexPageComponent from '../Components/Home/IndexComponent'
import ViewOneProduct from '../Components/ViewProducts/ViewProductComponent'
import UserCart from '../Components/CartView/CartComponent'
import UserSettings from '../Components/UserSettings/SettingsComponent'
import ChangePassword from '../Components/UserSettings/ChangePassComponent'
import DeleteAccount from '../Components/UserSettings/DeleteAccountComponent'
import ControlAllProducts from '../Components/ProductControls/ViewAllProductsComponent'
import ControlOneProducts from '../Components/ProductControls/ViewOneProductComponent'
import UploadProduct from '../Components/ProductControls/UploadProductComponent'
import NotFound from '../Components/NotFound/NotFoundComponent'

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