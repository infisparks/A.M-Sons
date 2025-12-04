"use client"

import { useEffect, useMemo, useState, useCallback } from "react"
import Image from "next/image"
import {
  Mail,
  Phone,
  Lock,
  LogOut,
  MessageCircle,
  Package,
  Clock,
  User,
  Menu,
  X,
  Loader2,
  ChevronRight,
} from "lucide-react"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { listenToMessages, listenToProductRequests, auth } from "@/lib/firebase"
import { products } from "@/lib/products"

// --- Type Definitions (Keep as is) ---
type MessageRecord = {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt?: number
}

type ProductRequestRecord = {
  id: string
  productKey: string
  productName: string
  customerName: string
  email: string
  phone: string
  message: string
  createdAt?: number
}

// --- Helper Functions (Keep as is) ---
function getProductCategory(productName: string): string | null {
  const match = products.find(
    (p) => p.name.trim().toLowerCase() === productName.trim().toLowerCase(),
  )
  return match?.category ?? null
}

const formatDateTime = (timestamp?: number) => {
  if (!timestamp) return "-"
  try {
    return new Date(timestamp).toLocaleString()
  } catch {
    return "-"
  }
}

// --- Helper Components ---

type SidebarProps = {
  activeTab: "messages" | "productRequests"
  setActiveTab: (tab: "messages" | "productRequests") => void
  handleLogout: () => void
  isMobileOpen: boolean
  setIsMobileOpen: (open: boolean) => void
}

const AdminSidebar = ({
  activeTab,
  setActiveTab,
  handleLogout,
  isMobileOpen,
  setIsMobileOpen,
}: SidebarProps) => {
  const createNavButton = (
    tabName: "messages" | "productRequests",
    Icon: typeof MessageCircle,
    label: string,
  ) => {
    const isActive = activeTab === tabName
    const onClickHandler = () => {
      setActiveTab(tabName)
      setIsMobileOpen(false) // Close sidebar on click for mobile
    }
    return (
      <button
        onClick={onClickHandler}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
          isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
            : "bg-transparent text-gray-200 hover:bg-gray-700/50 hover:text-white"
        }`}
      >
        <Icon size={18} />
        {label}
        <ChevronRight size={16} className="ml-auto opacity-50" />
      </button>
    )
  }

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isMobileOpen ? "opacity-100 visible" : "opacity-0 hidden"
        }`}
        onClick={() => setIsMobileOpen(false)}
      ></div>

      {/* Sidebar Content - Uses flex-col and h-full to manage vertical space */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-slate-800 z-50 
          lg:static lg:h-auto lg:w-72 lg:shrink-0 lg:rounded-3xl lg:shadow-2xl lg:bg-linear-to-br from-slate-800 to-slate-900
          p-6 transition-transform duration-300 ease-in-out transform flex flex-col
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo and Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="relative w-12 h-12 shrink-0 bg-white p-2 rounded-xl">
            {/* Placeholder for your actual logo */}
            <Image
              src="/logo-main-img.png"
              alt="A.M and Sons Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div className="text-xl font-extrabold text-white">A.M and Sons</div>
            <div className="text-[11px] text-blue-300 font-medium tracking-widest uppercase">
              Admin Dashboard
            </div>
          </div>
          {/* Close button for mobile */}
          <button
            className="lg:hidden ml-auto text-white hover:text-red-400"
            onClick={() => setIsMobileOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="space-y-3 mb-10">
          {createNavButton("messages", MessageCircle, "Customer Messages")}
          {createNavButton("productRequests", Package, "Product Quote Requests")}
        </div>

        {/* Footer / Logout - Uses mt-auto to stick to the bottom */}
        <div className="mt-auto pt-6 border-t border-slate-700">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <User size={16} className="text-blue-400" />
            <span>Logged in as Admin</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 bg-red-900/40 hover:bg-red-900/60 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}

type LoginScreenProps = {
  email: string
  setEmail: (val: string) => void
  password: string
  setPassword: (val: string) => void
  authError: string | null
  loggingIn: boolean
  handleLogin: (e: React.FormEvent) => void
}

const LoginScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  authError,
  loggingIn,
  handleLogin,
}: LoginScreenProps) => (
  <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gray-100">
    <div className="w-full max-w-md">
      <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="relative w-12 h-12">
            <Image src="/logo-main-img.png" alt="A.M and Sons Logo" fill className="object-contain" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Admin Access</p>
            <h1 className="text-xl font-bold text-gray-900">A.M and Sons Dashboard</h1>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          This area is restricted to authorized personnel. Please sign in.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <Mail size={16} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <Lock size={16} />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {authError && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
              {authError}
            </div>
          )}

          <button
            type="submit"
            disabled={loggingIn}
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
          >
            {loggingIn && <Loader2 size={18} className="animate-spin" />}
            {!loggingIn && <Lock size={18} />}
            {loggingIn ? "Signing in..." : "Sign in to Admin"}
          </button>
        </form>

        <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
          <Clock size={14} />
          <span>Secure admin panel • A.M and Sons</span>
        </div>
      </div>
    </div>
  </div>
)

