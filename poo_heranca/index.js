class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já foi ligado.`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já foi desligado.`)
            return;
        }
        this.ligado = false;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, wifi) {
        super(nome);
        this.wifi = wifi;
    }

    ligar() {
        console.log(`Olha, você alterou o método ligar.`);
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone("iPhone", "Preto", "iPhone 8");
console.log(s1);

const t1 = new Tablet("iPad", true);
console.log(t1);