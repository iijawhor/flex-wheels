import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { firebaseApp } from "../firebaseConfig/firebaseConfigurations";
const auth = getAuth(firebaseApp);
export class FirebaseAuthentication {
  async createUser({ email, password }) {
    try {
      const userAccount = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userAccount) {
        // return userAccount
        this.login({ email, password });
      }
    } catch (error) {
      console.log("firebase create user error ", error);
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Error in firebase login");
    }
  }
  async getCurrentUser() {
    const user = await new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          // Unsubscribe to avoid memory leaks
          unsubscribe();

          if (user) {
            resolve(user);
          } else {
            console.log("No user");
            resolve(null); // Resolve with null if there's no user
          }
        },
        (error) => {
          console.error("Error fetching user", error);
          resolve(null); // Resolve with null in case of an error
        }
      );
    });

    return user;
  }
  async logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error in ", error);
    }
  }
}
const authService = new FirebaseAuthentication();
export default authService;
