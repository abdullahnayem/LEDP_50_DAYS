$(document).ready(function(){
    $('.addclassbtn').click(function(){
        $('#box').addclass('test')
    })
})



$(document).ready(function(){
    $('#box').css('background','green')
    $('#box').css({
        'background':'red',
        'color':'#fff',
        'padding':'10px solid pink',
        'border':'10px solid yellow'
    });
})

$(document).ready(function(){
    $('#box').click(function(){
        $(this).css('background','green')
    })

    $('#box').mouseenter(function(){
        $(this).css('background','yellow')
    })
    $('#box').mouseleave(function(){
        $(this).css('background','red')
    })

    $('#box').on('click mouseenter', function(){
        $(this).toggleClass('test');
    })
    $('#box').on({
        'click':function(){
        $(this).css('background','pink');
        },
        'dblclick':function(){
        $(this).css('background','black');
        },
        'mouseenter':function(){
        $(this).css('background','yellow');
        },
        'mouseleave':function(){
        $(this).css('background','red');
        },
    })
    $('.offclass').click(function(){
        $('#box').off('click mouseleave')
    })

})


$(document).ready(function(){
    $('.apmbtn').click(function(){
        $('#box').append('<h2> learning & earning Development </h2>')
    })
    $('.prepnbtn').click(function(){
        $('#box').prepend('<h2> learning & earning Development </h2>')
    })
})


$(document).ready(function(){
    $('.afterbtn').click(function(){
        $('#box').after('<h2> learning & earning Development </h2>')
    })
    $('.beforebtn').click(function(){
        $('#box').before('<h2> learning & earning Development </h2>')
    })
})


$(document).ready(function(){
    $('.emptybtn').click(function(){
        $('#box h3').empty();
    })

    $('.removebtn').click(function(){
        $('#box h3').remove();
    })
})

$(document).ready(function(){
    $('.prepandtobtn').click(function(){
        $('<h1>Lorem, ipsum dolor.</h1>').prependTo('#box');
    })

    $('.appendtobtn').click(function(){
        $('<h1>Lorem, ipsum dolor.</h1>').appendTo('#box');
    })
})

          


$(document).ready(function(){
    $('.clonebtn').click(function(){
        $('#box h3').clone().prependTo('#box1')
        $('#box p').clone().appendTo('#box1')
    })
})




$(document).ready(function(){
    $('.Replacewithbtn').click(function(){
        $('#box h3').replaceWith('Abdullah')
    })
    $('.replaceallbtn').click(function(){
        $('<p class="test">Lorem, ipsum dolor sit netur ipsum sit mollitia modi. Obcaecati.</p>'
        ).replaceAll('#box1 p')
    })

    
})