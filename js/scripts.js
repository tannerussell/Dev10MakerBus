function showEvents(data) {                           
  var content = '';                                
 
    // BUILD UP STRING WITH NEW CONTENT
    for (var i = 0; i < data.events.length; i++) {    // Loop through object
      content += '<div class="event">';
      content += '<img src="' + data.events[i].map + '" ';
      content += 'alt="' + data.events[i].location + '" />';
      content += '<p><b>' + data.events[i].location + '</b><br>';
      content += data.events[i].date + '</p>';
      content += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = content;
}

showEvents({
  "events": [
    {
      "location": "San Francisco, CA",
      "date": "May 1",
      "map": "http://javascriptbook.com/code/c08/img/map-ca.png"
    },
    {
      "location": "Austin, TX",
      "date": "May 15",
      "map": "http://javascriptbook.com/code/c08/img/map-tx.png"
    },
    {
      "location": "New York, NY",
      "date": "May 30",
      "map": "http://javascriptbook.com/code/c08/img/map-ny.png"
    }
  ]
});