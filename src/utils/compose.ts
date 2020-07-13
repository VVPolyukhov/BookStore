import { ReactNode } from "react"

const compose = (...funcs: any[]) => (comp: ReactNode) => {
    return funcs.reduceRight(
        (wrapped, fun) => fun(wrapped), comp)
}

export default compose
