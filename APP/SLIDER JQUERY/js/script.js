var count = 0;
$(".next").click(()=>{
	count++;
	if (count >= 3) { count=3; return; }
	$(".box").animate({marginLeft:"-=400px"})
})

$(".prev").click(()=>{
	count--;
	if (count <= 0) { count=0; return; }
	$(".box").animate({marginLeft:"+=400px"})
})