import { db } from "../firebaseConfig";

export default function testWrite() {
    console.log("Writting");
    const obj = { name: 'testName6', id: 10 };
    db.ref('testDir').set(obj, (error) => error ? console.log(error) : console.log('success o'));
}