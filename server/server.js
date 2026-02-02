import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDb from './configs/mongoDb.js'

// clerk
import {clerkMiddleware} from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js'

connectDb()

const app = express()
app.use(cors())  //Enable Cross-Origin resources sharing

// middlewares
app.use(express.json())
app.use(clerkMiddleware())

const PORT = process.env.PORT || 4000

// Api to listen to clerk webhooks
app.use('/api/clerk', clerkWebhooks)

app.get('/', (req, res) =>{res.send("API IS WORKING")})





app.listen(PORT, () =>console.log(`Server running on port http://localhost:${PORT}`))

