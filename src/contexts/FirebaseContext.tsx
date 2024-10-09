import { createContext, useContext } from "solid-js";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const FirebaseContext = createContext<{
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
}>();

export const FirebaseProvider = (props: any) => {
  const firebaseConfig = {
    // Add your Firebase config here
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return (
    <FirebaseContext.Provider value={{ app, auth, db }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};