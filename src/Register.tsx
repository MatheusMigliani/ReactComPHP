import { Label } from "@radix-ui/react-label";
import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { LogIn, X } from "lucide-react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function Register() {
  return (
    <div className=" bg-gray-900 dark:bg-white h-screen flex items-center justify-center">
      <div className="">
        <Card className="w-[650px] space-y-2 shadow-2xl   transition-all  focus-within:scale-105 ">
          <CardHeader className="gap-4  ">
            <Button className="w-fit hover:bg-red-600 shadow-xl text-white hover:scale-125 transition-all fill-white">
              <X />
            </Button>

            <img
              className="w-25 gap-2 h-15 rotate-45  hover:scale-105  transition-all"
              src="./assets/[removal.ai]_d76f383c-5f05-4330-8fe2-624f2c4ada38-default_a_sleekly_designed_logo_for_a_task_list_app_the_main_s_0_5511c072-b349-48a0-a5ff-be67d0bab91f_0.png"
              alt="img"
            />

            <CardTitle className="flex text-gray-700 items-center justify-center text-4xl font-semibold ">
              Registro
            </CardTitle>
            <CardDescription className="flex items-center justify-center text-2xl font-semibold">
              Faça o cadastro para visualizar a pagina
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <form className="text-2xl">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    className="border-slate-900 ring-1 ring-blue-300"
                    id="name"
                    placeholder="Nome Completo"
                  />
                </div>
                <div className=" flex flex-col space-y-1.5  ">
                  <div className=" flex flex-col space-y-1.5">
                    <Label htmlFor="user">Usuário</Label>
                    <Input
                      className="border-slate-900 ring-1 ring-blue-300"
                      id="user"
                      placeholder="Usuário"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5  ">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className="border-slate-900 ring-1 ring-blue-300"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5  ">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Senha</Label>
                    <Input
                      className="border-slate-900 ring-1 ring-blue-300"
                      type="email"
                      id="email"
                      placeholder="Senha"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5  ">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Confirme sua senha</Label>
                    <Input
                      className="border-slate-900 ring-1 ring-blue-300"
                      type="email"
                      id="email"
                      placeholder="Confirme sua senha"
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>{" "}
          <CardFooter className="gap-8 flex justify-center">
            a
            <div className=" hover:scale-110 transition-all row-auto grid items-center justify-center">
              <div className="flex text-2xl justify-center font-semibold">
                Finalizar o registro
              </div>
              <Button
                type="submit"
                className="gap-2 text-1xl flex  hover: shadow-2xl text-white hover:scale-110 transition-all fill-white"
              >
                Registrar
                <CheckCircledIcon className="size-5" />
              </Button>
            </div>
            <a href="Login.tsx">
              <div className="hover:scale-110 transition-all row-auto grid items-center justify-center">
                <div className="  flex text-2xl justify-center font-semibold">
                  Já possui conta?
                </div>

                <Button className="gap-2 text-1xl flex shadow-2xl hover:  text-white hover:scale-110 transition-all fill-white">
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
