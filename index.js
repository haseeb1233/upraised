const express = require("express")

const app = express()
const {connection} = require("./db/db")
const {MCQ} = require("./model/mcq.model")

app.use(express.json())

app.post("/", async (req,res) =>{
   
    try {
       
       const mcq = new MCQ(req.body)
       console.log(mcq)
       await mcq.save()
       res.send("Mcq is saved succesfully")
    } catch (error) {
        res.status(404).send(error.message)
    }
})


app.get("/mcq", async(req,res) =>{
    try {
        const mcqQuestion = await MCQ.find()

         res.send(mcqQuestion)
    } catch (error) {
        res.send(error)
    }
})


app.delete("/:id", async (req,res) => {
    try {
        const {id} = req.params
     await MCQ.findByIdAndDelete({_id:id})
     res.send("Mcq deleted")
    } catch (error) {
        res.send(error.message)
    }

})





app.listen("8080",async () =>{
   try {
    
    await connection
    console.log("connected to database")

   } catch (error) {
     console.log(error)
   }
   console.log("server is connected")
})