import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, get, set } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const dbConnectionUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGINGSENDER_ID,
      appId: APP_ID,
      measurementId: MEASUREMETN_ID,
    };

    if (!firebase.apps.length) {
      const app = initializeApp(firebaseConfig);
    }
    const db = getDatabase();

    const usersRef = ref(db, 'users/');
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersData = snapshot.val();
          const usersArray = Object.keys(usersData).map((key) => ({
            id: key,
            ...usersData[key],
          }));
          setUsers(usersArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getUserById(userId) {
    const foundUser = users.find(user => user.id === userId);
    if (foundUser) {
      return foundUser;
    } else {
      return undefined;
    }
  }

  function getUserByUsername(userName) {
    const foundUser = users.find(user => user.username === userName);
    if (foundUser) {
      return foundUser;
    } else {
      return undefined;
    }
  }

  function confirmLogIn(userName, password) {
    const foundUser = users.find(user => user.username === userName);
    if (foundUser) {
      if (foundUser.password === password) {
        return true;
      } else {
        console.log("Incorrect password for user " + userName);
        return false;
      }
    } else {
      console.log("User with username " + userName + " not found.");
      return false;
    }
  }

  function updatePointsByUserId(userId, points) {
    const updatedUser = users.map(user => {
      if (user.id === userId) {
        return { ...user, Points: points };
      } else {
        return user;
      }
    });
    setUsers(updatedUser); // Update local state
    
    const db = getDatabase();
    const userRef = ref(db, `users/${userId - 1}/Points`);
    set(userRef, points) // Update only the status in the database
      .then(() => console.log("Task status updated successfully"))
      .catch((error) => console.error("Error updating task status:", error));
  }

    return { users, getUserById, getUserByUsername, confirmLogIn, updatePointsByUserId };
  }

  export default dbConnectionUsers;