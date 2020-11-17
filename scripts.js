
let svg_ids = ['frog_svg', 'cookie_svg']

function hide_svg(el_id) {
    const svg = document.getElementById(el_id)
    const d = svg.style.display
    svg.style.display = d == '' || d == 'none' ? 'inline' : 'none'
    if (svg.style.display !== 'none') {
        hide_others(el_id)
    }
}

function hide_others(el_id) {
    for (const svg of svg_ids){
        if ( el_id !== svg ) {
            document.getElementById(svg).style.display = 'none'
        }
    }
}