
function SortableTableCtrl_01() {
    var scope = this;

    //Get data from backend
    var table_1;
    var jqXhr = $.ajax({
        contentType: "application/json",
         url: "/json/chart-table-01",
         dataType: "text",
          async: false
          });
        jqXhr.done(function(data) {
               table_1=JSON.parse(data);
        });

    scope.head = {
        a: "DELIVERY ORDER",
        b: "TIME",
        c: "CLIENT",
        d: "APPROVE",
        e: "DECLINE"
    };
    
    scope.body = table_1.data;
    scope.sort = {
        column: 'b',
        descending: false
    };

    scope.selectedCls = function(column) {
        return column == scope.sort.column && 'sort-' + scope.sort.descending;
    };
    
    scope.changeSorting = function(column) {
        var sort = scope.sort;
        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };
}