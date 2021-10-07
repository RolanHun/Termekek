$(function () {
    const termekek = [];

    adatBeolvasas("jsontermekek.json", termekek, megjelenit);

    function megjelenit() {
        let txt = "";
        let ids=0;
        $("#tablazat").append("<th> Terméknév </th><th> Leírás </th><th> Készlet </th><th> Ár </th>");
        termekek.forEach(elem => {
            txt += "<tr><td>" + elem["Terméknév"] + "</td><td>" + elem["Leírás"] + "</td><td>" + elem["Készlet"] + "</td><td>" + elem["Ár"]+"</td><td>"+"<input type='button' id="+ids+" value='Módosítás'></input>"+"</tr>";
            ids+=1;
        });
        $("#tablazat").append(txt);
    }

    function adatBeolvasas(faljnev, tomb, fg) {
        $.ajax
                ({
                    url: faljnev,
                    success: function (result)
                    {
                            result.forEach((elem) => {
                                tomb.push(elem);
                            });
                            fg(megjelenit);
                    }
                });
    }
});