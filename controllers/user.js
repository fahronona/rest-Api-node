import User from "../models/userModel.js";


const getReadUserById = async(req, res) => {

    const response = await User.findUser(req.params.id);


    if (response.length != null) {

        const resJson = {
            status_code: 200,
            status_name: "Found",
            data: response
        }
        res.status(200).send(resJson)
    } else {

        const resJson = {
            status_code: 200,
            status_name: "Not Found",
            data: response
        }
        res.status(200).send(resJson)
    }

}
const getReadUser = async(req, res) => {
    const response = await User.findAllUser();
    if (response.length != null) {


        const resJson = {
            status_code: 200,
            status_name: "Found",
            data: response
        }
        res.status(200).send(resJson)
    } else {

        const resJson = {
            status_code: 200,
            status_name: "Not Found",
            data: response
        }
        res.status(200).send(resJson)
    }


}

const postUser = async(req, res) => {

    const user = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        id_jenis_kelamin: req.body.id_jenis_kelamin
    }

    const response = await User.addUser(user);
    const resJson = {
        status_code: 200,
        status_name: "Sukses",
    }
    res.status(200).send(resJson)


}

export default { getReadUserById, getReadUser, postUser };