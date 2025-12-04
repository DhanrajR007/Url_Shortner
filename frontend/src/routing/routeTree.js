import { createRootRoute, createRoute } from "@tanstack/react-router"
import RootLayout from "../RootLayout"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Auth from "../pages/Auth"
import { checkAuth } from "../utils/helper"

export const rootRoute = createRootRoute({
    component: RootLayout
})

const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const dasboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
  beforeLoad:checkAuth
})
const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: Auth,
})

export const routeTree =rootRoute.addChildren([
    homePageRoute, 
    authRoute, 
    dasboardRoute
])