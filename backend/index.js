const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const userRouter = require('./routes/user.js')
const productRouter = require('./routes/product.js')
const cartRouter = require('./routes/cart.js')
const orderRouter = require('./routes/order.js')
const stripeRouter = require('./routes/stripe.js')
const authRouter = require('./routes/auth.js')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.ATLAS_URI, { useUnifiedTopology: true })
mongoose.connection.once('open', () => console.log("MongoDB server connected successfully!"))

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/api/orders', orderRouter)
app.use('/api/checkout', stripeRouter)

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))