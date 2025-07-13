import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, LogIn, KeyRound, Speech, LogOut, LayoutDashboard } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { state: isLoggedIn, name: username } = useAuth();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  function handleLogout() {
    localStorage.setItem("loggedIn", JSON.stringify({ state: false, name: "" }));
    localStorage.setItem("analysisResult", JSON.stringify(""));
    navigate("/login");
  }

  return (
    <nav className="w-full bg-background/80 backdrop-blur-md z-50 border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-primary transition-colors duration-300">
          <span className="inline-flex items-center gap-2">
            <Speech />
            VOCALS
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {!isAuthPage && (
            <>

              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold">Welcome, {username}</span>

                  <Link to="/dashboard">
                    <Button className="transition-all duration-300 hover:scale-105">
                      <LayoutDashboard className="mr-2" />
                      Dashboard
                    </Button>
                  </Link>

                  <Button
                    className="transition-all duration-300 hover:scale-105"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" className="transition-all duration-300 hover:scale-105">
                      <span className="inline-flex items-center gap-2">
                        <LogIn />
                        Log In
                      </span>
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="transition-all duration-300 hover:scale-105">
                      <span className="inline-flex items-center gap-2">
                        <KeyRound />
                        Sign Up
                      </span>
                    </Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
