

var newWord, newDate, newNotes, deleteButton, deleteTd;

newWord = $("#newWord").val();
newDate = $("#newDate").val();
newNotes = $("#newNotes").val();
    newRow = $("<tr>");
    wordTd = $("<td>").addClass("word-td").append(newWord);
    wordTdd = $("<td>").addClass("word-td").append(newDate);
    wordTddd = $("<td>").addClass("word-td").append(newNotes);
    deleteButton = $("<button>").addClass("btn btn-danger").append("Delete");
    deleteTd = $("<td>").append(deleteButton);

    newRow.append(wordTd).append(wordTdd).append(wordTddd).append(deleteTd);

    $("tbody").append(newRow);
    $("#newWord").val("");
    $("#newDate").val("");
    $("#newNotes").val("");
  });

$("table").on("click", ".btn-danger", function() {
    $(this).parents("tr").remove();
  });