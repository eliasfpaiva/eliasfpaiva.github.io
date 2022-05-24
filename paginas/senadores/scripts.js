class Senador{
    nome_parlamentar;
    partido;
    uf;
    titularidade;
    mandato;
    telefones;
    dtnasc;
    email;
    chefe_gab;
    endereco;

    constructor(nome_parlamentar, partido, uf, titularidade, mandato, telefones, dtnasc, email, chefe_gab, endereco){
        this.nome_parlamentar = nome_parlamentar;
        this.partido = partido;
        this.uf = uf;
        this.titularidade = titularidade;
        this.mandato = mandato;
        this.telefones = telefones;
        this.dtnasc = dtnasc;
        this.email = email;
        this.chefe_gab = chefe_gab;
        this.endereco = endereco;
    }

    static jsonObject(json){
        try {
            return new Senador(
                json["NOME_PARLAMENTAR"],
                json["PARTIDO"],
                json["UF"],
                json["TITULARIDADE"],
                json["MANDATO"],
                json["TELEFONES"],
                json["DTNASC"],
                json["EMAIL"],
                json["CHEFE_GAB"],
                json["ENDERECO"]
            );
        } catch (error) {
            return new Senador();
        }
    }

    toRowTable(){
        let tr = document.createElement('tr');
        tr.id = this.email.split('@')[0];

        let td_nome = document.createElement('td');
        td_nome.textContent = this.nome_parlamentar;
        tr.appendChild(td_nome);

        let td_partido = document.createElement('td');
        td_partido.textContent = this.partido;
        tr.appendChild(td_partido);

        let td_uf = document.createElement('td');
        td_uf.textContent = this.uf;
        tr.appendChild(td_uf);

        let td_titularidade = document.createElement('td');
        td_titularidade.textContent = this.titularidade;
        tr.appendChild(td_titularidade);

        let td_mandato = document.createElement('td');
        td_mandato.textContent = this.mandato;
        tr.appendChild(td_mandato);

        let td_telefones = document.createElement('td');
        td_telefones.textContent = this.telefones;
        tr.appendChild(td_telefones);

        let td_email = document.createElement('td');
        if(this.email.length > 14){
            let a_email = document.createElement('a');
            a_email.textContent = this.email;
            a_email.href= `mailto:${this.email}`;
            td_email.appendChild(a_email);
        }else{
            let spam = document.createElement('span');
            spam.textContent = 'email indiponível';
            td_email.appendChild(spam);
        }
        tr.appendChild(td_email);

        let td_chefe_gabinete = document.createElement('td');
        td_chefe_gabinete.textContent = this.chefe_gab;
        tr.appendChild(td_chefe_gabinete);

        let td_enderecoo = document.createElement('td');
        td_enderecoo.textContent = this.endereco
        tr.appendChild(td_enderecoo);

        return tr;
    }
}