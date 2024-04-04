import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./User/controllers/CreateUserController";
import { ListUserController } from "./User/controllers/ListUserController";
import { DeleteUserController } from "./User/controllers/DeleteUserController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

/* ============================== ROTAS DE USER ==============================  */
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    })
    
    fastify.get("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUserController().handle(request, reply)
    })
   
    
    fastify.delete("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply)
    })


    /* ============================== ROTAS DE CATEGORIA ==============================  */
   

}