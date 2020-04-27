console.log("hello gallery");

// my works
var works = [
 {
   "title": "<b>Birgitta Italic</b>",
   "description": "Digitalized embroidery letters by Birgitta Andersson. I found the capital letters in Birgittas self-published book of traceable embroidery letters from the 40s. I'm currently digitalizing and expanding her alphabet to also include lowercase letters and symbols.",
   "imgprefix": "birgitta",
   "imgcount": 4,
   "year": " Work in progress",
   "mediatype": "jpg",
 },
 {
   "title": "<b>Curio Magazine</b>",
   "description": "A Magazine concept for the curious, the thinkers and the people that find themselves googling random facts in the middle of the night. It's a magazine centered around wide and often hard-to-grasp subjects, but subjects that inevitably affect us all.",
   "imgprefix": "curio",
   "imgcount": 6,
   "year": " 2020",
   "mediatype": "gif",
 },
 {
   "title": "<b>Konstfack at Stockholm Furniture and Light Fair</b>",
   "description": "Visual identity and catalogue for the 3rd year students at Interior Architecture & Furniture Design at Konstfack, in collaboration with Emma-Lisa Henriksson and Gustaf Östlund. The students were sponsored with leather and wood by Tärnsjö Garveri and Svenskt Trä, which we also wanted to echo through the graphic material.",
   "imgprefix": "cows_trees",
   "imgcount": 4,
   "year": " 2020",
   "mediatype": "gif",
 },
 {
    "title": "<b>Hans & Greta</b>",
    "description": "An interpratation of the famous tale by the Grimm brothers in the form of a 360-book. It is ultimately an experiment about how to keep the bookformat relevant in a time of interactive apps.",
    "imgprefix": "hans_greta",
    "imgcount": 6,
    "year": " 2019",
    "mediatype": "jpg",
 },
 {
    "title": "<b>Book covers</b>",
    "description": "A made up bookseries with the red thread being female identity. I used the same typeface (or a similar one) to the one used on the first editions of the works. I wanted the design to speak of the separation between body and mind.",
    "imgprefix": "hon_jag",
    "imgcount": 9,
    "year": " 2018",
    "mediatype": "gif",
 },
 {
    "title": "<b>Människor & Växter</b>",
    "description": "A book I wrote, illustrated and bound by myself. It contains short stories about the relationship between humans and plants and vice versa.",
    "imgprefix": "mov",
    "imgcount": 2,
    "year": " 2015",
    "mediatype": "jpg",
 },
];

// get first image item by id and clone the element
var galleryItem = $(".target-div");
var workElement = galleryItem.clone();
var galleryDetail = $(".target-div-detail");
var galleryDetailClone = galleryDetail.clone();
var workDetail = $(".target-div-detail-info");
var workDetailClone = workDetail.clone();
console.log(galleryDetail.html());
galleryDetail.hide();
// get the gallery element
var worklist = $(".gallery");

// empty gallery element

// list all works
function showAll() {
  worklist.empty();
  finalhtml = '';
  $.each( works, function( i, val ) {
     if (val.mediatype == "gif")
        {
       $('.target-img', workElement).attr('src', "./img/" +val.imgprefix+".gif");
     } else {
      $('.target-img', workElement).attr('src', "./img/" +val.imgprefix+"_1.jpg");
    }
      $('.target-title', workElement).html(val.title);
      $('.target-year', workElement).html(val.year);
      $('.link-detail', workElement).attr("id", i);
      finalhtml = finalhtml + workElement.html();

  });
  worklist.append( finalhtml );
  addDetailClick();
}
showAll();

// detailed view
function addDetailClick() {
  $(".link-detail").click(
    function() {
      event.preventDefault();
      worklist.empty();
      var thework = works[this.id];
      var tempworks = ""
      var detailInfo = $('.detail-target-title', workDetailClone).html( "<section>" + thework.title + " , " + thework.year + " <br> " + thework.description + "</section>" + "<hr>");
      tempworks = tempworks + detailInfo.html();

      for (var i = 0; i < thework.imgcount; i++) {
        $('.detail-target-img', galleryDetailClone).attr('src', "./img/" + thework.imgprefix + "_" + (i+1) + ".png");
        tempworks = tempworks + galleryDetailClone.html();
      }
      worklist.append( tempworks );
      addBackClick();
    }
  );
}
function addBackClick() {
  $(".back-to-all-work").click(
    function() {
      console.log("fest")
      event.preventDefault();
      showAll();
    }
  );
}

// about logic
var aboutContent = $(".target-div-about");
var aboutLink = $(".about");
aboutContent.hide();
aboutLink.click(
  function() {
    event.preventDefault();
    worklist.empty();
    worklist.append(aboutContent.html());
    addBackClick();
  }
);
