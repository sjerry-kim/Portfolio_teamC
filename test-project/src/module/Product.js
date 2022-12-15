import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "product", "store");
const docSnap = await getDoc(docRef);

  console.log(docSnap.data('store').set({starlist : '[]'}));