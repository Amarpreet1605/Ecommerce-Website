const mongoose = require('mongoose');
const path = require(`path`);
const cors = require("cors");
const express = require('express');
const env = require('dotenv');
const app = express();
env.config({ path : './.env'});
const db = process.env.MONGO;
const authRoutes = require(`./routes/auth`);
const adminRoutes = require(`./routes/admin/auth`);
const categoryRoutes = require(`./routes/category`);
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const initialDataRoutes = require('./routes/admin/initialData');
const pageRoutes = require('./routes/admin/page');
const addressRoutes = require('./routes/address');
const orderRoutes = require('./routes/order');
const adminOrderRoute = require("./routes/admin/order.routes");


mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`Connection Successful`);
}).catch((err) => {
    console.log(`No Connection ${err}`);
});


app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use(`/api`, authRoutes);
app.use(`/api`, adminRoutes);
app.use(`/api`, categoryRoutes);
app.use(`/api`, productRoutes);
app.use(`/api`, cartRoutes);
app.use(`/api`, initialDataRoutes);
app.use(`/api`, pageRoutes);
app.use(`/api`, addressRoutes);
app.use(`/api`, orderRoutes);
app.use(`/api`, adminOrderRoute);


app.listen(process.env.PORT, () => {
    console.log(`Listening to Server ${process.env.PORT}`);
});