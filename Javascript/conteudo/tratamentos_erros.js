var video = Array();

video[1] = Array();
video[1]["nome"] = "Fullmetal Alchemist";
video[1]["categoria"] = "Anime";

function getVideo(video) {

    try {
        console.log(video[0]["nome"]);

    } catch(erro){
        tratarErro(erro);
        console.log("Agora sim podemos tratar esse errro");
        throw new Error("Houve um erro mas não se preocupe, estamos trabalhando nisso agora!!!");

    } finally{
        console.log("Sempre passa por aqui (try / catch)");
    }
    


    console.log("A aplicação não morreu");
}

function tratarErro(e) {
    // lógica para registrar o erro no servidor
    console.log(e);
}

getVideo(video);