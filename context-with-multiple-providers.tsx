import { useContext } from 'react';
import { AuthContext, ThemeContext } from './context'; // assuming these are imported

interface CombinedContextProps {
  auth: any; // Replace `any` with your specific auth type
  theme: any; // Replace `any` with your specific theme type
}

const useCombinedContext = (): CombinedContextProps => {
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  if (!auth || !theme) {
    throw new Error("useCombinedContext must be used within its corresponding providers");
  }

  return { auth, theme };
};

export default useCombinedContext;
