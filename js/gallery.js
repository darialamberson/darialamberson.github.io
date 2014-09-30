function makeGalleryImage(index) {
    if(index === GALLERY_PHOTO_NAMES.length) return;
    var filename = GALLERY_PHOTO_NAMES[index];
    var html = '<a href="images/' + filename + '" data-lightbox="gallery">                                       \
                    <div class="gallery-image-wrapper" style="background-image: url(images/' + filename + ');">  \
                    </div>                                                                                       \
                </a>                                                                                             \
            ';
    $(html).hide().appendTo($(".gallery")).fadeIn(400, function() {
        makeGalleryImage(index + 1);
    });
}

function makeGallery() {
    makeGalleryImage(0);
}

$(document).ready(makeGallery);