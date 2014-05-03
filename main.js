function addItUp() {
	$("marquee").attr("scrollamount", (parseInt($("marquee")[0].getAttribute("scrollamount"))+1).toString());
}