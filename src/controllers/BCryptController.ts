import { Request, Response } from "express";
import bcrypt from "bcrypt";

export default class BCryptController {

    public async hashPassword(req: Request, res: Response) {
        try {
            let password: string = req.params.password;
            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(password, salt);

            return res.status(200).json({
                message: 'successfully hashed your password',
                data: {
                    hashedPassword
                }
            })
        } catch (err) {
            return res.status(500).json({
                message: 'An error has occurred when hashing your password.',
                errors: { err }
            });
        }
    }

    public async comparePassword(req: Request, res: Response) {
        try {
            let plainPassword: string = req.body.password;
            let hashedPassword: string = req.body.hashedPassword;
            let isPasswordEquals = await bcrypt.compare(plainPassword, hashedPassword);
            let result = {
                message: 'Passwords are equals!',
                statusCode: 200
            };

            if (!isPasswordEquals) {
                result.message = 'Passwords are not equals!';
                result.statusCode = 403;
            }

            return res.status(result.statusCode).json({
                message: result.message
            });

        } catch (err) {
            return res.status(500).json({
                message: 'An error has occurred when comparing passwords',
                errors: { err }
            });
        }
    }

}