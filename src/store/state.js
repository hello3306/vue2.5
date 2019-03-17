let city = '贵阳';
try {
    if (localStorage.city) {
        city = localStorage.city
    }

} catch (e) {

}
export default {
    city: city
}

