import bcrypt from 'bcrypt';

export async function encryptPWD(plainPWD){
      return await bcrypt.hash(plainPWD, 8)
} 

export async function comparePWD(plainPWD, encryptedPWD){
      console.log(plainPWD, encryptedPWD)
      return await bcrypt.compare(plainPWD, encryptedPWD)
}