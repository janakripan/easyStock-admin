import { SearchProvider } from "../contexts/SearchContext";
import { SidebarProvider } from "../contexts/SidebarContext";

export default function AppProviders({ children }) {
  return (
    <SearchProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </SearchProvider>
  );
}
