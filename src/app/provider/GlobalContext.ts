import { User } from "@/model/User";
import { createContext } from "react"; // Correct import for createContext

interface GlobalContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType>({
    user: null,
    setUser: () => { },
    isLoggedIn: false,
    setIsLoggedIn: () => { },
});

export default GlobalContext;