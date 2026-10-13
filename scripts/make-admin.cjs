const { initializeApp, cert, deleteApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const serviceAccount = require("./serviceAccountKey.json");


const app = initializeApp({
  credential: cert(serviceAccount),
});

async function makeAdmin() {
  try {
    const auth = getAuth(app);

    // Copy this from Firebase → Authentication → Users.
    const uid = "TceILhpdwnWt8Rom1qATI9A0lM63";

    const user = await auth.getUser(uid);

    await auth.setCustomUserClaims(uid, {
      ...user.customClaims,
      admin: true,
    });

    console.log(`Admin access granted to ${user.email}`);
  } catch (error) {
    console.error("Failed to grant admin access:", error.message);
    process.exitCode = 1;
  } finally {
    await deleteApp(app);
  }
}

makeAdmin();