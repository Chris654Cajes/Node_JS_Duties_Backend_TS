import DutyController from "../controller/DutyController";
import validate from "../helper/validate";
import { createDutySchema, updateDutySchema } from "../schema/DutySchema";
import BaseRoutes from "./base/BaseRouter";

class DutyRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("", validate(createDutySchema), DutyController.create) ;
        this.router.patch("/:id", validate(updateDutySchema), DutyController.update) ;
        this.router.delete("/:id", DutyController.delete) ;
        this.router.get("", DutyController.findAll) ;
        this.router.get("/:id", DutyController.findById) ;   
    }
}

export default new DutyRoutes().router;