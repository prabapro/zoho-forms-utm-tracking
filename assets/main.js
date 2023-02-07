document.getElementById('json-data').innerHTML = `<pre><code>${JSON.stringify(
	ZFAdvLead.utmPValObj,
	undefined,
	6
)}</code></pre>`;

if (
	document.location.pathname === '/' ||
	document.location.pathname === '/index.html'
) {
	const url = document.location.origin;

	const random = Math.floor(Math.random() * 1001);

	document.querySelectorAll(
		'#sample-links>ul>li'
	)[0].innerHTML = `With UTM Params:<br>🔗 <code><a href="${url}?utm_campaign=test_campaign_${random}&utm_source=test_source_${random}&utm_medium=test_medium_${random}&utm_content=test_content_${random}&utm_term=test_term_${random}">${url}?utm_campaign=test_campaign_${random}&utm_source=test_source_${random}&utm_medium=test_medium_${random}&utm_content=test_content_${random}&utm_term=test_term_${random}</a></code>`;

	document.querySelectorAll(
		'#sample-links>ul>li'
	)[1].innerHTML = `With Google Click ID:<br>🔗 <code><a href="${url}?gclid=gl123.${random}">${url}?gclid=gl123.${random}</a></code>`;

	document.querySelectorAll(
		'#sample-links>ul>li'
	)[2].innerHTML = `With Facebook Click ID:<br>🔗 <code><a href="${url}?fbclid=fb456.${random}">${url}?fbclid=fb456.${random}</a></code>`;

	document.querySelectorAll(
		'#sample-links>ul>li'
	)[3].innerHTML = `With LinkedIn Click ID:<br>🔗 <code><a href="${url}?li_fat_id=li789.${random}">$${url}?li_fat_id=li789.${random}</a></code>`;
}
