import { Router } from "express";
import {changeCurrentPassword,
    getCurrentUser, 
    getUserChannelProfile, 
    getUserWatchHistory, 
    loginUser, logoutUser, 
    refreshAccessToken, 
    registerUser, 
    updateAccountDetails, 
    updateAvatar, 
    updateCoverImage } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verfiyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

router.route("/login").post(loginUser)

// secured Routes
router.route("/logout").post(verfiyJWT, logoutUser)
router.route("/refreshToken").post(refreshAccessToken)
router.route("/changePassoword").post(verfiyJWT, changeCurrentPassword)
router.route("/currentUser").get(verfiyJWT, getCurrentUser)
router.route("/updateDetails").patch(verfiyJWT, updateAccountDetails)
router.route("/updateAvatar").patch(verfiyJWT, upload.single("avatar"), updateAvatar)
router.route("/updateCoverImage").patch(verfiyJWT, upload.single("coverImage"), updateCoverImage)
router.route("/channel/:username").get(verfiyJWT, getUserChannelProfile)
router.route("/history").get(verfiyJWT, getUserWatchHistory)


export default router