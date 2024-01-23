import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-provider";
import DashboardLayout from "./Layout/dashboard/Index";
import Dashboard from "./views/dashboard/Index";
import CreateFeedback from "./views/create-feedback/Index";
import AllFeedbacks from "./views/all-feedback/Index";
import CreateOffer from "./views/create-offers/Index";
import AllOffers from "./views/all-offers/Index";
import UserFeedbackForm from "./views/user-feedback-form/Index";
import { Toaster } from "react-hot-toast";
import SigninDashboard from "./features/siginDashboard";
import PersistLogin from "./features/persistLogin";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SigninDashboard />} />
            <Route element={<PersistLogin />}>
              <Route path="/app" element={<DashboardLayout />}>
                <Route path="" element={<Dashboard />} />
                <Route path="create-feedback" element={<CreateFeedback />} />
                <Route path="all-feedbacks" element={<AllFeedbacks />} />
                <Route path="create-offers" element={<CreateOffer />} />
                <Route path="all-offers" element={<AllOffers />} />
              </Route>
            </Route>
            <Route
              path="/:company/:id/feedback"
              element={<UserFeedbackForm />}
            />
          </Routes>
        </AuthProvider>
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "24px" }}
          toastOptions={{
            success: {
              duration: 6000,
              style: {
                border: "1.5px solid #38BB5C",
              },
            },
            error: {
              duration: 7000,
              style: {
                border: "1.5px solid #FC6161",
              },
            },
            style: {
              fontFamily: "Outfit",
              fontWeight: "400",
              fontSize: "13.5px",
              maxWidth: "460px",
              padding: "12px 16px",
              backgroundColor: "#F2FFF5",
              color: "#666",
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
