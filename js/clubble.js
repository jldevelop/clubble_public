/**
 * Created by Zvone187 on 10.4.2016..
 */
$(document).ready(function() {
    $('#beta-tester-club-btn').click(function()
    {
        $('#beta-tester-club-spinner').css({'display' : 'block'});
        $.ajax({
            url: 'php/club_subscribe_for_beta.php',
            type:'POST',
            data:
            {
                name: $('#beta-tester-name').val(),
                number: $('#beta-tester-number').val(),
                email: $('#beta-tester-email').val(),
                typeOfMail: 'subscribe_club'
            },
            success: function(msg)
            {
                console.log('success: ');
                console.log('message je: ' + JSON.stringify(msg));
                if (msg==="1") {
                    $('#conf-beta-tester-club').html('Uspješno si se prijavio za beta testiranje');
                    $('#conf-beta-tester-club').css({'color' : 'greenyellow', 'display' : 'block'});
                }else {
                    $('#conf-beta-tester-club').html('Nešto nije u redu. Molim te provjeri jesi li unio Email ili pošalji mail na clubble@clubbleapp.com');
                    $('#conf-beta-tester-club').css({'color' : 'red', 'display' : 'block'});
                }

                $('#beta-tester-club-spinner').css({'display' : 'none'});
                //alert('Hvala ti! Uspješno si se prijavio na beta testiranje Clubble platforme');
            },
            error: function(msg) {
                console.log('error: ');
                console.log('message je: ' + JSON.stringify(msg));
                $('#conf-beta-tester-club').html('Nešto nije u redu. Molim te provjeri jesi li unio Email ili pošalji mail na clubble@clubbleapp.com');
                $('#conf-beta-tester-club').css({'color' : 'red', 'display' : 'block'});
                $('#beta-tester-club-spinner').css({'display' : 'none'});
            }
        });
    });

    $('#beta-tester-dj-btn').click(function()
    {
        $('#beta-tester-dj-spinner').css({'display' : 'block'});
        $.ajax({
            url: 'php/club_subscribe_for_beta.php',
            type:'POST',
            data:
            {
                email: $('#beta-tester-dj-email').val(),
                typeOfMail: 'subscribe_dj'
            },
            success: function(msg)
            {
                console.log('success: ');
                console.log('message je: ' + JSON.stringify(msg));
                if (msg==="1") {
                    $('#conf-beta-tester-dj').html('Uspješno si se prijavio za beta testiranje');
                    $('#conf-beta-tester-dj').css({'color' : 'greenyellow', 'display' : 'block'});
                }else {
                    $('#conf-beta-tester-dj').html('Nešto nije u redu. Molim te provjeri jesi li unio Email ili pošalji mail na clubble@clubbleapp.com');
                    $('#conf-beta-tester-dj').css({'color' : 'red', 'display' : 'block'});
                }

                $('#beta-tester-dj-spinner').css({'display' : 'none'});
                //alert('Hvala ti! Uspješno si se prijavio na beta testiranje Clubble platforme');
            },
            error: function(msg) {
                console.log('error: ');
                console.log('message je: ' + JSON.stringify(msg));
                $('#conf-beta-tester-dj').html('Nešto nije u redu. Molim te provjeri jesi li unio Email ili pošalji mail na clubble@clubbleapp.com');
                $('#conf-beta-tester-dj').css({'color' : 'red', 'display' : 'block'});
                $('#beta-tester-dj-spinner').css({'display' : 'none'});
            }
        });
    });

    $('#sendContactForm').click(function()
    {
        $('#contact-form-spinner').css({'display' : 'block'});
        $.ajax({
            url: 'php/club_subscribe_for_beta.php',
            type:'POST',
            data:
            {
                email: $('#contactEmail').val(),
                name: $('#contactName').val(),
                phoneNumber: $('#contactNumber').val(),
                message: $('#contactMessage').val(),
                typeOfMail: 'contact_form'
            },
            success: function(msg)
            {
                console.log('success: ');
                console.log('message je: ' + JSON.stringify(msg));
                if (msg==="1") {
                    $('#conf-contact-form').html('Hvala ti na poruci. Javit ćemo ti se što prije. :)');
                    $('#conf-contact-form').css({'color' : 'greenyellow', 'display' : 'block'});
                }else {
                    $('#conf-contact-form').html('Nešto nije u redu. Molim te provjeri jesi li unio Email ili pošalji mail na clubble@clubbleapp.com');
                    $('#conf-contact-form').css({'color' : 'red', 'display' : 'block'});
                }

                $('#contact-form-spinner').css({'display' : 'none'});
                //alert('Hvala ti! Uspješno si se prijavio na beta testiranje Clubble platforme');
            },
            error: function(msg) {
                console.log('error: ');
                console.log('message je: ' + JSON.stringify(msg));
                $('#conf-contact-form').html('Nešto nije u redu. Molim te provjeri jesi li unio sva polja ili pošalji mail na clubble@clubbleapp.com');
                $('#conf-contact-form').css({'color' : 'red', 'display' : 'block'});
                $('#contact-form-spinner').css({'display' : 'none'});
            }
        });
    });
})