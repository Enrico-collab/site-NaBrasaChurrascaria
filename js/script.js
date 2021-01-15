// Aqui eu vou ler tudo que estiver dentro do documento.

$(document).ready(function () {


    // EFEITO DE FUMAÇA BANNER PRINCIPAL
    $(".navbar, .info").ripples({
        dropRadius: 25,
        perturbance: 0.1,
    });

    // BOTÃO TOGGLER 
    // Fazendo o código ao clicar no meu menu de 3 pontinhos, ao diminuir a tela.
    $('.navbar-toggler').click(function () {

        $('.navbar-toggler').toggleClass('change')
    })



    // Magnific popup para quando clicar na imagem.
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enable: true
        }
    });



    // Carrosel de imagens do cardápio
    $('.carrosel').slick({
        centerMode: true,
        mobileFirst: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });



    // CARROSEL DE IMAGENS DO SOBRE NÓS
    $('.fotos-churrascaria').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 700,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'Linear'
    });




    // CARROSEL RECOMENDAÇÕES


    // FIXAR O MENU DE NAVEGAÇÃO NO TOPO DA PAGINA. ( AO DESLIZAR O SITE PARA BAIXO , O MENU NAO SUMIR, FICAR SEMPRE FIXADO NO TOPO.)
    $(window).scroll(function () {
        let position = $(this).scrollTop();

        if (position >= 718) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');

        }


    });




    // BOTÃOZINHO DE VOLTAR AO TOPO
    $(window).scroll(function () {
        let position = $(this).scrollTop();

        if (position >= 718) {
            $('#voltar-topo').addClass('scrollTop');
        } else {
            $('#voltar-topo').removeClass('scrollTop');
        }
    });



    // SUAVIZAÇÃO DO SCROLL PARA NEVAGAÇÃO. ( AO CLICAR NOS MENUS DE NAVEGAÇÃO, IR COM SUAVESSA E NÃO BRUSCAMENTE.)
    $('.nav-item a, header-link, .btn-adiante, #voltar-topo, .navbar-brand').click(function (link) {
        link.preventDefault();
        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 1000);
    })

})