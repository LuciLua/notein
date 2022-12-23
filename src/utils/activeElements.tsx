function removeClickableAttributes(ref: HTMLAnchorElement) {
    ref.style.userSelect = 'none'
    ref.style.pointerEvents = 'none'
    ref.style.cursor = 'default'
}

function addColorAtActiveElement(ref: HTMLAnchorElement, color: string) {
    ref.style.color = color
}

function selectMenuOption(ref: HTMLAnchorElement, color: string) {
    removeClickableAttributes(ref)
    addColorAtActiveElement(ref, color)
}

export default selectMenuOption

