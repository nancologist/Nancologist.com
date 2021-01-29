export function isElementVisible(el) {
    const rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    return (
      el.contains(efp(rect.right, (rect.bottom + rect.top) / 2 ))
      ||  el.contains(efp(rect.left,  (rect.bottom + rect.top) / 2 ))
    );
}
