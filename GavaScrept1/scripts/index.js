$(document).ready(function () {
  $("#bnt-add").on("click", function () {
    $(".contaener").append("<img src='./images/download.jpg' alt='' />");
  });
  $("#bnt-clear").on("click", function () {
    $(".contaener").html("");
  });
  $("#bnt-text").on("click", function () {
    $(".contaener").append(
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi hic dolorem optio error, praesentium reprehenderit eos vitae porro magni alias, vero sed, facere quo nam reiciendis sunt labore debitis autem."
    );
  });
});
