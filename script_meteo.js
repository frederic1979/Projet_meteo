document.getElementById('monMenuDerniereMesure').addEventListener('click', function (event) {
    
    //const section = document.getElementById("idsection");
    const main = document.getElementById("main");
    const request = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint
request.open('GET', `http://192.168.1.197:8080/last-measure`, true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const section = document.createElement('section');
        
        
        const lastResult = JSON.parse(this.response);

        //traitement de la date
        const newParagraphDate = document.createElement('h2');
        var d = lastResult.measureDate;
        var j =d.substring(8, 10);
        var m = d.substring(4, 8);
        var a = d.substring(0,4)

        newParagraphDate.innerText = 'Dernière mesure du : ' + j+m+a ;
        section.appendChild(newParagraphDate);
        
      
        const newParagraphTemp = document.createElement('p');
        var t=lastResult.temperature;
        newParagraphTemp.innerText = 'Temperature : ' +t+" °C";
        section.appendChild(newParagraphTemp);
        
        const newParagraphHum = document.createElement('p');
        var h = lastResult.humidity;
        newParagraphHum.innerText = 'Humidité : ' +h +" %hum";
        section.appendChild(newParagraphHum);

        const newParagraphPress = document.createElement('p');
        var p = lastResult.pressure;
        newParagraphPress.innerText = 'Pression : ' +p +" hPa";
        section.appendChild(newParagraphPress);

        main.appendChild(section);

            } else {
        console.log('Erreur ...')
    }
}

// Send request
request.send();
//let temp = jsonResult.temperature;
 


    // Menage
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
   


})

//-----------------------------------------------------


document.getElementById('monMenuTopMesure').addEventListener('click', function (event) {
    
    const main = document.getElementById("main");




    const section = document.getElementById("idsection");
    const request = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint
request.open('GET', `http://192.168.1.197:8080/top-measure/temperature`, true);

request.onload = function () {

    if (request.status >= 200 && request.status < 400) {
        
        const section = document.createElement('section');
        
        
        const lastResult = JSON.parse(this.response);

        //traitement de la date
        const newParagraphDate = document.createElement('h2');
        var d = lastResult.measureDate;
        var j =d.substring(8, 10);
        var m = d.substring(4, 8);
        var a = d.substring(0,4)

        newParagraphDate.innerText = 'Top temperature du : ' + j+m+a ;
        section.appendChild(newParagraphDate);
      
        const newParagraphTemp = document.createElement('p');
        var t=lastResult.temperature;
        newParagraphTemp.innerText = 'Temperature : ' +t+" °C";
        section.appendChild(newParagraphTemp);
        
        const newParagraphHum = document.createElement('p');
        var h = lastResult.humidity;
        newParagraphHum.innerText = 'Humidité : ' +h +" %hum";
        section.appendChild(newParagraphHum);

        const newParagraphPress = document.createElement('p');
        var p = lastResult.pressure;
        newParagraphPress.innerText = 'Pression : ' +p +" hPa";
        section.appendChild(newParagraphPress);

        main.appendChild(section);

            } else {
        console.log('Erreur ...')
    }
}

// Send request
request.send();
 




 
//const section2 = document.getElementById("idsection2");
    const request2 = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint
request2.open('GET', `http://192.168.1.197:8080/top-measure/humidity`, true);

request2.onload = function () {

    if (request2.status >= 200 && request2.status < 400) {
        const section2 = document.createElement('section');
        
        
        const lastResult2 = JSON.parse(this.response);

        //traitement de la date
        const newParagraphDate = document.createElement('h2');
        var d = lastResult2.measureDate;
        var j =d.substring(8, 10);
        var m = d.substring(4, 8);
        var a = d.substring(0,4)

        newParagraphDate.innerText = 'Top humidité du : ' + j+m+a ;
        section2.appendChild(newParagraphDate);
      
        const newParagraphTemp = document.createElement('p');
        var t=lastResult2.temperature;
        newParagraphTemp.innerText = 'Temperature : ' +t+" °C";
        section2.appendChild(newParagraphTemp);
        
        const newParagraphHum = document.createElement('p');
        var h = lastResult2.humidity;
        newParagraphHum.innerText = 'Humidité : ' +h +" %hum";
        section2.appendChild(newParagraphHum);

        const newParagraphPress = document.createElement('p');
        var p = lastResult2.pressure;
        newParagraphPress.innerText = 'Pression : ' +p +" hPa";
        section2.appendChild(newParagraphPress);

        main.appendChild(section2);

            } else {
        console.log('Erreur ...')
    }
}

// Send request
request2.send();
//let temp = jsonResult.temperature;

 


//const section3 = document.getElementById("idsection3");
    const request3 = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint
request3.open('GET', `http://192.168.1.197:8080/top-measure/pressure`, true);

request3.onload = function () {

    if (request3.status >= 200 && request3.status < 400) {
        const section3 = document.createElement('section');
        
        
        const lastResult3 = JSON.parse(this.response);

        //traitement de la date
        const newParagraphDate = document.createElement('h2');
        var d = lastResult3.measureDate;
        var j =d.substring(8, 10);
        var m = d.substring(4, 8);
        var a = d.substring(0,4)

        newParagraphDate.innerText = 'Top pression du : ' + j+m+a ;
        section3.appendChild(newParagraphDate);
      
        const newParagraphTemp = document.createElement('p');
        var t=lastResult3.temperature;
        newParagraphTemp.innerText = 'Temperature : ' +t+" °C";
        section3.appendChild(newParagraphTemp);
        
        const newParagraphHum = document.createElement('p');
        var h = lastResult3.humidity;
        newParagraphHum.innerText = 'Humidité : ' +h +" %hum";
        section3.appendChild(newParagraphHum);

        const newParagraphPress = document.createElement('p');
        var p = lastResult3.pressure;
        newParagraphPress.innerText = 'Pression : ' +p +" hPa";
        section3.appendChild(newParagraphPress);

        main.appendChild(section3);

            } else {
        console.log('Erreur ...')
    }
}

// Send request
request3.send();
//let temp = jsonResult.temperature;


while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
}


}

)


