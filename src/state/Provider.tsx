"use client";

import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import Loading from "app/loading";

export const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        {children}

        <ToastContainer position="bottom-right" pauseOnHover closeOnClick={false} autoClose={5000} hideProgressBar={false} closeButton={false} toastClassName={() => "!bg-transparent !p-0"} draggable />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      ;
    </Suspense>
  );
}
