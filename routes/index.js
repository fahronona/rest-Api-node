import express from "express";
import cntrl from "../controllers/user.js";
import bodyParser from "body-parser";


const router = express.Router();
const app = express();
const urlEncode = app.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/read', cntrl.getReadUser);
router.post('/adduser', urlEncode, cntrl.postUser);
router.post('/searchuser', urlEncode, cntrl.searchUser);
router.get('/read/:id', cntrl.getReadUserById);

export default router;