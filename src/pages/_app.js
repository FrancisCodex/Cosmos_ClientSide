import '@/styles/globals.css'
import '@/styles/homepage.css'
import { AuthProvider } from '@/components/authcontext/AuthProvider'
import ProtectedRoute from '@/components/authcontext/ProtectedRoute'
// import '@/styles/adminpage.css'
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </AuthProvider>
  )
}
