import { publicProcedure, router } from "../trpc"

export const userRouter = router({
  getUser: publicProcedure.query(async () => {
    return {
      name: "John",
      age: 30,
    }
  }),
})
