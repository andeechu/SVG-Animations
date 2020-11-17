function hide_svg(el_id) {
    const frog = document.getElementById(el_id)
    const d = frog.style.display
    frog.style.display = d == '' || d == 'none' ? 'inline' : 'none'
}