import User from "../models/User.js"
import mongoose from "mongoose";
import { detailsByIDService } from "../services/detailsById.js"
import { listService } from "../services/listSevice.js"
import { deleteService, updateService } from "../services/crud.js";
import { msgBody } from "../utils/mailGenerator/actionMsg.js";
import { sendEmail } from "../utils/mail.js";
import { createError } from "../utils/error.js";
import { IsEmail } from "../utils/fromHelper.js";
import { cloudinaryDeleteImg, productImageUpload } from "../utils/cloudinary.js";

export const addAdmin = async (req, res, next) => {
    try {
        if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.address || !req.body.phone || !req.file)
            return next(createError(401, "Please fill the all requried fields."));
        else if (IsEmail(req.body.email))
            return next(createError(401, "Invalid email address."));
        else {
            const user = await User.findOne({ email: req.body.email })
            if (user) return next(createError(400, "Email has already been registered."));
            else {
                req.body.password = "admin012"
                req.body.isAdmin = true
                if (req.file)
                    req.body.photo = await productImageUpload(req.file, `Alumni-Management/Users`)
                const newUser = new User(req.body)
                let data = await newUser.save();
                if (data) {
                    const resetUrl = `${process.env.ADMIN_FRONTEND_URL}/auth/signin`;
                    let mailBody = {
                        name: newUser.firstname,
                        intro: `You have received this email because you have been appointe as a new admin in IIUC Alumni website.\n Your credentials is:- \n Email: ${newUser.email}\nPassword: admin012`,
                        instructions: 'Click the button below to login your account and change your password :',
                        color: '#50C878',
                        text: 'Login',
                        link: resetUrl,
                        outro: 'Please change your password ASAP.'
                    };
                    const message = msgBody(mailBody);
                    const subject = "Change Password Request";
                    const send_to = newUser.email;

                    await sendEmail(subject, message, send_to);
                    const { password, ...otherDetails } = newUser._doc;
                    return res.status(200).json({ data: {...otherDetails}, msg: "Admin has been created."})
                }
            }
        }
    } catch (err) {
        next(err)
    }
}

export const userDetailsById = async (req, res, next) => {
    let match = {
        _id: mongoose.Types.ObjectId(req.params.id)
    }
    let project = { password: 0, isAlumni: 0, isAdmin: 0, createdAt: 0, updatedAt: 0 }
    let result = await detailsByIDService(req, User, match, project)
    if (result) res.status(200).json(result)
}

export const updateUser = async (req, res, next) => {
    try {
        const user = await User.findById(
            req.params.id,
        );
        if (!user) return next(createError(404, "User not found."));
        if (req.file) {
            if (user.photo) await cloudinaryDeleteImg(user.photo.publicId)
            req.body.photo = await productImageUpload(req.file, `Alumni-Management/Users`)
        }
        const updateProfile = await updateService(req, User)
        const { password, createdAt, updatedAt, ...otherDetails } = updateProfile.data._doc;
        if (updateProfile.status === 200) return res.status(200).json({ data: { ...otherDetails } })
        else return res.status(401).json("Something wents wrong.")
    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(
            req.params.id,
        );
        if (!user) return next(createError(404, "User not found."));
        if (user.photo) await cloudinaryDeleteImg(user.photo.publicId)
        let result = await deleteService(req, User);
        if (result.status === 200) return res.status(200).send("User has been deleted.")
        else return res.status(401).json(result.data)
    } catch (err) {
        next(err);
    }
}

export const alumniList = async (req, res, next) => {
    let searchRgx = { '$regex': req.query.searchKey, $options: 'i' }
    let searchArray = [{ firstname: searchRgx }, { lastname: searchRgx }, { dept: searchRgx }, { company: searchRgx }, { position: searchRgx }]
    let match = { isAlumni: true }
    let project = { password: 0, email: 0, gender: 0, isAlumni: 0, isAdmin: 0, studentId: 0, canView: 0, updatedAt: 0 }
    let sort = { createdAt: -1 }
    let result = await listService(req, User, searchArray, match, project, sort)
    if (result) res.status(200).json(result)
}

export const adminList = async (req, res, next) => {
    let searchRgx = { '$regex': req.query.searchKey, $options: 'i' }
    let searchArray = [{ firstname: searchRgx }, { lastname: searchRgx }, { address: searchRgx }, { phone: searchRgx }]
    let match = { isAdmin: true }
    let project = { password: 0, gender: 0, isAlumni: 0, isAdmin: 0, canView: 0, updatedAt: 0 }
    let sort = { createdAt: -1 }
    let result = await listService(req, User, searchArray, match, project, sort)
    if (result) res.status(200).json(result)
}

export const studentList = async (req, res, next) => {
    let searchRgx = { '$regex': req.query.searchKey, $options: 'i' }
    let searchArray = [{ firstname: searchRgx }, { lastname: searchRgx }, { studentId: searchRgx }]
    let match = { isAdmin: false, isAlumni: false }
    let project = { password: 0, gender: 0, isAlumni: 0, isAdmin: 0, canView: 0, updatedAt: 0 }
    let sort = { createdAt: -1 }
    let result = await listService(req, User, searchArray, match, project, sort)
    if (result) res.status(200).json(result)
}