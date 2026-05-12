const ThemeContext = createContext();

# Ensure all the layouts & pages in the app can access our context​
export function ThemeProvider({ children }) {

  # Set the default theme state to light

  const [theme, setTheme] = useState("light");

  # When we want to change update the state
  const toggleTheme = () => {

    setTheme(theme === "light" ? "dark" : "light");

  };

  # Wrap the entire application in the context and pass the state as props​
  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>​

      {children}

    </ThemeContext.Provider>

  );

}