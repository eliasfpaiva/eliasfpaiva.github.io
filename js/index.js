const atualizarLinkMapsCasaOracaoLourdes = () => {
    const linkMaps = 'https://www.google.com.br/maps/place/Casa+de+Ora%C3%A7%C3%A3o/@-20.6577768,-43.7967725,19z/data=!4m12!1m6!3m5!1s0xa16024143ecae3:0x2e94f0f40837b0f0!2zQ2FzYSBkZSBPcmHDp8Ojbw!8m2!3d-20.6579626!4d-43.7965926!3m4!1s0xa16024143ecae3:0x2e94f0f40837b0f0!8m2!3d-20.6579626!4d-43.7965926';
    const mensagem = 'Clique aqui para ver a localização no Google Maps';
    const linkCO = document.getElementById('linkCO');
    linkCO.href = linkMaps;
    linkCO.title = mensagem;
    linkCO.target = '_blank';
}

const atualizarPagina = () => {
    atualizarLinkMapsCasaOracaoLourdes();
}

//document.addEventListener('DOMContentLoaded', () => atualizarPagina());
