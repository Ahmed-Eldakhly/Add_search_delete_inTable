var noOfElement = 0;
$("#addButton").click(
    () => {
        var name = $("#NametextArea").val();
        var age = $("#AgetextArea").val();
        if(name != "" && age != "")
        {
            $("table").append(
                "<tr class='delete" + noOfElement + "'> <td class='searchname'>" + name + "</td> <td class='searchid'>" + age + "</td> <td><input type='button' value='Delete' id='Delete" + noOfElement + "'></td></tr>"
            )
            var x = $(".delete" + noOfElement)
            x.click(
                () => {
                    x.remove()
                }
            )
            noOfElement++;
            $("#NametextArea").val("");
            $("#AgetextArea").val("");
        }
    }
)

$("#searchButton").click(
    () => {
        var search = $("#SearchtextArea").val();
        if(search != "")
        {
            $("td").each(function(i) {
                $(this).parent().hide();
            })
            $("td").each(function(i) {
                if($(this).text() == search)
                {
                    $(this).parent().show();
                }
            })
        }
        else
        {
            $("tr").each(function(i) {

                $(this).show();

            })
        }
        $("#SearchtextArea").val("");
    }
    
)