import bcrypt from "bcrypt";
import { readData } from "./db.js";
const SALT_ROUND = 10;

 const encryptedPassword=(localPassword)=> {
  try {
    const storedHashedPassword = bcrypt.hashSync(localPassword, SALT_ROUND);
    return storedHashedPassword;
  } catch (err) {
    console.error(err);
  }
  return null;
}

async function checkPassword(userEmail, localPassword) {
  try {
    const data = await readData(userEmail);
    const dbPassword = data.password;
    
    // Wrap bcrypt.compare in a Promise
    const isValid = await new Promise((resolve, reject) => {
      bcrypt.compare(localPassword, dbPassword, (err, valid) => {
        if (err) return reject(err); // Reject promise if there's an error
        resolve(valid); // Resolve with the comparison result (true/false)
      });
    });
    
    if (isValid) {
      return data; // Return user data if password is valid
    }
    
    return {}; // Return empty object if password is not valid

  } catch (err) {
    console.error("Error checking password:", err);
    return {}; // Return empty object if there's an error
  }
}



export {encryptedPassword, checkPassword};
