import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();


export { firebase, database as default };

//
// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });
//
// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });
//
// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //
// //     console.log(expenses)
// //   });
//
// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //     const expenses = [];
// //
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //
// //     console.log(expenses)
// //   });
//
// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: 'Jan rent',
// //   amount: 1234,
// //   createdAt: 123456
// // });
//
// // database.ref('notes/-L7yWuHolxppOAsLwwbH').remove();
//
// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React, Angular, Vue'
// // });
//
// // database.ref().on('value', (snapshot) => {
// //   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`)
// // });
//
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e)
// // });
//
//
// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   }).catch((e) => {
// //     console.log('Error fetching data', e);
// //   });
//
// // database.ref().set({
// //   name: 'Yuval Yacoby',
// //   age: 30,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Tel Aviv',
// //     country: 'Israel'
// //   }
// // }).then(() => {
// //   console.log('data is saved')
// // }).catch((e) => {
// //   console.log('This failed.', e)
// // });
// //
// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });
//
// // database.ref('isSingle')
// // .remove()
// // .then(() => {
// //   console.log('data was removed');
// // }).catch((e) => {
// //   console.log('did not remove data', e)
// // });
