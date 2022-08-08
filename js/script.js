function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validate() {
  
    var name=document.form.name.value;
    var company=document.form.company.value;
    var location=document.form.location.value;
    var web=document.form.web.value;
    var job=document.form.job.value;
    var ph=document.form.ph.value;
    var email = document.form.email.value;
    var insta=document.form.insta.value;
    var fb=document.form.fb.value;
    var linked=document.form.linked.value;
    var youtube=document.form.youtube.value;
    var address=document.form.address.value;
    var head=document.form.head.value;
    var phn = document.form.phn.value;
    var mail = document.form.mail.value;
    

   
    var nameErr=cmpnyErr=locErr=webErr=jobErr=phErr=emailErr=instaErr=fbErr=linkedErr=youtubeErr=addErr=headErr=phnErr=mailErr=true;
        
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid Input");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    if(company == "") {
        printError("cmpnyErr", "Please enter your company name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(company) === false) {
            printError("cmpnyErr", "Please enter a valid Input");
        } else {
            printError("cmpnyErr", "");
            cmpnyErr = false;
        }
    }
    
    if(location== "") {
        printError("locErr", "Please enter your location");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(location) === false) {
            printError("locErr", "Please enter a valid Input");
        } else {
            printError("locErr", "");
            locErr = false;
        }
    }

    if(web= "") {
        printError("webErr", "Please enter your website");
    } else {
        var regex =/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;              
        if(regex.test(web) === false) {
            printError("webErr", "Please enter a valid Input");
        } else {
            printError("webErr", "");
            webErr = false;
        }
    }

    if(job== "") {
        printError("jobErr", "Please enter the Job Title");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(job) === false) {
            printError("jobErr", "Please enter a valid Input");
        } else {
            printError("jobErr", "");
            jobErr = false;
        }
    }

    if(ph == "") {
        printError("phErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(ph) === false) {
            printError("phErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("phErr", "");
            phErr = false;
        }
    }

    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid  Input");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(insta= "") {
        printError("instaErr", "Please enter your Instagram Link");
    } else {
        var regex =/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;              
        if(regex.test(insta) === false) {
            printError("instaErr", "Please enter a valid Input");
        } else {
            printError("instaErr", "");
            instaErr = false;
        }
    }

    if(fb= "") {
        printError("fbErr", "Please enter your Facebook Link");
    } else {
        var regex =/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;              
        if(regex.test(fb) === false) {
            printError("fbErr", "Please enter a valid Input");
        } else {
            printError("fbErr", "");
            fbErr = false;
        }
    }

    if(linked= "") {
        printError("linkedErr", "Please enter your LinkedIn Link");
    } else {
        var regex =/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;              
        if(regex.test(linked) === false) {
            printError("linkedErr", "Please enter a valid Input");
        } else {
            printError("linkedErr", "");
            linkedErr = false;
        }
    }

    if(youtube= "") {
        printError("youtubeErr", "Please enter your YouTube Link");
    } else {
        var regex =/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;              
        if(regex.test(youtube) === false) {
            printError("youtubeErr", "Please enter a valid Input");
        } else {
            printError("youtubeErr", "");
            youtubeErr = false;
        }
    }

    if(address== "") {
        printError("addErr", "Please enter your Address");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(address) === false) {
            printError("addErr", "Please enter a valid Input");
        } else {
            printError("addErr", "");
            addErr = false;
        }
    }

    if(head== "") {
        printError("headErr", "Please enter Headquarters");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(head) === false) {
            printError("headErr", "Please enter a valid Input");
        } else {
            printError("headErr", "");
            headErr = false;
        }
    }

    if(phn== "") {
        printError("phnErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(phn) === false) {
            printError("phnErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("phnErr", "");
            phnErr = false;
        }
    }

    if(mail == "") {
        printError("mailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(mail) === false) {
            printError("mailErr", "Please enter a valid  Input");
        } else{
            printError("mailErr", "");
            mailErr = false;
        }
    }

    if((nameErr||cmpnyErr||locErr||webErr||jobErr||phErr||emailErr||instaErr||fbErr||linkedErr||youtubeErr||addErr||headErr||phnErr||mailErr) == true) {
        return false;
    //  } else {
    //     return true;
    }
};

