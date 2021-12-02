const router = require('express').Router()
const authenticateController = require('../controllers/authenticate')
const validationMiddleware = require('../middleware/validationMiddleware')
const { check } = require('express-validator')

router.post(
    "/login",
    [
        check('userName')
            .isLength({ min:5 })
            .withMessage("Kasutajanimi peab olema 5 karakterit pikk!")
            .trim()
            .exists()
            .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
            .withMessage("Kasutajanimi sisaldab veidraid karaktereid!"),
        check('password')
            .isLength({ min:5 })
            .withMessage("Parool peab olema 5 karakterit pikk!"),
    ],
    validationMiddleware,
    authenticateController.login
)

router.post(
    "/register",
    [
        check('firstName')
            .isLength({ min:1 })
            .withMessage("Eesnimi peab olema 1 karakter pikk!")
            .trim()
            .exists()
            .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
            .withMessage("Nimi sisaldab veidraid karaktereid!"),
        check('lastName')
            .isLength({ min:2 })
            .withMessage("Perenimi peab olema 2 karakterit pikk!")
            .trim()
            .exists()
            .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
            .withMessage("Nimi sisaldab veidraid karaktereid!"),
        check('userName')
            .isLength({ min:3 })
            .withMessage("Kasutajanimi peab olema 3 karakterit pikk!")
            .trim()
            .exists()
            .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
            .withMessage("Nimi sisaldab veidraid karaktereid!"),
        check("email")
            .isEmail()
            .normalizeEmail()
            .withMessage("Email pole õigel kujul!"),
        check('password')
            .isLength({ min: 5 })
            .withMessage("Parool peab olema 5 karakterit pikk!"),
    ],
    validationMiddleware,
    authenticateController.signUp
)

module.exports = router