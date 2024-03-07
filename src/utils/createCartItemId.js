export const createCartItemId = (id, magic, obj) => {
    const clever = obj.clever ? '_clever' : '';
    const lazy = obj.lazy ? '_lazy' : '';
    const strange = obj.strange ? '_strange' : '';
    return `${id}_${magic}${clever}${lazy}${strange}`;
}