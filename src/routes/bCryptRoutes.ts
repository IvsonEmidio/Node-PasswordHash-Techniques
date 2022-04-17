import { Application } from "express";
import BCryptController from "../controllers/BCryptController";

export default function bCryptRoutes(app: Application) {
    const controller = new BCryptController();
    app.get(
        '/hash-password-bcrypt/:password',
        controller.hashPassword
    );

    app.get(
        '/compare-password-bcrypt',
        controller.comparePassword
    )
}