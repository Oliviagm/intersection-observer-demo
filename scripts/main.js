/*
i might want to have a threshold for
when the class is toggled.

What counts as an intersection?

An intersection is whenever a given
percentage of an element is visble 
within the viewport.

How much should be showing, to trigger
an intersection (detection)?

Threshold: 25% or 0.25
*/

/*
in what context is the observer observing?

It is observing the root node.
*/

let options = {
    root: null
    threshold: 0.25,

}

/* 
How are we going to handle intersection changes?

1)  When something starts to intersect
2)  When something ceases to intersect

if it starts to intersect what do we want to do?
-Apply the active class

If it ceases to intersect what do we want to do?
-Remove the active class
*/
function intersectionHandler(entries, observer) {
    //Do the stuff described above
    console.log(entries);
    entries.forEach(entry => {
        // entry.isIntersecting
        if  (entry.isIntersecting) {
            //add active if intersecting
entry.target.classList.add("active");
        } else {
            // remove active if no longer intersecting
            entry.target.classList.remove("active");
        }



    });

    
}

let observer = new IntersectionObserver (intersectionHandler,  options);

/*
We need to get reference to all of our images, how?
*/
let images = document.querySelector("img");

/*
    Loop through all images, and tell the observer
    to observe each one
    */
   //ugly way
   // for  (let i= 0;  i  < images.length;  i++) {

 //  }

   images.forEach(image)  =>  {
       observer.observe(image);
   });
