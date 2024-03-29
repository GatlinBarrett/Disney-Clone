import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  // const [user, setUser] = React.useState({});
  // const [session, setSession] = React.useState({});
  // const [account, setAccount] = React.useState({});
  // const hardcodedId = "ku1qepYonFzIwuZVVHGv";
  // const hardcodedAcc = "JugCWjkd5VNJEkTiGgFo"

  // async function getAccountData() {
  //   // const docRef = getDoc(collection(db, "accounts"), account);
  //   const docRef = doc(db, "accounts", hardcodedAcc);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     const userData = docSnap.data();
  //     // console.log("Document data:", userData);
  //     setUser(userData);
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     // console.log("No such document!");
  //   }
  // }
  // getAccountData();

  // async function getUserData() {
  //   const docRef = doc(db, "users", hardcodedId);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     const userData = docSnap.data();
  //     // console.log("Document data:", userData);
  //     setUser(userData);
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }
  // getUserData();

  // console.log(db)

  // const docRef = doc(db, "users", hardcodedId);
  // // const profilePic = getDoc(db, "users", hardcodedId);

  // async function getImage() {
  //   const postCollectionRef = await query(
  //     collection(db, "users"),
  //     where("image", "==", user.image)
  //   );
  //   const { docs } = await getDocs(postCollectionRef);
  //   console.log(docs.map((doc) => doc.data()));
  // }

  // const docRef = doc(db, "users", uid);
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      ></Image>
      {session && (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          onClick={signIn}
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
        >
          Login
        </button>
      ) : (
        <img
          src={session.user.image}
          alt=""
          className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
          onClick={signOut}
        />
      )}
    </div>
  );
}

export default Header;
