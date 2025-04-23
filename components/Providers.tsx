"use client"; // Mark this as a Client Component

import { Provider } from "react-redux";
import { store } from "../utils/store"; // Import the Redux store

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
