import { createContext, useContext, createSignal, onCleanup, ParentComponent } from 'solid-js';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useFirebase } from './FirebaseContext';

const AuthContext = createContext<User | null>(null);

export const AuthProvider: ParentComponent = (props) => {
  const [user, setUser] = createSignal<User | null>(null);
  const { auth } = useFirebase();

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  onCleanup(() => {
    unsubscribe();
  });

  return (
    <AuthContext.Provider value={user()}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);