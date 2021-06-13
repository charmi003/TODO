/*Javascript for custom select created*/

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });







/*Jquery datepicker*/

$(document).ready(function() {
          
  $(function() {
      $( "#my_date_picker" ).datepicker({
        dateFormat: 'dd/mm/yy'
      });
  });
})





/*Strikethrough the text on on checking the checkbox*/
$(".task-check").change(function(event){

  if(this.checked)
  {
    $(this).parent().find("span").css({
      "text-decoration-line":"line-through",
      "font-weight":"400"
    })
  }
  else
  {
    $(this).parent().find("span").css({
      "text-decoration-line":"none",
      "font-weight":"bolder"
    })

  }

})





/*Sending the ids of the tasks to be deleted to the server side when the delete button is clicked*/
$(".delete-button").on("click",function(event){

  /*  If no tasks to delete, simply return */
  let t=$(".task-check:checked");
  if(t.length==0)
    return;

  let ans=confirm("Are you sure you want to delete ?");
  if(!ans)
  {
      $(this).parent().attr({
        href:link
      })
    
  }

  let arr=$(".task-check:checked");
  let link="/deleteTasks/?"

  for(let i=0;i<arr.length;i++)
  {
     let p=arr.eq(i).attr("id");
     link+="id_arr="+p+"&";
  }
  link=link.substring(0,link.length-1);

  $(this).parent().attr({
    href:link
  })
})





/*Rendering the color to the category button depending on the category,
  the color has been decided and it's stored in the "category-color" data attribute */ 
let task_category_buttons=$(".task-box-category");

for(let i=0;i<task_category_buttons.length;i++)
{
  let btn=task_category_buttons.eq(i);
  let c=btn.data("category-color");
  btn.css({
    "background":c
  })


}










