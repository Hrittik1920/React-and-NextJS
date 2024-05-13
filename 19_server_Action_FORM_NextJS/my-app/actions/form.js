"use server"
import fs from 'fs/promises'

export const submitAction = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("add"))
    let a = await fs.appendFile("data.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}\n`)
}