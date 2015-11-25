$(".btn-success").on("click", function(e) {
    e.preventDefault();

var newWord, newDate, newNotes, deleteButton, deleteTd;

newWord = $("#newWord").val();
newDate = $("#newDate").val();
newNotes = $("#newNotes").val();

      if (newWord.length === 0) {
      $("#nothing").fadeIn(2000);
      return;
    };

    if (newDate.length === 0) {
      $("#nothing2").fadeIn(2000);
      return;
    };

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

$("#newWord,#newDate").on("keydown", function() {
    $(".alert").slideUp();
  });

