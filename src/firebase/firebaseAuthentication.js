import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { firebaseApp } from "../firebaseConfig/firebaseConfigurations";
const auth = getAuth(App);
export class FirebaseAuthentication {
  async createUser({ email, password }) {
    try {
      const userAccount = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userAccount) {
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
  async getUser() {
    try {
      const user = await onAuthStateChanged(auth, (user) => {
        if (user) {
          return user;
        } else return null;
      });
    } catch (error) {
      console.log("firebase error in getUser method ", error);
    }
  }
}
const authService = new FirebaseAuthentication();
export default authService;
