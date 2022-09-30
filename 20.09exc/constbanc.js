import { ContaBancaria } from "./SRC/Lista2ContaBancaria1909";

let conta1 = new ContaBancaria ("G.Jesus", "4108-9", "142986", 600)

conta1.verSaldo();
conta1.sacar(200);
conta1.verSaldo()
conta1.deposito(7000);
conta1.verSaldo();