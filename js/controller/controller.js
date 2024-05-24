import { 
    selecTCount,
    selectCountAll,
} from "../model/escolas.model.js";

const getRegioes = async () => {
    const regioes = ["norte", "nordeste", "centro", "sudeste", "sul", "brasil"];
    const norte = document.getElementById('norte-val');
    const nordeste = document.getElementById('nordeste-val');
    const centro = document.getElementById('centro-val');
    const sudeste = document.getElementById('sudeste-val');
    const sul = document.getElementById('sul-val');
    const brasil = document.getElementById('brasil-val');
    let total = 0;

    regioes.forEach(async (regiao) => {
        const elemento = document.getElementById(`${regiao}-val`);

        if (regiao != 'brasil') {
            let valor = await selecTCount(regiao);

            elemento.innerHTML = valor;
            console.log(valor)
            total += valor
        }

    })

    console.log("Aqui" + total)

}

getRegioes()