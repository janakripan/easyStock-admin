import { SearchProvider } from "../contexts/SearchContext";
import { SidebarProvider } from "../contexts/SidebarContext";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <SearchProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}
