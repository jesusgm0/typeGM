
import { Cachorro } from "./SRC/cachorro";
import { Cavalo } from "./SRC/cavalo";
import { Preguica } from "./SRC/preguiça";


let cachorro1 = new Cachorro ("Mocó", 6);
let cavalo1 = new Cavalo ("Holandes Voador", 15);
let preguiça1 = new Preguica ("Flash", 12);

cachorro1.Correr();
cachorro1.EmitirSom();
cavalo1.Correr();
cavalo1.EmitirSom();
preguiça1.EmitirSom();
preguiça1.escalarArvore();