// --- AdminPage Component ---

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState<string | null>(null)
  const [loggingIn, setLoggingIn] = useState(false)

  const [activeTab, setActiveTab] = useState<"messages" | "productRequests">("productRequests") 

  const [messagesRaw, setMessagesRaw] = useState<Record<string, any> | null>(null)
  const [productRequestsRaw, setProductRequestsRaw] = useState<Record<string, Record<string, any>> | null>(null)
  const [loadingMessages, setLoadingMessages] = useState(true)
  const [loadingProductRequests, setLoadingProductRequests] = useState(true)

  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // State for mobile sidebar

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user)
      setAuthLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // Attach Firebase listeners when authenticated
  useEffect(() => {
    if (!isAuthenticated) return

    setLoadingMessages(true)
    setLoadingProductRequests(true)

    // Note: Assuming listenToMessages and listenToProductRequests return unsubscribe functions
    const offMessages = listenToMessages((val: any) => {
      setMessagesRaw(val)
      setLoadingMessages(false)
    })
    const offProduct = listenToProductRequests((val: any) => {
      setProductRequestsRaw(val)
      setLoadingProductRequests(false)
    })

    return () => {
      offMessages()
      offProduct()
    }
  }, [isAuthenticated])

  const messages: MessageRecord[] = useMemo(() => {
    if (!messagesRaw) return []
    return Object.entries(messagesRaw).map(([id, value]) => ({
      id,
      name: value.name ?? "",
      email: value.email ?? "",
      phone: value.phone ?? "",
      subject: value.subject ?? "",
      message: value.message ?? "",
      createdAt: value.createdAt,
    })).sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0)) // Sort on retrieval
  }, [messagesRaw])

  const productRequests: ProductRequestRecord[] = useMemo(() => {
    if (!productRequestsRaw) return []
    const list: ProductRequestRecord[] = []
    Object.entries(productRequestsRaw).forEach(([productKey, requests]) => {
      Object.entries(requests).forEach(([id, value]) => {
        list.push({
          id,
          productKey,
          productName: value.productName ?? productKey,
          customerName: value.customerName ?? "",
          email: value.email ?? "",
          phone: value.phone ?? "",
          message: value.message ?? "",
          createdAt: value.createdAt,
        })
      })
    })
    return list.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0)) // Sort on retrieval
  }, [productRequestsRaw])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError(null)
    setLoggingIn(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      console.error("Admin login failed:", error)
      const message =
        error?.code === "auth/invalid-credential" || error?.code === "auth/wrong-password"
          ? "Invalid email or password."
          : "Unable to sign in. Please try again."
      setAuthError(message)
    } finally {
      setLoggingIn(false)
    }
  }

  const handleLogout = useCallback(() => {
    signOut(auth).catch((err) => {
      console.error("Failed to sign out:", err)
    })
  }, [])

  const MessagesTab = () => (
    <div className="flex flex-col h-full">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-gray-100 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <MessageCircle className="text-blue-600" size={24} />
          Customer Messages
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-medium">
            <MessageCircle size={14} />
            <span>{messages.length} total</span>
          </div>
        </div>
      </header>
      <div className="text-sm text-gray-500 mb-4">Messages submitted via the Contact Us form.</div>

      <div className="flex-1 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-inner">
        <div className="overflow-auto max-h-[70vh]"> 
          <table className="min-w-full text-sm">
            <thead className="sticky top-0 bg-gray-50 text-gray-600 text-xs uppercase tracking-wide border-b border-gray-200 shadow-sm z-10">
              <tr>
                <th className="px-4 py-3 text-left w-1/5">Name</th>
                <th className="px-4 py-3 text-left w-1/5">Contact</th>
                <th className="px-4 py-3 text-left w-1/5">Subject</th>
                <th className="px-4 py-3 text-left w-2/5">Message</th>
                <th className="px-4 py-3 text-left w-auto whitespace-nowrap">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {loadingMessages ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-500">
                    <Loader2 className="animate-spin mx-auto mb-2" size={24} />
                    Loading messages...
                  </td>
                </tr>
              ) : messages.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-400 italic">
                    No messages have been submitted yet.
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg.id} className="border-t border-gray-100 hover:bg-blue-50/40 transition-colors">
                    <td className="px-4 py-4 align-top">
                      <div className="font-semibold text-gray-900">{msg.name}</div>
                    </td>
                    <td className="px-4 py-4 align-top text-xs text-gray-700">
                      <div className="flex items-center gap-2 mb-1">
                        <Mail size={12} className="text-gray-400 shrink-0" />
                        <span className="truncate max-w-[150px]">{msg.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={12} className="text-gray-400 shrink-0" />
                        <span>{msg.phone}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="text-sm font-semibold text-gray-900 truncate max-w-[180px]">
                        {msg.subject}
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="text-xs text-gray-700 max-w-sm line-clamp-3 leading-relaxed">{msg.message}</div>
                    </td>
                    <td className="px-4 py-4 align-top text-xs text-gray-500 whitespace-nowrap">
                      {formatDateTime(msg.createdAt)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const ProductRequestsTab = () => (
    <div className="flex flex-col h-full">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-gray-100 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <Package className="text-blue-600" size={24} />
          Product Quote Requests
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-medium">
            <Package size={14} />
            <span>{productRequests.length} total</span>
          </div>
        </div>
      </header>
      <div className="text-sm text-gray-500 mb-4">Quote inquiries submitted from individual product pages.</div>

      <div className="flex-1 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-inner">
        <div className="overflow-auto max-h-[70vh]">
          <table className="min-w-full text-sm">
            <thead className="sticky top-0 bg-gray-50 text-gray-600 text-xs uppercase tracking-wide border-b border-gray-200 shadow-sm z-10">
              <tr>
                <th className="px-4 py-3 text-left w-1/5">Product</th>
                <th className="px-4 py-3 text-left w-1/5">Customer</th>
                <th className="px-4 py-3 text-left w-1/5">Contact</th>
                <th className="px-4 py-3 text-left w-2/5">Message</th>
                <th className="px-4 py-3 text-left w-auto whitespace-nowrap">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {loadingProductRequests ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-500">
                    <Loader2 className="animate-spin mx-auto mb-2" size={24} />
                    Loading product requests...
                  </td>
                </tr>
              ) : productRequests.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-400 italic">
                    No product quote requests yet.
                  </td>
                </tr>
              ) : (
                productRequests.map((req) => {
                  const category = getProductCategory(req.productName)
                  return (
                    <tr
                      key={`${req.productKey}-${req.id}`}
                      className="border-t border-gray-100 hover:bg-blue-50/40 transition-colors"
                    >
                      <td className="px-4 py-4 align-top">
                        <div className="font-semibold text-gray-900 max-w-[240px] truncate">
                          {req.productName}
                        </div>
                        {category && (
                          <div className="text-xs text-blue-700 font-medium mt-1 inline-block px-2 py-0.5 rounded-full bg-blue-100">
                            {category}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-4 align-top text-gray-900">
                        <div className="font-semibold">{req.customerName}</div>
                      </td>
                      <td className="px-4 py-4 align-top text-xs text-gray-700">
                        <div className="flex items-center gap-2 mb-1">
                          <Mail size={12} className="text-gray-400 shrink-0" />
                          <span className="truncate max-w-[150px]">{req.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={12} className="text-gray-400 shrink-0" />
                          <span>{req.phone}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <div className="text-xs text-gray-700 max-w-sm line-clamp-3 leading-relaxed">{req.message}</div>
                      </td>
                      <td className="px-4 py-4 align-top text-xs text-gray-500 whitespace-nowrap">
                        {formatDateTime(req.createdAt)}
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  if (authLoading || !isAuthenticated) {
    return authLoading ? (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    ) : (
      <LoginScreen
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        authError={authError}
        loggingIn={loggingIn}
        handleLogin={handleLogin}
      />
    )
  }

  // Authenticated Dashboard View
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar - Desktop and Mobile */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
        isMobileOpen={isSidebarOpen}
        setIsMobileOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 lg:p-8 p-4 pt-20 lg:pt-8 overflow-y-auto">
        {/* Mobile Sidebar Toggle Button */}
        <div className="fixed top-4 left-4 z-30 lg:hidden">
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-3 bg-white border border-gray-200 rounded-full shadow-lg text-blue-600"
            >
                <Menu size={24} />
            </button>
        </div>

        <section className="bg-white rounded-3xl shadow-xl p-6 md:p-8 min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-4rem)]">
          {activeTab === "messages" ? <MessagesTab /> : <ProductRequestsTab />}
        </section>
      </main>
    </div>
  )
}