import * as task_repository from "./task.repository"
import * as get_tasks_filter_dto from "./dto/get-tasks-filter.dto"
import * as class_transformer from "class-transformer"
import * as user_entity from "../auth/user.entity"
// @ponicode
describe("getTasks", () => {
    let inst: any

    beforeEach(() => {
        inst = new task_repository.TaskRepository()
    })

    test("0", async () => {
        let param1: any = new get_tasks_filter_dto.getTasksFilterDto()
        await inst.getTasks(param1, class_transformer.plainToClass(user_entity.User,{ username: 123, password: "accessdenied4u", salt: "unsalted_sha1" }))
    })

    test("1", async () => {
        let param1: any = new get_tasks_filter_dto.getTasksFilterDto()
        await inst.getTasks(param1, class_transformer.plainToClass(user_entity.User,{ username: "user-name", password: "$p3onyycat", salt: "X13" }))
    })

    test("2", async () => {
        let param1: any = new get_tasks_filter_dto.getTasksFilterDto()
        await inst.getTasks(param1, class_transformer.plainToClass(user_entity.User,{ username: "user name", password: "accessdenied4u", salt: "sha1" }))
    })

    test("3", async () => {
        let param1: any = new get_tasks_filter_dto.getTasksFilterDto()
        await inst.getTasks(param1, class_transformer.plainToClass(user_entity.User,{ username: 123, password: "$p3onyycat", salt: "randomwalk" }))
    })

    test("4", async () => {
        let param1: any = new get_tasks_filter_dto.getTasksFilterDto()
        await inst.getTasks(param1, class_transformer.plainToClass(user_entity.User,{ username: "username", password: "!Lov3MyPianoPony", salt: "X15" }))
    })

    test("5", async () => {
        let param1: any = new get_tasks_filter_dto.getTasksFilterDto()
        await inst.getTasks(param1, class_transformer.plainToClass(user_entity.User,{ username: "", password: "", salt: "" }))
    })
})
