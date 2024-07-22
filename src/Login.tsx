import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";

export default function Login() {
  return (
    <div className="bg-gray-900 dark:bg-white h-screen flex items-center justify-center">
      <div className="">
        <Card className="w-[650px] space-y-2 shadow-2xl transition-all focus-within:scale-105">
          <CardHeader className=" ">
            <img
              className="w-auto gap-2 h-fit rotate-45  hover:scale-110    transition-all"
              src="./assets/[removal.ai]_d76f383c-5f05-4330-8fe2-624f2c4ada38-default_a_sleekly_designed_logo_for_a_task_list_app_the_main_s_0_5511c072-b349-48a0-a5ff-be67d0bab91f_0.png"
              alt="img"
            />
            <CardTitle className="gap-2 flex text-gray-700 items-center justify-center text-4xl font-semibold ">
              <div className="">Login</div>
            </CardTitle>
            <CardDescription className="flex items-center justify-center text-2xl font-semibold">
              Faça o Login para visualizar a pagina
            </CardDescription>
          </CardHeader>
          <CardContent className=" text-xl text-center items-center justify-center">
            <form className="text-3xl">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="username">Usuário</label>
                  <Input
                    className="border-slate-900 ring-1 ring-blue-300"
                    id="username"
                    placeholder="Seu usuário"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="password">Senha</label>
                  <Input
                    className="border-slate-900 ring-1 ring-blue-300"
                    type="password"
                    id="password"
                    placeholder="Coloque sua senha"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="gap-8 flex justify-center">
            <a href="Login.tsx">
              <div className="w-full hover:scale-110 transition-all row-auto grid items-center justify-center">
                <Button className=" w-full flex-1 gap-2 text-1xl flex shadow-2xl hover:  text-white hover:scale-110 transition-all fill-white">
                  Login
                  <LogIn />
                </Button>
              </div>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
