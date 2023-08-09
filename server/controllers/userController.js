import User from "../models/User.js"
import Job from "../models/Job.js"
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
                        intro: `You have received this email because you have been appointe as a new admin in IIUC Alumni website.</br> Your credentials is:- </br> Email: ${newUser.email}</br>Password: admin012`,
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
                    return res.status(200).json({ data: { ...otherDetails }, msg: "Admin has been created." })
                }
            }
        }
    } catch (err) {
        next(err)
    }
}

export const addAlumni = async (req, res, next) => {
    try {
        if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.studentId ||
            !req.body.dept || !req.body.batch || !req.body.position || !req.body.company || !req.body.gender ||
            !req.body.degree || !req.body.phone || !req.body.address)
            return next(createError(401, "Please fill the all requried fields."));
        else if (IsEmail(req.body.email))
            return next(createError(401, "Invalid email address."));
        else {
            const user = await User.findOne({ email: req.body.email })
            if (user) return next(createError(400, "Email has already been registered."));
            else {
                req.body.password = `alum012${req.body.batch}`
                req.body.isAlumni = true
                if (req.file)
                    req.body.photo = await productImageUpload(req.file, `Alumni-Management/Users`)
                const newUser = new User(req.body)
                let data = await newUser.save();
                if (data) {
                    let mailBody = {
                        name: newUser.firstname,
                        intro: 'Greetings from IIUC Alumni Association! We hope this message finds you in good health and high spirits. As a new member of our alumni community, we want to ensure that you stay connected and updated with all the exciting happenings in our alumni network. </br> To maintain accurate and up-to-date records, we kindly request you to review and update your personal information and user credentials. Your updated details will enable us to provide you with tailored alumni news and events.',
                        instructions: `To proceed with the update, simply follow these easy steps: </br> 1. Visit our alumni website at https://iiuc-alumni.onrender.com </br> 2. Log in using your existing credentials username: ${newUser.email}, password: alum012${req.body.batch} . </br> 3. Navigate to the "My Account" section. </br> 4. Review your personal information, including contact details, current occupation, and any other relevant details. </br> 5. If any changes are required, please update the information accordingly. </br> 6. Ensure your user credentials, such as email and password, are accurate and secure. </br> Rest assured that your data security and privacy are of utmost importance to us. We employ robust security measures to safeguard your information and ensure a seamless user experience.`,
                        color: '',
                        text: '',
                        link: '',
                        outro: 'Thank you for being an integral part of our alumni community. Your continued engagement and participation enrich the lives of our fellow alumni and contribute to the collective success of our alma mater. </br></br> Wishing you continued success in your endeavors.'
                    };
                    const message = msgBody(mailBody);
                    const subject = "Change Password Request";
                    const send_to = newUser.email;

                    await sendEmail(subject, message, send_to);
                    const { password, isAdmin, isAlumni, ...otherDetails } = newUser._doc;
                    return res.status(200).json({ data: { ...otherDetails }, msg: "Alumni has been created." })
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
            if (user.photo.publicId) await cloudinaryDeleteImg(user.photo.publicId)
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
        if (user.photo.publicId) await cloudinaryDeleteImg(user.photo.publicId)
        let result = await deleteService(req, User);
        if (result.status === 200) return res.status(200).send("User has been deleted.")
        else return res.status(401).json(result.data)
    } catch (err) {
        next(err);
    }
}

export const alumniList = async (req, res, next) => {
    const Dept = ['CSE', 'EEE', 'ETE', 'BBA', 'ELL']
    let dept

    req.query.dept ? (dept = req.query.dept.split(",")) : (dept = [...Dept]);

    let searchRgx = { '$regex': req.query.searchKey, $options: 'i' }
    let searchArray = [{ firstname: searchRgx }, { lastname: searchRgx }, { dept: searchRgx }, { company: searchRgx }, { position: searchRgx }]
    let match = { isAlumni: true, dept: { $in: dept} }
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

export const countUsers = async (req, res, next) => {
    let userData = await User.find({ isAdmin: false }, { password: 0, company: 0, position: 0, batch: 0, address: 0, phone: 0, gender: 0, isAdmin: 0, canView: 0, updatedAt: 0 }).limit(6).sort("-createdAt")
    let user = await User.countDocuments()
    let alumni = await User.countDocuments({ isAlumni: true })
    let job = await Job.countDocuments({})
    res.status(200).json({ userData: userData, user: user, alumni: alumni, job: job })
}