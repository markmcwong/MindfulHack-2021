import firebase from "firebase";
import "firebase/firestore";
import store from "../state/store";
import { firebaseConfig } from "./firebaseConfig";
import * as firestoreTypes from "@firebase/firestore-types";
import { parseGroups, parseMessages } from "./util";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export const createNewUserRecord = async (
  name: string,
  email: string,
  userId: string
) => {
  db.collection("users").doc(userId).set({
    email: email,
    name: name,
  });
};

export const getUserRecord = async (
  userId: string,
  isNewUser: boolean = false
) => {
  console.log("userId : " + userId);
  const record = await db.collection("users").doc(userId).get();
  console.log("current user: " + record.data()!);
  store.dispatch({
    type: "READ_USER_DETAILS",
    name: record.data()!.name,
    isPsych: record.data()!.isPsych,
    uid: userId,
    isNewUser: isNewUser,
  });
};

export const fetchGroupByUserID = (uid: string, callback: Function) => {
  console.log("start this" + uid);
  const groupRef = db.collection("message");
  groupRef
    .where("members", "array-contains", db.collection("users").doc(uid))
    .onSnapshot((querySnapshot: firestoreTypes.QuerySnapshot) => {
      console.log("hiii" + querySnapshot.size);
      let groups: any = [];
      querySnapshot.forEach((doc: any) => {
        const id = doc.id;
        console.log("hi");
        if (doc) groups.push({ id, ...doc.data() });
      });
      console.log(groups);
      callback(parseGroups(uid, groups));
    });
};

export const getUserDetails = async (userId: string, callback: Function) => {
  const ref = await db.collection("users").doc(userId).get();
  // console.log(data.data());
  const data = ref.data();
  console.log(data);
  callback(data);
};

export const fetchMessagesByGroupId = async (
  groupId: string,
  callback: Function
) => {
  const messageRef = db.collection("message");
  messageRef
    .doc(groupId)
    .collection("messages")
    .orderBy("createdAt", "desc")
    .onSnapshot((querySnapshot) => {
      let messages: any = [];
      querySnapshot.forEach((doc: any) => {
        const id = doc.id;
        // console.log(doc.data());
        if (doc) messages.push({ id, ...doc.data() });
      });
      callback(parseMessages(messages));
    });
};

export const sendNewMessage = async (
  id: string,
  message: string,
  userId: string
) => {
  const messageRef = db.collection("message");
  // console.log(message);
  const newMessage = await messageRef.doc(id).collection("messages").add({
    text: message,
    sentBy: userId,
    createdAt: firebase.firestore.Timestamp.now(),
  });
  messageRef.doc(id).update({
    lastText: message,
    lastSent: firebase.firestore.Timestamp.now(),
  });
  // console.log(newMessage);
};

export const fetchUserDetail = async (ids: any[], callback: Function) => {
  let promises: Promise<any>[] = [];
  let users: any = [];
  ids.forEach(async (id: any) => {
    promises.push(
      id.get().then((doc) => {
        const data: any = doc.data();
        // console.log(data);
        users.push({ email: data.email, name: data.name });
      })
    );
  });
  await Promise.all(promises);
  // console.log(users);
  callback(users);
  // return users;
};

export const connectTwoUsers = async (ids: string[]) => {
  const messageRef = db.collection("message");
  let arefs: string[] = [];
  let brefs: string[] = [];
  let promises: Promise<any>[] = [];
  promises.push(
    db
      .collection("message")
      .where("members", "array-contains", db.collection("users").doc(ids[0]))
      .get()
      .then((docs) => {
        arefs = docs.docs.map((x) => x.id);
      })
  );
  promises.push(
    db
      .collection("message")
      .where("members", "array-contains", db.collection("users").doc(ids[1]))
      .get()
      .then((docs) => {
        brefs = docs.docs.map((x) => x.id);
      })
  );
  await Promise.all(promises);
  const intersected = arefs.filter((element) => brefs.includes(element));
  console.log(intersected);
  if (
    intersected.length == 0 ||
    intersected == null ||
    brefs == null ||
    arefs == null
  ) {
    console.log("yes"!);
    const newMessage = await messageRef.add({
      lastText: "Start your new conversation now!",
      lastSent: firebase.firestore.FieldValue.serverTimestamp(),
      members: ids.map((x) => db.collection("users").doc(x)),
    });
    return newMessage.id;
  } else {
    console.log("no!");
    return intersected[0];
  }
};
// export const fetchConversation = async () => {
//   let messages;
//   console.log("start");
//   const userRef = db.collection("users");
//   const snapshot: firestoreTypes.QuerySnapshot = await userRef
//     .where("languages", "array-contains-any", languages)
//     .get();
//   snapshot.docs.forEach((x) => console.log(x.data()));
// };

export const addNewJournal = async (
  title: string,
  thoughts: string,
  author: string
) => {
  const journalRef = db.collection("journal");
  console.log("add new journal from " + author);
  const newJournal = await journalRef.add({
    title,
    thoughts,
    author: db.collection("users").doc(author),
    createdAt: firebase.firestore.Timestamp.now(),
  });
  return newJournal.id;
};

export const fetchJournals = (author: string, callback: Function) => {
  const journalRef = db.collection("journal");
  // console.log("called fetchJournals");
  journalRef
    .where("author", "==", db.collection("users").doc(author))
    .orderBy("createdAt", "desc")
    .onSnapshot((querySnapshot) => {
      let journals: any = [];
      querySnapshot.forEach((doc: any) => {
        const id = doc.id;
        if (doc) journals.push({ id, ...doc.data() });
      });
      // console.log(journals);
      callback(journals);
    });
};

export const deleteJournal = async (journalId: string) => {
  const journalRef = db.collection("journal");
  journalRef.doc(journalId).delete();
};

export const updateJournal = async (
  journalId: string,
  title: string,
  thoughts: string
) => {
  const journalRef = db.collection("journal");
  journalRef.doc(journalId).update({
    title,
    thoughts,
  });
};

// new app

export const updateNewUserPreferences = async (
  preferences: string[],
  userId: string
) => {
  console.log(preferences);
  const usersRef = db.collection("users");
  await usersRef.doc(userId).update({
    preferences: preferences,
  });
  console.log("works");
  store.dispatch({
    type: "FINISH_ONBOARD",
  });
};

export const updateNewUserInfo = async (
  firstName: string,
  lastName: string,
  nationality: string,
  phoneNumber: string,
  country: string,
  city: string,
  addressLine1: string,
  addressLine2: string,
  postalCode: string,
  userId: string
) => {
  const usersRef = db.collection("users");
  console.log("add new users from " + firstName + "" + lastName);
  const newUserRecord = await usersRef.doc(userId).update({
    firstName: firstName,
    lastName: lastName,
    nationality: nationality,
    phoneNumber: phoneNumber,
    country: country,
    city: city,
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    postalCode: postalCode,
    // user: db.collection("users").doc(userId),
    createdAt: firebase.firestore.Timestamp.now(),
  });
  console.log("works");
  // return newUserRecord.id;
};
