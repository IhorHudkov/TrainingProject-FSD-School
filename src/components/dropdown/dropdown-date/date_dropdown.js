import "./date_dropdown.scss";
$(function() {
  $(".datepicker-from").datepicker({
    minDate: new Date(),
    range: true,
    multipleDatesSeparator: "-",
    classes: "date-dropdown",
    clearButton: true,
    prevHtml: `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/>
      </svg>`,
    nextHtml: " ",
    todayButton: true,
    navTitles: {
      days: "<h2>MM yyyy</h2>",
    },
    language: {
      today: "Применить",
    },
    onRenderCell: function(date, cellType) {
      if (cellType == "day") {
        return {
          html: `${date.getDate()}<div class="bg-selected"><span></span></div>`,
        };
      }
    },
    onSelect: function(fd, d, picker) {
      $(".datepicker-from").val(fd.split("-")[0]);
      $(".datepicker-to").val(fd.split("-")[1]);
    },
  });
  $(".datepicker")
    .find(".datepicker--button")
    .click(function() {
      if (this.dataset.action === "today") {
        $(this)
          .parents(".date-dropdown")
          .removeClass("active");
      }
    });
  $(".datepicker-to").click(function() {
    $(this)
      .parents(".date-dropdown__container")
      .find(".datepicker-from")
      .data("datepicker")
      .show();
  });
});