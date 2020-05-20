const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (wrapped, fun) => fun(wrapped), comp)
}

export default compose