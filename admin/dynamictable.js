
    $(document).ready(function(){
        $(".add-row").click(function(){
            var Description = $("#Description").val();
            var Quantity = $("#Quantity").val();
            var UnitPrice = $("#UnitPrice").val();
            var Amount = $("#Amount").val();
            var BudgetItemNo = $("#BudgetItemNo").val();
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + Description + "</td><td>" + Quantity
            + "</td><td>" + UnitPrice + "</td><td>" + Amount + "</td><td>" + BudgetItemNo + "</td></tr>";
            $("table tbody").append(markup);
        });

        // Find and remove selected table rows
        $(".delete-row").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });
