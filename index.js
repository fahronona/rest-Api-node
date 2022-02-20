import express from "express";
import router from "./routes/index.js";



const app = express();
try {

    console.log('Database connected')
} catch (erro) {
    console.log('connection error:', error)
}

app.use(express.json());
app.use('/user', router);


app.listen(3000, () => console.log('running in 3000'))