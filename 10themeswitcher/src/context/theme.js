import { createContext , useContext } from "react";

// another way of creating context
// merging create context and context provider

// creating context with values and fns directly
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: () => {},
    lightTheme: () => {},
});


// custom hook
export default function useTheme(){
    return useContext(ThemeContext);
}