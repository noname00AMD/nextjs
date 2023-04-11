
export function textToSlug(slug) {
    if (typeof slug !== "string") {
        return null
    }

    var str = slug
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    var from = "ậẫẩầấặẵẳằắăãạảàáäâèéëêẻẽẹếềểễệìíïîỉĩịòóöôỏõọốồổỗộơớờởỡợùúüûủũụưứừửữựýỳỷỹỵđñç·/_,:;";
    var to = "aaaaaaaaaaaaaaaaaaeeeeeeeeeeeeiiiiiiioooooooooooooooooouuuuuuuuuuuuuyyyyydnc------";
    // remove accents, swap ñ for n, etc
    ;
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
export function sanitize(str) {
    if (typeof str !== "string") {
        return null
    }
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}
export function textToTag(tag) {
    if (typeof tag !== "string") {
        return false
    }
    tag = tag.toLowerCase();
    tag = tag.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    tag = tag.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    tag = tag.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    tag = tag.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    tag = tag.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    tag = tag.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    tag = tag.replace(/đ/gi, 'd');
    tag = tag.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    tag = tag.replace(/ /gi, "");
    tag = tag.replace(/\-\-\-\-\-/gi, '');
    tag = tag.replace(/\-\-\-\-/gi, '');
    tag = tag.replace(/\-\-\-/gi, '');
    tag = tag.replace(/\-\-/gi, '');
    tag = tag.replace(/-/gi, '');
    tag = '@' + tag + '@';
    tag = tag.replace(/\@\-|\-\@|\@/gi, '');
    return tag;
}
export function bigintToString(input) {
    return JSON.parse(JSON.stringify(input, (k, v) => {
        if (typeof v === "bigint") {
            return v.toString();
        }
        return v;
    }));
}
export function imgToBase64(img, callback, outputFormat) {
    var img = new Image(img);
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        canvas.height = img.naturalHeight;
        canvas.width = img.naturalWidth;
        try {

            ctx.drawImage(img, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(null, dataURL);
        } catch (error) {
            callback(error, null)
        }
    }
};