//------------------------------------------------

document.getElementById('monMenuTabMesures').addEventListener('click', function (event) {
    
   // const main = document.getElementById("main");

   const table = document.createElement('table');


const request4 = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint
request4.open('GET', `https://distorted-louse-3971.dataplicity.io/measure/date?startDate=2019-11-03&endDate=2019-11-07`, true);

request4.onload = function () {

    if (request4.status >= 200 && request4.status < 400) {

        const lastResult4 = JSON.parse(this.response);

               
        //---------------------Creation thead
        
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
       
        const date = document.createElement('th');
        const temp = document.createElement('th');
        const humid = document.createElement('th');
        const press = document.createElement('th');

        date.innerText = 'Date';
        tr.appendChild(date);

        temp.innerText = 'Temperature';
        tr.appendChild(temp);

        humid.innerText = 'Humidité';
        tr.appendChild(humid);

        press.innerText = 'Pression';
        tr.appendChild(press);

        thead.appendChild(tr);
        table.appendChild(thead);
        main.appendChild(table);


//---------------------------------Creation du tbody

        const tbody = document.createElement('tbody');
        //const tr = document.createElement('tr');
        table.appendChild(tbody);
        main.appendChild(table);


        for ( i of lastResult4 )
        {
            const tr = document.createElement('tr');

                const td1=document.createElement('td');
                const td2=document.createElement('td');
                const td3=document.createElement('td');
                const td4=document.createElement('td');
                

                var d = i.measureDate;
                var j =d.substring(8, 10);
                var m = d.substring(4, 8);
                var a = d.substring(0,4);

                td1.innerText=j+m+a;
                tr.appendChild(td1);
                
                td2.innerText=i.temperature +" °C";
                tr.appendChild(td2);

                td3.innerText=i.humidity+ " %hum";
                tr.appendChild(td3);

                td4.innerText=i.pressure+" hPa";
                tr.appendChild(td4);

                tbody.appendChild(tr);
        }
       

            } else {
        console.log('Erreur ...')
    }
}

// Send request
request4.send();
//let temp = jsonResult.temperature;


while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
}


}

)