import { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/Loader";
import {Toaster} from 'react-hot-toast'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
          <html lang="en" suppressHydrationWarning>
            <body
            >
              <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Suspense fallback={<Loader />}>
                <div className="min-h-screen">
                    <Navbar />
                    <main className="py-8">
                      {/* Container */}
                      <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                          <div className="hidden lg:block lg:col-span-3">
                            <Sidebar />
                          </div>
                          <div className="lg:col-span-9">
                            
                              {children}
                            
                          </div>
                        </div>
                      </div>
                    </main>
                </div>
                <Toaster />
              </Suspense>
            </ThemeProvider>
            </body>
          </html>
      </ClerkProvider>
     
    
  );
}
