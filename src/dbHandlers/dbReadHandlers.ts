import { db } from "../firebaseConfig";

export default function testRead() {
    console.log("Reading");
    db.ref("Letterbox_database").child("event_list").get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
